import React from 'react'
import HomePage from '@layouts/HomePage'
import {getStaticPathsParams, query, runQueries } from '@lib/queries'
import { shapeData } from '..'
import { pageQuery } from '@lib/queries/components'

const IndexPage = (props) => <HomePage {...props} />

export const exporter = (props) => shapeData(props)

const types = ['pageHome']

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { variant } = params

  const path = [
    '/',
    ...(Array.isArray(variant) ? variant : [variant]),
  ]
    .join('/')
    .replaceAll('//', '/')

  const { data, queries, global } = await runQueries(
    query(
      `*[_type in $types && path == $path] | order(_updatedAt desc) [0] {
        ...,
        ${pageQuery}
      }`,
      {
        params: {
          path,
          types,
        },
        preview,
      }
    ),
  )

  return {
    props: {
      data: shapeData(data, true),
      queries,
      global,
      preview,
    },
  }
}

export async function getStaticPaths() {
  const _paths = await getStaticPathsParams({
    catchAll: true,
    filter: 'path != "/home"',
    types,
  })

  const paths = _paths.map(({ params }) => ({
    params: {
      variant: params.slug,
    }
  }))

  return {
    fallback: false,
    paths,
  }
}

export default IndexPage