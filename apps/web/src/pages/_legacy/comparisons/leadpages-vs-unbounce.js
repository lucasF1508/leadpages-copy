import React from 'react'
import LeadpagesVsUnbounce from '@layouts/Comparisons/LeadpagesVsUnbounce'
import { runQueries } from '@lib/queries'

const LeadpagesVsUnbouncePage = (props) => <LeadpagesVsUnbounce {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-unbounce'

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
            seoTitle: `Leadpages vs. Unbounce | Marketing Platform Comparisons`,
            seoDescription: `Wonder which platform is a better fit for your business? In this no-nonsense comparison of Leadpages vs. Unbounce, you’ll find out!`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages-vs-Unbounce.jpg',
          },
        },
      ],
    },
  }
}

export default LeadpagesVsUnbouncePage
