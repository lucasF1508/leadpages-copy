import React from 'react'
import LeadpagesVsInstapage from '@layouts/Comparisons/LeadpagesVsInstapage'
import { runQueries } from '@lib/queries'

const LeadpagesVsInstapagePage = (props) => <LeadpagesVsInstapage {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/comparisons/leadpages-vs-instapage'

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
              'Leadpages vs. Instapage | Marketing Platform Comparisons',
            seoDescription: `Wonder which platform is a better fit for your business? In this no-nonsense comparison of Leadpages vs. Instapage, you’ll find out!`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages-vs-Instapage.jpg',
          },
        },
      ],
    },
  }
}

export default LeadpagesVsInstapagePage
