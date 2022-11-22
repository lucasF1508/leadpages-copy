import React from 'react'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Archive from '@layouts/Archive'

const ArchivePage = (props) => <Archive {...props} />

export const shapeData = ([
  data,
  { docs: categories },
  { docs, pagination },
]) => [
  {
    ...data,
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
    getDoc('pageArchive', {
      filters: [`archiveOf == "${docType}"`],
      preview,
    }),
    getAllDocs('categoryPost', {
      filters: "!(_id in path('drafts.**'))",
      preview,
    }),
    getAllDocs(docType, {
      filters: "!(_id in path('drafts.**'))",
      order: 'order(publishedDate desc)',
      preview,
      asCards: true,
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
