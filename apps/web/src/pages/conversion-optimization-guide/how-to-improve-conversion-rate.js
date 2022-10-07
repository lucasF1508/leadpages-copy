import React from 'react'
import HowToImproveConversionRate from '@layouts/ConversionOptimizationGuide/HowToImproveConversionRate'

const HowToImproveConversionRatePage = (props) => (
  <HowToImproveConversionRate {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/how-to-improve-conversion-rate'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default HowToImproveConversionRatePage
