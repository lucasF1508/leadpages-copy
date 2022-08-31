import React from 'react'
import Product from '@layouts/Product'

const ProductPage = (props) => <Product {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default ProductPage
