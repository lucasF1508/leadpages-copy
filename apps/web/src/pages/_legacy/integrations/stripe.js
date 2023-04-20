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
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Sell More With Leadpages + Stripe | Get Online & Grow`,
            seoDescription: `Easily sell your services online, deliver products, and accept credit cards with Leadpages Checkouts, powered by Stripe.`,
            seoImage:
              'https://static.leadpages.com/images/og/og-Leadpages+Stripe.jpg',
          },
        },
      ],
    },
  }
}

export default StripePage
