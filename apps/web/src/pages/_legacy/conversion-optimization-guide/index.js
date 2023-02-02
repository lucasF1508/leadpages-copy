import React from 'react'
import ConversionOptimizationGuide from '@layouts/ConversionOptimizationGuide'
import { runQueries } from '@lib'

const ConversionOptimizationGuidePage = (props) => (
  <ConversionOptimizationGuide {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide'

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

export default ConversionOptimizationGuidePage
