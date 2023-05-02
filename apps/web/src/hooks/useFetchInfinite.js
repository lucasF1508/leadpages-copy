import getClient from 'client'
import useSWRInfinite from 'swr/infinite'

const client = getClient()
export const fetcher = ({ query, ...params }) => client.fetch(query, params)

const fetchInfinite = ({
  type = 'post',
  fallbackData,
  perPage = 22,
  category,
  searchQuery,
  hasFeaturedPost,
  fetch = true,
}) => {
  const filters = [
    `_type == '${type}'`,
    category &&
      `(primaryCategory->slug.current == '${category.slug}' || '${category.slug}' in secondaryCategories[]->slug.current)`,
    searchQuery &&
      `(pt::text(content) match '${searchQuery}' || title match '${searchQuery}')`,
  ]
    .filter(Boolean)
    .join(' && ')

  const score = [
    searchQuery && `pt::text(content) match '${searchQuery}'`,
    searchQuery && `title match '${searchQuery}'`,
  ]
    .filter(Boolean)
    .join(',')

  const order = [searchQuery && '_score desc', 'publishedDate desc']
    .filter(Boolean)
    .join(',')

  const query = `*[${filters}]
    ${score && `|score(${score})`}
    ${order && `|order(${order})`}
  [$start..$end] {
    path,
    publishedDate,
    title,
    image {
      ...,
      asset->
    },
    primaryCategory->{
      ...,
      'url': path,
    },
    publisher->
  }`

  const getKey = (index) => ({
    query,
    start: perPage * index + (!hasFeaturedPost || index === 0 ? 0 : 1),
    end: perPage * index + perPage - (!hasFeaturedPost ? 1 : 0),
  })

  const swrInfinite = useSWRInfinite(!fetch ? null : getKey, fetcher, {
    fallbackData,
  })
  const { data, size, isLoading } = swrInfinite

  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < perPage)

  const docs = data ? [].concat(...data) : fallbackData

  return {
    ...swrInfinite,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    docs,
  }
}

export default fetchInfinite
