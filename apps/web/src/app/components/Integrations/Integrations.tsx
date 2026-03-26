'use client'

import type { PortableTextBlock } from '@/types'
import type { LinkType } from '@/types'
import type { SanityImageProps } from '@/types'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Image from '@/components/Image'

export interface IntegrationsProps {
  cta?: LinkType[]
  heading?: PortableTextBlock[] | string
  image?: SanityImageProps
  label?: string
  overline?: string
  subheading?: PortableTextBlock[] | string
  variant?: 'dark' | 'light'
}

const Integrations = ({
  cta,
  heading,
  image,
  label,
  overline,
  subheading,
  variant = 'dark',
}: IntegrationsProps) => {
  const isLight = variant === 'light'

  if (!heading && !subheading && !image) {
    return null
  }

  return (
    <section
      className={clsx(
        'flex flex-col items-center w-full',
        isLight ? 'bg-white pt-8 md:pt-12 lg:pt-20 pb-8 md:pb-12 lg:pb-20' : 'mb-8 md:mb-12 lg:mb-16'
      )}
    >
      <div className={clsx('w-full', isLight ? 'mt-0' : 'mt-12')}>
        <div
          className={clsx(
            'rounded-xl',
            isLight ? 'bg-white border border-gray-200/80 shadow-[0_0_40px_-8px_rgba(124,58,237,0.15)]' : 'bg-white/10 backdrop-blur-[20px] border border-[#524F5F]/20',
            'mx-auto max-w-[calc(100vw-32px)] sm:max-w-[calc(100vw-80px)] lg:max-w-[calc(100vw-160px)] will-change-auto overflow-hidden py-8 md:py-10 lg:py-12'
          )}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            ...({ WebkitBackfaceVisibility: 'hidden' } as React.CSSProperties)
          }}
        >
          {/* Content Section */}
          <div className="flex flex-col items-center gap-1.5 md:gap-2 text-center px-4 sm:px-8 md:px-12 lg:px-20">
            {/* Overline - Roc Grotesk 500, xs, letter-spacing 16%, uppercase */}
            {overline && (
              <p
                className={clsx('text-xs font-medium uppercase tracking-[0.16em]', isLight ? 'text-black' : 'text-light/70')}
                style={{ 
                  fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                  fontWeight: 500,
                  lineHeight: 1
                }}
              >
                {overline}
              </p>
            )}

            {/* Heading - Uxum 400, 6xl, line-height 4xl, white, center */}
            {heading && (
              <div className="w-full">
                {typeof heading === 'string' ? (
                  <h2
                    className={clsx('text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-normal text-center leading-tight md:leading-[4rem]', isLight ? 'text-black' : 'text-white')}
                    style={{ 
                      fontFamily: 'var(--font-uxumvf, sans-serif)',
                      fontWeight: 400,
                      letterSpacing: '0px'
                    }}
                  >
                    {heading}
                  </h2>
                ) : (
                  <div
                    style={{ 
                      fontFamily: 'var(--font-uxumvf, sans-serif)',
                      fontWeight: 400,
                      letterSpacing: '0px'
                    }}
                  >
                    <Heading
                      className={clsx('text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-normal text-center leading-tight md:leading-[4rem]', isLight ? 'text-black' : 'text-white')}
                      content={heading} 
                    />
                  </div>
                )}
              </div>
            )}

            {/* Subheading - Inter 400, lg, line-height lg, white 90%, paragraph spacing 12px */}
            {subheading && (
              <div className="w-full">
                {typeof subheading === 'string' ? (
                  <p
                    className={clsx('text-base sm:text-lg font-normal text-center leading-relaxed md:leading-[2rem]', isLight ? '!text-black' : 'text-white/90')}
                    style={{ 
                      fontFamily: 'var(--font-inter, sans-serif)',
                      fontWeight: 400,
                      letterSpacing: '0px'
                    }}
                  >
                    {subheading.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < subheading.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                ) : (
                  <div
                    className={clsx('text-base sm:text-lg font-normal text-center leading-relaxed md:leading-[2rem]', isLight ? '!text-black' : 'text-white/90')}
                    style={{ 
                      fontFamily: 'var(--font-inter, sans-serif)',
                      fontWeight: 400,
                      letterSpacing: '0px'
                    }}
                  >
                    <Heading
                      className={clsx('text-base sm:text-lg font-normal text-center leading-relaxed md:leading-[2rem]', isLight ? '!text-black' : 'text-white/90')}
                      content={subheading}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Label */}
            {label && (
              <p
                className={clsx('text-base sm:text-lg font-medium text-center mt-4 mb-2', isLight ? '!text-black' : 'text-white')}
                style={{
                  fontFamily: 'var(--font-inter, sans-serif)',
                  fontWeight: 500,
                  letterSpacing: '0px'
                }}
              >
                {label}
              </p>
            )}

            {/* CTA: píldora; light morado + flecha; dark sin flecha, texto color botón sólido */}
            {cta && cta[0] && (
              <div className="mt-4">
                <a
                  className={clsx(
                    'inline-flex items-center gap-2 rounded-[40px] px-4 py-2 border text-[16px] font-medium transition-colors',
                    isLight
                      ? 'border-purple-500 text-purple-600 hover:bg-purple-50'
                      : 'border-button-surface-solid text-[rgb(var(--colors-button-surface-solid))] hover:bg-white/[0.06] hover:border-button-surface-solid-hover'
                  )}
                  href={cta[0].url || '#'}
                >
                  <span>{cta[0].label || 'Integrations'}</span>
                  {isLight && (
                    <span aria-hidden="true" className="text-lg leading-none">
                      →
                    </span>
                  )}
                </a>
              </div>
            )}
          </div>

          {/* Integration Logos Image - dark: hidden on mobile (original), light: visible on mobile */}
          {image && (
            <div
              className={clsx(
                'relative w-full mt-6 md:mt-8 -mb-8 md:-mb-10 lg:-mb-12',
                !isLight && 'hidden md:block',
                isLight && '[filter:drop-shadow(0_4px_20px_rgba(124,58,237,0.08))]'
              )}
              style={{
                isolation: 'isolate',
                aspectRatio: '1396 / 316'
              }}
            >
              <Image
                className="!object-contain"
                fill
                image={image}
                sizes="100vw"
                style={{
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Integrations
