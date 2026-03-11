'use client'

/**
 * Hero Landing Generator – cards estáticas (sin animación), todas del mismo tamaño.
 * Box central idéntica a new-homepage-hero (Michael).
 */

import type { ImageType, PortableTextBlock } from '@types'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { PortableText } from '@portabletext/react'
import Image from '@/components/Image'
import Pinion from '@/components/Pinion'
import Link from '@/components/Link'

export interface HeroLandingGeneratorProps {
  /** Portable text (blockContentHero) – single field with formatting. Use "Brand Green (Highlight)" mark for green accent. */
  heading?: PortableTextBlock[] | string
  /** @deprecated Use heading block content. Fallback for legacy documents. */
  headingLine2?: string
  /** @deprecated Use heading block content with highlight mark. Fallback for legacy documents. */
  headingHighlight?: string
  subtitle?: string
  inputPlaceholder?: string
  ctaLabel?: string
  ctaUrl?: string
  disclaimer?: string
  carouselImages?: ImageType[]
  /** When false, background cards scroll right-to-left (marquee). When true, cards are static. */
  cardsStatic?: boolean
}

const defaultProps: Partial<HeroLandingGeneratorProps> = {
  heading: 'Powerful Landing',
  headingLine2: 'Pages That ',
  headingHighlight: 'Convert.',
  subtitle: 'Create a landing page directly from your brand in seconds — paste your URL to get started.',
  inputPlaceholder: 'Enter your URL',
  ctaLabel: 'Generate My Page',
  ctaUrl: '#',
  disclaimer: '',
}

const GRADIENT_SLIDES = [
  { className: 'from-purple-900/90 via-indigo-800/80 to-blue-900/90' },
  { className: 'from-violet-900/90 via-indigo-900/85 to-slate-900/90' },
  { className: 'from-indigo-900/90 via-blue-900/85 to-cyan-900/90' },
  { className: 'from-slate-900/90 via-blue-900/80 to-violet-900/90' },
]

const CARD_SHADOW = '0 28px 70px rgba(0,0,0,0.88), 0 14px 36px rgba(0,0,0,0.8), 0 6px 16px rgba(0,0,0,0.7)'
const BG_FADE_DELAY_MS = 500
const CREATE_BASE_URL = 'https://create.leadpagestest.com'
const STATIC_CARDS_WIDE_BREAKPOINT = 1400
const GAP_PX = 10
const CARD_UNIFORM_WIDTH = 440
const MARQUEE_DURATION_S = 120

const heroHeadingMarks = {
  highlight: ({ children }: { children?: React.ReactNode }) => (
    <span style={{ color: '#a7ed2a' }}>{children}</span>
  ),
}

const HeroLandingGenerator = ({
  heading,
  headingLine2 = defaultProps.headingLine2,
  headingHighlight = defaultProps.headingHighlight,
  subtitle = defaultProps.subtitle,
  inputPlaceholder = defaultProps.inputPlaceholder,
  ctaLabel = defaultProps.ctaLabel,
  ctaUrl: _ctaUrl = defaultProps.ctaUrl,
  disclaimer = defaultProps.disclaimer,
  carouselImages = [],
  cardsStatic = true,
}: HeroLandingGeneratorProps) => {
  const [url, setUrl] = useState('')
  const [bgVisible, setBgVisible] = useState(false)
  const [wideLayout, setWideLayout] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const createUrl = `${CREATE_BASE_URL}/?url=${encodeURIComponent(url.trim() || 'https://example.com')}`

  const rawImages = Array.isArray(carouselImages) ? carouselImages : []
  const validImages = rawImages.filter((img) => {
    if (!img || typeof img !== 'object') return false
    const m = img as Record<string, unknown>
    return !!(m.asset || m.url || (img as { src?: string }).src)
  })
  const hasValidImages = validImages.length > 0
  const slides = hasValidImages ? validImages : GRADIENT_SLIDES
  const slideCount = slides.length
  const slideDuration = Math.max(8, Math.floor(40 / slideCount))
  const numCards = wideLayout ? 7 : 5
  const staticImages = hasValidImages ? validImages.slice(0, numCards) : []
  const mobileCentralIndex = numCards === 5 ? 2 : 3
  const mobileImages =
    isMobile && staticImages.length > 0
      ? [staticImages[Math.min(mobileCentralIndex, staticImages.length - 1)]]
      : staticImages

  useEffect(() => {
    const t = setTimeout(() => setBgVisible(true), BG_FADE_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${STATIC_CARDS_WIDE_BREAKPOINT}px)`)
    const onChange = () => setWideLayout(mq.matches)
    setWideLayout(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const onChange = () => setIsMobile(mq.matches)
    setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const pixelStyleId = 'hero-pixel-pulse-keyframes'
    if (typeof document !== 'undefined' && !document.getElementById(pixelStyleId)) {
      const pixelStyle = document.createElement('style')
      pixelStyle.id = pixelStyleId
      pixelStyle.textContent = `@keyframes hero-pixel-pulse{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`
      document.head.appendChild(pixelStyle)
    }
  }, [])

  return (
    <Pinion
      component="hero"
      inner={false}
      className="theme-dark w-full !px-0 overflow-x-hidden"
    >
      <div className="relative w-full min-h-[32rem] sm:min-h-[35rem] md:min-h-[40rem] flex items-center justify-center py-4 sm:py-6 md:py-8 overflow-x-hidden overflow-y-hidden">
        {/* Fondo: 5 o 7 cards estáticas, todas del mismo tamaño, gap fijo */}
        <div
          className={clsx(
            'absolute inset-0 pointer-events-none overflow-hidden min-w-0 transition-opacity duration-[1200ms] ease-out',
            bgVisible ? 'opacity-100' : 'opacity-0'
          )}
          aria-hidden
        >
          {hasValidImages && (staticImages.length > 0 || mobileImages.length > 0) ? (
            cardsStatic ? (
              <div
                className="absolute inset-0 flex items-center justify-center overflow-hidden"
                style={{ perspective: '1200px' }}
              >
                <div className="flex flex-nowrap items-center justify-center h-full max-h-full">
                  {(isMobile ? mobileImages : staticImages).map((image, idx) => {
                    const list = isMobile ? mobileImages : staticImages
                    const n = list.length
                    const width = isMobile ? 300 : CARD_UNIFORM_WIDTH
                    const marginStyle: React.CSSProperties =
                      n === 1 ? {} : idx === 0 ? { marginRight: GAP_PX } : idx === n - 1 ? { marginLeft: GAP_PX } : { marginLeft: GAP_PX, marginRight: GAP_PX }
                    return (
                      <div
                        key={`static-${idx}-${(image as { _key?: string })?._key ?? (image as { _id?: string })?._id ?? idx}`}
                        className="relative shrink-0 rounded-[10px] overflow-hidden bg-black"
                        style={{
                          width: `${width}px`,
                          aspectRatio: '4/5',
                          boxShadow: CARD_SHADOW,
                          ...marginStyle,
                        }}
                      >
                        <Image
                          image={image as ImageType}
                          fill
                          className="object-cover blur-[2.5px]"
                          sizes={isMobile ? `${width}px` : `${width}px`}
                        />
                        <div className="absolute inset-0 bg-black/65" />
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div
                className="absolute inset-0 flex items-center overflow-hidden"
                style={{ perspective: '1200px' }}
              >
                <style>{`@keyframes hero-carousel-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
                <div
                  className="flex flex-nowrap items-center h-full max-h-full flex-shrink-0"
                  style={{
                    animation: `hero-carousel-scroll ${MARQUEE_DURATION_S}s linear infinite`,
                  }}
                >
                  {[staticImages, staticImages].flat().map((image, idx) => {
                    const width = isMobile ? 280 : CARD_UNIFORM_WIDTH
                    return (
                      <div
                        key={`marquee-${idx}-${(image as { _key?: string })?._key ?? (image as { _id?: string })?._id ?? idx}`}
                        className="relative shrink-0 rounded-[10px] overflow-hidden bg-black flex-shrink-0"
                        style={{
                          width: `${width}px`,
                          marginRight: GAP_PX,
                          aspectRatio: '4/5',
                          boxShadow: CARD_SHADOW,
                        }}
                      >
                        <Image
                          image={image as ImageType}
                          fill
                          className="object-cover blur-[2.5px]"
                          sizes={isMobile ? `${width}px` : `${width}px`}
                        />
                        <div className="absolute inset-0 bg-black/65" />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          ) : (
            <div className="absolute inset-0">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="absolute inset-0 animate-[hero-landing-fade_40s_ease-in-out_infinite]"
                  style={{
                    animationDelay: `${index * slideDuration}s`,
                    animationDuration: `${slideCount * slideDuration}s`,
                  }}
                >
                  <div
                    className={clsx(
                      'absolute inset-0 bg-gradient-to-br scale-110',
                      (slide as { className?: string }).className
                    )}
                  />
                  <div
                    className={clsx(
                      'absolute inset-0 bg-gradient-to-br',
                      (slide as { className?: string }).className
                    )}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Overlay oscuro para que el subtítulo gris tenga buen contraste */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)',
          }}
          aria-hidden
        />

        {/* Box central idéntica a new-homepage-hero (Michael) */}
        <div className="relative z-10 w-full mx-auto px-3 sm:px-4 flex flex-col items-center py-4 sm:py-6 md:py-8" style={{ maxWidth: 1200 }}>
          <div
            className="relative z-[2] mx-auto w-full rounded-[20px] sm:rounded-[28px] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(167,237,42,0.4) 0%, rgba(95,46,248,0.5) 50%, rgba(95,46,248,0.2) 100%)',
              boxShadow: '0 30px 80px -10px rgba(0, 0, 0, 0.8), 0 50px 140px -20px rgba(0, 0, 0, 0.7), 0 0 60px rgba(95, 46, 248, 0.25), 0 0 140px rgba(95, 46, 248, 0.15)',
              maxWidth: 960,
              padding: 2,
            }}
          >
            <div
              className="relative rounded-[18px] sm:rounded-[26px] overflow-hidden px-3 py-4 sm:px-6 sm:py-6 md:py-8"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(95, 46, 248, 0.55) 0%, rgba(5, 5, 16, 1) 65%)',
              }}
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* NEW pill — centrada */}
                <div className="w-full max-w-[960px] flex justify-center mb-2 sm:mb-3">
                <div
                  className="inline-flex items-center gap-1.5 sm:gap-2 backdrop-blur-xl flex-wrap"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 999,
                    borderTop: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 6px rgba(0,0,0,0.2)',
                    padding: '4px 10px 4px 4px',
                  }}
                >
                  <span
                    className="inline-flex items-center rounded-[14px] sm:rounded-[18px] px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0"
                    style={{ background: '#a7ed2a', color: '#0a0a0a' }}
                  >
                    New
                  </span>
                  <span
                    className="text-[11px] sm:text-[13px]"
                    style={{ color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)' }}
                  >
                    AI-powered page generation from your brand
                  </span>
                </div>
                </div>

                {/* Headline — Portable Text o fallback legacy */}
                <h1
                  className="mx-auto w-full px-0.5"
                  style={{
                    fontFamily: 'var(--font-uxumvf, serif)',
                    fontSize: 'clamp(28px, 5.2vw, 80px)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.08,
                  }}
                >
                  {Array.isArray(heading) && heading.length > 0 ? (
                    <PortableText
                      value={heading}
                      components={{
                        block: {
                          normal: ({ children }) => <span className="block">{children}</span>,
                          'h1-hero': ({ children }) => <span className="block">{children}</span>,
                          'h2-hero': ({ children }) => <span className="block">{children}</span>,
                          'h3-hero': ({ children }) => <span className="block">{children}</span>,
                          'h4-hero': ({ children }) => <span className="block">{children}</span>,
                          h2: ({ children }) => <span className="block">{children}</span>,
                          h3: ({ children }) => <span className="block">{children}</span>,
                          h4: ({ children }) => <span className="block">{children}</span>,
                          h5: ({ children }) => <span className="block">{children}</span>,
                          h6: ({ children }) => <span className="block">{children}</span>,
                          larger: ({ children }) => <span className="block">{children}</span>,
                          smaller: ({ children }) => <span className="block">{children}</span>,
                          smallest: ({ children }) => <span className="block">{children}</span>,
                          overline: ({ children }) => <span className="block">{children}</span>,
                          blockquote: ({ children }) => <span className="block">{children}</span>,
                        },
                        marks: heroHeadingMarks,
                      }}
                    />
                  ) : (
                    <>
                      <span className="whitespace-nowrap">
                        {typeof heading === 'string'
                          ? heading
                          : typeof defaultProps.heading === 'string'
                            ? defaultProps.heading
                            : 'Powerful Landing'}
                      </span>
                      <br />
                      {headingLine2}
                      {headingHighlight && <span style={{ color: '#a7ed2a' }}>{headingHighlight}</span>}
                    </>
                  )}
                </h1>

                {/* Subcopy */}
                <p
                  className="mx-auto mt-1.5 sm:mt-2 max-w-[560px] px-1"
                  style={{
                    color: 'rgba(255, 255, 255, 0.65)',
                    fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                    fontSize: 'clamp(15px, 1.5vw, 22px)',
                    fontWeight: 400,
                    lineHeight: 1.55,
                  }}
                >
                  {subtitle}
                </p>

                {/* Input + button — mobile: input en pill, botón debajo; desktop: ambos en una pill */}
                <div className="mt-4 sm:mt-5 w-full max-w-[560px] flex flex-col gap-2 sm:gap-0 px-0.5">
                  <div
                    className="flex flex-col sm:flex-row items-stretch w-full flex-1 sm:min-w-0 overflow-hidden"
                    style={{
                      background: '#ffffff',
                      padding: 6,
                      borderRadius: 40,
                    }}
                  >
                    <input
                      type="url"
                      placeholder={inputPlaceholder}
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-[1.2] min-w-0 text-sm outline-none focus:outline-none focus:ring-0 rounded-[40px] sm:rounded-l-[40px] sm:rounded-r-none"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#1a1a1a',
                        fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                        padding: '8px 8px 8px 20px',
                      }}
                      aria-label={inputPlaceholder}
                    />
                    <a
                      href={createUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex shrink-0 items-center justify-center whitespace-nowrap transition-colors duration-200 bg-[#5f2ef8] hover:bg-[#7741fd] text-white rounded-r-[40px] rounded-l-[40px] border-0 focus:outline-none focus:ring-0 no-underline"
                      style={{
                        fontWeight: 500,
                        fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                        fontSize: 13,
                        padding: '12px 20px',
                        border: 'none',
                      }}
                    >
                      {ctaLabel}
                    </a>
                  </div>
                  <a
                    href={createUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex sm:hidden shrink-0 items-center justify-center whitespace-nowrap transition-colors duration-200 w-full bg-[#5f2ef8] hover:bg-[#7741fd] text-white rounded-[40px] border-0 focus:outline-none focus:ring-0 no-underline"
                    style={{
                      fontWeight: 500,
                      fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                      fontSize: 13,
                      padding: '12px 20px',
                      border: 'none',
                    }}
                  >
                    {ctaLabel}
                  </a>
                </div>

                {/* Browse link — mismo formato que subtítulo, un poco más chico y con underline */}
                <p className="mt-3">
                  <Link
                    condition="internal"
                    hasIcon={false}
                    url="/template-inspiration"
                    className="underline"
                    style={{
                      color: 'rgba(255, 255, 255, 0.65)',
                      fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                      fontSize: 'clamp(13px, 1.2vw, 18px)',
                      fontWeight: 400,
                      lineHeight: 1.5,
                      textUnderlineOffset: '3px',
                    }}
                  >
                    Or browse our design inspiration
                  </Link>
                </p>

                {/* Trust badges — solo G2 y Trusted by, formato new-homepage-hero */}
                <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  <div
                    className="flex items-center gap-1.5 backdrop-blur-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 999,
                      borderTop: '1px solid rgba(255,255,255,0.18)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.3)',
                      fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                      fontSize: 11,
                      padding: '6px 12px',
                    }}
                  >
                    <span className="inline-flex items-baseline" aria-hidden>
                      <span style={{ color: '#FF492C' }}>★★★★</span>
                      <span className="inline-block w-[0.5em] overflow-hidden align-baseline" style={{ color: '#FF492C', direction: 'ltr' }}>★</span>
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>4.8/5 on G2</span>
                  </div>
                  <div className="hidden sm:block" style={{ background: 'rgba(255, 255, 255, 0.15)', height: 16, width: 1 }} aria-hidden />
                  <div
                    className="flex items-center gap-1.5 backdrop-blur-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 999,
                      borderTop: '1px solid rgba(255,255,255,0.18)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 12px rgba(0,0,0,0.3)',
                      fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                      fontSize: 11,
                      padding: '6px 12px',
                    }}
                  >
                    <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Trusted by 40,000+ businesses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Pinion>
  )
}

export default HeroLandingGenerator
