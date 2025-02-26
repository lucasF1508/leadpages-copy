import React from 'react'
import ActiveCampaign from '@layouts/Integrations/ActiveCampaign'
import { runQueries } from '@lib/queries'

const ActiveCampaignPage = (props) => <ActiveCampaign {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/active-campaign'

  const options = { headerBkgColor: '$grayAlt' }
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
            seoTitle: `Connect your Leadpages to ActiveCampaign | Get Online & Grow`,
            seoDescription: `Easily integrate Leadpages with ActiveCampaign. Connect your Leadpages froms to segment and update subscribers, and trigger automated email campaigns.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages+ActiveCampaign.jpg',
          },
        },
      ],
    },
  }
}

export default ActiveCampaignPage
