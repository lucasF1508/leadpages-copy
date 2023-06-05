import React from 'react'
import { getDoc, getAllDocs, runQueries } from '@lib'
import Integrations from '@layouts/Integrations'

const IntegrationsPage = (props) => <Integrations {...props} />

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
  const { preview = false } = context
  const slug = '/integrations'
  const docType = 'integration'

  const { data, global, queries } = await runQueries([
    getDoc('pageArchive', {
      filters: [`archiveOf == "${docType}"`],
      preview,
    }),
    getAllDocs('categoryIntegration', {
      filters: "!(_id in path('drafts.**'))",
      order: 'order(title asc)',
      preview,
    }),
    getAllDocs(docType, {
      filters: "!(_id in path('drafts.**'))",
      order: 'order(orderRank)',
      preview,
    }),
  ])

  return {
    props: {
      data: shapeData(data),
      global,
      queries,
      slug,
      preview,
      options: { hideBar: true, underlaidMenu: true },
    },
  }
}

export default IntegrationsPage
