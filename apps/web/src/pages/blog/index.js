import React from 'react'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Archive from '@layouts/Archive'

const ArchivePage = (props) => <Archive {...props} hasFeaturedPost={true} />

export const shapeData = ([
  data,
  { docs: categories },
  { docs, pagination },
]) => [
  {
    settings: data,
    categories,
    docs,
    pagination,
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
      projections: `"postCount": count(*[!(_id in path('drafts.**')) && _type == "post" && (primaryCategory._ref == ^._id || ^._id in secondaryCategories[]._ref)])`,
      preview,
    }),
    getAllDocs(docType, {
      filters: "!(_id in path('drafts.**'))",
      order: 'order(publishedDate desc)',
      preview,
      offsetEnd: 1,
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

export default ArchivePage
