import getClient from 'client'
import { MandrelApi } from '@lp/template-gallery/dist/mandrel-api'
import { templatesBaseUrl } from '@legacy/constants/templates'

const mandrelApi = new MandrelApi({ baseUrl: templatesBaseUrl })

const client = getClient()

const siteSeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `Build Your Website Faster with These Free Templates | Leadpages`,
  seoDescription: `Grow your business faster when you start with our high-converting, mobile-responsive templates. Use our drag-and-drop builder to customize your own website.`,
  seoImage: 'https://static.leadpages.com/images/og/og-templates.jpg',
}

const landingPageSeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `Get more leads with high-converting landing page templates | Leadpages`,
  seoDescription: `Get more leads and grow quicker with high-converting templates for landing pages and websites. Designed by pros and easy to customize, start for free today.`,
  seoImage: 'https://static.leadpages.com/images/og/og-templates.jpg',
}

const getTemplateData = async ({ templateId, templateType }) => {
  const _id = await client.fetch(`
    *[ _type == "template" && slug.current == "${templateId}" || _id == "${templateId}" ][0]._id 
  `)

  if (!_id) {
    return {
      _id: null,
    }
  }

  const seo = templateType === 'website' ? siteSeo : landingPageSeo
  const title =
    templateType === 'website'
      ? 'Choose From 50+ Conversion-Driven Website Templates'
      : 'Choose From 200+ High-Converting Landing Page Templates'
  const heroContent =
    templateType === 'website'
      ? 'Grow your business faster when you start with our high-converting, mobile-responsive templates. Use our drag-and-drop builder to customize your own website.'
      : `Every template is professionally-designed with over a decade of conversion marketing expertise baked in, so you can be confident you'll capture leads and sales. Use our intuitive drag-and-drop builder to quickly make a beautiful mobile-responsive landing page in 30 minutes or less.`

  let template

  try {
    template = await mandrelApi.getTemplateById(_id)
  } catch (error) {
    console.error('Error fetching Template from Mandrel', error)
    return {
      _id: null,
    }
  }

  const templateScreenshot = template.template.thumbnailUrlWebp
  if (templateScreenshot) {
    seo.seoImage = templateScreenshot
  }

  const templateName = template.template.name
  seo.seoTitle = `${templateName}: Conversion-Focused Website Template`

  let templateCategories = template.template.categories
  if (templateCategories.length > 1) {
    // When there are multiple categories, add an "and" before the last one
    templateCategories[templateCategories.length - 1] = `and ${
      templateCategories[templateCategories.length - 1]
    }`
  }

  templateCategories = templateCategories.join(', ')
  seo.seoDescription =
    template === 'website'
      ? `Grow your business faster with this ${templateCategories} website template. Designed by pros, SEO-optimized, and easy to customize.`
      : `3x your leads with this ${templateCategories} landing page template. Designed by pros, SEO-optimized, and easy to customize.`

  return {
    _id,
    title,
    heroContent,
    seo,
    template,
  }
}

export default getTemplateData
