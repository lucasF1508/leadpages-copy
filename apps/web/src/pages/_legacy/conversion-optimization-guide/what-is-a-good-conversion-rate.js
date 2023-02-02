import React from 'react'
import WhatIsAGoodConversionRate from '@layouts/ConversionOptimizationGuide/WhatIsAGoodConversionRate'
import { runQueries } from '@lib'

const WhatIsAGoodConversionRatePage = (props) => (
  <WhatIsAGoodConversionRate {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-a-good-conversion-rate'

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

export default WhatIsAGoodConversionRatePage
