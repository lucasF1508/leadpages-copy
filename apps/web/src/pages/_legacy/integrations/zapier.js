import React from 'react'
import Zapier from '@layouts/Integrations/Zapier'
import { runQueries } from '@lib'

const ZapierPage = (props) => <Zapier {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/zapier'

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
            seoTitle: `Connect Leadpages to 2000+ Apps With Zapier`,
            seoDescription: `Connect your Leadpages account to more than 2000+ apps via Zapier. Easily set up automation rules to free up your daily tasks. No coding required.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages+Zapier.jpg',
          },
        },
      ],
    },
  }
}

export default ZapierPage
