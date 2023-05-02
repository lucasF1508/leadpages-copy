import React from 'react'
import { getDoc, getAllDocs, runQueries } from '@lib'
import { ArchiveSearch } from '@layouts/Archive'
import { categoryPostCountQuery } from '@lib/feeds/utils/sanity/feedQueries'

const SearchPage = (props) => <ArchiveSearch {...props} />

export const shapeData = ([data, { docs: categories }, blogData]) => [
  {
    settings: data,
    categories,
    seo: blogData?.seo,
  },
]

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const docType = 'post'
  const { preview = false } = context

  const { data, global, queries } = await runQueries([
    getDoc('postSettings', {}),
    getAllDocs('categoryPost', {
      filters: "!(_id in path('drafts.**'))",
      projections: `${categoryPostCountQuery}`,
      preview,
    }),
    getDoc('pageArchive', {
      filters: [`archiveOf == "${docType}"`],
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
