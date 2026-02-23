'use client'

import React, { useMemo } from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Label from '@/components/Label'
import Pinion from '@/components/Pinion'
import SubFooterGradient from '@/components/SubFooter/SubFooterGradient'
import Link from '@/components/Link'
import type { LinkType, LinkStyleType } from '@types'
import { useVerifoneCheckoutUrl } from '@/hooks/useVerifoneCheckoutUrl'
import {
  extractPlanFromUrl,
  shouldReplaceWithVerifone,
} from '@/lib/utils/getVerifoneCheckoutUrl'

type CTA = {
  label: string
  style?: 'button-ghost' | 'button-outline' | 'button-solid'
  linkStyle?: 'button-ghost' | 'button-outline' | 'button-solid'
  target?: '_blank' | '_self'
  url?: string
  condition?: 'internal' | 'external'
  hasHash?: boolean
  hash?: string
  hasIcon?: boolean
  _key?: string
  _type?: string
}

type Stat = {
  label: string
  value: string
}

export type SectionCTAVariant = 'dark' | 'gradient'

export interface SectionCTAProps {
  align?: 'center' | 'left'
  className?: string
  ctas?: CTA[]
  heading?: string
  label?: string
  stats?: Stat[]
  subheading?: string
  variant?: SectionCTAVariant
}

export default function SectionCTA({
  align = 'center',
  className,
  ctas = [],
  heading,
  label,
  stats = [],
  subheading,
  variant = 'gradient',
}: SectionCTAProps) {
  const isCenter = align === 'center'
  const safeCtas = ctas ?? []

  // Find the first CTA that needs replacement to determine default plan
  const ctaToReplace = useMemo(() => {
    return safeCtas.find((cta) => cta.url != null && shouldReplaceWithVerifone(cta.url))
  }, [safeCtas])

  // Extract plan info from the first CTA that needs replacement
  const planInfo = useMemo(() => {
    if (!ctaToReplace?.url) return null
    return extractPlanFromUrl(ctaToReplace.url)
  }, [ctaToReplace])

  // Get Verifone URL for the default plan
  const { url: verifoneUrl, loading } = useVerifoneCheckoutUrl({
    enabled: !!ctaToReplace,
    level: planInfo?.level,
    billingCycle: planInfo?.billingCycle,
    defaultLevel: 'standard',
    defaultBillingCycle: 'month',
  })

  // Process CTAs: replace Recurly/checkout URLs with Verifone URLs
  const processedCTAs = useMemo(() => {
    if (!safeCtas.length) return []
    if (loading || !verifoneUrl) return safeCtas // Return original if still loading or no Verifone URL

    return safeCtas.map((cta) => {
      if (!cta.url) return cta
      if (!shouldReplaceWithVerifone(cta.url)) return cta

      // Replace with Verifone URL
      return {
        ...cta,
        url: verifoneUrl,
      }
    })
  }, [safeCtas, verifoneUrl, loading])

  return (
    <section className={clsx('relative isolate mt-6 md:mt-8', className)}>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
        <div
          className={clsx(
            'relative flex items-center justify-center',
            'min-h-[18.625rem] md:min-h-[30rem]'
          )}
        >
          {variant === 'dark' && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[#0F0E16]"
            />
          )}
          <Pinion
            classNames={{
              inner:
                clsx(
                  'relative z-10 flex flex-col gap-4 md:gap-6',
                  isCenter
                    ? 'items-center text-center'
                    : 'items-start text-left'
                ) + ' pb-[calc(1rem+env(safe-area-inset-bottom,0px))] md:pb-12',
              root: 'relative z-10 text-white !my-0',
            }}
            component="hero"
          >
            {label && (
              <Label
                className="type-h6 sm:type-h4 md:type-h3 mt-6 md:mt-10"
                content={label}
              />
            )}

            {heading && (
              <Heading
                as="h1"
                className={clsx(
                  'type-title-t7 sm:type-title-t6 md:type-title-t3 max-w-cols12',
                  isCenter ? 'mx-auto' : ''
                )}
                heading={heading}
              />
            )}

            {subheading && (
              <Heading
                as="h2"
                className={clsx(
                  'type-body-lg opacity-90 max-w-cols12',
                  isCenter ? 'mx-auto' : ''
                )}
                heading={subheading}
              />
            )}

            {!!stats?.length && (
              <div className="mt-2 grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-6">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={clsx(isCenter ? 'text-center' : 'text-left')}
                  >
                    <div className="type-title-t7 md:type-title-t6 leading-none">
                      {s.value}
                    </div>
                    <div className="mt-1 type-caption tracking-wide uppercase opacity-80">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

    {!!processedCTAs?.length && (
  <div
    className={clsx(
      'mt-2 flex flex-wrap items-center gap-3 pb-6 md:pb-0',
      isCenter ? 'justify-center' : '',
      'relative z-20'
    )}
  >
    {processedCTAs.map((c, i) => {
      if (!c.url) return null

      const url = c.url

      const mapStyleToLinkStyle = (style?: string): LinkStyleType | undefined => {
        if (!style) return undefined
        if (style === 'button-ghost') return 'ghost'
        if (style === 'button-outline') return 'button-outline'
        if (style === 'button-solid') return 'button-solid'
        return style as LinkStyleType
      }

      const linkProps: Partial<LinkType> = {
        _key: c._key || `cta-${i}`,
        _type: (c._type === 'link' || c._type === 'signUp' ? c._type : 'link') as 'link' | 'signUp',
        label: c.label,
        url: url,
        condition: c.condition || (url.startsWith('http') ? 'external' : 'internal'),
        linkStyle: c.linkStyle ? mapStyleToLinkStyle(c.linkStyle) : mapStyleToLinkStyle(c.style) || 'button-solid',
        hasIcon: c.hasIcon ?? true,
        hasHash: c.hasHash,
        hash: c.hash,
      }

      if (!c.condition && !c.linkStyle && !c.hasHash) {
        const isBlank = c.target === '_blank'
        const isSolid = c.style === 'button-solid'
        return (
          <a
            className={clsx(
              'cursor-pointer rounded-lg px-4 py-2.5 md:px-5 md:py-2.5 text-sm md:text-base font-medium',
              'transition-colors inline-flex items-center justify-center',
              isSolid
                ? '!bg-[#CB79F0] hover:!bg-[#B869E0] !text-white !border-0'
                : '!bg-[#CB79F0]/22 hover:!bg-[#CB79F0]/30 !text-white !border !border-white/60'
            )}
            href={loading ? '#' : url}
            key={`${c.label}-${i}`}
            rel={isBlank ? 'noopener noreferrer' : undefined}
            target={isBlank ? '_blank' : undefined}
          >
            {c.label}
          </a>
        )
      }

      return (
        <Link
          key={linkProps._key}
          {...linkProps}
        />
      )
    })}
  </div>
)}

          </Pinion>
        </div>
      </div>
    </section>
  )
}
