import React from 'react'
import Pricing from '@components/Pricing'
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
      data: [
        {
          seo: {
            hasCustomSeoTitle: true,
            hasImageUrl: true,
            seoTitle: `Leadpages Pricing: Generate More Leads and Sales`,
            seoDescription: `Leadpages offers the best pricing plans for you to grow your business. Get started today with our risk-free 14-day free trial and add more at any time.`,
            seoImage: 'https://static.leadpages.com/images/og/og-pricing.jpg',
          },
        },
      ],
    },
  }
}

export default PricingPage
