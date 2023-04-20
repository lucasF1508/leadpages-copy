import React from 'react'
// components
import FeaturesIndex from '@legacy/components/product/FeaturesIndex'
import FeaturesIndexHeader from '@legacy/components/product/FeaturesIndexHeader'
// data
import {
  featureIndexPageData,
  featureIndexCategories,
} from '@legacy/data/feature-index_data'

const FeatureIndexPage = () => (
  <>
    <FeaturesIndexHeader
      headingText="Landing Pages"
      subheadingText="Confidently grow your business by turning clicks into customers with high-converting landing pages you can easily DIY."
      CTAtext="Visit the template gallery >"
    />
    <FeaturesIndex
      data={featureIndexPageData}
      categories={featureIndexCategories}
    />
  </>
)

export default FeatureIndexPage
