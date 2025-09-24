import type { MediaWithTextType } from '@/components/MediaWithText/MediaWithText'
import React from 'react'
import clsx from 'clsx'
import MediaWithText from '@/components/MediaWithText'

type Props = {
  className?: string
  heading?: React.ReactNode
  items: MediaWithTextType[]
  subheading?: React.ReactNode
}

export default function ResourcesGrid({
  className,
  heading,
  items,
  subheading,
}: Props) {
  if (!items?.length) return null

  return (
    <section className={clsx('pinion pinion-resourcesGrid', className)}>
      <div className="pinion-inner w-full !max-w-7xl mx-auto px-4">
        {(heading || subheading) && (
          <div className="mb-6 md:mb-8 text-center">
            {heading && (
              <div
                className={clsx(
                  'font-display font-bold tracking-tight text-white',
                  'leading-[1.05]',
                  'text-[clamp(2rem,5.5vw,3rem)]'
                )}
              >
                {heading}
              </div>
            )}
            {subheading && (
              <div className="mt-2 text-white/70">{subheading}</div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          {items.map((it) => (
            <article
              className={clsx(
                'rounded-2xl bg-[#1A1B21] ring-1 ring-white/10 shadow-lg',
                'p-4 md:p-3'
              )}
              key={it._key}
            >
              <div className="[&_p]:line-clamp-4">
                <MediaWithText {...it} className="!mb-0"/>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
