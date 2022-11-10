import React from 'react'
import WhatIsABTesting from '@layouts/ConversionOptimizationGuide/WhatIsABTesting'

const WhatIsABTestingPage = (props) => <WhatIsABTesting {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-ab-testing'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default WhatIsABTestingPage
