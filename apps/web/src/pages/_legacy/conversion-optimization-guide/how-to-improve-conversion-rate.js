import React from 'react'
import HowToImproveConversionRate from '@layouts/ConversionOptimizationGuide/HowToImproveConversionRate'
import { runQueries } from '@lib/queries'

const HowToImproveConversionRatePage = (props) => (
  <HowToImproveConversionRate {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/how-to-improve-conversion-rate'

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
            seoTitle: `How to Improve Conversion Rate | CRO Guide | Leadpages`,
            seoDescription: `You want more out of your webpages. Improve conversion rate with these tips + tricks to create a page your visitors will be inspired by (and take action!).`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default HowToImproveConversionRatePage
