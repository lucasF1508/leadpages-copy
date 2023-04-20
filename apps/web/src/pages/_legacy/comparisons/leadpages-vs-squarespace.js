import React from 'react'
import LeadpagesVsSquarespace from '@layouts/Comparisons/LeadpagesVsSquarespace'
import { runQueries } from '@lib'

const LeadpagesVsSquarespacePage = (props) => (
  <LeadpagesVsSquarespace {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-squarespace'

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
            seoTitle: `Leadpages vs. Squarespace | Marketing Platform Comparisons`,
            seoDescription: `Wonder which platform is a better fit for your business? In this no-nonsense comparison of Leadpages vs. Squarespace, you’ll find out!`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages-vs-Squarespace.jpg',
          },
        },
      ],
    },
  }
}

export default LeadpagesVsSquarespacePage
