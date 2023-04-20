import React from 'react'
import WebsiteTemplates from '@layouts/WebsiteTemplates'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries } from '@lib'

const WebsiteTemplatesPage = (props) => <WebsiteTemplates {...props} />

const gallerySeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `Website Templates by Leadpages`,
  seoDescription: `Get free, high-converting website and landing page templates with Leadpages. Easily customize with a code-free builder & turn more clicks into customers.`,
  seoImage: 'https://static.leadpages.com/images/og/og-templates.jpg',
}

const previewSeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `Build Your Website Faster with These Free Templates | Leadpages`,
  seoDescription: `Grow your business faster when you start with our high-converting, mobile-responsive templates. Use our drag-and-drop builder to customize your own website.`,
  seoImage: 'https://static.leadpages.com/images/og/og-templates.jpg',
}

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { 'website-templates': websiteTemplates = [] } = params
  const [route, templateId] = websiteTemplates

  const isPreview = route === 'preview' && templateId
  const slug = '/website-templates'

  const { global } = await runQueries([])
  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)
  const options = { hideBar: true }

  return {
    props: {
      options,
      slug,
      preview,
      planData,
      global,
      data: [{ seo: isPreview ? previewSeo : gallerySeo }],
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default WebsiteTemplatesPage
