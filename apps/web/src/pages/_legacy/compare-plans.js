import React from 'react'
import ComparePlans from '@layouts/ComparePlans'
import { getPlanData, getGroupedPlanData } from '@utils/plans'
import { runQueries } from '@lib/queries'

const ComparePlansPage = (props) => <ComparePlans {...props} />

export async function getStaticProps(context) {
  const { preview = false } = context
  const slug = '/compare-plans'

  const { global } = await runQueries([])
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
      global,
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            seoTitle:
              'Leadpages Pricing: Monthly and Annual Subscription Plans',
            seoDescription: `Leadpages offers the best pricing plans for your growing small business. Start with a risk-free 14-day free trial and unlock more features as you grow.`,
          },
        },
      ],
    },
  }
}

export default ComparePlansPage
