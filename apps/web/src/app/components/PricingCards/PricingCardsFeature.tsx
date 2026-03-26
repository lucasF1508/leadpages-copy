import type { Feature } from './PricingCards'
import React, { useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion as m } from 'motion/react'
import CheckCircleIcon from '@/components/Icons/CheckCircleIcon'
import XCircleIcon from '@/components/Icons/XCircleIcon'
 
const PricingCardsFeature = ({description, icon, tooltipText, visibleOnDesktop}: Feature) => {
  const [showToolTip, setShowTooltip] = useState(false)

  return (              
    <li className={
      clsx(
        "gap-1.5 flex items-center relative group/feature cursor-pointer",
        icon !== 'checkmark' && 'text-body-neutral-disabled',
        visibleOnDesktop ? 'nav-break:flex' : 'nav-break:hidden'
      )} 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className={
        clsx(
          'transition-all duration-200 ease-linear',
          icon === 'checkmark' && 'group-hover/feature:text-button-surface-solid'
        )}
      >
        {icon === 'checkmark' ? <CheckCircleIcon /> : <XCircleIcon />}
      </span>
      <span className={
        clsx(
          'type-body-sm transition-all duration-200 ease-linear',
          icon !== 'checkmark' && 'line-through',
          icon === 'checkmark' && 'group-hover/feature:text-neutral-light',
        )
      }>
        {description}
      </span>
      <AnimatePresence>
        {tooltipText && showToolTip &&           
          <m.div 
          animate={{ opacity: 1 }}
          className={
            clsx(
              'left-0 top-full absolute z-above-content rounded-md mt-1.5',
              'bg-surface-neutral-light shadow-md'
            )
          }
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}>
            <div className='text-surface-neutral-medium type-caption-xxs px-2 py-1.5'>
              {tooltipText}
            </div>
          </m.div>
        }
      </AnimatePresence>
    </li>
  )
}
 
export default PricingCardsFeature