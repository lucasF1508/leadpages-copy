import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Label from '@/components/Label'
import Pinion from '@/components/Pinion'
import SubFooterGradient from '@/components/SubFooter/SubFooterGradient'

export interface SubFooterProps {
  className?: string
  ctaHref: string
  ctaLabel: string
  heading: string
  label?: string
  subheading?: string
  target?: '_blank' | '_self'
}

const SubFooter = ({
  className,
  ctaHref,
  ctaLabel,
  heading,
  label,
  subheading,
  target = '_self',
}: SubFooterProps) => (
  <div className={clsx('relative isolate', className)}>
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
      <div className="relative flex items-center justify-center min-h-[18.625rem] md:min-h-[30rem]">
        <SubFooterGradient className="absolute bottom-0 inset-x-0 h-[120%] w-full opacity-95 translate-y-6 md:translate-y-0" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[#0F0E16] [mask-image:linear-gradient(to_top,black,transparent_65%)]"
        />
        <Pinion
          classNames={{
            inner:
              'relative z-10 flex flex-col items-center gap-3 md:gap-4 ' +
              'pb-[calc(1rem+env(safe-area-inset-bottom,0px))] md:pb-12',
            root: 'relative z-10 text-center text-white !my-0',
          }}
          component="hero"
        >
          {label && (
            <Label className="type-h6 sm:type-h4 md:type-h3" content={label} />
          )}

          {heading && (
            <Heading
              as="h1"
              className="text-center type-title-t7 sm:type-title-t6 md:type-title-t3 max-w-cols12 mx-auto"
              heading={heading}
            />
          )}

          {subheading && (
            <Heading
              as="h2"
              className="text-center type-body-lg max-w-cols12 mx-auto opacity-90"
              heading={subheading}
            />
          )}

          <a
            aria-label={ctaLabel}
            className="mt-4 mb-2 inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium bg-lime-400 text-black hover:bg-lime-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            href={ctaHref}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            target={target}
          >
            <span>{ctaLabel}</span>
            <span
              aria-hidden="true"
              className={clsx(
                'grid h-6 w-6 place-items-center rounded-md',
                'bg-white/10 ring-1 ring-white/10',
                'group-hover:bg-white/20 group-hover:ring-white/20',
                'transition-colors',
                'text-base leading-none'
              )}
            >
              →
            </span>
          </a>
        </Pinion>
      </div>
    </div>
  </div>
)

export default SubFooter
