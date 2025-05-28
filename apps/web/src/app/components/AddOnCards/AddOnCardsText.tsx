'use client'

import type { PriceType } from '@/components/Price'
import type { ClassValue } from 'clsx';
import React from 'react'
import clsx from 'clsx'
import { pricingStore } from '@/stores/pricingStore'
import { AnimatedPriceSpan } from '@/components/Price';

interface Price extends PriceType {
  _key: string
  priceIncludes?: string
}

type PriceProps = {
  className?: ClassValue
  prices: PriceType[]
}

export const AddOnCardsText = ({
  className = '',
  prices,
}: PriceProps) => {
  const currentSelection = pricingStore((state) => state.currentSelection)
  const price = prices.find((price) => price.period === currentSelection) || {} as Price
  const { _key, priceIncludes } = price as Price

  if (!_key) return null

  return (  
    <AnimatedPriceSpan
      className={clsx(className)}  
      uniqueKey={_key}  
    >  
      {priceIncludes}
    </AnimatedPriceSpan>  
  );  
}

export default AddOnCardsText