import React from 'react'
import HowToCalculateCro from '@layouts/ConversionOptimizationGuide/HowToCalculateCro'
import { runQueries } from '@lib'

const HowToCalculateCroPage = (props) => <HowToCalculateCro {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/how-to-calculate-cro'

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
            seoTitle: `How to Calculate Conversion Rate | CRO Guide | Leadpages`,
            seoDescription: `Do you know how to calculate conversion rate for your website or landing page? Get the numbers, the formulas, the math, and all the how-to in this article!`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default HowToCalculateCroPage
