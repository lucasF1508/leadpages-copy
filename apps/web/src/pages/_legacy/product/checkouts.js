import React from 'react'
import Checkouts from '@layouts/Product/Checkouts'
import { runQueries } from '@lib'

const CheckoutsPage = (props) => <Checkouts {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/checkouts'

  const options = { hideBar: true }
  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      options,
      global,
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Leadpages Checkout Widget`,
            seoDescription: `Create a Leadpages checkout and then embed it on any web page or pop-up you want. Easily sell online services, deliver products, and accept recurring payments.`,
            seoImage: 'https://static.leadpages.com/images/og/og-checkouts.jpg',
          },
        },
      ],
    },
  }
}

export default CheckoutsPage
