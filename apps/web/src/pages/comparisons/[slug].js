import React from 'react'
import { getDoc, getDocSlugs, runQueries } from '@lib'
import PageSidebar from '@layouts/Page/PageSidebar'
import { features } from 'config'

const DynamicPage = (props) => <PageSidebar {...props} />

export const shapeData = (data) => {
  const [pageData] = (data?.length && data) || []
  const { hero: heroes, options: pageOptions } = pageData || {}
  const [hero] = heroes || []

  // Page options
  const darkHero = features.darkHeros.includes(
    hero?.backgroundOptions?.backgroundColor
  )

  const options = {
    ...pageData?.options,
    underlaidMenu: darkHero || pageOptions?.underlaidMenu || null,
    darkHero,
    displaySidebar: true,
  }

  return [
    {
      ...pageData,
      options,
    },
  ]
}

export const exporter = (props) => shapeData(props)

export async function getStaticProps(context) {
  const { params, preview = false } = context
  const slug = params?.slug

  const { data, queries, global } = await runQueries(
    getDoc('comparison', {
      preview,
      params: { slug },
    })
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
  const docPaths = await getDocSlugs(['comparison'])

  const paths = docPaths.map(({ slug }) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default DynamicPage
