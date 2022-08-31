import React from 'react'
import Mailchimp from '@layouts/Integrations/Mailchimp'

const MailchimpPage = (props) => <Mailchimp {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/mailchimp'

  const data = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default MailchimpPage
