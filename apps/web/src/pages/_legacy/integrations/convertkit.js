import React from 'react'
import ConvertKit from '@layouts/Integrations/ConvertKit'
import { runQueries } from '@lib'

const ConvertKitPage = (props) => <ConvertKit {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/convertkit'

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
            seoTitle: `Connect your Leadpages to ConvertKit| Get Online & Grow`,
            seoDescription: `Easily integrate Leadpages with ConvertKit. Connect your Leadpages froms to collect, segment, and update subscribers and trigger automated email campaigns.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages+ConvertKit.jpg',
          },
        },
      ],
    },
  }
}

export default ConvertKitPage
