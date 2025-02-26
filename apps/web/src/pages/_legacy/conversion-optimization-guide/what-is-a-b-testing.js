import React from 'react'
import WhatIsABTesting from '@layouts/ConversionOptimizationGuide/WhatIsABTesting'
import { runQueries } from '@lib/queries'

const WhatIsABTestingPage = (props) => <WhatIsABTesting {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-ab-testing'

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
            seoTitle: `How to do A/B Testing | CRO Guide | Leadpages`,
            seoDescription: `A/B testing is the secret to moving towards your ideal conversion rate. Find out what your customers actually want, then deliver massive results!`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default WhatIsABTestingPage
