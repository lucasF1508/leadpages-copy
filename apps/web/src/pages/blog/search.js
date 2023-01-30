import React from 'react'
import { getDoc, getAllDocs, runQueries } from '@lib'
import { ArchiveSearch } from '@layouts/Archive'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (searchQuery) => {
  const docType = 'post'
  const docs = await getAllDocs(docType, {
    filters: [
      "!(_id in path('drafts.**'))",
      `(pt::text(content) match "${searchQuery}" || title match "${searchQuery}")`,
    ],
    order: 'order(_score desc, publishedDate desc)',
    offsetEnd: 1,
    pipes: `score(pt::text(content) match "${searchQuery}", title match "${searchQuery}")`,
  })

  return docs
}

const SearchPage = (props) => {
  const router = useRouter()
  const { s: searchQuery } = router.query
  const { data, error, isLoading } = useSWR(searchQuery || null, fetcher)

  if (!searchQuery) {
    return <ArchiveSearch {...props} docs={[]} isLoading={true} />
  }

  if (error) {
    console.error(`Failed to load. Error: ${error}`)
  }

  const { docs, pagination } = data?.data || {}

  return (
    <ArchiveSearch
      {...props}
      docs={docs}
      pagination={pagination}
      isLoading={isLoading}
      searchQuery={searchQuery}
    />
  )
}

export const shapeData = ([data, { docs: categories }]) => [
  {
    settings: data,
    categories,
  },
]

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const { preview = false } = context

  const { data, global, queries } = await runQueries([
    getDoc('postSettings', {}),
    getAllDocs('categoryPost', {
      filters: "!(_id in path('drafts.**'))",
      projections: `"postCount": count(*[!(_id in path('drafts.**')) && _type == "post" && (primaryCategory._ref == ^._id || ^._id in secondaryCategories[]._ref)])`,
      preview,
    }),
  ])

  return {
    props: {
      data: shapeData(data),
      queries,
      global,
      preview,
    },
  }
}

export default SearchPage
