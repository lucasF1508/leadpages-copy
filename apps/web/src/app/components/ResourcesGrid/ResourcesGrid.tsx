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
            {subheading && <div className="mt-2 text-white/70">{subheading}</div>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {items.map((it) => (
            <article
              className={clsx(
                'rounded-2xl bg-[#1A1B21] ring-1 ring-white/10 shadow-lg overflow-hidden',
                'p-4 md:p-3'
              )}
              key={it._key}
            >
              <MediaWithText
                {...it}
                className={clsx(
                  '!mb-0 !w-full !max-w-none !mx-0 !px-0',
                  '!flex !flex-col md:!flex-row !items-stretch !justify-start !gap-4 md:!gap-6',
                  'max-md:[&>div:first-child]:!m-0',
                  '![&_figure]:mx-auto ![&_figure]:w-full',
                  '![&_figure]:justify-center ![&_figure]:items-center',
                  '![&_figure>*]:w-full ![&_figure>*]:max-w-full',
                  '![&_img]:max-w-full ![&_img]:w-full ![&_img]:h-auto',
                  'max-md:![&_img]:object-contain md:![&_img]:object-cover'
                )}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
