import type {
  MediaWithItemsContainer,
  MediaWithItemsType,
} from './MediaWithItems'
import React, { useState } from 'react'
import clsx from 'clsx'
import * as Primitives from '@radix-ui/react-accordion'
import { useShallow } from 'zustand/react/shallow'
import Link, { hasLink } from '@/components/Link'
import Text from '@/components/Text'
import useInterval from '@/hooks/useInterval'
import {
  useMediaWithItemsStore,
} from './MediaWithItems'

const MediaWithItemsAccordionItem = ({
  content,
  link,
  title,
  value,
  variant = 'dark',
}: MediaWithItemsType & { variant?: 'dark' | 'light' }) => {
  const isLight = variant === 'light'
  
  return (
    <Primitives.Item
      className={clsx(
        'py-xl relative flex w-full flex-row items-start gap-x-3 transition-colors',
        isLight && 'text-[#1a1a1a]'
      )}
      value={value}
    >
      <Primitives.Trigger
        aria-label="open-button"
        className={clsx('z-base absolute inset-0')}
      />
      <span
        className={clsx(
          'z-content pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity [[data-state=open]_&]:opacity-100',
          isLight && 'bg-transparent'
        )}
      />
      <div className={clsx('my-auto flex-[1_1_auto]')}>
        <Primitives.Header
          className={clsx(
            'type-body-md sm:type-body-lg font-normal group flex w-full flex-row items-center justify-between gap-2',
            isLight && 'text-[#1a1a1a]'
          )}
        >
          <span className={clsx('text-left')}>{title}</span>
        </Primitives.Header>
        <Primitives.Content
          className={clsx(
            'overflow-hidden data-[state=closed]:animate-[close_300ms_ease-out] data-[state=open]:animate-[open_300ms_ease-out]'
          )}
        >
          {content &&        
            <Text
              as="div"
              className={clsx(
                'flex flex-col gap-1.5 [&_*]:!my-0',
                isLight && 'text-[#1a1a1a]',
                title && 'pt-4'
              )}
              content={content}
            />
          }
          {hasLink(link) &&        
            <Link
              className={clsx(
                "mt-2",
                isLight && link?.linkStyle === "button-solid" && [
                  "!bg-[#C47FF3]",
                  "!text-white",
                  "[&_.link-label]:!text-white",
                  "[&_.link-icon]:!text-white",
                  "[&_.link-icon_svg]:!stroke-white",
                  "hover:!bg-[#B06FE8]",
                  "[&:hover_.link-label]:!text-white",
                  "[&:hover_.link-icon]:!text-white",
                  "[&:hover_.link-icon_svg]:!stroke-white"
                ]
              )}
              {...link}
            />
          }
        </Primitives.Content>
      </div>
    </Primitives.Item>
  )
}

const MediaWithItemsAccordion = ({
  className,
  duration = 10,
  items = [],
  variant = 'dark'
}: MediaWithItemsContainer) => {
  const { activeIndex, setActiveIndex } = useMediaWithItemsStore(
    useShallow((state) => ({ 
      activeIndex: state.activeIndex,
      setActiveIndex: state.setActiveIndex
     })),
  )

  const [interval, setInterval] = useState<number | undefined>(duration * 1000)

  const onValueChange = (index: string) => {
    setInterval(undefined)
    const indexAsInt = parseInt(index, 10)

    if (!Number.isNaN(indexAsInt)) {
      setActiveIndex(indexAsInt)
    }
  }

  useInterval(() => {
    const index = items.length > activeIndex + 1 ? `${activeIndex + 1}` : '0'
    setActiveIndex(parseInt(index, 10))
  }, interval)

  const isLight = variant === 'light'

  return (
    <Primitives.Root
      className={clsx(
        'flex w-full flex-col border-t border-b divide-y',
        isLight 
          ? 'border-[#e5e5e5] divide-[#e5e5e5]' 
          : 'border-border-primary divide-border-primary',
        className
      )}
      collapsible
      defaultValue="0"
      onValueChange={onValueChange}
      type="single"
      value={activeIndex.toString()}
    >
      {items &&
        items.map(({ _key, content, link, title }, index) => {
          const itemValue = `${index}`
          return (
            <MediaWithItemsAccordionItem
              content={content}
              key={_key}
              link={link}
              title={title}
              value={itemValue}
              variant={variant}
            />
          )
        })}
    </Primitives.Root>
  )
}

export default MediaWithItemsAccordion
