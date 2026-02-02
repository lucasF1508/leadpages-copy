'use client'

import React, { useEffect, useRef, useState } from 'react'
import {motion as m} from 'motion/react'
import { LinkType } from '@/types'
import PricingCardsToggle from './PricingCardsToggle'
import useCarousel from '@/hooks/useCarousel'
import PricingCard from './PricingCard'
import useStickyHeader from '@/hooks/useStickyHeader'
import clsx from 'clsx'

export interface Feature { 
  description: string,
  icon: 'checkmark' | 'x'
  visibleOnDesktop: boolean
  tooltipText?: string
}

export interface Plan {
  _key?: string
  description: string
  isFeatured: boolean
  features: Feature[]
  featuresText: string
  links: LinkType[]
  prices: {
    price: number
    priceOverride?: string
    symbol: string
    period: string
    currency: string
    compareAtString?: string
    compareAtOverride?: string
    override?: boolean
    links?: LinkType[]
  }[]
  title: string
  pillContent?: string
}

export interface PricingCardsProps {
  plans: Plan[]
}

const PricingCards = ({ plans }: PricingCardsProps) => {
  const inViewRef = useRef<HTMLDivElement | null>(null);
  const [isStuck, setIsStuck] = useState(false);

  const {ref, api, indices} = useCarousel({
    align: 'center',
    startIndex: 1,
    active: true,
    breakpoints: {
      '(min-width: 1000px)': {
        active: false,
      }
    }
  })

  const { showHeader } = useStickyHeader({
    offsetTop: 10,
  })

  const handleChange = (index: number) => {
    api?.scrollTo(index)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sticky = inViewRef.current;
      if (!sticky) return;

      const { top } = sticky.getBoundingClientRect();
      setIsStuck(top <= 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='box-mx'>
      <div 
        className={clsx(
          'sticky z-header-background box-[mx*-2] py-1.5 h-[calc(var(--header-height)+100%)] duration-200 ease-linear transition-all',
          showHeader ? 'top-[calc(var(--header-height)+1.25rem)]' : 'top-0',
        )}>
        <div
          ref={inViewRef} 
          className={clsx(
            'border-b border-transparent absolute bottom-0 left-0 right-0 h-[calc(var(--header-height)+1.25rem+100%)] duration-200 ease-linear transition-all z-under',
            isStuck && 'border-surface-neutral-medium/50 bg-surface/90 backdrop-blur-md'      
          )}
        />
        <div className='flex items-center justify-center'>
          <PricingCardsToggle plans={plans} />
        </div>
        <div className='mt-2 nav-break:hidden'>
          <div className='flex items-center justify-center gap-4 -mb-[calc(0.625rem+1px)]'>
            {
              !!plans?.length && plans
                .filter((plan) => plan.title && (plan.description || plan.features?.length || plan.prices?.length))
                .map(({_key, title}: Plan, i) => 
                  <div 
                    key={_key}
                    className={clsx(
                      'type-h6 cursor-pointer relative',                  
                    )} 
                    onClick={() => handleChange(i)}
                  >
                    {title}
                    {i === indices?.active && (
                      <m.div
                        className={
                          clsx('bg-surface-brand-lime-primary absolute -bottom-[2px] left-0 right-0 h-[3px] z-under')
                        }
                        id="plan-highlight"
                        layout
                        layoutId="plan-highlight"
                      />
                    )}
                  </div>
                )
            }
          </div>
        </div>
      </div>
      <div ref={ref} className='max-w-base mx-auto'>
        <div className='flex nav-break:justify-center gap-4 mt-3'>
          {!!plans?.length && plans
            .filter((plan) => plan.title && (plan.description || plan.features?.length || plan.prices?.length))
            .map(({_key, ...card}: Plan) => 
              <PricingCard card={card} key={_key} />
            )}
        </div>
      </div>
    </div>
  )
}

export default PricingCards