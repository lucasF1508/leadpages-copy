import React, { useEffect } from 'react'
import { pricingStore } from '@/stores/pricingStore'
import { Plan } from './PricingCards'
import { AnimatedPriceSpan } from '@/components/Price'
import { isEmpty } from 'lodash'
 
interface PricingCardCompareAtProps {
  prices: Plan['prices']
}

const PricingCardCompareAt = ({ prices }: PricingCardCompareAtProps) => {
  const currentSelection = pricingStore((state) => state.currentSelection)
  const {compareAtOverride, override} = prices.find((price) => price.period === currentSelection) || {}
  const {symbol, price} = prices.find((price) => price.period === 'monthly') || {}
  const {compareAtString} = prices.find((price) => price.period === 'yearly') || {}

  if (!isEmpty(compareAtOverride) && override) {
    return (
      <AnimatedPriceSpan uniqueKey={`${compareAtOverride}_${currentSelection}_override`} className='flex items-center type-caption-xxs gap-1'>
        <div className='bg-gradient-purple text-transparent bg-clip-text italic'>    
          {compareAtOverride}
        </div>
      </AnimatedPriceSpan>
    )
  }

  return (
    <AnimatedPriceSpan uniqueKey={`${compareAtString}_${currentSelection}`} className='flex items-center type-caption-xxs gap-1'>
      <div>
        {currentSelection !== 'monthly' && price && <span className='line-through mr-1'>{symbol}{price}</span>}
        <span>billed {currentSelection === 'yearly' ? 'annually' : 'monthly'}</span>
      </div>
      {currentSelection === 'yearly' && compareAtString && <div className='bg-gradient-purple text-transparent bg-clip-text italic'>{compareAtString}</div>}
    </AnimatedPriceSpan>
  )
}
 
export default PricingCardCompareAt