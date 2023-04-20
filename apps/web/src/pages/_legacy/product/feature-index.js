import React from 'react'
import FeatureIndex from '@layouts/Product/FeatureIndex'
import { runQueries } from '@lib'

const FeatureIndexPage = (props) => <FeatureIndex {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/feature-index'

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
            seoTitle: `Explore All Leadpages Features Built for Conversions`,
            seoDescription: `Discover the hundreds of features that are built into your Leadpages account: from real-time analytics to integrations with the tools you love, you'll find everything you need to get online and grow.`,
          },
        },
      ],
    },
  }
}

export default FeatureIndexPage
