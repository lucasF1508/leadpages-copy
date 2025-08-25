import React from 'react'
import Integrations from '@layouts/Integrations'
import { query, runQueries } from '@lib/queries'

const IntegrationsPage = (props) => <Integrations {...props} />

export const shapeData = ([
  data,
  categories,
  docs,
]) => [
  {
    settings: data,
    seo: data.seo,
    categories,
    docs,
  },
]

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations'
  const docType = 'integration'

  const { data, global, queries } = await runQueries([
    query(
      `*[_type == 'pageArchive' && archiveOf == "${docType}"][0]`,
      {preview}
    ),
    query(
      `*[_type == "categoryIntegration"] | order(lower(title) asc)`,
      {preview}
    ),
    query(
      `*[_type == "${docType}"] | order(lower(title) asc) {
        ...,
        category->,
        status->
      }`,
      {preview}
    ),
  ], true)

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