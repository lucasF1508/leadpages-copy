import React from 'react'
import { getDoc, getDocSlugs, runQueries } from '@lib'
import Page from '@layouts/Page'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { features } from 'config'

// Dynamic redirects test
const dynamicRedirects = [
  {
    path: 'bonus',
    destination: 'https://try.leadpages.com/5jlgls7dsgc8',
    statusCode: 301,
  },
  {
    path: 'jeff',
    destination: 'https://try.leadpages.com/5jlgls7dsgc8',
  },
  {
    path: 'natalie',
    destination: 'https://try.leadpages.com/sp2izl4yml66',
  },
]

const dynamicRedirectsIndex = dynamicRedirects.reduce(
  (index, { path, ...props }) => ({ ...index, [path]: { ...props } }),
  {}
)
//

const DynamicPage = (props) => <Page {...props} />

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
  const path = params?.slug?.join('/')

  // Dynamic Redirect
  if (Object.keys(dynamicRedirectsIndex).includes(path)) {
    const { destination, statusCode = 308 } = dynamicRedirectsIndex[path]

    return {
      redirect: {
        destination,
        statusCode,
      },
    }
  }

  const { data, queries, global } = await runQueries(
    getDoc(['page', 'customer', 'integration'], {
      preview,
      params: { path: `/${path}` },
      projections: { 'category[]': '->' },
    })
  )

  // Only fetch pricing if we need it
  const [pageData] = (data?.length && data) || []
  const { components } = pageData || {}
  const hasPricing = components?.some(({ _type }) => _type === 'pricing')
  let planData = null

  if (hasPricing) {
    const rawPlanData = await getPlanData()
    planData = getGroupedPlanData(rawPlanData)
  }

  return {
    props: {
      data: shapeData(data),
      queries,
      global,
      preview,
      planData,
    },
  }
}

export async function getStaticPaths() {
  const docPaths = await getDocSlugs(['page', 'customer', 'integration'], {
    // filters: ['slug.current != "404"'],
  })

  const paths = [...docPaths, ...dynamicRedirects].map(({ slug, path }) => ({
    params: {
      slug: path?.split('/').filter(Boolean) || slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default DynamicPage
