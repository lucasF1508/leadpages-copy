import React from 'react'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries, getDoc } from '@lib'
import Templates from '@layouts/Templates'

const TemplatesPage = (props) => <Templates {...props} />

const gallerySeo = {
  hasCustomSeoTitle: true,
  hasImageUrl: true,
  seoTitle: `200+ High-Converting Landing Page Templates | Leadpages`,
  seoDescription: `Boost performance of your marketing campaigns with Leadpages' easy-to-customize landing page templates. The best code-free way to grow leads and sales.`,
  seoImage:
    'https://cdn.sanity.io/images/1ux2e04i/production/34c5cb2ddc75e403db8905b94002c0d1844ac54a-2400x1256.webp?fm=jpg&h=630&w=1200',
}

export async function getStaticProps(context) {
  const { preview = false, params } = context

  const { templates = [] } = params
  const [category] = templates

  const { data: templateCategoryDoc } =
    (await getDoc('templateCategory', {
      preview,
      params: { slug: category },
      filters: [`templateType == "landingPage"`],
      projections: ``,
    })) || {}

  const { seo: seoData } = templateCategoryDoc || {}

  const slug = '/templates'

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
