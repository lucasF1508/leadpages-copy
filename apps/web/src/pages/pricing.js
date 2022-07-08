import React from 'react'
import Pricing from '@layouts/Pricing'
import { getGroupedPlanData } from '../legacy/utils/plans'

const PricingPage = (props) => <Pricing {...props} />

const getPlanData = async (variant) => {
  const result = await fetch(
    `${process.env.LEADPAGES_API_HOST}/billing/plans${
      variant ? '?variants=1' : ''
    }`,
    {
      headers: { 'Content-Type': 'application/json' },
      // agent: httpsAgent, // Local requests are rejected without this.
    }
  )
  const resultData = await result.json()
  return resultData._items
}

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/'

  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)
  const data = { planData }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default PricingPage
