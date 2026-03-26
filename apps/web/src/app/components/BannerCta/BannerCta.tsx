'use client'

import React from 'react'
import clsx from 'clsx'

export interface BannerCtaProps {
  ctaHref?: string
  ctaLabel?: string
  subtitle?: string
  title?: string
  variant?: 'light' | 'dark'
}

const BannerCta = ({
  ctaHref,
  ctaLabel,
  subtitle,
  title,
  variant = 'dark',
}: BannerCtaProps) => {
  const isDark = variant === 'dark'
  if (!title && !ctaLabel) return null

  return (
    <section
      className={clsx(
        'relative w-full',
        isDark ? 'my-8 md:my-12 lg:my-16' : 'bg-white py-8 md:py-12 lg:py-16'
      )}
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6">
        <div
          className={clsx(
            'mx-auto max-w-[1200px] rounded-[20px] sm:rounded-[24px]',
            isDark
              ? 'p-[2px]'
              : 'bg-[#f9ffdc] border border-[#d4dc7a]'
          )}
          style={
            isDark
              ? {
                  background:
                    'conic-gradient(from 315deg at 50% 50%, #CEFF66 0deg, #9061EE 90deg, #8FEFEF 180deg, #603EFF 270deg, #CEFF66 360deg)',
                }
              : undefined
          }
        >
          <div
            className={clsx(
              'rounded-[18px] sm:rounded-[22px]',
              'px-6 sm:px-8 md:px-12 py-5 sm:py-6',
              'flex flex-col items-center justify-center text-center gap-3 sm:gap-4',
              isDark ? 'bg-[#212024]' : ''
            )}
          >
            {title && (
              <h2
                className={clsx(
                  'text-[36px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-[400] leading-[1.15] tracking-[-0.01em] mb-1',
                  isDark ? 'text-white' : 'text-black'
                )}
              >
                {title}
              </h2>
            )}

            {subtitle && (
              <p
                className={clsx(
                  'text-[17px] sm:text-[18px] md:text-[20px] leading-[1.5] max-w-[600px]',
                  isDark ? 'text-gray-400' : 'text-black'
                )}
              >
                {subtitle}
              </p>
            )}

            {ctaLabel && (
              <a
                className={clsx(
                  'inline-flex items-center justify-center gap-1',
                  'rounded-[40px] px-3.5 h-[3rem]',
                  'text-[19px] font-medium transition-colors',
                  isDark
                    ? 'bg-button-surface-solid text-button-text-solid hover:bg-button-surface-solid-hover'
                    : 'bg-[#9061ee] text-white hover:bg-[#7d4fe0]'
                )}
                href={ctaHref ?? '#'}
              >
                <span>{ctaLabel}</span>
                <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerCta
