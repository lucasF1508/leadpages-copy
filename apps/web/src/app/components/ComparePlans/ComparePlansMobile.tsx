// ComparePlansMobile.tsx
'use client'

import React, { useState, useMemo } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion as m } from 'motion/react'
import Text from '@/components/Text'
import CaratIcon from '@/components/Icons/CaratIcon'
import CheckIcon from '@/components/Icons/CheckIcon'
import XIcon from '@/components/Icons/XIcon'
import ComparePlansHeading from './ComparePlansHeading'
import { PriceType } from '../Price'
import { comparePlansAnimationVariants } from './ComparePlans'
import { useBillingPricings } from '@/hooks/useBillingPricings'
import { formatCurrency } from '@/lib/utils/formatPrice'

type Column = {
  _key: string
  title: string
  links?: any[]
  prices?: PriceType[]
}

type FeatureCell = {
  _key: string
  text: string
  textSecondary?: string
  isAvailable?: boolean
  code?: string
}

type Section = {
  _key: string
  title: string
  features: {
    _key: string
    title: string
    description?: any
    columns: FeatureCell[]
  }[]
}

interface Props {
  content: any
  columns: Column[]
  sections: Section[]
  defaultState: 'open' | 'collapsed'
}

const ComparePlansMobile: React.FC<Props> = ({ columns, sections, content, defaultState }) => {
  const [visible, setVisible] = useState(defaultState === 'open')
  const { data: billingPricingsData } = useBillingPricings()
  const billingMap = useMemo(() => {
    const map = new Map<string, { currency: string; monthlyCost: string }>()
    billingPricingsData?.items?.forEach((item) => {
      map.set(item.code, { currency: item.currency, monthlyCost: item.monthlyCost })
    })
    return map
  }, [billingPricingsData?.items])

  const getCellDisplayText = (cell: FeatureCell | undefined): string => {
    if (!cell) return ''
    if (typeof cell.code === 'string' && billingMap.has(cell.code)) {
      const api = billingMap.get(cell.code)!
      const num = parseFloat(api.monthlyCost)
      return `${formatCurrency(api.currency, num)} ${api.currency}/mo`
    }
    return cell.text ?? ''
  }

  return (
    <div className="block lg:hidden">
      {/* Toggle */}
      <div className="mb-4 flex items-center justify-center">
        <button type="button" className="link-button-secondary" onClick={() => setVisible(v => !v)}>
          {visible ? 'Hide' : 'View'} plan details
          <span className={clsx(visible && 'rotate-180', 'ml-1 transition-transform duration-200')}>
            <CaratIcon />
          </span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {visible && (
          <m.div
            variants={comparePlansAnimationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Intro copy (opcional) */}
            {content && <Text className="mb-4" content={content} />}

            {/* Un card por plan */}
            <div className="space-y-6">
              {columns.map((plan, planIndex) => (
                <article
                  key={plan._key}
                  className="rounded-2xl p-4 border border-surface-neutral-medium"
                >
                  {/* Encabezado del plan (título, precio, CTAs) */}
                  <div className="mb-3">
                    <ComparePlansHeading
                      title={plan.title}
                      prices={plan.prices}
                      links={plan.links}
                    />
                  </div>

                  {/* Secciones + features para ESTE plan */}
                  <div className="space-y-3">
                    {sections.map((section) => (
                      <section key={section._key} className="rounded-xl bg-surface/60 p-3">
                        <h4 className="type-caption-xs mb-2 text-body-neutral/80">{section.title}</h4>
                        <ul className="space-y-2">
                          {section.features.map((feat) => {
                            const cell = feat.columns?.[planIndex]
                            const available = !!cell?.isAvailable
                            const displayText = getCellDisplayText(cell)
                            return (
                              <li
                                key={feat._key}
                                className="flex items-start gap-2 border-b border-surface-neutral-medium/50 last:border-none pb-2 last:pb-0"
                              >
                                <div className="flex-1 min-w-0">
                                  <div className="type-body-sm">{feat.title}</div>
                                  {(displayText || cell?.textSecondary) && (
                                    <div className="type-caption-xxs text-body-neutral-disabled">
                                      {displayText}
                                      {cell?.textSecondary && (
                                        <span className="ml-1">{cell.textSecondary}</span>
                                      )}
                                    </div>
                                  )}
                                </div>
                                <div className={clsx(available ? 'text-body' : 'text-body-neutral-disabled', 'pt-0.5')}>
                                  {available ? <CheckIcon /> : <XIcon />}
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </section>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ComparePlansMobile
