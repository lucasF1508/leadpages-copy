import React from 'react'
import ComparePlans from '@layouts/ComparePlans'
import { getPlanData, getGroupedPlanData } from '@utils/plans'

const ComparePlansPage = (props) => <ComparePlans {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/compare-plans'

  const options = {
    hideBar: true,
    isStartPageHeader: true,
    slimFooter: true,
    scrollTarget: 'destination',
    noLogin: true,
  }

  // Plan
  const rawPlanData = await getPlanData()
  const planData = getGroupedPlanData(rawPlanData)

  return {
    props: {
      options,
      slug,
      preview,
      planData,
    },
  }
}

export default ComparePlansPage
