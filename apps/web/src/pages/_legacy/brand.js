import React from 'react'
import Brand from '@layouts/Brand'
import { runQueries } from '@lib/queries'

const BrandPage = (props) => <Brand {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/brand'

  const { global } = await runQueries([])

  return {
    props: {
      slug,
      preview,
      global,
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: 'Guide to the Leadpages Brand',
            seoDescription: `Our brand is both our personality and our promise. Use these guidelines whenever you work with the Leadpages brand, logo, content, and trademark.`,
            seoImage: 'https://static.leadpages.com/images/og/og-brand.jpg',
          },
        },
      ],
    },
  }
}

export default BrandPage
