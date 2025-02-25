import React from 'react'
import ConversionOptimizationGuide from '@layouts/ConversionOptimizationGuide'
import { runQueries } from '@lib/queries'

const ConversionOptimizationGuidePage = (props) => (
  <ConversionOptimizationGuide {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide'

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
            seoTitle: `Conversion Optimization | CRO Guide | Leadpages`,
            seoDescription: `This Conversion Optimization Guide is designed to condense decades’ worth of conversion marketing knowledge into no-nonsense steps that you can take today.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default ConversionOptimizationGuidePage
