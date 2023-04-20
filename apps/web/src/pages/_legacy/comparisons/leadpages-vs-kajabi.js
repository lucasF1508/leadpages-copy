import React from 'react'
import LeadpagesVsKajabi from '@layouts/Comparisons/LeadpagesVsKajabi'
import { runQueries } from '@lib'

const LeadpagesVsKajabiPage = (props) => <LeadpagesVsKajabi {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-kajabi'

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
            seoTitle: `Leadpages vs. Kajabi: What's the difference?`,
            seoDescription: `See why more than 2x more small businesses choose Leadpages over Kajabi and unlock all the features you need with none of the overwhelm.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages-vs-Kajabi.jpg',
          },
        },
      ],
    },
  }
}

export default LeadpagesVsKajabiPage
