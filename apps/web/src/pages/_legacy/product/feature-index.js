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
    },
  }
}

export default FeatureIndexPage
