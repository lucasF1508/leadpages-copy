import React from 'react'
import LeadGenerationGuide from '@layouts/LeadGenerationGuide'
import { runQueries } from '@lib'

const LeadGenerationGuidePage = (props) => <LeadGenerationGuide {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide'

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
            seoTitle: `What is Lead Generation | Lead Generation Guide | Leadpages`,
            seoDescription: `Every business requires a steady stream of high-quality leads. We’ve compiled insights from hundreds of thousands of companies into this Guide to Lead Generation.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default LeadGenerationGuidePage
