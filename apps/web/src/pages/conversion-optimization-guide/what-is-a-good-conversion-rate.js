import React from 'react'
import WhatIsAGoodConversionRate from '@layouts/ConversionOptimizationGuide/WhatIsAGoodConversionRate'

const WhatIsAGoodConversionRatePage = (props) => (
  <WhatIsAGoodConversionRate {...props} />
)

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/what-is-a-good-conversion-rate'

  const data = { underlaidMenu: true }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default WhatIsAGoodConversionRatePage
