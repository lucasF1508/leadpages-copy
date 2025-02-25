import runQueries from './runQueries'
import query from './query'
import { seoQuery } from './globalQueries'

const join = (arr, sep = ',') => arr.filter(Boolean).join(sep)

const getSearchFilter = (props) => {
  const { searchTerm, searchFilter } = props

  const search = join(
    [
      searchTerm && `pt::text(content) match $searchTerm + "*"`,
      searchTerm && `excerpt match $searchTerm + "*"`,
      searchTerm && `title match $searchTerm + "*"`,
      searchFilter && searchFilter,
    ],
    ' || '
  )

  return search && `(${search})`
}

const getCategorySlug = (category) =>
  typeof category === 'object' ? category?.slug?.current : category

const getCategoryFilter = (props) => {
  const { category, exclude, categoryField = 'category' } = props

  const categoryFilter = join(
    [
      category &&
        `${categoryField}->slug.current == '${getCategorySlug(category)}'`,
      exclude &&
        `${categoryField}->slug.current != '${getCategorySlug(exclude)}'`,
    ],
    ' && '
  )

  return categoryFilter
}

const getFilters = (props) => {
  const { docFilter } = props

  const filters = join(
    [
      `_type == $docType`,
      `!(_id in path('drafts.**'))`,
      getCategoryFilter(props),
      getSearchFilter(props),
      docFilter && docFilter,
    ],
    ' && '
  )

  return `*[${filters}]`
}

const getScore = (props) => {
  const { searchTerm } = props

  const score = join(
    [
      searchTerm && `pt::text(content) match $searchTerm + "*"`,
      searchTerm && `excerpt match $searchTerm + "*"`,
      searchTerm && `title match $searchTerm + "*"`,
    ],
    ','
  )

  return score && `| score(${score})`
}

const getOrder = (props) => {
  const { searchTerm } = props

  const order = join([
    searchTerm && '_score desc',
    'publishedDate desc',
    '_createdAt desc',
  ])

  return order && `| order(${order})`
}

const getSlice = () => `[$start..$end]`

export const getBlogQuery = (props) => {
  const { foundCount = false } = props

  const blogQuery = join(
    [
      getFilters(props),
      getScore(props),
      getOrder(props),
      !foundCount && getSlice(),
      // postCardQuery,
    ],
    ' '
  )

  return foundCount ? `count(${blogQuery})` : blogQuery
}

export const getPageType = (path) => {
  if (!path?.length) {
    return 'archive'
  }
  if (path?.includes('category')) {
    return 'category'
  }

  return 'article'
}

const runBlogQueries = async ({
  pageType,
  preview,
  perPage,
  category,
  params,
}) => {
  switch (pageType) {
    case 'article':
      return runQueries(
        query(
          `*[_type == $docType && slug.current == $slug] | order(_updatedAt desc) [0] {
            ...,
            image,
            content[] {
              ...,
              image
            },
            category->,
            author->,
            ${seoQuery}
          }
          `,
          {
            preview,
            params,
          }
        )
      )
    default:
      return runQueries([
        query(getBlogQuery({ category }), {
          preview,
          params: {
            start: 0,
            end: perPage - 1,
            ...params,
          },
        }),
        query(`*[_type == "categoryPost" && !(_id in path('drafts.**'))]`),
        query(`*[_type == "pageArchive" && archiveOf == $docType][0]`, {
          params,
        }),
      ])
  }
}

export default runBlogQueries
