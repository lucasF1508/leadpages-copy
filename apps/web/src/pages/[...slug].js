import React from 'react'
import { getDoc, getDocSlugs, runQueries } from '@lib'
import Page, { PageSidebar } from '@layouts/Page'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { features } from 'config'

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

export async function getStaticProps(context) {
  const { params, preview = false } = context
  const path = params?.slug?.join('/')

  const { data, queries, global } = await runQueries(
    getDoc(['page', 'customer', 'integration'], {
      preview,
      params: { path: `/${path}` },
      projections: `category[]->`,
    }),
    true,
    preview
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
  const docPaths = await getDocSlugs(['page', 'customer', 'integration'])
  const excludedPaths = ['/product/feature-index']

  const paths = docPaths.reduce((acc, { slug, path }) => {
    if (excludedPaths.includes(path)) return acc

    return [
      ...acc,
      {
        params: {
          slug: path?.split('/').filter(Boolean) || [slug],
        },
      },
    ]
  }, [])

  return {
    paths,
    fallback: false,
  }
}

export default DynamicPage
