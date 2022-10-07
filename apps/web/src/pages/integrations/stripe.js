import React from 'react'
import Stripe from '@layouts/Integrations/Stripe'

const StripePage = (props) => <Stripe {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/stripe'

  const options = { headerBkgColor: '$grayAlt' }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default StripePage
