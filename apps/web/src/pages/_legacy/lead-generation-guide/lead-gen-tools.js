import React from 'react'
import LeadGenTools from '@layouts/LeadGenerationGuide/LeadGenTools'
import { runQueries } from '@lib'

const LeadGenToolsPage = (props) => <LeadGenTools {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-tools'

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
            seoTitle: `Lead Generation Tools | Lead Generation Guide | Leadpages`,
            seoDescription: `Every small business needs a set of reliable lead generation tools that can effectively target an audience and capture opt-in information.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default LeadGenToolsPage
