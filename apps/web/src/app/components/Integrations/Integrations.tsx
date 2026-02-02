'use client'

import type { PortableTextBlock } from '@/types'
import type { LinkType } from '@/types'
import type { SanityImageProps } from '@/types'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import Link from '@/components/Link'

export interface IntegrationsProps {
  cta?: LinkType[]
  heading?: PortableTextBlock[] | string
  image?: SanityImageProps
  overline?: string
  subheading?: PortableTextBlock[] | string
}

const Integrations = ({
  cta,
  heading,
  image,
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
            'rounded-xl p-4 sm:p-5 md:p-6 lg:p-8',
            'bg-white/10 backdrop-blur-[20px]',
            'border border-[#524F5F]/20',
            'mx-auto',
            'max-w-[80vw] md:max-w-[70vw] lg:max-w-[65vw]',
            'will-change-auto',
            'overflow-hidden'
          )}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            ...({ WebkitBackfaceVisibility: 'hidden' } as React.CSSProperties)
          }}
        >
          {/* Content Section */}
          <div className="flex flex-col items-center gap-1.5 md:gap-2 text-center">
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

            {/* CTA Button */}
            {cta && cta[0] && (
              <div className="mt-0.5">
                <Link
                  {...cta[0]}
                  condition={cta[0].condition || 'external'}
                  hasIcon={true}
                  linkStyle="button-solid"
                  url={cta[0].url || ''}
                >
                  {cta[0].label || 'Integrations'}
                </Link>
              </div>
            )}
          </div>

          {/* Integration Logos Image - Sobrepasa por abajo, izquierda y derecha */}
          {image && (
            <div 
              className="w-[calc(100%+4rem)] sm:w-[calc(100%+5rem)] md:w-[calc(100%+6rem)] lg:w-[calc(100%+8rem)] mt-4 md:mt-6 -mb-6 sm:-mb-8 md:-mb-10 lg:-mb-12 -ml-4 sm:-ml-5 md:-ml-6 lg:-ml-8 -mr-4 sm:-mr-5 md:-mr-6 lg:-mr-8" 
              style={{ isolation: 'isolate' }}
            >
              <div className="relative w-full">
                <Image
                  className="w-full h-auto !object-contain"
                  image={image}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  style={{ 
                    imageRendering: 'crisp-edges'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Integrations
