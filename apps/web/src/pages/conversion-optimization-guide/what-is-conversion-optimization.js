import React from 'react'
import WhatIsConversionOptimization from '@layouts/ConversionOptimizationGuide/WhatIsConversionOptimization'

const WhatIsConversionOptimizationPage = (props) => (
  <WhatIsConversionOptimization {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-conversion-optimization'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default WhatIsConversionOptimizationPage
