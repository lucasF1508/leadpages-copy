'use client'

import type { AddOnCardItem } from '@/components/PlatformNew/AddOnCardsGrid'
import type { ContentType } from '@types'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import AddOnCardsGrid from '@/components/PlatformNew/AddOnCardsGrid'
import Pill from '@/components/Pill'
import Text from '@/components/Text'

export interface AddOnsSectionProps {
  cards?: AddOnCardItem[]
  className?: ClassValue
  description?: ContentType
  eyebrow?: string
  heading?: any // (si heading viene como PortableText desde Sanity)
}

const AddOnsSection = ({
  cards = [],
  className,
  description,
  eyebrow,
  heading,
}: AddOnsSectionProps) => {
  if (!heading && !cards.length) return null

  return (
    <section className={clsx('w-full bg-white py-10 md:py-8 lg:py-8', className)}>
      <div className="mx-auto w-full max-w-[110rem] px-4 md:px-8 lg:px-14">
        {/* TOP (CENTERED) */}
        <div className="mx-auto flex max-w-[64rem] flex-col items-center text-center">
          {eyebrow && (
            <div className="mb-3 inline-flex py-0.5 md:py-1 rounded-lg bg-[#B57CFF] px-3 md:px-4">
              <span className="type-overline-xxs text-light pt-[0.125rem] uppercase tracking-[0.22em] text-[12px] md:text-[14px] lg:text-[16px] font-medium">
                {eyebrow}
              </span>
            </div>
          )}

          {heading && (
            <div className="w-full text-[#1f1f1f]">
              <Text
                baseStyles={false}
                blockStyles={{
                  h1: {
                    className: clsx(
                      '!text-[32px] sm:!text-[44px] md:!text-[56px] lg:!text-[72px]',
                      '!leading-[1.1] md:!leading-[1.05]',
                      '!font-[400] !tracking-[-0.02em]',
                      '!text-[#1f1f1f]'
                    ),
                    tag: 'h1',
                  },
                  normal: {
                    className: clsx(
                      '!text-[32px] sm:!text-[44px] md:!text-[56px] lg:!text-[60px]',
                      '!leading-[1.1] md:!leading-[1.05]',
                      '!font-[400] !tracking-[-0.02em]',
                      '!text-[#1f1f1f]'
                    ),
                    tag: 'p',
                  },
                }}
                className="[&_*]:!text-inherit"
                content={heading}
              />
            </div>
          )}

          {description && (
            <div className="mt-4 md:mt-6">
              <Text
                baseStyles={false}
                blockStyles={{
                  normal: {
                    className: clsx(
                      '!text-[14px] sm:!text-[16px] md:!text-[18px] lg:!text-[28px]',
                      '!leading-[1.5] md:!leading-[1.6]',
                      '!text-[#4b4b4b]'
                    ),
                    tag: 'p',
                  },
                }}
                className="[&_*]:!text-inherit"
                content={description}
              />
            </div>
          )}
        </div>

        {/* CARDS (CENTERED BELOW) */}
        <div className="mt-12 md:mt-7 lg:mt-8">
          <AddOnCardsGrid className="w-full" items={cards} />
        </div>
      </div>
    </section>
  )
}

export default AddOnsSection