'use client'

import type { ContentType, LinkType } from '@/types'
import React from 'react'
import clsx from 'clsx'
import * as Primitives from '@radix-ui/react-accordion'
import Icon from 'icons/Icon'
import { arrowDown } from 'icons/all/arrow-down'
import { usePathname } from 'next/navigation'
import Link from '@/components/Link'
import Text from '@/components/Text'

interface TextWithSidebarProps {
  className?: string
  content?: ContentType
  sidebar?: {
    heading: string
    sections: {
      heading: string
      links: LinkType[]
    }[]
  }
}

const TextWithSidebar = ({
  className,
  content,
  sidebar,
}: TextWithSidebarProps) => {
  const pathname = usePathname() || ''
  return (
    <div
      className={clsx(
        'flex flex-col md:flex-row items-start gap-4 lg:gap-8',
        className
      )}
    >
      <aside className="w-full sticky box-[top(y)] gap-3 md:hidden md:flex z-dropdown">
        <Primitives.Root
          className={clsx('w-full', className)}
          collapsible
          defaultValue="0"
          type="single"
        >
          <Primitives.Item
            className={clsx(
              'w-auto box-[mx*-1] bg-surface-muted py-4 box-[mt*-1] min-h-[5.875rem] flex flex-col items-center justify-center'
            )}
            value="toc"
          >
            <Primitives.Header className={clsx('')}>
              <Primitives.Trigger
                aria-label="open-button"
                className="type-h2 group flex w-full flex-row items-center justify-start gap-2 text-center box-px"
              >
                {sidebar?.heading}
                <Icon
                  {...arrowDown}
                  className="z-content w-2.5 h-2.5 flex-[0_0_auto] group-data-[state=closed]:scale-y-[1] group-data-[state=open]:scale-y-[-1] transition-all"
                />
              </Primitives.Trigger>
            </Primitives.Header>
            <div className="w-full absolute left-0 top-full">
              <div className="bg-surface-muted w-auto box-[mx*-1]">
                <Primitives.Content
                  className={clsx(
                    'overflow-hidden data-[state=closed]:animate-[close_300ms_ease-out] data-[state=open]:animate-[open_300ms_ease-out] w-full pb-3'
                  )}
                >
                  {sidebar?.sections.map(({ heading, links }) => (
                    <div
                      className="flex flex-col gap-3 w-full mt-3"
                      key={heading}
                    >
                      <h4 className="type-h3 box-px">{heading}</h4>
                      {!!links?.length &&
                        links.map((link) => (
                          <div className="relative box-px" key={link._key}>
                            <Link
                              {...link}
                              className="type-body relative"
                              hasIcon={false}
                              linkStyle="none"
                            />
                            {pathname === link?.url && (
                              <div
                                className={clsx(
                                  'w-[0.375rem] h-3 bg-brand absolute top-0 left-0 z-content bg-gradient-to-b from-purple-600 to-purple-400 top-1/2 -mt-1.5'
                                )}
                              />
                            )}
                          </div>
                        ))}
                    </div>
                  ))}
                </Primitives.Content>
              </div>
            </div>
          </Primitives.Item>
        </Primitives.Root>
      </aside>
      <aside className="flex-[0_0_auto] w-[15.5rem] lg:w-[20rem] sticky top-2 gap-3 hidden md:flex flex-col rounded-md bg-surface-muted border border-surface-neutral-medium py-4 lg:py-6 z-dropdown max-h-[calc(100dvh-2rem)] overflow-scroll scrollbar-hide">
        {sidebar?.sections.map(({ heading, links }) => (
          <div className="flex flex-col gap-3" key={heading}>
            <h4 className="type-h4 lg:type-h3 px-3 lg:px-4">{heading}</h4>
            {!!links?.length &&
              links.map((link) => (
                <div className="relative px-3 lg:px-4" key={link._key}>
                  <Link
                    {...link}
                    className={clsx(
                      'type-body-sm lg:type-body relative hover:text-button-text-inline transition-colors',
                      pathname === link?.url && 'text-button-text-inline'
                    )}
                    hasIcon={false}
                    linkStyle="none"
                  />
                  {pathname === link?.url && (
                    <div
                      className={clsx(
                        'w-[0.375rem] h-3 bg-brand absolute top-0 left-0 z-content bg-gradient-to-b from-purple-600 to-purple-400 top-1/2 -mt-1.5'
                      )}
                    />
                  )}
                </div>
              ))}
          </div>
        ))}
      </aside>
      <Text content={content} />
    </div>
  )
}

export default TextWithSidebar
