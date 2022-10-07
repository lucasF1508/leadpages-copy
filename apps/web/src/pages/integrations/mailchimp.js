import React from 'react'
import Mailchimp from '@layouts/Integrations/Mailchimp'

const MailchimpPage = (props) => <Mailchimp {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/mailchimp'

  const options = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default MailchimpPage
