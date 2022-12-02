import React from 'react'
import { getDoc, getDocSlugs, runQueries } from '@lib'
import Page from '@layouts/Page'
import { getPlanData, getGroupedPlanData } from '@utils/plans'

const DynamicPage = (props) => <Page {...props} />

export async function getStaticProps(context) {
  const { params, preview = false } = context
  const path = `/${params?.slug?.join('/')}`

  const { data, queries, global } = await runQueries(
    getDoc(['page', 'customer', 'integration'], {
      preview,
      params: { path },
      projections: { 'category[]': '->' },
    })
  )

  // TODO: Add this to shape data
  const [pageData] = (data?.length && data) || []
  const { hero: heroes, components, options: pageOptions } = pageData || {}
  const [hero] = heroes || []

  // Only fetch pricing if we need it
  const hasPricing = components?.some(({ _type }) => _type === 'pricing')
  const rawPlanData = await getPlanData()
  const planData = hasPricing
    ? { planData: getGroupedPlanData(rawPlanData) }
    : {}

  // Page options
  const options = {
    ...pageData?.options,
    underlaidMenu: !!hero?.darkBackground || pageOptions?.underlaidMenu || null,
    darkHero: !!hero?.darkBackground,
    ...planData,
  }

  return {
    props: {
      data: data && !data[0] ? [{}] : data,
      queries,
      global,
      preview,
      options,
    },
  }
}

export async function getStaticPaths() {
  const docPaths = await getDocSlugs(['page', 'customer', 'integration'], {
    // filters: ['slug.current != "404"'],
  })

  const paths = docPaths.map(({ slug, path }) => ({
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
