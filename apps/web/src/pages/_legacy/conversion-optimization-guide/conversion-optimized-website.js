import React from 'react'
import ConversionOptimizedWebsite from '@layouts/ConversionOptimizationGuide/ConversionOptimizedWebsite'
import { runQueries } from '@lib'

const ConversionOptimizedWebsitePage = (props) => (
  <ConversionOptimizedWebsite {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/conversion-optimized-website'

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

export default ConversionOptimizedWebsitePage
