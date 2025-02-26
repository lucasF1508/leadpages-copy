import React from 'react'
import InfusionSoft from '@layouts/Integrations/InfusionSoft'
import { runQueries } from '@lib/queries'

const InfusionSoftPage = (props) => <InfusionSoft {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/infusion-soft'

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
            seoTitle: `Connect your Leadpages to Infusionsoft | Get Online & Grow`,
            seoDescription: `Easily integrate Leadpages with Infusionsoft. Connect your Leadpages froms to segment and update subscribers, and trigger automated email campaigns.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages+Infusionsoft.jpg',
          },
        },
      ],
    },
  }
}

export default InfusionSoftPage
