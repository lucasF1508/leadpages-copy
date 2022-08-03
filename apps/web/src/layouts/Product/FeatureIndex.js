import React from 'react'
// components
import FeaturesIndex from '@legacy/components/product/FeaturesIndex'
import FeaturesIndexHeader from '@legacy/components/product/FeaturesIndexHeader'
import SEO from '@legacy/components/SEO'
// data
import {
  featureIndexPageData,
  featureIndexCategories,
} from '@legacy/data/feature-index_data'

const FeatureIndexPage = () => (
  <>
    <SEO
      pathname="/product/feature-index"
      title="Explore All Leadpages Features Built for Conversions"
      description="Discover the hundreds of features that are built into your Leadpages account: from real-time analytics to integrations with the tools you love, you'll find everything you need to get online and grow."
    />
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
