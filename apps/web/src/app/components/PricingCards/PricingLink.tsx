import React from 'react'
import { pricingStore } from '@/stores/pricingStore'
import Link, { hasLink } from '../Link'
import { PriceType } from '../Price'
 
interface PricingCardLinkProps {
  isFeatured: boolean
  prices: PriceType[]
}

const PricingCardLink = ({ isFeatured, prices }: PricingCardLinkProps) => {
  const currentSelection = pricingStore((state) => state.currentSelection)
  const price = prices.find((price) => price.period === currentSelection)
  const { links } = price || {}
  const [link] = links || []

  if (!hasLink(link)) return null

  return (
    <Link
      {...link}
      className='w-full'
      linkStyle={isFeatured ? 'button-solid' : 'button-secondary'}
    />
  )
}
 
export default PricingCardLink