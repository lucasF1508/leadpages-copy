import React from 'react'
import Mailchimp from '@layouts/Integrations/Mailchimp'
import { runQueries } from '@lib'

const MailchimpPage = (props) => <Mailchimp {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/mailchimp'

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
            seoTitle: `Connect your Leadpages to Mailchimp | Get Online & Grow`,
            seoDescription: `Easily integrate Leadpages with Mailchimp. Connect your Leadpages froms to collect, segment, and update subscribers and trigger automated email campaigns.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages+Mailchimp.jpg',
          },
        },
      ],
    },
  }
}

export default MailchimpPage
