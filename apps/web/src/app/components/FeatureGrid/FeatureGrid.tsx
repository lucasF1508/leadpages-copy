'use client'

import type { ContentType, SanityImageProps } from '@types'
import React from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import Text from '@/components/Text'

interface GridItem {
  _key?: string
  description?: ContentType
  photo?: SanityImageProps
  title: string
}

export interface FeatureGridProps {
  eyebrow?: string
  heading?: ContentType
  items?: GridItem[]
}

const FeatureGrid = ({
  eyebrow,
  heading,
  items = [],
}: FeatureGridProps) => {
  if (!heading && !items.length) return null

  return (
    <section className="relative w-full bg-white rounded-b-[32px] sm:rounded-b-[40px]">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 pt-8 sm:pt-10 md:pt-16 pb-10 sm:pb-12 md:pb-14">

        {eyebrow && (
          <div className="flex justify-center mb-2 sm:mb-2.5">
            <div className="inline-flex rounded-lg bg-[#603eff] px-1.5 py-0.5">
              <span className="text-white text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">
                {eyebrow}
              </span>
            </div>
          </div>
        )}

        {heading && (
          <div className="mx-auto max-w-[920px] text-center mb-6 sm:mb-7 md:mb-8">
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

        {items.length > 0 && (
          <div className="mx-auto max-w-[1400px]">
            <div
              className={clsx(
                'rounded-[16px] sm:rounded-[20px] bg-[#2b2b2b]',
                'p-3 sm:p-3.5 md:p-4'
              )}
            >
              <div
                className={clsx(
                  'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
                  'gap-3 sm:gap-3.5 md:gap-4'
                )}
              >
                {items.map((item, index) => (
                  <article
                    className={clsx(
                      'flex flex-col bg-white rounded-[12px]',
                      'p-2.5 sm:p-3 md:p-3.5'
                    )}
                    key={item._key ?? `item-${index}`}
                  >
                    {item.photo && (
                      <div className="w-full aspect-[9/8] relative mb-2.5 rounded-lg overflow-hidden">
                        <Image
                          alt={item.title || 'Feature image'}
                          className="object-cover"
                          fill
                          image={item.photo}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}

                    {item.title && (
                      <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.2] text-[#1f1f1f] mb-1">
                        {item.title}
                      </h3>
                    )}

                    {item.description && (
                      <div className="mt-0.5">
                        <Text
                          baseStyles={false}
                          blockStyles={{
                            normal: {
                              className:
                                '!text-[12px] sm:!text-[13px] md:!text-[13px] !leading-[1.5] !text-[#5a5a5a]',
                              tag: 'p',
                            },
                          }}
                          className="[&_*]:!text-inherit"
                          content={item.description}
                        />
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeatureGrid
