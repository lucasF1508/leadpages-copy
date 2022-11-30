import React from 'react'
import { runQueries, runQuery } from '@lib'
import Customers from '@layouts/Customers'

const CustomersPage = (props) => <Customers {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/customers'

  const { global } = await runQueries()
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
        },
      ],
      global,
      slug,
      preview,
    },
  }
}

export default CustomersPage
