import React from 'react'
import { query, runQueries } from '@lib/queries'
import HomePage from '@layouts/HomePage'
import { features } from 'config'
import pageQuery from '@lib/queries/components'

const IndexPage = (props) => <HomePage {...props} />

const types = ['pageHome']

export const shapeData = (data, isVariant = false) => {
  const [pageData] = (data?.length && data) || []
  const { hero: heroes } = pageData || {}
  const [hero] = heroes || []

  // Page options
  const darkHero = features.darkBackgrounds.includes(
    hero?.backgroundOptions?.backgroundColor
  )
  const options = {
    ...pageData?.options,
    underlaidMenu: true,
    darkHero,
  }

  return [
    {
      ...pageData,
      isVariant,
      options,
    },
  ]
}

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const { preview = false } = context

  const { data, global, queries } = await runQueries(
    query(
      `*[_type in $types && path == $path] | order(_updatedAt desc) [0] {
        ...,
        ${pageQuery}
      }`,
      {
        params: {
          path: '/home',
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

export default IndexPage
