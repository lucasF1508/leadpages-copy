import React from 'react'
import Pricing from '@layouts/Pricing'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries } from '@lib'

const PricingPage = (props) => <Pricing {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/pricing'

  const { global } = await runQueries([])
  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)

  const options = {
    hideSignUpButton: true,
    hideBar: true,
  }

  return {
    props: {
      options,
      slug,
      preview,
      planData,
      global,
    },
  }
}

export default PricingPage
