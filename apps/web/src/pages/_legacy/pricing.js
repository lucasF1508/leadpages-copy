import React from 'react'
import Pricing from '@layouts/Pricing'
import { getPlanData, getGroupedPlanData } from '@utils/plans'

const PricingPage = (props) => <Pricing {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/pricing'

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
    },
  }
}

export default PricingPage
