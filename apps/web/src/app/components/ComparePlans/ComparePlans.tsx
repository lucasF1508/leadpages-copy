'use client'

import * as Accordion from '@radix-ui/react-accordion'
import React, { useMemo, useState } from 'react'
import Text from '@/components/Text'
import { ContentType, LinkType } from '@/types'
import CaratIcon from '@/components/Icons/CaratIcon'
import ComparePlansRow from './ComparePlansRow'
import ComparePlansHeading from './ComparePlansHeading'
import { AnimatePresence, motion as m } from 'motion/react'
import clsx from 'clsx'
import { PriceType } from '../Price'
import PlusIcon from '../Icons/PlusIcon'
import ComparePlansMobile from './ComparePlansMobile'
import { useTrialPlans } from '@/hooks/useTrialPlans'
import { mapTrialPlansToComparePlansColumns } from '@/lib/utils/mapTrialPlansToComparePlansColumns'

interface ComparePlansProps {
  content: ContentType
  defaultState: 'open' | 'collapsed'
  columns?: {
    title: string
    _key: string
    links?: LinkType[]
    prices?: PriceType[]
  }[]
  sections: {
    title: string
    _key: string
    features: {
      _key: string
      title: string
      description?: string
      columns: {
        _key: string
        text: string
        textSecondary?: string
        isAvailable?: boolean
        code?: string
      }[]
    }[]
  }[]
}

export const comparePlansAnimationVariants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: 'auto',
    transition: {
      opacity: { duration: 0.3, delay: 0.2 },
      height: { duration: 0.2 },
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: { duration: 0.2 },
      height: { duration: 0.1, delay: 0.2 },
      ease: 'easeInOut',
    },
  },
}

const ComparePlans = ({
  columns = [],
  sections,
  content,
  defaultState,
}: ComparePlansProps) => {
  const [visible, setVisible] = useState(defaultState === 'open')
  
  // Fetch trial plans from API
  const { data: trialPlansData, loading, error } = useTrialPlans()

  // Merge API data with CMS columns, with fallback to CMS columns
  const mergedColumns = useMemo(() => {
    // If API data is available and we have trial plans, merge them
    if (trialPlansData?.items && trialPlansData.items.length > 0) {
      try {
        const mapped = mapTrialPlansToComparePlansColumns(trialPlansData.items, columns)
        return mapped
      } catch (err) {
        // Fallback to CMS columns if mapping fails
        console.error('[ComparePlans] Error mapping trial plans:', err)
        return columns
      }
    }
    
    // Fallback to CMS columns if API data is not available or still loading
    return columns
  }, [trialPlansData, columns])

  return (
    <>
      <div className="hidden lg:block">
        <div className="mb-7 flex items-center justify-center">
          <button
            type="button"
            className="link-button-secondary"
            onClick={() => setVisible(!visible)}
          >
            {!visible ? 'View' : 'Hide'}
            {` plan details`}
            <span
              className={clsx(
                visible && 'rotate-180',
                'ml-1 transition-transform duration-200'
              )}
            >
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
              <Text content={content} />
              <div>
                <div
                  className="min-w-full grid gap-x-4 relative"
                  style={{
                    gridTemplateColumns: `repeat(${mergedColumns.length + 1}, minmax(12.5rem, 1fr))`,
                  }}
                >
                  <div
                    className={clsx(
                      'min-w-full grid gap-x-4 col-span-full sticky top-0 z-header-background pt-7',
                      'bg-gradient-to-b from-surface via-surface via-90% to-surface/0'
                    )}
                    style={{
                      gridTemplateColumns: `repeat(${mergedColumns.length + 1}, minmax(12.5rem, 1fr))`,
                    }}
                  >
                    <div className="w-full h-full" />
                    {mergedColumns.map(({ title, prices, links, _key }, i) => (
                      <ComparePlansHeading
                        key={_key}
                        title={title}
                        prices={prices}
                        links={links}
                      />
                    ))}
                  </div>
                  <Accordion.Root
                    type="multiple"
                    className="col-span-full"
                    defaultValue={sections.map(({ _key }) => _key)}
                  >
                    {sections.map(({ title, features, _key: sectionKey }) => (
                      <Accordion.Item
                        value={sectionKey}
                        key={sectionKey}
                        className="w-full mb-1.5 group"
                      >
                        <Accordion.Trigger asChild>
                          <button
                            className={clsx(
                              'w-full flex items-center justify-between py-2 px-2 rounded-md cursor-pointer transition-all duration-200 ease-linear',
                              'data-[state=closed]:text-body-neutral/50 data-[state=closed]:hover:text-body-neutral data-[state=closed]:hover:bg-surface-neutral-medium/50 data-[state=closed]:bg-surface-neutral-medium/30',
                              'data-[state=open]:bg-surface-neutral-medium/30 data-[state=open]:hover:bg-surface-neutral-medium/50'
                            )}
                          >
                            <div className="type-h5 min-h-3 flex items-center">
                              {title}
                            </div>
                            <div className="transition-transform duration-200 group-data-[state=open]:-rotate-45">
                              <PlusIcon />
                            </div>
                          </button>
                        </Accordion.Trigger>

                        <Accordion.Content
                          asChild
                          className="data-[state=closed]:animate-[close_200ms_ease] data-[state=open]:animate-[open_200ms_ease] overflow-hidden"
                        >
                          <div className="grid col-span-full">
                            {features.map(
                              (
                                { _key: rowKey, title, description, columns },
                                i
                              ) => (
                                <ComparePlansRow
                                  key={rowKey}
                                  title={title}
                                  description={description}
                                  isLast={i === features?.length - 1}
                                  columns={columns}
                                />
                              )
                            )}
                          </div>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <ComparePlansMobile
        columns={mergedColumns}
        sections={sections}
        content={content}
        defaultState={defaultState}
      />
    </>
  )
}

export default ComparePlans
