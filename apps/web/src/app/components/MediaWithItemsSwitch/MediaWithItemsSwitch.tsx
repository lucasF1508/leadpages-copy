'use client'

import type { ContentType } from '@types'
import type { ClassValue } from 'clsx'
import React, { useState } from 'react'
import clsx from 'clsx'
import { mediaWithItemsSwitchBlockStyles } from '@/components/PortableText'
import MediaWithTextSticky from '@/components/MediaWithText/MediaWithTextSticky'
import type { MediaWithTextType } from '@/components/MediaWithText/MediaWithText'
import Text from '@/components/Text'

export interface MediaWithItemsSwitchSection {
  _key?: string
  tabLabel?: string
  items?: Array<{
    _key?: string
    alignContent?: 'left' | 'right'
    content?: unknown
    links?: unknown[]
    media?: unknown
    pillContent?: string
  }>
}

export interface MediaWithItemsSwitchProps {
  className?: ClassValue
  classNames?: {
    root?: ClassValue
    switch?: ClassValue
    tab?: ClassValue
    content?: ClassValue
    header?: ClassValue
  }
  label?: string | null
  title?: string | null
  content?: ContentType
  linkButtonVariant?: 'default' | 'green' | null
  sections?: MediaWithItemsSwitchSection[] | null
}

const MediaWithItemsSwitch = ({
  className,
  classNames,
  label,
  title,
  content,
  linkButtonVariant,
  sections = [],
}: MediaWithItemsSwitchProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const list = Array.isArray(sections) ? sections : []
  const activeSection = list[activeIndex]
  const rawItems = activeSection?.items ?? []
  const items = rawItems.map((item, i) => ({
    ...item,
    _key: item._key ?? `item-${i}`,
  })) as MediaWithTextType[]

  if (!list.length) return null

  return (
    <div className={clsx('w-full bg-white pt-12 pb-20', className, classNames?.root)}>
      <div className="max-w-base mx-auto w-full px-4 sm:px-6 lg:px-8">
        {(Boolean(label) || Boolean(title) || Boolean(content)) && (
          <header className={clsx('text-center mb-8', classNames?.header)}>
            {label && (
              <p className="type-overline-xxs theme-light:bg-gradient-purple theme-dark:bg-gradient-purple-invert text-black inline-block rounded-lg py-[0.25rem] px-1.5 mb-3">
                {label}
              </p>
            )}
            {title && (
              <h2 className="type-title-t3 sm:type-title-t2 md:type-title-t1 text-black mb-4">
                {title}
              </h2>
            )}
            {content && (
              <div className="text-black [&_.text-body-muted]:!text-black [&_.portable-text]:text-black max-w-3xl mx-auto">
                <Text as="div" content={content} />
              </div>
            )}
          </header>
        )}
        <div
          className={clsx(
            'flex justify-center mb-8',
            classNames?.switch
          )}
        >
          <div className="w-max min-w-0 max-w-full overflow-x-auto overflow-y-hidden inline-flex items-center gap-1 rounded-2xl bg-[#1C1A24] p-1.5 shadow-[0_14px_40px_rgba(0,0,0,0.55)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {list.map((section, index) => {
              const isActive = activeIndex === index
              const label = section?.tabLabel ?? `Tab ${index + 1}`
              return (
                <button
                  className={clsx(
                    'flex-none whitespace-nowrap px-5 py-2 rounded-xl text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#7E4AFF] text-white shadow-[0_10px_30px_rgba(126,74,255,0.5)]'
                      : 'text-gray-300 hover:text-white hover:bg-[#242131]'
                  )}
                  key={section?._key ?? index}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
        <div
          className={clsx(
            'text-black [&_.text-body-muted]:!text-black [&_.portable-text]:text-black [&_.text-light]:!text-black',
            '[&_h1]:!text-black [&_h2]:!text-black [&_h3]:!text-black [&_h4]:!text-black [&_h5]:!text-black [&_h6]:!text-black',
            '[&_p]:!text-black [&_span]:!text-black [&_[class*="type-title"]]:!text-black [&_[class*="type-body"]]:!text-black',
            '[&_figure]:rounded-2xl [&_figure]:overflow-hidden [&_img]:rounded-2xl',
            classNames?.content
          )}
        >
          <MediaWithTextSticky
            blockStyles={mediaWithItemsSwitchBlockStyles}
            items={items}
            linkButtonVariant={linkButtonVariant}
          />
        </div>
      </div>
    </div>
  )
}

export default MediaWithItemsSwitch
