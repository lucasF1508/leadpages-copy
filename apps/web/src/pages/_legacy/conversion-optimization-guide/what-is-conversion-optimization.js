import React from 'react'
import WhatIsConversionOptimization from '@layouts/ConversionOptimizationGuide/WhatIsConversionOptimization'
import { runQueries } from '@lib'

const WhatIsConversionOptimizationPage = (props) => (
  <WhatIsConversionOptimization {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-conversion-optimization'

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
            seoTitle: `What is Conversion Rate Optimization | CRO Guide | Leadpages`,
            seoDescription: `Does your web page convert leads to customers with ease? Learn the ins and outs, the benefits, and the how tos of conversion rate optimization.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default WhatIsConversionOptimizationPage
