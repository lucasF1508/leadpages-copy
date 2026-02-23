'use client'

import React from 'react'
import clsx from 'clsx'

export interface BannerCtaProps {
  ctaHref?: string
  ctaLabel?: string
  subtitle?: string
  title?: string
}

const BannerCta = ({
  ctaHref,
  ctaLabel,
  subtitle,
  title,
}: BannerCtaProps) => {
  if (!title && !ctaLabel) return null

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6">
        <div
          className={clsx(
            'mx-auto max-w-[1200px]',
            'rounded-[20px] sm:rounded-[24px]',
            'bg-[#f9ffdc] border-2 border-[#d4dc7a]',
            'px-6 sm:px-8 md:px-12',
            'py-5 sm:py-6',
            'flex flex-col items-center justify-center text-center gap-3 sm:gap-4'
          )}
        >
          {title && (
            <h2 className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-[400] leading-[1.15] tracking-[-0.01em] text-black mb-1">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="text-[17px] sm:text-[18px] md:text-[20px] leading-[1.5] text-black max-w-[600px]">
              {subtitle}
            </p>
          )}

          {ctaLabel && (
            <a
              className={clsx(
                'inline-flex items-center justify-center gap-1',
                'rounded-[10px] bg-[#9061ee] hover:bg-[#7d4fe0]',
                'px-3.5',
                'h-[3rem]',
                'text-[19px] sm:text-[19px] font-medium text-white',
                'transition-colors'
              )}
              href={ctaHref ?? '#'}
            >
              <span>{ctaLabel}</span>
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default BannerCta
