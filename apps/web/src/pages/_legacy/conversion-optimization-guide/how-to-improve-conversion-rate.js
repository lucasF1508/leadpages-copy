import React from 'react'
import HowToImproveConversionRate from '@layouts/ConversionOptimizationGuide/HowToImproveConversionRate'
import { runQueries } from '@lib'

const HowToImproveConversionRatePage = (props) => (
  <HowToImproveConversionRate {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/how-to-improve-conversion-rate'

  const options = { underlaidMenu: true }
  const { global } = await runQueries([])

  return {
    props: {
      options,
      slug,
      preview,
      global,
    },
  }
}

export default HowToImproveConversionRatePage
