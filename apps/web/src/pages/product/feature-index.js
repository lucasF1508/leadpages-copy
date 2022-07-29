import React from 'react'
import FeatureIndex from '@layouts/Product/FeatureIndex'

const FeatureIndexPage = (props) => <FeatureIndex {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/product/feature-index'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default FeatureIndexPage
