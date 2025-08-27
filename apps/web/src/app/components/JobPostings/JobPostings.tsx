import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Link, { hasLink } from '@/components/Link'
import { LinkProps } from '@/types/link'

interface JobsPostingProps {
  _key: string
  className?: ClassValue
  heading?: string
  items?: {
    _key: string
    heading?: string
    subheading?: string
    link?: LinkProps
  }[]
}

const JobPostings = ({ className, heading, items }: JobsPostingProps) => {
  if (!items?.length) return null

  return (
    <section
      className={clsx(
        'flex flex-col gap-8 box-[py*1.5] box-[my*-1] box-px relative',
        className
      )}
    >
      <div className="z-base left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none absolute top-full -translate-y-1/2 w-full h-[200dvh] flex flex-row items-center justify-center">
        <div className="flex-[0_0_auto] w-[45rem] md:w-[73.75rem] aspect-[1180/415] rounded-full bg-white bg-gradient-to-r from-purple-300 to-purple-600 blur-[100px] opacity-50" />
      </div>
      <Heading
        className="text-center type-title-t7 sm:type-title-t6 md:type-title-t3"
        heading={heading}
      />
      <div className="w-full flex flex-col gap-3 relative z-content">
        {items.map((item) => (
          <div
            className="gap-2 text-center w-full max-w-[38rem] flex flex-row items-center py-4 px-4 mx-auto bg-opacity-light-100 rounded-xl"
            key={item._key}
          >
            <div className="flex flex-col flex-[1_1_auto] text-left gap-0.5">
              {item?.heading && (
                <h3 className="type-h5 sm:type-h4 md:type-h2">
                  {item.heading}
                </h3>
              )}
              {item?.subheading && (
                <p className="!leading-tight type-body-xs sm:type-body-sm md:type-body text-body-muted">
                  {item.subheading}
                </p>
              )}
            </div>
            {hasLink(item?.link) && (
              <Link
                {...item.link}
                className="flex-[0_0_auto] max-sm:[&_.link-label]:hidden"
                hasIcon
                linkStyle="text"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default JobPostings
