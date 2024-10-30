import React from 'react'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries, getDoc } from '@lib'
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

export async function getStaticProps(context) {
  const { preview = false, params } = context

  const { 'website-templates': websiteTemplates = [] } = params
  const [category] = websiteTemplates

  const { data: templateCategoryDoc } =
    (await getDoc('templateCategory', {
      preview,
      params: { slug: category },
      filters: [`templateType == "website"`],
      projections: ``,
    })) || {}

  const { seo: seoData } = templateCategoryDoc || {}

  const slug = '/website-templates'

  const seo = seoData
    ? {
        ...seoData,
        hasImageUrl: !!seoData?.seoImage,
        seoImage: seoData.seoImage?.asset?.url || null,
      }
    : gallerySeo

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
