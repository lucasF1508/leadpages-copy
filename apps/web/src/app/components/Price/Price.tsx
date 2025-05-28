'use client'

import React from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion as m } from 'framer-motion'
import { isEmpty } from 'lodash'
import { pricingStore } from '@/stores/pricingStore'
import { LinkType } from '@/types'

export interface PriceType {
  currency: string
  override?: boolean
  period: string
  price: number
  priceOverride?: string
  symbol: string
  links?: LinkType[]
}

interface PriceProps {
  className?: string
  classNames?: {
    currency?: string
    period?: string
    price?: string
    root?: string
    symbol?: string
  }
  display?: 'currency' | 'full' | 'period' | 'price' | 'symbol'
  period?: string
  prices: PriceType[]
}

const fadeInOutVariant = {
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
  initial: { opacity: 0, y: -5 },
}

export const AnimatedPriceSpan = ({
  children,
  className,
  uniqueKey,
}: {
  children: React.ReactNode
  className?: string
  uniqueKey: number | string
}) => (
  <AnimatePresence mode="wait">
    <m.span
      animate="animate"
      className={clsx('inline-block', className)}
      exit="exit"
      initial="initial"
      key={uniqueKey}
      variants={fadeInOutVariant}
    >
      {children}
    </m.span>
  </AnimatePresence>
)

const priceKeys: Array<'currency' | 'period' | 'price' | 'symbol'> = [
  'symbol',
  'price',
  'currency',
  'period',
]

const Price = ({
  className = '',
  classNames,
  display = 'full',
  period,
  prices,
}: PriceProps) => {
  const currentSelection = pricingStore((state) => state.currentSelection)
  const price = prices.find((price) => price.period === currentSelection)

  if (!price) return null

  const keyPrefix = priceKeys.map(key => price[key]).join('-')  

  if (display !== 'full') {  
    return (  
      <AnimatedPriceSpan  
        className={clsx(className, classNames?.root, classNames?.[display])}  
        uniqueKey={`${keyPrefix}-${display}`}  
      >  
        {price[display]}  
      </AnimatedPriceSpan>  
    );  
  }

  if (!isEmpty(price.priceOverride) && price.override) {
    return (
      <div className={clsx(className, classNames?.root)}>
        <AnimatedPriceSpan
          className={clsx(classNames?.price)}
          uniqueKey={`${keyPrefix}-priceOverride`}
        >
          {price.priceOverride}
        </AnimatedPriceSpan>
      </div>
    )
  }

  return (
    <div className={clsx(className, classNames?.root)}>
      <AnimatedPriceSpan className={classNames?.symbol} uniqueKey={`${keyPrefix}-symbol`}>
        {price?.symbol}
      </AnimatedPriceSpan>
      <AnimatedPriceSpan className={classNames?.price} uniqueKey={`${keyPrefix}-price`}>
        {price?.price}
      </AnimatedPriceSpan>
      <AnimatedPriceSpan className={classNames?.currency} uniqueKey={`${keyPrefix}-currency`}>
        {price?.currency}
      </AnimatedPriceSpan>
      <AnimatedPriceSpan className={classNames?.period} uniqueKey={`${keyPrefix}-period`}>
        {period || `/${price?.period}`}
      </AnimatedPriceSpan>
    </div>
  )
}

export default Price