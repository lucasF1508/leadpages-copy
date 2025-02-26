import React from 'react'
import ConversionOptimizedWebsite from '@layouts/ConversionOptimizationGuide/ConversionOptimizedWebsite'
import { runQueries } from '@lib/queries'

const ConversionOptimizedWebsitePage = (props) => (
  <ConversionOptimizedWebsite {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/conversion-optimized-website'

  const options = { underlaidMenu: true }
  const { global } = await runQueries([])

  return {
    props: {
      options,
      slug,
      preview,
      global,
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Website Conversion Optimization | CRO Guide | Leadpages`,
            seoDescription: `This step by step process for website conversion optimization will transform your page into a marketing machine that churns out leads and customers.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default ConversionOptimizedWebsitePage
