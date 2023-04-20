import React from 'react'
import LeadGenStrategies from '@layouts/LeadGenerationGuide/LeadGenStrategies'
import { runQueries } from '@lib'

const LeadGenStrategiesPage = (props) => <LeadGenStrategies {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-strategies'

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
            seoTitle: `Lead Generation Strategies | Lead Generation Guide`,
            seoDescription: `Discover 6 lead generation techniques that will help you turn anonymous web traffic into business-building potential.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default LeadGenStrategiesPage
