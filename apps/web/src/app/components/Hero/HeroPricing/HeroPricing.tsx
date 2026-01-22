'use client'

import type { Plan } from '@/components/PricingCards/PricingCards'
import React, { useMemo } from 'react'
import HeroGradient from '@/components/Hero/HeroGradient/HeroGradientPricing'
import PricingCards from '@/components/PricingCards'
import Text from '@/components/Text'
import CouponBanner from '../../CouponBanner'
import { useTrialPlans } from '@/hooks/useTrialPlans'
import { mapTrialPlansToPricingCards } from '@/lib/utils/mapTrialPlansToPricingCards'

export interface HeroPricingProps {
  _type: 'heroPricing'
  content: string
  plans: Plan[]
}

const HeroPricing = ({ content, plans }: HeroPricingProps) => {
  // Fetch trial plans from API
  const { data: trialPlansData, loading, error } = useTrialPlans()

  // Merge API data with CMS plans, with fallback to CMS plans
  const mergedPlans = useMemo(() => {
    // If API data is available and we have trial plans, merge them
    if (trialPlansData?.items && trialPlansData.items.length > 0) {
      try {
        const mapped = mapTrialPlansToPricingCards(trialPlansData.items, plans)
        return mapped
      } catch (err) {
        // Fallback to CMS plans if mapping fails
        return plans
      }
    }
    
    // Fallback to CMS plans if API data is not available or still loading
    return plans
  }, [trialPlansData, plans])

  return (
  <div className="relative overflow-clip box-mt box-[pb*2] box-[mb*-2]">
    <HeroGradient className="absolute top-0 left-0 -translate-x-[45%] z-under" />
    <div className="flex flex-col gap-7">
      <div className="max-w-base mx-auto box-px">
        {content && <Text as="div" content={content} />}
        <CouponBanner className="mt-4" />
      </div>
        <PricingCards plans={mergedPlans} />
    </div>
  </div>
)
}

export default HeroPricing
