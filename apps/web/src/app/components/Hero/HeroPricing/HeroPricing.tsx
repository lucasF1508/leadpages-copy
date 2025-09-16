import type { Plan } from '@/components/PricingCards/PricingCards'
import React from 'react'
import HeroGradient from '@/components/Hero/HeroGradient/HeroGradientPricing'
import PricingCards from '@/components/PricingCards'
import Text from '@/components/Text'
import CouponBanner from '../../CouponBanner'

export interface HeroPricingProps {
  _type: 'heroPricing'
  content: string
  plans: Plan[]
}

const HeroPricing = ({ content, plans }: HeroPricingProps) => (
  <div className="relative overflow-clip box-mt box-[pb*2] box-[mb*-2]">
    <HeroGradient className="absolute top-0 left-0 -translate-x-[45%] z-under" />
    <div className="flex flex-col gap-7">
      <div className="max-w-base mx-auto box-px">
        {content && <Text as="div" content={content} />}
        <CouponBanner className="mt-4" />
      </div>
      <PricingCards plans={plans} />
    </div>
  </div>
)

export default HeroPricing
