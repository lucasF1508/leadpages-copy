// /apps/web/src/components/PressCard.tsx
'use client'
import React from 'react'
import Image from '@/components/Image'
import Text from '@/components/Text'

export type PressCardProps = {
  className?: string
  cta?: { href: string; label?: string; target?: '_blank' | '_self' }
  date?: string
  excerpt?: string
  image?: any
  layout?: 'full' | 'half'
  title: string
}

export default function PressCard({
  className,
  cta,
  date,
  excerpt,
  image,
  layout = 'half',
  title,
}: PressCardProps) {
  const openInNewTab = cta?.target === '_blank'

  const aspect =
    image?.asset?.metadata?.dimensions?.aspectRatio ??
    image?.metadata?.dimensions?.aspectRatio ??
    null
  const isUltraWide = typeof aspect === 'number' ? aspect > 2.2 : false

  // ================= FULL =================
  if (layout === 'full') {
    return (
      <article
        className={[
          'rounded-2xl md:rounded-3xl border bg-white shadow-sm',
          'border-[#B1ADBF]',
          'text-neutral-900 overflow-hidden',
          'h-full flex flex-col',
          className ?? '',
        ].join(' ')}
      >
        {image && (
          <div className="block md:hidden">
            <div
              className={[
                'w-full h-44 sm:h-48 grid place-items-center bg-white',
                'px-4 sm:px-6 rounded-xl',
                isUltraWide ? 'py-5' : 'py-4',
              ].join(' ')}
            >
              <Image
                className={[
                  'w-full h-full',
                  isUltraWide ? 'object-contain' : 'object-cover',
                ].join(' ')}
                image={image}
                style={{ objectFit: isUltraWide ? 'contain' : 'cover' }}
              />
            </div>
            <div className="border-b border-[#B1ADBF]" />
          </div>
        )}

        <div className="p-5 sm:p-6 md:p-8 flex-1">
          <div className="md:flex md:items-start md:gap-6">
            {image && (
              <div className="hidden md:flex items-center justify-center w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-[#B1ADBF] bg-white px-[6px] py-[5px]">
                <Image
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                  image={image}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            )}

            <div className="flex-1">
              {date && (
                <div className="text-[11px] font-medium tracking-[0.18em] text-neutral-500 mb-2 uppercase">
                  {date}
                </div>
              )}
              <h3 className="text-[18px] md:text-[20px] leading-snug font-semibold">
                {title}
              </h3>
              {excerpt && (
                <Text className="mt-2 text-neutral-600">{excerpt}</Text>
              )}

              {cta?.href && (
                <div className="mt-4 relative z-10 pointer-events-auto">
                  <a
                    href={cta.href}
                    target={openInNewTab ? '_blank' : undefined}
                    rel={openInNewTab ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-2 cursor-pointer
                               text-sm font-medium text-neutral-900
                               underline decoration-[#7C3AED] decoration-2 underline-offset-4
                               hover:opacity-90 transition"
                  >
                    {cta.label ?? 'Read More'}
                    <svg
                      className="w-[18px] h-[18px] transition-transform duration-150 group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    )
  }

  // ================= HALF =================
  return (
    <article
      className={[
        'rounded-2xl md:rounded-3xl border bg-white shadow-sm',
        'border-[#B1ADBF]',
        'overflow-hidden text-neutral-900',
        'h-full flex flex-col',
        className ?? '',
      ].join(' ')}
    >
      {image && (
        <div className="w-full">
          <div
            className={[
              'w-full h-44 sm:h-56 md:h-64 grid place-items-center bg-white',
              isUltraWide ? 'px-4 py-3' : '',
            ].join(' ')}
          >
            <Image
              className={[
                'w-full h-full',
                isUltraWide ? 'object-contain' : 'object-cover',
              ].join(' ')}
              image={image}
              style={{ objectFit: isUltraWide ? 'contain' : 'cover' }}
            />
          </div>
          <div className="border-b border-[#B1ADBF]" />
        </div>
      )}

      <div className="p-5 sm:p-6 md:p-8 flex-1">
        {date && (
          <div className="text-[11px] font-medium tracking-[0.18em] text-neutral-500 mb-2 uppercase">
            {date}
          </div>
        )}
        <h3 className="text-[20px] md:text-[22px] leading-snug font-semibold">
          {title}
        </h3>
        {excerpt && <Text className="mt-3 text-neutral-600">{excerpt}</Text>}

        {cta?.href && (
          <div className="mt-4 relative z-10 pointer-events-auto">
            <a
              className="group inline-flex items-center gap-2 cursor-pointer
                         text-sm font-medium text-neutral-900
                         underline decoration-[#7C3AED] decoration-2 underline-offset-4
                         hover:opacity-90 transition"
              href={cta.href}
              rel={openInNewTab ? 'noopener noreferrer' : undefined}
              target={openInNewTab ? '_blank' : undefined}
            >
              {cta.label ?? 'Read More'}
              <svg
                aria-hidden="true"
                className="w-[18px] h-[18px] transition-transform duration-150 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </article>
  )
}
