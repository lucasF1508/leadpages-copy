'use client'

import React from 'react'
import clsx from 'clsx'
import Label from '@/components/Label'
import Pinion from '@/components/Pinion'
import SubFooterGradient from '@/components/SubFooter/SubFooterGradient'
import Text from '@/components/Text'

export interface TemplateMarketplaceFooterCTAProps {
  buttonHref?: string
  buttonText?: string
  className?: string
  heading?: any
  inputPlaceholder?: string
  label?: string
  subheading?: string
}

export default function TemplateMarketplaceFooterCTA({
  buttonHref,
  buttonText,
  className,
  heading,
  inputPlaceholder,
  label,
  subheading,
}: TemplateMarketplaceFooterCTAProps) {
  const hasAnyContent = !!(label || heading || subheading || inputPlaceholder || buttonText)
  if (!hasAnyContent) return null

  return (
    <div className={clsx('relative isolate mt-0', className)}>
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
                'pt-3 md:pt-4 lg:pt-8 ' +
                'pb-[calc(1rem+env(safe-area-inset-bottom,0px))] md:pb-12',
              root: 'relative z-10 text-center text-white !my-0',
            }}
            component="hero"
          >
            {label ? (
              <Label className="text-xs font-semibold tracking-[0.2em] uppercase" content={label} />
            ) : null}

            {heading ? (
              <Text
                as="div"
                blockStyles={{
                  normal: {
                    className:
                      'text-3xl sm:text-4xl md:text-5xl !font-medium',
                    tag: 'h2',
                  },
                }}
                className="text-center [&>*]:!my-0 gap-2 md:gap-3 flex-col flex max-w-[90%] sm:max-w-[800px] mx-auto px-4 sm:px-0"
                content={heading}
              />
            ) : null}

            {subheading ? (
              <p className="text-base sm:text-lg max-w-[90%] sm:max-w-[700px] mx-auto opacity-90 px-4 sm:px-0">
                {subheading}
              </p>
            ) : null}

            {(inputPlaceholder || buttonText) ? (
              <div className="mt-5 md:mt-6 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-2.5 w-full md:w-auto max-w-[90%] md:max-w-none px-4 sm:px-0">
                <input
                  className={clsx(
                    'px-4 sm:px-6 py-2',
                    'rounded-[24px]',
                    'bg-white/10 backdrop-blur-sm',
                    'text-white text-xs placeholder:text-white/40',
                    'focus:outline-none',
                    'transition-all',
                    'w-full md:w-auto md:min-w-[300px] lg:min-w-[400px]'
                  )}
                  placeholder={inputPlaceholder || 'Sample@gmail.com'}
                  style={{
                    fontFamily: 'var(--font-inter, sans-serif)',
                    fontWeight: 400,
                  }}
                  type="email"
                />
                <a
                  className={clsx(
                    'inline-flex items-center justify-center',
                    'px-8 py-2',
                    'rounded-[24px]',
                    'bg-[#CEFF66] text-[#111018]',
                    'hover:bg-[#B8FF22] active:bg-[#AEFF00]',
                    'transition-colors',
                    'focus:outline-none focus:ring-2 focus:ring-[#CEFF66] focus:ring-offset-2 focus:ring-offset-[#0F0E16]',
                    'font-medium whitespace-nowrap',
                    'w-full md:w-auto'
                  )}
                  href={buttonHref ?? '#'}
                  style={{
                    fontFamily: 'var(--font-inter, sans-serif)',
                    fontSize: '17px',
                    fontWeight: 500,
                  }}
                >
                  {buttonText || 'Submit Email'}
                </a>
              </div>
            ) : null}
          </Pinion>
        </div>
      </div>
    </div>
  )
}


