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
}

const Integrations = ({
  cta,
  heading,
  image,
  label,
  overline,
  subheading,
}: IntegrationsProps) => {
  if (!heading && !subheading && !image) {
    return null
  }

  return (
    <section className="flex flex-col items-center w-full mb-8 md:mb-12 lg:mb-16">
      {/* Content Container - Full Width */}
      <div className="w-full mt-12">
        <div
          className={clsx(
            'rounded-xl',
            'bg-white/10 backdrop-blur-[20px]',
            'border border-[#524F5F]/20',
            'mx-auto',
            'max-w-[calc(100vw-32px)] sm:max-w-[calc(100vw-80px)] lg:max-w-[calc(100vw-160px)]',
            'will-change-auto',
            'overflow-hidden',
            'py-8 md:py-10 lg:py-12'
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
                className="text-xs font-medium text-light/70 uppercase tracking-[0.16em]"
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
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-normal text-white text-center leading-tight md:leading-[4rem]"
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
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-normal text-white text-center leading-tight md:leading-[4rem]"
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
                    className="text-base sm:text-lg text-white/90 font-normal text-center leading-relaxed md:leading-[2rem]"
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
                    className="text-base sm:text-lg text-white/90 font-normal text-center leading-relaxed md:leading-[2rem]"
                    style={{ 
                      fontFamily: 'var(--font-inter, sans-serif)',
                      fontWeight: 400,
                      letterSpacing: '0px'
                    }}
                  >
                    <Heading
                      className="text-base sm:text-lg text-white/90 font-normal text-center leading-relaxed md:leading-[2rem]"
                      content={subheading}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Label */}
            {label && (
              <p
                className="text-base sm:text-lg text-white font-medium text-center mt-4 mb-2"
                style={{
                  fontFamily: 'var(--font-inter, sans-serif)',
                  fontWeight: 500,
                  letterSpacing: '0px'
                }}
              >
                {label}
              </p>
            )}

            {/* CTA Button */}
            {cta && cta[0] && (
              <div className="mt-4">
                <a
                  className="inline-flex items-center gap-2 group"
                  href={cta[0].url || '#'}
                >
                  <span className="text-white text-[16px] font-medium">
                    {cta[0].label || 'Integrations'}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center w-6 h-6 rounded-md bg-[#d4ff00] text-[#1a1d24] text-lg transition-colors group-hover:bg-[#c8f000]"
                  >
                    →
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* Integration Logos Image - Centered, full width */}
          {image && (
            <div
              className="hidden md:block relative w-full mt-6 md:mt-8 -mb-8 md:-mb-10 lg:-mb-12"
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
