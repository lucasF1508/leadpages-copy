'use client'

import type { SanityImageProps } from '@types'
import React, { useState } from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'

interface FeatureItem {
  _key: string
  eyebrow?: string
  title: string
  label: string
  description: string
  icon?: SanityImageProps
  image?: SanityImageProps
}

export interface FeatureShowcaseProps {
  heading?: string
  items: FeatureItem[]
  subheading?: string
}

const FeatureShowcase = ({
  heading,
  items = [],
  subheading,
}: FeatureShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!items.length) return null

  const activeItem = items[activeIndex]

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % items.length)

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)

  return (
    <section className="relative w-full bg-white rounded-t-[32px] sm:rounded-t-[40px]">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 py-10 sm:py-14 md:py-16">

        {(heading || subheading) && (
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            {heading && (
              <h2 className="text-[40px] sm:text-[45px] md:text-[50px] font-[400] leading-[1.1] tracking-[-0.02em] text-black mb-4 sm:mb-5">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-lg leading-[1.6] text-[#4a4a4a] mx-auto max-w-[76%]">
                {subheading}
              </p>
            )}
          </div>
        )}

        {/* ── Mobile ── */}
        <div className="flex flex-col gap-6 lg:hidden">
          <div className="flex flex-col">
            {activeItem?.eyebrow && (
              <div className="flex mb-2">
                <div className="inline-flex rounded-lg bg-[#603eff] px-1.5 py-0.5">
                  <span className="text-white text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">
                    {activeItem.eyebrow}
                  </span>
                </div>
              </div>
            )}
            {activeItem?.title && (
              <h2 className="text-[30px] sm:text-[38px] font-[400] leading-[1.1] tracking-[-0.02em] text-black mb-3">
                {activeItem.title}
              </h2>
            )}
            {activeItem?.description && (
              <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#4a4a4a] mb-4">
                {activeItem.description}
              </p>
            )}
            <div className="flex items-center gap-1.5 mb-3">
              <button className="w-[30px] h-[30px] rounded-[6px] bg-[#9061ee] text-white flex items-center justify-center hover:bg-[#7d4fe0] transition-colors text-[15px]" onClick={goPrev} type="button">←</button>
              <button className="w-[30px] h-[30px] rounded-[6px] bg-[#9061ee] text-white flex items-center justify-center hover:bg-[#7d4fe0] transition-colors text-[15px]" onClick={goNext} type="button">→</button>
            </div>
            <div className="flex flex-col gap-1">
              {items.map((item, index) => {
                const isActiveOrAbove = index <= activeIndex
                return (
                  <button className={clsx('flex items-center gap-2 text-left transition-opacity duration-200', isActiveOrAbove ? 'opacity-100' : 'opacity-40')} key={item._key} onClick={() => setActiveIndex(index)} type="button">
                    {item.icon && (<div className="w-4 h-4 flex-shrink-0"><Image alt={item.label} className="object-contain w-full h-full" image={item.icon} sizes="20px" /></div>)}
                    <span className={clsx('text-[12px] text-black', isActiveOrAbove ? 'font-semibold' : 'font-normal')}>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
          {activeItem?.image && (
            <div className="relative w-full aspect-[643/693] rounded-[16px] overflow-hidden">
              <Image alt={activeItem.title || 'Feature image'} className="object-cover" fill image={activeItem.image} sizes="100vw" />
            </div>
          )}
        </div>

        {/* ── Desktop ── */}
        <div className="hidden lg:block relative">
          <div className="ml-[45%] pl-4">
            {activeItem?.image && (
              <div className="relative w-full aspect-[643/693] rounded-[20px] overflow-hidden">
                <Image alt={activeItem.title || 'Feature image'} className="object-cover" fill image={activeItem.image} sizes="55vw" />
              </div>
            )}
          </div>

          <div className="absolute inset-y-0 left-0 w-[45%]">
            <div>
              {activeItem?.eyebrow && (
                <div className="flex mb-2">
                  <div className="inline-flex rounded-lg bg-[#603eff] px-1.5 py-0.5">
                    <span className="text-white text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase">
                      {activeItem.eyebrow}
                    </span>
                  </div>
                </div>
              )}

              {activeItem?.title && (
                <h2 className="text-[40px] xl:text-[40px] font-[400] leading-[1.06] tracking-[-0.02em] text-black mb-3">
                  {activeItem.title}
                </h2>
              )}

              {activeItem?.description && (
                <p className="text-lg leading-[1.65] text-[#4a4a4a] line-clamp-6 max-w-[93%]">
                  {activeItem.description}
                </p>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <div className="flex items-center gap-1.5 mb-2.5">
                <button className="w-[30px] h-[30px] rounded-[6px] bg-[#9061ee] text-white flex items-center justify-center hover:bg-[#7d4fe0] transition-colors text-[15px]" onClick={goPrev} type="button">←</button>
                <button className="w-[30px] h-[30px] rounded-[6px] bg-[#9061ee] text-white flex items-center justify-center hover:bg-[#7d4fe0] transition-colors text-[15px]" onClick={goNext} type="button">→</button>
              </div>

              <div className="flex flex-col gap-1">
                {items.map((item, index) => {
                  const isActiveOrAbove = index <= activeIndex
                  return (
                    <button
                      className={clsx(
                        'flex items-center gap-2 text-left transition-opacity duration-200',
                        isActiveOrAbove ? 'opacity-100' : 'opacity-40'
                      )}
                      key={item._key}
                      onClick={() => setActiveIndex(index)}
                      type="button"
                    >
                      {item.icon && (
                        <div className="w-4 h-4 flex-shrink-0">
                          <Image alt={item.label} className="object-contain w-full h-full" image={item.icon} sizes="20px" />
                        </div>
                      )}
                      <span className={clsx('text-lg text-black font-semibold')}>
                        {item.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase
