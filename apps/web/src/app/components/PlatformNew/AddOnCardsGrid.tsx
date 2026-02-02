'use client'

import type { ContentType, ImageType, LinkType } from '@types'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import Link from '@/components/Link'
import Text from '@/components/Text'

export type AddOnCardItem = {
  _key?: string
  ctaLabel?: string
  ctaLink?: LinkType
  description?: ContentType
  icon?: ImageType
  price?: string
  priceNote?: string
  pricePrefix?: string
  priceUnit?: string
  title?: string
}

export interface AddOnCardsGridProps {
  className?: ClassValue
  items?: AddOnCardItem[]
}

const normalizePrice = (value?: string) => {
  if (!value) return ''
  return String(value).trim().replace(/^\$/, '')
}

const AddOnCardsGrid = ({ className, items = [] }: AddOnCardsGridProps) => {
  if (!items?.length) return null

  return (
    <div
      className={clsx(
        // Contenedor negro con altura adaptable
        'w-full rounded-[2.5rem] bg-[#2b2b2b] p-4 md:p-6',
        'min-h-auto md:min-h-[600px] lg:min-h-[575px]',
        className
      )}
    >
      <div
        className={clsx(
          // Mobile: 1 columna
          'grid grid-cols-1 gap-4 md:gap-5',
          // Tablet: 2 columnas
          'md:grid-cols-2',
          // Desktop: 4 columnas
          'lg:grid-cols-4'
        )}
      >
        {items.map((card, idx) => {
          const price = normalizePrice(card.price)

          return (
            <article
              className={clsx(
                'min-w-0 flex h-full flex-col rounded-[1.6rem] bg-white',
                'border border-black/10',
                'px-4 py-5 md:px-5 md:py-6 lg:px-4 lg:py-5',
                // Asegurarse de que las cards se estiren correctamente
                'gap-3 md:gap-2'
              )}
              key={card._key ?? card.title ?? idx}
            >
              {/* icon */}
              <div className="flex-shrink-0 h-6 w-6">
                {card.icon ? (
                  <Image
                    alt={card.title || 'Icon'}
                    className="h-5 w-5 object-contain"
                    hasPlaceholder={false}
                    height={18}
                    image={card.icon}
                    width={18}
                  />
                ) : (
                  <div className="h-9 w-9 rounded-md bg-black/5" />
                )}
              </div>

              {/* title */}
              {card.title && (
                <h3 className="text-[18px] md:text-[20px] lg:text-[22px] font-semibold leading-[1.2] text-[#2a2a2a]">
                  {card.title}
                </h3>
              )}

              {/* description */}
              {card.description && (
                <div className="mt-1 md:mt-0">
                  <Text
                    baseStyles={false}
                    blockStyles={{
                      normal: {
                        className:
                          '!text-[14px] md:!text-[16px] !leading-[1.5] md:!leading-[1.65] !text-[#6b6b6b]',
                        tag: 'p',
                      },
                    }}
                    className="[&_*]:!text-inherit line-clamp-4"
                    content={card.description}
                  />
                </div>
              )}

              {/* price block - con flex-grow para mantener al CTA al final */}
              <div className="mt-auto">
                {card.pricePrefix && (
                  <div className="text-[13px] md:text-[16px] leading-[1.3] text-[#6b6b6b] mb-2">
                    {card.pricePrefix}
                  </div>
                )}

                <div className="flex items-end gap-1 min-w-0 mb-2">
                  {price && (
                    <div className="text-[32px] md:text-[36px] lg:text-[40px] font-thin leading-none tracking-[-0.02em] text-[#2a2a2a]">
                      ${price}
                    </div>
                  )}
                  {card.priceUnit && (
                    <div className="pb-[3px] text-[16px] md:text-[16px] leading-none text-[#6b6b6b] whitespace-nowrap">
                      {card.priceUnit}
                    </div>
                  )}
                </div>

                {card.priceNote && (
                  <div className="text-[13px] md:text-[16px] leading-[1.4] md:leading-[1.5] text-[#6b6b6b] line-clamp-2">
                    {card.priceNote}
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-4 md:mt-3 pt-2 md:pt-0">
                {card.ctaLink ? (
                  <Link
                    {...card.ctaLink}
                    className={clsx(
                      'group inline-flex w-full items-center justify-center gap-2',
                      'rounded-[0.9rem] bg-[#0f1115]',
                      'px-3 md:px-2 py-2 md:py-1.5',
                      'text-[13px] md:text-[16px] font-light text-white',
                      'transition-opacity hover:opacity-90'
                    )}
                    hasIcon={false}
                  >
                    <span className="truncate">{card.ctaLabel || 'View'}</span>
                    <span className="text-white/90 transition-transform group-hover:translate-x-1 pl-1 flex-shrink-0">
                      →
                    </span>
                  </Link>
                ) : (
                  <button
                    className={clsx(
                      'inline-flex w-full items-center justify-center gap-2',
                      'rounded-[0.9rem] bg-[#0f1115]',
                      'px-3 md:px-4 py-2 md:py-2.5',
                      'text-[13px] md:text-[16px] font-medium text-white',
                      'opacity-60 cursor-not-allowed'
                    )}
                    type="button"
                  >
                    <span className="truncate">{card.ctaLabel || 'View'}</span>
                    <span>→</span>
                  </button>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default AddOnCardsGrid