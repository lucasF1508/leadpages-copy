import type { LinkType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Label from '@/components/Label'
import Pinion from '@/components/Pinion'
import Links from '@/components/Link/Links'
import SubFooterGradient from '@/components/SubFooter/SubFooterGradient'

export interface SubFooterProps {
  className?: string
  ctaHref?: string
  ctaLabel?: string
  heading: string
  label?: string
  links?: LinkType[]
  subheading?: string
  target?: '_blank' | '_self'
}

const SubFooter = ({
  className,
  ctaHref,
  ctaLabel,
  heading,
  label,
  links,
  subheading,
  target = '_self',
}: SubFooterProps) => {
  const hasLinks = links && links.length > 0
  const hasLegacyCta = ctaHref && ctaLabel

  return (
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

            {hasLinks ? (
              <div className="mt-4 mb-2" style={{ position: 'relative', zIndex: 20 }}>
                <Links links={links} />
              </div>
            ) : hasLegacyCta ? (
              <a
                href={(() => {
                  // Preserve URL parameters (like XID) when navigating
                  if (typeof window === 'undefined' || target === '_blank') return ctaHref
                  const currentParams = new URLSearchParams(window.location.search)
                  if (currentParams.toString()) {
                    try {
                      const url = new URL(ctaHref!, window.location.origin)
                      currentParams.forEach((value, key) => {
                        url.searchParams.set(key, value)
                      })
                      return url.toString()
                    } catch {
                      const separator = ctaHref!.includes('?') ? '&' : '?'
                      return `${ctaHref}${separator}${currentParams.toString()}`
                    }
                  }
                  return ctaHref
                })()}
                aria-label={ctaLabel}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className="link-button-solid mt-4 mb-2"
                style={{ position: 'relative', zIndex: 20 }}
              >
                {ctaLabel}
              </a>
            ) : null}
          </Pinion>
        </div>
      </div>
    </div>
  )
}

export default SubFooter
