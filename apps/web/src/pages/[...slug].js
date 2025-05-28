import React from 'react'
import Page, { PageSidebar } from '@layouts/Page'
import { features } from 'config'
import { getGroupedPlanData, getPlanData } from '@utils/plans'
import { getStaticPathsParams, query, runQueries } from '@lib/queries'
import pageQuery from '@lib/queries/components'

const DynamicPage = ({ hasSidebar, ...props }) =>
  hasSidebar ? <PageSidebar {...props} /> : <Page {...props} />

export const shapeData = (data) => {
  const [pageData] = (data?.length && data) || []
  const {
    hero: heroes,
    options: pageOptions,
    hasSidebar = false,
    parent,
    sidebarLinks: links,
  } = pageData || {}
  const [hero] = heroes || []

  // Page options
  const darkHero = features.darkBackgrounds.includes(
    hero?.backgroundOptions?.backgroundColor
  )

  let sidebarLinks = null

  if (hasSidebar && parent?.hasSidebar && parent?.sidebarLinks?.length > 0) {
    sidebarLinks = parent?.sidebarLinks
  }

  if (hasSidebar && links?.length > 0) {
    sidebarLinks = links
  }

  const options = {
    ...pageData?.options,
    underlaidMenu: darkHero || pageOptions?.underlaidMenu || null,
    darkHero,
    hasSidebar,
  }

  return [
    {
      ...pageData,
      options,
      sidebarLinks,
    },
  ]
}

export const exporter = (props) => shapeData(props)

const types = ['page', 'customer', 'integration']

export async function getStaticProps(context) {
  const { params, preview = false } = context
  const path = [
    '/',
    ...(Array.isArray(params?.slug) ? params.slug : [params.slug]),
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
    )
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

const appRouterPages = ['"/pricing"', '"/product/lead-agent"', '"/product/lead-enrichment"']

export async function getStaticPaths() {
  const paths = await getStaticPathsParams({
    catchAll: true,
    filter:
      `slug.current != "404" && path != "/product/feature-index" && path != "/website-templates" && path != "/templates" && !(path in [${appRouterPages}])`,
    types,
  })

  return {
    fallback: false,
    paths,
  }
}

export default DynamicPage
