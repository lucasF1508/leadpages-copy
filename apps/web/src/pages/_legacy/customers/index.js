import React from 'react'
import { runQueries, runQuery } from '@lib/queries'
import Customers from '@layouts/Customers'

const CustomersPage = (props) => <Customers {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers'

  const { global } = await runQueries([])
  const customers = await runQuery(`
    *[_type == 'customer' && 'featured' in category[]->slug.current] | order(orderRank) {
      path,
      excerpt {
        ...,
        image {
          ...,
          asset->
        }
      }
    }`)

  return {
    props: {
      data: [
        {
          customers,
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Leadpage Examples | Small Business Success Stories`,
            seoDescription: `Ready to get inspired? Learn how our customers are growing their small businesses every day with these Leadpages examples and case studies.`,
            seoImage: 'https://static.leadpages.com/images/og/og-customers.jpg',
          },
        },
      ],
      global,
      slug,
      preview,
    },
  }
}

export default CustomersPage
