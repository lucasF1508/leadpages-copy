import React from 'react'
import Templates from '@layouts/Templates'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries } from '@lib'
import { MandrelApi } from '@lp/template-gallery/dist/mandrel-api'
import { templatesBaseUrl } from '@legacy/constants/templates'

const TemplatesPage = (props) => <Templates {...props} />

const gallerySeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `Website & Landing Page Template Gallery | Leadpages`,
  seoDescription: `Grow your leads and conversion with the best website and landing page templates from Leadpages. All templates are fully customizable and user-friendly across devices.`,
  seoImage: 'https://static.leadpages.com/images/og/og-templates.jpg',
}

const previewSeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `Get more leads with high-converting landing page templates | Leadpages`,
  seoDescription: `Get more leads and grow quicker with high-converting templates for landing pages and websites. Designed by pros and easy to customize, start for free today.`,
  seoImage: 'https://static.leadpages.com/images/og/og-templates.jpg',
}

const mandrelApi = new MandrelApi({ baseUrl: templatesBaseUrl})

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { templates = [] } = params
  const [route, templateId] = templates

  const isPreview = route === 'preview' && templateId
  const slug = '/templates'

  const { global } = await runQueries([])
  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)

  if (isPreview) {
    const template = await mandrelApi.getTemplateById(templateId);
    const templateScreenshot = template.template.thumbnailUrlWebp;
    if (templateScreenshot) {
      previewSeo.seoImage = templateScreenshot;
    }
    // Build the SEO title from the template name
    const templateName = template.template.name;
    previewSeo.seoTitle = `${templateName} | Landing page template by Leadpages`;
    // Build the SEO description from the template categories
    let templateCategories = template.template.categories.join(', ');
    previewSeo.seoDescription = `Get more leads with this ${templateCategories} landing page template. Designed by pros and easy to customize, start for free today.`;
  }

  return {
    props: {
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

export default TemplatesPage
