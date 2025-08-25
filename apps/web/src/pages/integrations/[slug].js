import React from 'react'
import Page, { PageSidebar } from '@layouts/Page'
import { getStaticPathsParams, query, runQueries } from '@lib/queries'
import pageQuery from '@lib/queries/components'
import { shapeData } from '@lib/utils/shapeData'

const IntegrationPage = ({ hasSidebar, ...props }) =>
  hasSidebar ? <PageSidebar {...props} /> : <Page {...props} />

const types = ['integration']

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { slug } = params

  const { data, queries, global } = await runQueries(
    query(
      `*[_type in $types && slug.current == $slug] | order(_updatedAt desc) [0] {
        ...,
        ${pageQuery}
      }`,
      {
        params: {
          slug,
          types,
        },
        preview,
      }
    )
  )

  return {
    props: {
      data: shapeData(data),
      queries,
      global,
      preview,
    },
  }
}

export async function getStaticPaths() {
  const paths = await getStaticPathsParams({
    types: ['integration'],
    filter: `hasSubpage == true`
  })

  return {
    fallback: false,
    paths,
  }
}

export default IntegrationPage
