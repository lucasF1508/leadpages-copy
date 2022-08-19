import React from 'react'
import ConversionOptimizedWebsite from '@layouts/ConversionOptimizationGuide/ConversionOptimizedWebsite'

const ConversionOptimizedWebsitePage = (props) => (
  <ConversionOptimizedWebsite {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/conversion-optimized-website'

  const data = {}

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default ConversionOptimizedWebsitePage
