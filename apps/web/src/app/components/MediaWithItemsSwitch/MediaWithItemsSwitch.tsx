'use client'

import type { ContentType } from '@types'
import type { ClassValue } from 'clsx'
import React, { useState } from 'react'
import clsx from 'clsx'
import {
  mediaWithItemsSwitchBlockStyles,
  mediaWithItemsSwitchIntroBlockStyles,
} from '@/components/PortableText'
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
  variant?: 'light' | 'dark'
  sections?: MediaWithItemsSwitchSection[] | null
}

const MediaWithItemsSwitch = ({
  className,
  classNames,
  label,
  title,
  content,
  linkButtonVariant,
  variant = 'dark',
  sections = [],
}: MediaWithItemsSwitchProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const isDark = variant === 'dark'
  const list = Array.isArray(sections) ? sections : []
  const activeSection = list[activeIndex]
  const rawItems = activeSection?.items ?? []
  const items = rawItems.map((item, i) => ({
    ...item,
    _key: item._key ?? `item-${i}`,
  })) as MediaWithTextType[]

  if (!list.length) return null

  return (
    <div
      className={clsx(
        'w-full pt-12 pb-8',
        isDark ? 'bg-[#1a1a1a]' : 'bg-white',
        className,
        classNames?.root
      )}
    >
      <div className="max-w-base mx-auto w-full px-4 sm:px-6 lg:px-8">
        {(Boolean(label) || Boolean(title) || Boolean(content)) && (
          <header className={clsx('text-center mb-8', classNames?.header)}>
            {label && (
              <p
                className={clsx(
                  'type-overline-xxs inline-block rounded-lg py-[0.25rem] px-1.5 mb-3',
                  isDark
                    ? 'bg-button-surface-solid !text-button-text-solid'
                    : 'theme-light:bg-gradient-purple theme-dark:bg-gradient-purple-invert !text-white'
                )}
              >
                {label}
              </p>
            )}
            {title && (
              <h2
                className={clsx(
                  'type-title-t5 sm:type-title-t4 md:type-title-t3 mb-4',
                  isDark ? 'text-white' : 'text-black'
                )}
              >
                {title}
              </h2>
            )}
            {content && (
              <div className="max-w-3xl mx-auto">
                <Text
                  as="div"
                  blockStyles={
                    isDark
                      ? {
                          ...mediaWithItemsSwitchIntroBlockStyles,
                          large: {
                            className: '!text-white type-body-md sm:type-body-lg',
                            tag: 'p',
                          },
                          normal: {
                            className: '!text-white type-body-sm md:type-body',
                            tag: 'p',
                          },
                          small: {
                            className: '!text-white type-body-xs md:type-body-sm',
                            tag: 'p',
                          },
                          xsmall: { className: '!text-white type-body-xs', tag: 'p' },
                        }
                      : mediaWithItemsSwitchIntroBlockStyles
                  }
                  content={content}
                />
              </div>
            )}
          </header>
        )}
        <div className={clsx('flex justify-center mb-8', classNames?.switch)}>
          <div
            className={clsx(
              'w-max min-w-0 max-w-full overflow-x-auto overflow-y-hidden inline-flex items-center gap-1 rounded-2xl p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
              isDark
                ? 'bg-[#2A2A2E] shadow-[0_14px_40px_rgba(0,0,0,0.4)]'
                : 'bg-[#1C1A24] shadow-[0_14px_40px_rgba(0,0,0,0.55)]'
            )}
          >
            {list.map((section, index) => {
              const isActive = activeIndex === index
              const tabLabel = section?.tabLabel ?? `Tab ${index + 1}`
              return (
                <button
                  className={clsx(
                    'flex-none whitespace-nowrap px-5 py-2 rounded-xl text-sm font-medium transition-colors',
                    isDark
                      ? isActive
                        ? 'border border-white !text-white bg-transparent'
                        : '!text-white hover:bg-white/10'
                      : isActive
                        ? 'bg-[#7E4AFF] !text-white shadow-[0_10px_30px_rgba(126,74,255,0.5)]'
                        : '!text-white hover:bg-[#242131]'
                  )}
                  key={section?._key ?? index}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  {tabLabel}
                </button>
              )
            })}
          </div>
        </div>
        <div
          className={clsx(
            '[&_figure]:rounded-2xl [&_figure]:overflow-hidden [&_img]:rounded-2xl',
            isDark
              ? 'text-white [&_.text-body-muted]:!text-white [&_.portable-text]:!text-white [&_.text-light]:!text-white [&_h1]:!text-white [&_h2]:!text-white [&_h3]:!text-white [&_h4]:!text-white [&_h5]:!text-white [&_h6]:!text-white [&_p]:!text-white [&_span]:!text-white [&_[class*="type-title"]]:!text-white [&_[class*="type-body"]]:!text-white'
              : 'text-black [&_.text-body-muted]:!text-black [&_.portable-text]:text-black [&_.text-light]:!text-black [&_h1]:!text-black [&_h2]:!text-black [&_h3]:!text-black [&_h4]:!text-black [&_h5]:!text-black [&_h6]:!text-black [&_p]:!text-black [&_span]:!text-black [&_[class*="type-title"]]:!text-black [&_[class*="type-body"]]:!text-black',
            classNames?.content
          )}
        >
            <MediaWithTextSticky
              blockStyles={mediaWithItemsSwitchBlockStyles}
              disableContainer
              items={items}
              linkButtonVariant={isDark ? 'green' : (linkButtonVariant ?? 'default')}
              variant={variant}
            />
        </div>
      </div>
    </div>
  )
}

export default MediaWithItemsSwitch
