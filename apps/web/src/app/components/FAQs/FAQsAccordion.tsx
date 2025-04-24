'use client'

import type { PortableTextBlock } from '@/types';
import React, { useState } from 'react'
import clsx from 'clsx'
import * as Primitives from '@radix-ui/react-accordion'
import PlusIcon from '@/components/Icons/PlusIcon'
import Text from '@/components/Text'

interface FAQsAccordionProps {
  className?: string
  duration?: number
  items: FAQsAccordionItemProps[]
}

export interface FAQsAccordionItemProps {
  _id?: string
  active?: boolean
  content: PortableTextBlock[]
  title: string
  value: string
}

const FAQsItemDivider = () => <div className='h-px w-full bg-gradient-border-light theme-light:bg-gradient-border'/>

const FAQsAccordionItem = ({
  active,
  content,
  title,
  value,
}: FAQsAccordionItemProps) => (
  <Primitives.Item
    className={clsx(
      'py-xl px-md relative flex w-full flex-row items-start gap-x-3 transition-colors',
      active ? 'text-neutral-light' : 'text-body-neutral',
      'hover:text-neutral-light'
    )}
    value={value}
  >
    <Primitives.Trigger
      aria-label="open-button"
      className={clsx('z-base absolute inset-0')}
    />
    <span
      className={clsx(
        'z-content pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity [[data-state=open]_&]:opacity-100'
      )}
    />
    <div className={clsx('my-auto flex-[1_1_auto]')}>
      <Primitives.Header
        className={clsx(
          'type-h3 group flex w-full flex-row items-center justify-between gap-2'
        )}
      >
        <span className={clsx('text-left')}>{title}</span>
        <div className={clsx(active ? '-rotate-45' : 'rotate-0', 'transition-transform pointer-events-none')}>
          <PlusIcon />
        </div>
      </Primitives.Header>
      <Primitives.Content
        className={clsx(
          'overflow-hidden data-[state=closed]:animate-[close_300ms_ease-out] data-[state=open]:animate-[open_300ms_ease-out]'
        )}
      >
        <Text
          as="div"
          className={clsx(
            'flex flex-col gap-1.5 [&_*]:!my-0',
            active && '[&>*]:!text-neutral-light',
            title && 'pt-4'
          )}
          content={content}
        />
      </Primitives.Content>
    </div>
  </Primitives.Item>
)

const FAQsAccordion = ({
  className,
  items = []
}: FAQsAccordionProps) => {
  const [activeKey, setActiveKey] = useState<string | undefined>(undefined)

  const onValueChange = (index: string) => {
    if (activeKey === index) {
      setActiveKey(undefined)
      return
    }
    setActiveKey(index)
  }

  return (
    <Primitives.Root
      className={clsx('flex w-full flex-col border-border-primary', className)}
      collapsible
      onValueChange={onValueChange}
      type="single"
      value={activeKey}
    >
      <FAQsItemDivider />
      {items &&
        items.map(({ _id, content, title }, index) => {
          const itemValue = `${index}`
          return (
            <React.Fragment
              key={_id}
            >
              <FAQsAccordionItem
                active={activeKey === index.toString()}
                content={content}
                title={title}
                value={itemValue}
              />
              <FAQsItemDivider />
            </React.Fragment>
          )
        })}
    </Primitives.Root>
  )
}

export default FAQsAccordion
