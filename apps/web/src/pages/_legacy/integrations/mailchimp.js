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
    },
  }
}

export default MailchimpPage
