import type { MediaType } from '@types'
import React from 'react'
import clsx from 'clsx'
import HeroMedia from '@/components/Hero/HeroMedia'
import Media from '@/components/Media'
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
  const isVideo = media?.condition === 'video'

  const primaryBtn = isDark
    ? 'bg-white text-black hover:bg-white/90'
    : 'bg-[#c47ff3] text-white hover:bg-[#b366e8]'

  const secondaryBtn = isDark
    ? 'bg-[#141414] text-white border border-[#ff5a5a]/35 hover:border-[#ff5a5a]/55'
    : 'bg-transparent text-black'

  return (
    <section className="w-full my-4 sm:my-8 md:my-12 lg:my-16">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8">
        <div
          className={clsx(
            'overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[44px]',
            isDark ? 'bg-[#000000] text-white' : 'bg-white text-black'
          )}
        >
          <div className="p-4 sm:p-6 md:pl-10 md:py-8 lg:pl-12 lg:py-10">
            <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1.45fr] lg:gap-8">
              {/* LEFT */}
              <div className="relative z-10 flex flex-col order-2 lg:order-1">
                {heading ? (
                  <h1 className="tracking-tight leading-[1.1] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px]">
                    {heading}
                  </h1>
                ) : null}

                {content ? (
                  <div
                    className={clsx(
                      'mt-4 sm:mt-6',
                      isDark ? 'text-white/70' : 'text-black'
                    )}
                  >
                    <Text
                      as="div"
                      baseStyles={false}
                      className={clsx(
                        '[&_p]:text-[16px] sm:[&_p]:text-[18px] md:[&_p]:text-[20px] [&_p]:leading-[1.6] [&_p]:m-0',
                        isDark ? '[&_p]:text-white/70' : '[&_p]:!text-[#000000]'
                      )}
                      content={content}
                    />
                  </div>
                ) : null}

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-start sm:justify-start gap-3 md:flex-nowrap">
                  {primaryCta?.label ? (
                    <a
                      className={clsx(
                        'inline-flex min-h-[48px] sm:min-h-[52px] h-auto py-3 sm:py-0 sm:h-[52px] items-center justify-center px-6 sm:px-8 text-[16px] sm:text-[18px] font-medium transition',
                        'rounded-[40px] whitespace-nowrap leading-tight shrink-0',
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
                        'inline-flex min-h-[48px] sm:min-h-[52px] h-auto py-3 sm:py-0 sm:h-[52px] items-center justify-center px-6 sm:px-8 text-[16px] sm:text-[18px] font-medium transition',
                        'rounded-[40px] whitespace-nowrap leading-tight shrink-0',
                        secondaryBtn,
                        'relative group'
                      )}
                      href={secondaryCta.href ?? '#'}
                    >
                      <span className="flex items-center gap-2 relative">
                        <span>{secondaryCta.label}</span>
                        <span aria-hidden="true">→</span>
                        <span 
                          className={clsx(
                            'absolute left-0 right-0 bottom-0 h-[1.5px] bg-current transition-all duration-200',
                            'opacity-0 group-hover:opacity-100'
                          )}
                        />
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>

              {/* RIGHT */}
              {media ? (
                <div
                  className={clsx(
                    'relative z-0 flex w-full items-center justify-center order-1 lg:order-2',
                    !isVideo && 'lg:justify-end'
                  )}
                >
                  {!isDark && !isVideo && (
                    <div className="pointer-events-none absolute inset-x-0 -bottom-20 sm:-bottom-40 h-20 sm:h-40 bg-white" />
                  )}

                  {isVideo ? (
                    <div className="relative w-full flex items-center justify-center">
                      <div className="w-full bg-gradient-to-b from-[#2e3139] to-[#22252b] rounded-[20px] md:rounded-[32px] p-[6px] md:p-[10px] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
                        <div className="relative rounded-[16px] md:rounded-[26px] overflow-hidden">
                          <Media
                            media={media}
                            priority
                            sizes="(max-width: 900px) 100vw, 55vw"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full max-w-[1040px] h-[200px] sm:h-[260px] md:h-[320px] lg:h-[560px] translate-y-0 sm:translate-y-[12px] lg:translate-y-[18px] overflow-hidden sm:overflow-visible">
                      <HeroMedia
                        classNames={{
                          media:
                            'w-full h-full [&_img]:w-full [&_img]:h-full [&_img]:!object-contain [&_img]:!object-center [&_img]:bg-transparent ' +
                            '[&_img]:scale-[1.0] sm:[&_img]:scale-[1.07] lg:[&_img]:scale-[1.07] [&_img]:filter',
                          root: 'w-full h-full overflow-visible bg-transparent',
                        }}
                        limitlessImage
                        media={media}
                        overflow={false}
                      />
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
