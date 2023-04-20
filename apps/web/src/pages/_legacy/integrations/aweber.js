import React from 'react'
import Aweber from '@layouts/Integrations/Aweber'
import { runQueries } from '@lib'

const AweberPage = (props) => <Aweber {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/aweber'

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
            seoTitle: `Connect your Leadpages to AWeber| Get Online & Grow`,
            seoDescription: `Easily integrate Leadpages with AWeber. Connect your Leadpages froms to collect, segment, and update subscribers and trigger automated email campaigns.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages+AWeber.jpg',
          },
        },
      ],
    },
  }
}

export default AweberPage
