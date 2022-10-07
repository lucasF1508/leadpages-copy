import React from 'react'
import HowToCalculateCro from '@layouts/ConversionOptimizationGuide/HowToCalculateCro'

const HowToCalculateCroPage = (props) => <HowToCalculateCro {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/how-to-calculate-cro'

  const options = { underlaidMenu: true }

  return {
    props: {
      options,
      slug,
      preview,
    },
  }
}

export default HowToCalculateCroPage
