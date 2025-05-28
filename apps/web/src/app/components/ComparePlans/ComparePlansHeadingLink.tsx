import type { PriceType } from '@/components/Price'
import React from 'react'
import Link, { hasLink } from '@/components/Link'
import { pricingStore } from '@/stores/pricingStore'
 
interface ComparePlansHeadingLinkProps {
  prices: PriceType[]
}

const ComparePlansHeadingLink = ({ prices }: ComparePlansHeadingLinkProps) => {
  const currentSelection = pricingStore((state) => state.currentSelection)
  const price = prices.find((price) => price.period === currentSelection)
  const { links } = price || {}
  const [link] = links || []

  if (!hasLink(link)) return null

  return (
    <Link
      {...link}
      linkSize='small'
    />
  )
}
 
export default ComparePlansHeadingLink