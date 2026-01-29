import type { MediaType } from '@types'
import React from 'react'
import clsx from 'clsx'
import HeroMedia from '@/components/Hero/HeroMedia'
import Text from '@/components/Text'

export interface HeroHomeNewProps {
  content?: any
  heading?: string
  media?: MediaType
  primaryCta?: { href?: string; label?: string }
  secondaryCta?: { href?: string; label?: string }
  theme?: 'dark' | 'light'
}

export default function HeroHomeNew({
  content,
  heading,
  media,
  primaryCta,
  secondaryCta,
  theme = 'dark',
}: HeroHomeNewProps) {
  const isDark = theme === 'dark'

  const primaryBtn = isDark
    ? 'bg-white text-black hover:bg-white/90'
    : 'bg-[#ceff66] text-black hover:bg-[#c3f25f]'

  const secondaryBtn = isDark
    ? 'bg-[#141414] text-white border border-[#ff5a5a]/35 hover:border-[#ff5a5a]/55'
    : 'bg-[#141414] text-white hover:bg-black/90'

  return (
    <section className="w-full my-8 sm:my-12 md:my-16">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8">
        <div
          className={clsx(
            'overflow-hidden rounded-[44px]',
            isDark ? 'bg-[#000000] text-white' : 'bg-white text-black'
          )}
        >
          <div className="pl-6 py-6 sm:pl-10 sm:py-8 lg:pl-12 lg:py-10">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.45fr] lg:gap-8">
              {/* LEFT */}
              <div className="flex flex-col">
                {heading ? (
                  <h1 className="font-semibold tracking-tight leading-[1.1] text-[40px] sm:text-[48px] lg:text-[56px]">
                    {heading}
                  </h1>
                ) : null}

                {content ? (
                  <div
                    className={clsx(
                      'mt-6',
                      isDark ? 'text-white/70' : 'text-black'
                    )}
                  >
                    <Text
                      as="div"
                      baseStyles={false}
                      className={clsx(
                        '[&_p]:text-[18px] sm:[&_p]:text-[20px] [&_p]:leading-[1.6] [&_p]:m-0',
                        isDark ? '[&_p]:text-white/70' : '[&_p]:!text-[#000000]'
                      )}
                      content={content}
                    />
                  </div>
                ) : null}

                <div className="mt-8 flex items-center gap-4">
                  {primaryCta?.label ? (
                    <a
                      className={clsx(
                        'inline-flex h-[52px] items-center justify-center px-6 text-[18px] font-medium transition',
                        'rounded-[10px]',
                        primaryBtn
                      )}
                      href={primaryCta.href ?? '#'}
                    >
                      {primaryCta.label}
                    </a>
                  ) : null}

                  {secondaryCta?.label ? (
                    <a
                      className={clsx(
                        'inline-flex h-[52px] items-center justify-center px-6 text-[18px] font-medium transition',
                        'rounded-[10px]',
                        secondaryBtn
                      )}
                      href={secondaryCta.href ?? '#'}
                    >
                      {secondaryCta.label}
                    </a>
                  ) : null}
                </div>
              </div>

              {/* RIGHT */}
              {media ? (
                <div className="relative flex w-full items-center justify-end">
                  {/* fondo falso que extiende el blanco del card */}
                  {!isDark && (
                    <div className="pointer-events-none absolute inset-x-0 -bottom-40 h-40 bg-white" />
                  )}

                  <div className="relative w-full max-w-[1040px] h-[520px] lg:h-[560px] translate-y-[18px] overflow-visible">
                    <HeroMedia
                      classNames={{
                        media:
                          'w-full h-full [&_img]:w-full [&_img]:h-full [&_img]:object-contain [&_img]:object-center [&_img]:bg-transparent ' +
                          '[&_img]:scale-[1.07] [&_img]:filter',
                        root: 'w-full h-full overflow-visible bg-transparent',
                      }}
                      limitlessImage
                      media={media}
                      overflow={false}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
