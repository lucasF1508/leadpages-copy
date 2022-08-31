import React from 'react'
import ConversionOptimizationGuide from '@layouts/ConversionOptimizationGuide'

const ConversionOptimizationGuidePage = (props) => (
  <ConversionOptimizationGuide {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default ConversionOptimizationGuidePage
