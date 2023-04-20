import React from 'react'
import LeadGenIdeas from '@layouts/LeadGenerationGuide/LeadGenIdeas'
import { runQueries } from '@lib'

const LeadGenIdeasPage = (props) => <LeadGenIdeas {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/lead-generation-guide/lead-gen-ideas'

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
            seoTitle: `Lead Generation Ideas | Lead Generation Guide | Leadpages`,
            seoDescription: `At a loss for how to grow your email list? Tap into these 5 essential lead generation ideas that will strengthen your marketing and fill your upper funnel.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-ultimate-guide-to-landing-pages.jpg',
          },
        },
      ],
    },
  }
}

export default LeadGenIdeasPage
