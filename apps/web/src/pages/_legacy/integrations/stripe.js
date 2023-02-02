import React from 'react'
import Stripe from '@layouts/Integrations/Stripe'
import { runQueries } from '@lib'

const StripePage = (props) => <Stripe {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/integrations/stripe'

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

export default StripePage
