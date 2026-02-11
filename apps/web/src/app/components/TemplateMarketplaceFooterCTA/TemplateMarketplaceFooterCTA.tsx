'use client'

import React from 'react'
import clsx from 'clsx'
import Label from '@/components/Label'
import Pinion from '@/components/Pinion'
import SubFooterGradient from '@/components/SubFooter/SubFooterGradient'
import Text from '@/components/Text'

type Target = '_blank' | '_self'

export interface TemplateMarketplaceFooterCTAProps {
  className?: string
  ctaHref?: string
  ctaLabel?: string
  heading?: any
  label?: string
  subheading?: string
  target?: Target
}

export default function TemplateMarketplaceFooterCTA({
  className,
  ctaHref,
  ctaLabel,
  heading,
  label,
  subheading,
  target = '_self',
}: TemplateMarketplaceFooterCTAProps) {
  const hasAnyContent = !!(label || heading || subheading || (ctaHref && ctaLabel))
  if (!hasAnyContent) return null

  return (
    <div className={clsx('relative isolate -mt-10 md:-mt-14', className)}>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
        <div className="relative flex items-center justify-center min-h-[18.625rem] md:min-h-[30rem]">
          {/* Base dark background */}
          <div aria-hidden="true" className="absolute inset-0 bg-[#0F0E16]" />

          {/* Subfooter bloom (original shape) */}
          <SubFooterGradient className="absolute bottom-0 inset-x-0 h-[140%] w-full opacity-85" />

          {/* Violet spot from bottom center (not uniform across width) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,_rgba(92,60,138,0.95)_0%,_rgba(92,60,138,0.55)_38%,_rgba(92,60,138,0)_76%)]"
          />

          {/* Keep top connected to the section above (dark fades downward) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#0F0E16] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
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
            {label ? (
              <Label className="type-h6 sm:type-h4 md:type-h3" content={label} />
            ) : null}

            {heading ? (
              <Text
                as="div"
                className="text-center [&>*]:!my-0 gap-2 md:gap-3 flex-col flex max-w-cols10 mx-auto"
                blockStyles={{
                  normal: {
                    className:
                      'type-title-t7 sm:type-title-t6 md:type-title-t3 !font-medium',
                    tag: 'h2',
                  },
                }}
                content={heading}
              />
            ) : null}

            {subheading ? (
              <p className="type-body-lg max-w-cols10 mx-auto opacity-90">
                {subheading}
              </p>
            ) : null}

            {ctaHref && ctaLabel ? (
              <a
                href={ctaHref}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                target={target}
                className={clsx(
                  'mt-5 md:mt-6',
                  'inline-flex items-center justify-center gap-2',
                  'px-4 py-2.5',
                  'rounded-md',
                  'type-button',
                  'bg-[#CEFF66] text-[#111018]',
                  'hover:bg-[#B8FF22] active:bg-[#AEFF00]',
                  'transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-[#CEFF66] focus:ring-offset-2 focus:ring-offset-[#0F0E16]'
                )}
                aria-label={ctaLabel}
              >
                {ctaLabel}
                <span aria-hidden="true" className="inline-flex">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ) : null}
          </Pinion>
        </div>
      </div>
    </div>
  )
}


