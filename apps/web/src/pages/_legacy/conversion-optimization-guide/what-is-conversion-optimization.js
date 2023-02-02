import React from 'react'
import WhatIsConversionOptimization from '@layouts/ConversionOptimizationGuide/WhatIsConversionOptimization'
import { runQueries } from '@lib'

const WhatIsConversionOptimizationPage = (props) => (
  <WhatIsConversionOptimization {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-conversion-optimization'

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

export default WhatIsConversionOptimizationPage
