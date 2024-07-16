import React from 'react'
import { getDoc, runQueries } from '@lib'
import HomePage from '@layouts/HomePage'
import { features } from 'config'

const IndexPage = (props) => <HomePage {...props} />

export const shapeData = (data, isVariant = false) => {
  const [pageData] = (data?.length && data) || []
  const { hero: heroes } = pageData || {}
  const [hero] = heroes || []

  // Page options
  const darkHero = features.darkHeros.includes(
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

  const { data, queries, global } = await runQueries(
    getDoc('pageHome', {
      preview,
      params: { slug: 'home' },
    }),
    true,
    preview
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
