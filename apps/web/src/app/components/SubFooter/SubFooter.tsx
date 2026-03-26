import type { LinkType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Label from '@/components/Label'
import Pinion from '@/components/Pinion'
import Links from '@/components/Link/Links'
import SubFooterGradient from '@/components/SubFooter/SubFooterGradient'
import { appendPersistedTrackingParams } from '@/lib/utils/trackingParams'

export interface SubFooterProps {
  className?: string
  ctaHref?: string
  ctaLabel?: string
  heading: string
  label?: string
  links?: LinkType[]
  subheading?: string
  target?: '_blank' | '_self'
  variant?: 'dark' | 'light'
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
  variant = 'dark',
}: SubFooterProps) => {
  const hasLinks = links && links.length > 0
  const hasLegacyCta = ctaHref && ctaLabel
  const isLight = variant === 'light'

  return (
    <div className={clsx('relative isolate', className)}>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
        <div
          className={clsx(
            'relative flex items-start justify-center min-h-[18.625rem] md:min-h-[30rem]',
            isLight ? 'pt-12 md:pt-16' : 'pt-4 md:pt-6'
          )}
        >
          {isLight ? (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#ebe6f5] via-[#f3f0f9] to-[#faf9fc]"
            />
          ) : (
            <>
              <SubFooterGradient className="absolute bottom-0 inset-x-0 h-[120%] w-full opacity-95 translate-y-6 md:translate-y-0" />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 top-8 md:top-12 bg-[#0F0E16] [mask-image:linear-gradient(to_top,black,transparent_65%)]"
              />
            </>
          )}

          <Pinion
            classNames={{
              inner:
                'relative z-10 flex flex-col items-center gap-3 md:gap-4 ' +
                'pb-[calc(1rem+env(safe-area-inset-bottom,0px))] md:pb-12',
              root: clsx(
                'relative z-10 text-center !my-0',
                isLight ? 'text-black' : 'text-white'
              ),
            }}
            component="hero"
          >
            {label && (
              <Label
                className={clsx(
                  'type-h6 sm:type-h4 md:type-h3',
                  isLight ? 'text-black' : ''
                )}
                content={label}
              />
            )}

            {heading && (
              <Heading
                as="h2"
                className={clsx(
                  'text-center type-title-t7 sm:type-title-t6 md:type-title-t3 max-w-cols12 mx-auto',
                  isLight && 'text-gray-900'
                )}
                heading={heading}
              />
            )}

            {subheading && (
              <Heading
                as="h3"
                className={clsx(
                  'text-center type-body-lg max-w-cols12 mx-auto mt-4 md:mt-6',
                  isLight ? 'text-black' : 'opacity-90'
                )}
                heading={subheading}
              />
            )}

            {hasLinks ? (
              <div
                className={clsx(
                  'mt-4 mb-2 flex justify-center [&_form]:flex [&_form]:gap-3 [&_form]:flex-wrap [&_form]:md:flex-nowrap [&_form]:justify-center [&_input]:!rounded-[40px] [&_input]:!border [&_input]:!h-6 [&_input]:md:max-w-[20rem] [&_button]:!rounded-[40px]',
                  isLight &&
                    '[&_input]:!bg-white [&_input]:border-purple-200 [&_input]:placeholder:text-gray-500 [&_input]:!text-black [&_.link-button-solid]:!bg-[#7E4AFF] [&_.link-button-solid]:!text-white [&_.link-button-solid]:!border-[#7E4AFF]'
                )}
                style={{ position: 'relative' as const, zIndex: 20 }}
              >
                <Links links={links} />
              </div>
            ) : hasLegacyCta ? (
              <a
                href={
                  typeof window === 'undefined' || target === '_blank'
                    ? ctaHref
                    : appendPersistedTrackingParams(ctaHref ?? '')
                }
                aria-label={ctaLabel}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={clsx(
                  'mt-4 mb-2',
                  isLight
                    ? 'inline-block rounded-md bg-[#7E4AFF] px-4 py-2 text-white font-medium hover:bg-[#9061EE]'
                    : 'link-button-solid'
                )}
                style={{ position: 'relative' as const, zIndex: 20 }}
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