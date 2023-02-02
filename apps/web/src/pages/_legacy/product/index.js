import React from 'react'
import Product from '@layouts/Product'
import { runQueries } from '@lib'

const ProductPage = (props) => <Product {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product'

  const options = { underlaidMenu: true }
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

export default ProductPage
