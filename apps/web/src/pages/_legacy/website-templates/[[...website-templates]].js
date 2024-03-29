import React from 'react'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries, getDoc } from '@lib'
import { MandrelApi } from '@lp/template-gallery/dist/mandrel-api'
import { templatesBaseUrl } from '@legacy/constants/templates'
import Templates from '@layouts/Templates'

const WebsiteTemplatesPage = (props) => (
  <Templates {...props} isWebsiteGallery />
)

const gallerySeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `50+ Website Templates for Small Businesses | Leadpages`,
  seoDescription: `Grow your business and make your brand stand out with Leadpages' easy-to-customize website templates. No tech skills or code required.`,
  seoImage:
    'https://cdn.sanity.io/images/1ux2e04i/production/998f6a6d799976c3e9cd0567c8e822a46b4f6d4c-2400x1256.webp?fm=jpg&h=630&w=1200',
}

const previewSeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `Build Your Website Faster with These Free Templates | Leadpages`,
  seoDescription: `Grow your business faster when you start with our high-converting, mobile-responsive templates. Use our drag-and-drop builder to customize your own website.`,
  seoImage: 'https://static.leadpages.com/images/og/og-templates.jpg',
}

const mandrelApi = new MandrelApi({ baseUrl: templatesBaseUrl })

export async function getStaticProps(context) {
  const { preview = false, params } = context
  const { 'website-templates': websiteTemplates = [] } = params
  const [route, templateId] = websiteTemplates

  const isCategory = websiteTemplates[0] === 'category'
  const category = isCategory ? websiteTemplates[1] : null

  const { data: templateCategoryDoc } = isCategory
    ? await getDoc('templateCategory', {
        preview,
        params: { slug: category },
        filters: [`templateType == "website"`],
        projections: ``,
      })
    : {}

  const { seo: seoData } = templateCategoryDoc || {}

  const isPreview = route === 'preview' && templateId
  const slug = '/website-templates'

  const seo = seoData
    ? {
        ...seoData,
        hasImageUrl: !!seoData?.seoImage,
        seoImage: seoData.seoImage?.asset?.url || null,
      }
    : isPreview
    ? previewSeo
    : gallerySeo

  const { global } = await runQueries([])
  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)
  const options = { hideBar: true }

  if (isPreview) {
    const template = await mandrelApi.getTemplateById(templateId)
    const templateScreenshot = template.template.thumbnailUrlWebp
    if (templateScreenshot) {
      previewSeo.seoImage = templateScreenshot
    }
    // Build the SEO title from the template name
    const templateName = template.template.name
    previewSeo.seoTitle = `${templateName}: Conversion-Focused Website Template`
    // Build the SEO description from the template categories
    let templateCategories = template.template.categories
    if (templateCategories.length > 1) {
      // When there are multiple categories, add an "and" before the last one
      templateCategories[templateCategories.length - 1] = `and ${
        templateCategories[templateCategories.length - 1]
      }`
    }
    templateCategories = templateCategories.join(', ')
    previewSeo.seoDescription = `Grow your business faster with this ${templateCategories} website template. Designed by pros, SEO-optimized, and easy to customize.`
  }

  return {
    props: {
      options,
      slug,
      preview,
      planData,
      global,
      data: [
        {
          ...templateCategoryDoc,
          title:
            templateCategoryDoc?.heroTitle ||
            `Choose From 50+ Conversion-Driven Website Templates`,
          heroContent:
            templateCategoryDoc?.heroContent ||
            `Grow your business faster when you start with a professionally-designed high-converting, mobile-responsive website template. Easily customize your site with our intuitive drag-and-drop builder.`,
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

export default WebsiteTemplatesPage
