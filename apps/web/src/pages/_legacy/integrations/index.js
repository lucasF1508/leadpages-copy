import React from 'react'
import Integrations from '@layouts/Integrations/IntegrationsLegacy'
import { runQueries } from '@lib/queries'

const IntegrationsPage = (props) => <Integrations {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations'

  const options = { hideBar: true, underlaidMenu: true }
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
            seoTitle: `Leadpages Integrations - Mailchimp, Salesforce, and More!`,
            seoDescription: `With Leadpages integrations⁠—including email, CRM, analytics, payment, social media, and more⁠—you can be sure we fit right in with the tools you already use.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-integrations.jpg',
          },
        },
      ],
    },
  }
}

export default IntegrationsPage
