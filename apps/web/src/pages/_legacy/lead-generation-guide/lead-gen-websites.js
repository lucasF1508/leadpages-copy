import React from 'react'
import LeadGenWebsites from '@layouts/LeadGenerationGuide/LeadGenWebsites'
import { runQueries } from '@lib/queries'

const LeadGenWebsitesPage = (props) => <LeadGenWebsites {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-websites'

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
            seoTitle: `Lead Generation Website | Lead Generation Guide | Leadpages`,
            seoDescription: `Turn your static site into a lead generation website by optimizing key areas where your traffic is most likely to transform into a qualified lead.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default LeadGenWebsitesPage
