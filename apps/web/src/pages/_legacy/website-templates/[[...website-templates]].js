import React from 'react'
import WebsiteTemplates from '@layouts/WebsiteTemplates'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries } from '@lib'
import { MandrelApi } from '@lp/template-gallery/dist/mandrel-api'
import { templatesBaseUrl } from '@legacy/constants/templates'

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

const mandrelApi = new MandrelApi({ baseUrl: templatesBaseUrl})

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

  if (isPreview) {
    const template = await mandrelApi.getTemplateById(templateId);
    const templateScreenshot = template.template.thumbnailUrlWebp;
    if (templateScreenshot) {
      previewSeo.seoImage = templateScreenshot;
    }
    // Build the SEO title from the template name
    const templateName = template.template.name;
    previewSeo.seoTitle = `${templateName}: Conversion-Focused Website Template`;
    // Build the SEO description from the template categories
    let templateCategories = template.template.categories;
    if (templateCategories.length > 1) {
      // When there are multiple categories, add an "and" before the last one
      templateCategories[templateCategories.length - 1] = `and ${templateCategories[templateCategories.length - 1]}`;
    }
    templateCategories = templateCategories.join(', ');
    previewSeo.seoDescription = `Grow your business faster with this ${templateCategories} website template. Designed by pros, SEO-optimized, and easy to customize.`;
  }

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
