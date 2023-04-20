import React from 'react'
import LeadpagesVsKartra from '@layouts/Comparisons/LeadpagesVsKartra'
import { runQueries } from '@lib'

const LeadpagesVsKartraPage = (props) => <LeadpagesVsKartra {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-kartra'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Leadpages vs. Kartra: What's the difference?`,
            seoDescription: `Discover which platform is "The best investment in my business to date” and why small business owners like you made the switch to Leadpages.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages-vs-Kartra.jpg',
          },
        },
      ],
    },
  }
}

export default LeadpagesVsKartraPage
