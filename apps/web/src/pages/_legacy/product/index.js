import React from 'react'
import Product from '@layouts/Product'
import { runQueries } from '@lib/queries'

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
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Website & Landing Page Builder | Leadpages`,
            seoDescription: `Discover the tools you need to get online and grow your business: easy-to-make websites, landing pages, & more.`,
            seoImage: 'https://static.leadpages.com/images/og/og-product.jpg',
          },
        },
      ],
    },
  }
}

export default ProductPage
