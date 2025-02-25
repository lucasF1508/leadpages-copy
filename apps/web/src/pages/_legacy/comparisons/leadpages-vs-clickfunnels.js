import React from 'react'
import LeadpagesVsClickfunnels from '@layouts/Comparisons/LeadpagesVsClickfunnels'
import { runQueries } from '@lib/queries'

const LeadpagesVsClickfunnelsPage = (props) => (
  <LeadpagesVsClickfunnels {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-clickfunnels'

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
            seoTitle:
              'Leadpages vs. ClickFunnels | Marketing Platform Comparisons',
            seoDescription: `Wonder which platform is a better fit for your business? In this no-nonsense comparison of Leadpages vs. ClickFunnels, you’ll find out!`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages-vs-Clickfunnels.jpg',
          },
        },
      ],
    },
  }
}

export default LeadpagesVsClickfunnelsPage
