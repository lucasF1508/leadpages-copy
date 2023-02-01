import React from 'react'
import HowToCalculateCro from '@layouts/ConversionOptimizationGuide/HowToCalculateCro'
import { runQueries } from '@lib'

const HowToCalculateCroPage = (props) => <HowToCalculateCro {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/conversion-optimization-guide/how-to-calculate-cro'

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

export default HowToCalculateCroPage
