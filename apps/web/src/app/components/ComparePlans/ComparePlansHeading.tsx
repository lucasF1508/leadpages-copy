import React from 'react'
import { pricingStore } from '@/stores/pricingStore'
import { LinkType } from '@/types'
import Price, { PriceType } from '@/components/Price'
import Heading from '@/components/Heading'
import ComparePlansHeadingLink from './ComparePlansHeadingLink'
import PricingCardCompareAt from '@/components/PricingCards/PricingCardCompareAt'
 
interface ComparePlansHeadingProps {
  title: string
  prices?: (PriceType & {billingOverride?: string})[]
  links?: LinkType[]
}

const ComparePlansHeading = ({ title, prices = [], links }: ComparePlansHeadingProps) => {
  const currentSelection = pricingStore((state) => state.currentSelection)
  const {billingOverride, override} = prices.find((price) => price.period === currentSelection) || {}

  return (
    <div className="mb-5 flex flex-col gap-y-1.5">
      <Heading as='h4' className='type-h4' content={title} />
      <div>
        <Price
          prices={prices}
          period='/mo'
          classNames={{
            root: 'flex items-center',
            price: 'type-stat-sm !font-light mr-[0.125rem]', 
            symbol: 'type-stat-sm !font-light', 
            period: 'type-caption-xs', 
            currency: 'type-caption-xs mr-[0.125rem]'
          }}
        />
      </div>
      <div>
        <PricingCardCompareAt prices={prices} />
      </div>
      <ComparePlansHeadingLink prices={prices} />
    </div>
  )
}
 
export default ComparePlansHeading
