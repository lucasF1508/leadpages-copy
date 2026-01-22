'use client'

import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import {motion as m} from 'motion/react'
import { useShallow } from 'zustand/react/shallow'
import Label from '@/components/Label'
import { pricingStore } from '@/stores/pricingStore'
import { Plan } from './PricingCards'

const Highlighter = () => (
  <m.div
    className={
      clsx(
        'p-1.5',
        'bg-button-surface-solid-disabled/70 absolute inset-0 z-under'
      )
    }
    id="underline"
    layout
    layoutId="underline"
    style={{ borderRadius: '99999px' }}
  />
)
 
const PricingCardsToggle = ({plans}: {plans: Plan[]}) => {
  const [angle, setAngle] = useState(0);
  const [currentSelection, setCurrentSelection] = pricingStore(useShallow((state) => [state.currentSelection, state.setCurrentSelection]))

  const { prices = [] } = plans?.find(plan => plan?.isFeatured) || {};
  const monthlyPrice = prices.find(p => p.period === 'monthly')?.price ?? 0;
  const yearlyMonthlyPrice = prices.find(p => p.period === 'yearly')?.price ?? 0;
  // For yearly plans, price is monthlyCost, so multiply by 12 to get total annual price
  const yearlyTotalPrice = yearlyMonthlyPrice * 12;

  // Calculate savings percentage: (monthly * 12 - yearlyTotal) / (monthly * 12) * 100
  const compareAtPercentage = yearlyTotalPrice && monthlyPrice 
    ? Math.round(((Number(monthlyPrice) * 12 - Number(yearlyTotalPrice)) / (Number(monthlyPrice) * 12)) * 100)
    : null

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (currentSelection !== 'yearly') {
      interval = setInterval(() => {
        setAngle((prev) => (prev + 1) % 361);
      }, 20);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSelection]);
  
  return (
    <div className={clsx('flex items-center justify-center p-0.5 nav-break:p-1 bg-surface-neutral-medium/30 rounded-pill type-body-xs')}>
      <div className={
        clsx(
          'p-1 nav-break:p-1.5 group',
          'relative cursor-pointer'
        )
      }
        onClick={() => setCurrentSelection('monthly')}
      >
        <span className={
          clsx(
            'px-0.5 opacity-50 group-hover:opacity-100 group-hover:text-body-neutral-body transition-all duration-200 ease-linear',
            'monthly' === currentSelection && '!opacity-100'
          )
        }>
            Monthly
        </span>
        {'monthly' === currentSelection ? (
          <Highlighter />
        ) : null}
      </div>
      <div className={
        clsx(
          'gap-1.5 p-0.5 nav-break:p-1.5 group',
          'flex items-center justify-center rounded-pill relative cursor-pointer'
        )}
        onClick={() => setCurrentSelection('yearly')}
      >
        <div>
          <span className={
            clsx(
              'pl-1 opacity-50 group-hover:opacity-100 group-hover:text-body-neutral-body transition-all duration-200 ease-linear',
              'yearly' === currentSelection && '!opacity-100'
            )
          }>Yearly</span>
          {'yearly' === currentSelection ? (
            <Highlighter />
          ) : null}
        </div>
        <div 
          className={clsx(
            'px-1 py-0.5 nav-break:px-1.5 nav-break:py-0.5 nav-break:-my-0.5',
            'type-caption-xxs flex items-center justify-between rounded-pill relative',
            'yearly' === currentSelection ? 'bg-transparent' : 'bg-surface-neutral-medium'
          )}
        >
          <div 
            className={clsx(
              '-inset-[0.0625rem]',
              'absolute rounded-pill z-under transition-all duration-200 ease-linear')
            }
            style={{
              background: `conic-gradient(from ${angle}deg, rgb(var(--colors-surface-brand-fuchsia-strong)) 0deg, rgb(var(${'yearly' === currentSelection ? '--colors-brand-violet' : '--colors-white'})) 175deg, rgb(var(${'yearly' === currentSelection ? '--colors-brand-violet' : '--colors-white'})) 180deg,rgb(var(--colors-surface-brand-fuchsia-strong)) 360deg)`,
            }}
          />
          {compareAtPercentage &&          
            <Label
              content={`Save ${compareAtPercentage}%`}
            />
          } 
        </div>
      </div>
    </div>
  )
}
 
export default PricingCardsToggle