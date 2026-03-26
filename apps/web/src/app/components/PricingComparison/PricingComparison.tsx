'use client'

import type { ContentType, SanityImageProps } from '@types'
import React from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import Text from '@/components/Text'
import { LinkIcon } from '@/components/Link'

interface ListItem {
  _key?: string
  icon?: SanityImageProps
  text: string
}

export interface PricingComparisonProps {
  ctaHref?: string
  ctaLabel?: string
  eyebrow?: string
  heading?: ContentType
  leftColumnItems?: ListItem[]
  leftColumnTitle?: string
  rightColumnItems?: ListItem[]
  rightColumnTitle?: string
}

const PricingComparison = ({
  ctaHref,
  ctaLabel,
  eyebrow,
  heading,
  leftColumnItems = [],
  leftColumnTitle,
  rightColumnItems = [],
  rightColumnTitle,
}: PricingComparisonProps) => {
  if (!heading && !leftColumnItems.length && !rightColumnItems.length) return null

  return (
    <section className="relative w-full bg-white rounded-b-[32px] sm:rounded-b-[40px] overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-12 md:pb-14">

        {eyebrow && (
          <div className="flex justify-center mb-2 sm:mb-2.5">
            <div className="inline-flex rounded-lg bg-[#603eff] px-2.5 py-0.5">
              <span className="text-white text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
            </div>
          </div>
        )}

        {heading && (
          <div className="mx-auto max-w-[900px] text-center mb-4 sm:mb-4.5 md:mb-5">
            <Text
              baseStyles={false}
              blockStyles={{
                h1: {
                  className: clsx(
                    '!text-[28px] sm:!text-[36px] md:!text-[44px] lg:!text-[50px]',
                    '!leading-[1.12]',
                    '!font-[400] !tracking-[-0.02em]',
                    '!text-[#1f1f1f]'
                  ),
                  tag: 'h2',
                },
                normal: {
                  className: clsx(
                    '!text-[28px] sm:!text-[36px] md:!text-[44px] lg:!text-[50px]',
                    '!leading-[1.12]',
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

        <div className="mx-auto max-w-[1050px] rounded-[16px] sm:rounded-[20px] bg-[#f8f7fb] px-3 sm:px-4 md:px-5 pt-4 sm:pt-5 pb-4">

          {/* Desktop Layout: Headers then Items */}
          <div className="hidden md:block">
            {/* Column Headers */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              {leftColumnTitle && (
                <div className="rounded-[10px] bg-[#513bfe] py-1 text-center">
                  <span className="text-white text-[17px] sm:text-[18px] font-semibold">
                    {leftColumnTitle}
                  </span>
                </div>
              )}
              {rightColumnTitle && (
                <div className="rounded-[10px] bg-[#d2ccf6] py-1 text-center">
                  <span className="text-[#1f1f1f] text-[17px] sm:text-[18px] font-semibold">
                    {rightColumnTitle}
                  </span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-5 md:gap-x-6">
              <ul className="space-y-1.5 sm:space-y-2">
                {leftColumnItems.map((item, index) => (
                  <li
                    className="flex items-center gap-2"
                    key={item._key ?? `left-${index}`}
                  >
                    {item.icon ? (
                      <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex-shrink-0 relative text-[#6b6875]">
                        <Image
                          className="!object-contain"
                          fill
                          image={item.icon}
                          sizes="20px"
                        />
                      </div>
                    ) : (
                      <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex-shrink-0" />
                    )}
                    <span className="text-[14px] sm:text-[15px] text-[#6b6875] leading-[1.4]">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-1.5 sm:space-y-2">
                {rightColumnItems.map((item, index) => (
                  <li
                    className="flex items-center gap-2"
                    key={item._key ?? `right-${index}`}
                  >
                    {item.icon ? (
                      <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex-shrink-0 relative text-[#6b6875]">
                        <Image
                          className="!object-contain"
                          fill
                          image={item.icon}
                          sizes="20px"
                        />
                      </div>
                    ) : (
                      <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex-shrink-0" />
                    )}
                    <span className="text-[14px] sm:text-[15px] text-[#6b6875] leading-[1.4]">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {leftColumnTitle && (
              <div>
                <div className="rounded-[10px] bg-[#513bfe] py-1 text-center mb-2.5">
                  <span className="text-white text-[17px] sm:text-[18px] font-semibold">
                    {leftColumnTitle}
                  </span>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {leftColumnItems.map((item, index) => (
                    <li
                      className="flex items-center gap-2"
                      key={item._key ?? `left-${index}`}
                    >
                      {item.icon ? (
                        <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex-shrink-0 relative text-[#6b6875]">
                          <Image
                            className="!object-contain"
                            fill
                            image={item.icon}
                            sizes="20px"
                          />
                        </div>
                      ) : (
                        <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex-shrink-0" />
                      )}
                      <span className="text-[14px] sm:text-[15px] text-[#6b6875] leading-[1.4]">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {rightColumnTitle && (
              <div>
                <div className="rounded-[10px] bg-[#d2ccf6] py-1 text-center mb-2.5">
                  <span className="text-[#1f1f1f] text-[17px] sm:text-[18px] font-semibold">
                    {rightColumnTitle}
                  </span>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                  {rightColumnItems.map((item, index) => (
                    <li
                      className="flex items-center gap-2"
                      key={item._key ?? `right-${index}`}
                    >
                      {item.icon ? (
                        <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex-shrink-0 relative text-[#6b6875]">
                          <Image
                            className="!object-contain"
                            fill
                            image={item.icon}
                            sizes="20px"
                          />
                        </div>
                      ) : (
                        <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex-shrink-0" />
                      )}
                      <span className="text-[14px] sm:text-[15px] text-[#6b6875] leading-[1.4]">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {ctaLabel && (
          <div className="flex justify-center mt-5 sm:mt-6 md:mt-7">
            <a
              className={clsx(
                'inline-flex items-center justify-center gap-2',
                'rounded-[40px] bg-[#9061ee] hover:bg-[#7d4fe0]',
                'h-[2.8rem] sm:h-[2.8rem] px-2 sm:px-2',
                'text-[18px] sm:text-[17px] font-medium text-white whitespace-nowrap',
                'transition-colors'
              )}
              href={ctaHref ?? '#'}
            >
              <span>{ctaLabel}</span>
              <span aria-hidden="true" className="inline-flex">
                <LinkIcon />
              </span>
            </a>
          </div>
        )}
      </div>

      <div className="relative -mt-1">
        <svg
          className="w-full block"
          fill="white"
          preserveAspectRatio="none"
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L0,20 Q720,60 1440,20 L1440,0 Z" />
        </svg>
      </div>
    </section>
  )
}

export default PricingComparison
