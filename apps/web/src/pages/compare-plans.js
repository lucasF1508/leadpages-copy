import React from 'react'
import ComparePlans from '@layouts/ComparePlans'
import { getGroupedPlanData } from '../legacy/utils/plans'

const ComparePlansPage = (props) => <ComparePlans {...props} />

const getPlanData = async (variant) => {
  const result = await fetch(
    `${process.env.LEADPAGES_API_HOST}/billing/plans${
      variant ? '?variants=1' : ''
    }`,
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  const resultData = await result.json()
  return resultData._items
}

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/compare-plans'

  const layoutProps = {
    hideBar: true,
    isStartPageHeader: true,
    slimFooter: true,
    scrollTarget: 'destination',
    noLogin: true,
  }

  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)
  const data = {
    planData,
    ...layoutProps,
  }

  return {
    props: {
      data,
      slug,
      preview,
    },
  }
}

export default ComparePlansPage
