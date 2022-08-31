import React from 'react'
import WhatIsABTesting from '@layouts/ConversionOptimizationGuide/WhatIsABTesting'

const WhatIsABTestingPage = (props) => <WhatIsABTesting {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-ab-testing'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default WhatIsABTestingPage
