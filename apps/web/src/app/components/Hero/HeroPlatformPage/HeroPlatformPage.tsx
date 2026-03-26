import type { MediaType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Media from '@/components/Media'
import Text from '@/components/Text'
import { LinkIcon } from '@/components/Link'

/** True si el href es una URL absoluta (http/https); para estos enlaces se usa target="_blank". */
function isExternalUrl(href: string | undefined): boolean {
  if (!href || typeof href !== 'string') return false
  return href.startsWith('http://') || href.startsWith('https://')
}

export interface HeroPlatformPageProps {
  content?: any
  heading?: string
  label?: string
  media?: MediaType
  primaryCta?: { href?: string; label?: string }
  secondaryCta?: { href?: string; label?: string }
  stats?: Array<{
    _key?: string
    description: string
    value: string
  }>
}

export default function HeroPlatformPage({
  content,
  heading,
  label,
  media,
  primaryCta,
  secondaryCta,
  stats,
}: HeroPlatformPageProps) {
  const isVideo = media?.condition === 'video'
  const safeStats = (stats ?? []).filter((s) => !!s?.value && !!s?.description)

  return (
    <section className="relative w-full overflow-hidden bg-[#0b0b1a]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute"
          style={{
            background: 'radial-gradient(ellipse 90% 125% at 100% 37%, rgba(80,45,220,0.6) 0%, rgba(60,30,180,0.35) 30%, rgba(40,15,130,0.12) 50%, transparent 68%)',
            filter: 'blur(40px)',
            inset: 0,
          }}
        />
        <div
          className="absolute"
          style={{
            background: 'radial-gradient(ellipse 60% 90% at 102% 31%, rgba(140,100,255,0.5) 0%, rgba(96,62,255,0.3) 37%, rgba(60,30,180,0.1) 55%, transparent 68%)',
            filter: 'blur(30px)',
            inset: 0,
          }}
        />
        <div
          className="absolute"
          style={{
            background: 'radial-gradient(ellipse 35% 45% at 107% 28%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 15%, rgba(240,230,255,0.7) 30%, rgba(180,150,255,0.35) 50%, transparent 72%)',
            filter: 'blur(20px)',
            inset: 0,
          }}
        />
        <div
          className="absolute"
          style={{
            background: 'radial-gradient(ellipse 20% 25% at 107% 28%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 30%, rgba(220,210,255,0.3) 60%, transparent 80%)',
            filter: 'blur(15px)',
            inset: 0,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-7 md:px-8">
        <div className="py-6 sm:py-8 md:py-10 lg:py-12">

          <div className="flex flex-col lg:grid lg:grid-cols-[46%_54%] lg:gap-0">

              <div className="relative z-10 flex flex-col justify-center order-2 lg:order-1 text-white lg:pr-8 xl:pr-10">

              {label && (
                <span className="text-white/70 text-[11px] sm:text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase mb-3 sm:mb-4">
                  {label}
                </span>
              )}

              {heading ? (
                <h1 className="tracking-[-0.02em] leading-[1.12] text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[44px] font-normal text-white">
                  {heading}
                </h1>
              ) : null}

              {content ? (
                <div className="mt-5 sm:mt-6">
                  <Text
                    as="div"
                    baseStyles={false}
                    className="[&_p]:text-[14px] sm:[&_p]:text-[15px] md:[&_p]:text-[16px] [&_p]:leading-[1.6] [&_p]:m-0 [&_p]:text-white/80"
                    content={content}
                  />
                </div>
              ) : null}

              <div className="mt-7 sm:mt-8 flex flex-row items-center gap-3 sm:gap-5">
                {primaryCta?.label ? (
                  <a
                    className={clsx(
                      'inline-flex h-[46px] sm:h-[50px] items-center justify-center px-2',
                      'text-[14px] sm:text-[15px] font-medium transition rounded-[40px] whitespace-nowrap',
                      'bg-button-surface-solid text-button-text-solid hover:bg-button-surface-solid-hover'
                    )}
                    href={primaryCta.href ?? '#'}
                    {...(isExternalUrl(primaryCta.href) && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    {primaryCta.label}
                    <span aria-hidden="true" className="ml-2 inline-flex">
                      <LinkIcon />
                    </span>
                  </a>
                ) : null}

                {secondaryCta?.label ? (
                  <a
                    className={clsx(
                      'inline-flex h-[46px] sm:h-[50px] items-center justify-center',
                      'text-[14px] sm:text-[15px] font-medium transition whitespace-nowrap',
                      'bg-transparent text-white relative group'
                    )}
                    href={secondaryCta.href ?? '#'}
                    {...(isExternalUrl(secondaryCta.href) && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                  >
                    <span className="flex items-center gap-2 relative">
                      <span>{secondaryCta.label}</span>
                      <span aria-hidden="true" className="inline-flex">
                        <LinkIcon />
                      </span>
                      <span
                        className="absolute left-0 right-0 bottom-0 h-[1px] bg-current transition-all duration-200 opacity-0 group-hover:opacity-100"
                      />
                    </span>
                  </a>
                ) : null}
              </div>

              {safeStats.length > 0 && (
                <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-nowrap gap-x-3 sm:gap-x-3.5 lg:gap-x-4">
                  {safeStats.map((stat, index) => {
                    const key = stat._key ?? `${stat.value}-${index}`
                    return (
                      <div className="text-left" key={key}>
                        <div className="font-bold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-none text-[#c47ff3] whitespace-nowrap">
                          {stat.value}
                        </div>
                        <p className="mt-0.5 text-[10px] sm:text-[11px] md:text-[12px] text-white/50 font-normal">
                          {stat.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {media ? (
              <div className="relative z-0 flex w-full items-center justify-end order-1 lg:order-2 mb-6 lg:mb-0">
                {isVideo ? (
                  <div className="w-full lg:w-[125%]">
                    <div className="w-full bg-gradient-to-b from-[#3a3d44] to-[#2a2d33] overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[28px] p-[4px] sm:p-[6px] md:p-[8px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      <div className="relative rounded-[13px] sm:rounded-[18px] md:rounded-[22px] overflow-hidden aspect-[4/3]">
                        <Media
                          classNames={{ root: 'absolute inset-0 w-full h-full' }}
                          fill
                          media={media}
                          priority
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full lg:w-[125%]">
                    <div className="w-full bg-gradient-to-b from-[#3a3d44] to-[#2a2d33] overflow-hidden rounded-[16px] sm:rounded-[22px] md:rounded-[28px] p-[4px] sm:p-[6px] md:p-[8px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                      <div className="relative overflow-hidden rounded-[13px] sm:rounded-[18px] md:rounded-[22px] bg-[#1a1b21] aspect-[4/3]">
                        <Media
                          classNames={{
                            media:
                              '!object-contain object-center [&_img]:!rounded-none',
                            root: 'relative h-full w-full overflow-hidden rounded-[13px] sm:rounded-[18px] md:rounded-[22px]',
                          }}
                          fill
                          media={media}
                          priority
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
