import React from 'react'
import Templates from '@layouts/Templates'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries, getDoc } from '@lib'
import { MandrelApi } from '@lp/template-gallery/dist/mandrel-api'
import { templatesBaseUrl } from '@legacy/constants/templates'

const TemplatesPage = (props) => <Templates {...props} />

const gallerySeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `200+ High-Converting Landing Page Templates | Leadpages`,
  seoDescription: `Boost performance of your marketing campaigns with Leadpages' easy-to-customize landing page templates. The best code-free way to grow leads and sales.`,
  seoImage:
    'https://cdn.sanity.io/images/1ux2e04i/production/34c5cb2ddc75e403db8905b94002c0d1844ac54a-2400x1256.webp?fm=jpg&h=630&w=1200',
}

const previewSeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `Get more leads with high-converting landing page templates | Leadpages`,
  seoDescription: `Get more leads and grow quicker with high-converting templates for landing pages and websites. Designed by pros and easy to customize, start for free today.`,
  seoImage: 'https://static.leadpages.com/images/og/og-templates.jpg',
}

const mandrelApi = new MandrelApi({ baseUrl: templatesBaseUrl })

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { templates = [] } = params
  const [route, templateId] = templates

  const isCategory = templates[0] === 'category'
  const category = isCategory ? templates[1] : null

  const { data: templateCategoryDoc } = isCategory
    ? await getDoc('templateCategory', {
        preview,
        params: { slug: category },
        filters: [`templateType == "landingPage"`],
        projections: ``,
      })
    : {}

  const { seo: seoData } = templateCategoryDoc || {}

  const isPreview = route === 'preview' && templateId
  const slug = '/templates'

  const seo = seoData
    ? {
        ...seoData,
        hasImageUrl: !!seoData?.seoImage,
        seoImage: seoData?.seoImage?.asset?.url || null,
      }
    : isPreview
    ? previewSeo
    : gallerySeo

  const { global } = await runQueries([])
  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)

  if (isPreview) {
    const template = await mandrelApi.getTemplateById(templateId)
    const templateScreenshot = template.template.thumbnailUrlWebp
    if (templateScreenshot) {
      previewSeo.seoImage = templateScreenshot
    }
    // Build the SEO title from the template name
    const templateName = template.template.name
    previewSeo.seoTitle = `${templateName}: High-Converting Landing Page Template`
    // Build the SEO description from the template categories
    let templateCategories = template.template.categories
    if (templateCategories.length > 1) {
      // When there are multiple categories, add an "and" before the last one
      templateCategories[templateCategories.length - 1] = `and ${
        templateCategories[templateCategories.length - 1]
      }`
    }
    templateCategories = templateCategories.join(', ')
    previewSeo.seoDescription = `3x your leads with this ${templateCategories} landing page template. Designed by pros, SEO-optimized, and easy to customize.`
  }

  return {
    props: {
      slug,
      preview,
      planData,
      global,
      data: [
        {
          ...templateCategoryDoc,
          title:
            templateCategoryDoc?.heroTitle ||
            `Choose From 200+ High-Converting Landing Page Templates`,
          heroContent:
            templateCategoryDoc?.heroContent ||
            `Every template is professionally-designed with over a decade of conversion marketing expertise baked in, so you can be confident you'll capture leads and sales. Use our intuitive drag-and-drop builder to quickly make a beautiful mobile-responsive landing page in 30 minutes or less.`,
          seo,
        },
      ],
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
