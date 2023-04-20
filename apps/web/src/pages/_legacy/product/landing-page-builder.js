import React from 'react'
import LandingPageBuilder from '@layouts/Product/LandingPageBuilder'
import { runQueries } from '@lib'

const LandingPageBuilderPage = (props) => <LandingPageBuilder {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/landing-page-builder'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Create Professional Landing Pages with Leadpages`,
            seoDescription: `Use Leadpages' drag-n-drop landing page builder to create a professional page for your business. Integrations, templates, etc.—everything you need is here.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-landing-page-builder.jpg',
          },
        },
      ],
    },
  }
}

export default LandingPageBuilderPage
