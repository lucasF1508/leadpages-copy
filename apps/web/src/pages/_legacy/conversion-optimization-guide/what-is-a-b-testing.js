import React from 'react'
import WhatIsABTesting from '@layouts/ConversionOptimizationGuide/WhatIsABTesting'
import { runQueries } from '@lib'

const WhatIsABTestingPage = (props) => <WhatIsABTesting {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-ab-testing'

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

export default WhatIsABTestingPage
