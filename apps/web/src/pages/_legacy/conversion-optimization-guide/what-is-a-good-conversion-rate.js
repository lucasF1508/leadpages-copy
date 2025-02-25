import React from 'react'
import WhatIsAGoodConversionRate from '@layouts/ConversionOptimizationGuide/WhatIsAGoodConversionRate'
import { runQueries } from '@lib/queries'

const WhatIsAGoodConversionRatePage = (props) => (
  <WhatIsAGoodConversionRate {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-a-good-conversion-rate'

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
            seoTitle: `What's a Good Conversion Rate | CRO Guide | Leadpages`,
            seoDescription: `Grow your online business with The Definitive Conversion Optimization Guide by Leadpages. Learn about CRO, AB testing, & more to up conversions.`,
            seoImage: 'https://static.leadpages.com/images/og/og-careers.jpg',
          },
        },
      ],
    },
  }
}

export default WhatIsAGoodConversionRatePage
