'use client'

import type { ImageType, LinkType } from '@types'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useAnimate } from 'motion/react'

export interface HeroHomeProps {
  className?: string
  classNames?: {
    media?: string
    root?: string
  }
  content?: string
  graph?: ImageType
  heading?: string
  links?: LinkType[]
}

const StarRating = () => (
  <span className="inline-flex items-center gap-[1px]">
    {[1, 2, 3, 4].map((i) => (
      <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="#FF492C" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 0L6.12 3.45L9.75 3.76L6.94 6.24L7.79 9.76L5 8.05L2.21 9.76L3.06 6.24L0.25 3.76L3.88 3.45L5 0Z" />
      </svg>
    ))}
    {/* 80% filled star */}
    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="star-partial">
          <stop offset="80%" stopColor="#FF492C" />
          <stop offset="80%" stopColor="rgba(255,255,255,0.2)" />
        </linearGradient>
      </defs>
      <path d="M5 0L6.12 3.45L9.75 3.76L6.94 6.24L7.79 9.76L5 8.05L2.21 9.76L3.06 6.24L0.25 3.76L3.88 3.45L5 0Z" fill="url(#star-partial)" />
    </svg>
  </span>
)

const HERO_PAGE_IMAGES = [
  '/images/hero-pages/page-1.png',
  '/images/hero-pages/page-2.png',
  '/images/hero-pages/page-3.png',
  '/images/hero-pages/page-4.png',
  '/images/hero-pages/page-5.png',
  '/images/hero-pages/page-6.png',
  '/images/hero-pages/page-7.png',
]

const HeroHome = ({
  className,
  classNames,
}: HeroHomeProps) => {
  const [scope, animate] = useAnimate()
  const [url, setUrl] = useState('')

  const createUrl = `https://create.leadpages.com/?url=${encodeURIComponent(url.trim() || 'https://example.com')}`

  useEffect(() => {
    const enterAnimation = () => {
      animate('.hero-pill', { opacity: 1, y: [16, 0] }, { duration: 0.5, delay: 0.1, type: 'spring', bounce: 0.2 })
      animate('h1', { opacity: 1, y: [-24, 0] }, { bounce: 0.2, duration: 0.8, type: 'spring' })
      animate('.hero-subcopy', { opacity: 1, y: [-16, 0] }, { bounce: 0.2, delay: 0.2, duration: 0.8, type: 'spring' })
      animate('.hero-input', { opacity: 1, y: [-16, 0] }, { bounce: 0.2, delay: 0.35, duration: 0.8, type: 'spring' })
      animate('.hero-browse', { opacity: 1 }, { delay: 0.5, duration: 0.6 })
      animate('.hero-trust', { opacity: 1, y: [12, 0] }, { delay: 0.6, duration: 0.6 })
      animate('.hero-carousel', { opacity: 0.8 }, { delay: 0.4, duration: 1.2 })
    }
    setTimeout(() => enterAnimation(), 200)
  }, [])

  return (
    <div
      className={clsx(
        'hero-root relative w-full overflow-visible pt-4 pb-6 bg-[radial-gradient(ellipse_at_50%_0%,rgba(95,46,248,0.25)_0%,transparent_60%)]',
        className,
        classNames?.root
      )}
      ref={scope}
    >
      {/* Background gradient - CSS only */}
      <div
        className="hero-bg-gradient absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 30% 35%, rgba(96,62,255,0.4) 0%, transparent 70%),
            radial-gradient(ellipse 55% 50% at 70% 35%, rgba(96,62,255,0.4) 0%, transparent 70%),
            radial-gradient(ellipse 45% 40% at 50% 30%, rgba(171,127,243,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 90% 70% at 50% 45%, rgba(96,62,255,0.18) 0%, transparent 70%)
          `,
        }}
      />

      {/* Background page carousel - full viewport width */}
      <div
        className="hero-carousel absolute z-[1] opacity-0 pointer-events-none"
        style={{
          top: '57%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100vw',
          height: 600,
          overflow: 'visible',
        }}
      >
        <div
          className="flex gap-2 items-start"
          style={{
            animation: 'hero-pages-scroll 80s linear infinite',
            width: 'max-content',
          }}
        >
          {[...HERO_PAGE_IMAGES, ...HERO_PAGE_IMAGES].map((src, i) => (
            <img
              alt=""
              className="shrink-0 w-[340px] h-[480px] rounded-[10px] object-cover object-bottom shadow-xl"
              key={i}
              src={src}
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            />
          ))}
        </div>
        {/* Center dark overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse 45% 100% at 50% 50%, rgba(0,0,0,0.7) 0%, transparent 100%)',
          }}
        />
        {/* Bottom fade to eliminate sharp line */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: 80,
            background: 'linear-gradient(to top, rgba(5,5,16,0.8) 0%, transparent 100%)',
          }}
        />
      </div>

      {/* Main container */}
      <div className="relative z-10 mx-auto w-full px-4" style={{ maxWidth: 1200 }}>
        {/* Dark card with animated gradient border */}
        <style>{`
          @keyframes hero-pages-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          /* Mobile first: hide desktop elements, show mobile */
          .hero-root .hero-carousel,
          .hero-root .hero-bg-gradient,
          .hero-root .hero-bottom-fade {
            display: none;
          }
          .hero-root .hero-input-desktop {
            display: none !important;
          }
          .hero-root .hero-input-mobile {
            display: flex;
          }
          /* Desktop: from 1024px show card + carousel + desktop input */
          @media (min-width: 1024px) {
            .hero-root {
              padding-top: 8rem;
              padding-bottom: 8rem;
              background: none;
            }
            .hero-root .hero-carousel,
            .hero-root .hero-bg-gradient,
            .hero-root .hero-bottom-fade {
              display: block !important;
            }
            .hero-root .hero-input-desktop {
              display: flex !important;
            }
            .hero-root .hero-input-mobile {
              display: none !important;
            }
          }
        `}</style>
        <div
          className="hero-card-wrapper relative z-[2] mx-auto w-full"
          style={{
            maxWidth: 960,
          }}
        >
          <style>{`
            @media (min-width: 1024px) {
              .hero-root .hero-card-wrapper {
                border-radius: 28px;
                overflow: hidden;
                box-shadow: 0 30px 80px -10px rgba(0, 0, 0, 0.8), 0 50px 140px -20px rgba(0, 0, 0, 0.7), 0 0 60px rgba(95, 46, 248, 0.25), 0 0 140px rgba(95, 46, 248, 0.15);
              }
              .hero-root .hero-card-outer {
                background: linear-gradient(180deg, rgba(167,237,42,0.4) 0%, rgba(95,46,248,0.5) 50%, rgba(95,46,248,0.2) 100%);
                border-radius: 28px;
                box-shadow: 0 30px 80px -10px rgba(0, 0, 0, 0.8), 0 50px 140px -20px rgba(0, 0, 0, 0.7), 0 0 60px rgba(95, 46, 248, 0.25), 0 0 140px rgba(95, 46, 248, 0.15);
                padding: 2px;
              }
              .hero-root .hero-card-inner {
                background: radial-gradient(ellipse at 50% 0%, rgba(95, 46, 248, 0.55) 0%, rgba(5, 5, 16, 1) 65%);
                border-radius: 26px;
                overflow: hidden;
                padding: 2rem 1.5rem;
              }
            }
          `}</style>
          <div className="hero-card-outer">
          {/* Card inner */}
          <div
            className="hero-card-inner relative px-4 py-5"
          >
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* NEW pill */}
            <div
              className="hero-pill mb-3 inline-flex items-center gap-2 opacity-0 backdrop-blur-xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 999,
                borderTop: '1px solid rgba(255,255,255,0.18)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 6px rgba(0,0,0,0.2)',
                padding: '5px 14px 5px 5px',
              }}
            >
              <span
                className="inline-flex items-center rounded-[18px] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: '#a7ed2a',
                  color: '#0a0a0a',
                }}
              >
                New
              </span>
              <span
                className="text-[13px]"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                }}
              >
                AI-powered page generation from your brand
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mx-auto w-full min-w-0 overflow-hidden opacity-0"
              style={{
                fontFamily: 'var(--font-uxumvf, serif)',
                fontSize: 'clamp(38px, 5.2vw, 80px)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
              }}
            >
              <span className="whitespace-normal md:whitespace-nowrap">Powerful Landing Pages</span>
              <br />
              That <span style={{ color: '#a7ed2a' }}>Convert.</span>
            </h1>

            {/* Subcopy */}
            <p
              className="hero-subcopy mx-auto mt-2 max-w-[560px] opacity-0"
              style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                fontSize: 'clamp(17px, 1.5vw, 22px)',
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Create a landing page directly from your brand in seconds &mdash; paste your URL to get started.
            </p>

            {/* Input field */}
            {/* Desktop: single white pill with input + button inline */}
            <div
              className="hero-input hero-input-desktop mt-5 w-full max-w-[520px] opacity-0 items-center"
              style={{
                background: '#ffffff',
                borderRadius: 999,
                padding: 6,
              }}
            >
              <input
                className="flex-1 text-sm outline-none focus:outline-none focus:ring-0 focus:shadow-none focus:border-none"
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = createUrl }}
                placeholder="Enter your URL"
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '999px 0 0 999px',
                  color: '#1a1a1a',
                  fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                  padding: '8px 8px 8px 20px',
                }}
                type="url"
                value={url}
              />
              <Link
                className="flex shrink-0 items-center justify-center whitespace-nowrap text-sm transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                href={createUrl}
                style={{
                  background: 'linear-gradient(180deg, #7b4cfa 0%, #5f2ef8 100%)',
                  borderRadius: 999,
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 8px rgba(95,46,248,0.4)',
                  color: '#ffffff',
                  fontWeight: 500,
                  fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                  padding: '10px 20px',
                }}
              >
                Generate My Page
              </Link>
            </div>

            {/* Mobile: stacked input + button */}
            <div className="hero-input hero-input-mobile mt-5 w-full opacity-0 flex flex-col gap-2 px-2">
              <div
                className="flex items-center"
                style={{
                  background: '#ffffff',
                  borderRadius: 999,
                  padding: 6,
                }}
              >
                <input
                  className="flex-1 w-full text-sm outline-none focus:outline-none focus:ring-0 focus:shadow-none focus:border-none"
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') window.location.href = createUrl }}
                  placeholder="Enter your URL"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: 999,
                    color: '#1a1a1a',
                    fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                    padding: '8px 8px 8px 16px',
                  }}
                  type="url"
                  value={url}
                />
              </div>
              <Link
                className="flex items-center justify-center whitespace-nowrap text-sm transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                href={createUrl}
                style={{
                  background: 'linear-gradient(180deg, #7b4cfa 0%, #5f2ef8 100%)',
                  borderRadius: 999,
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 8px rgba(95,46,248,0.4)',
                  color: '#ffffff',
                  fontWeight: 500,
                  fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                  padding: '10px 20px',
                }}
              >
                Generate My Page
              </Link>
            </div>

            {/* Browse link */}
            <div className="hero-browse mt-3 opacity-0">
              <Link
                href="/templates"
                style={{
                  color: 'rgba(255, 255, 255, 0.65)',
                  fontFamily: 'var(--font-roc-grotesk-variable, sans-serif)',
                  fontSize: 13,
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                }}
              >
                Or browse our design inspiration
              </Link>
            </div>

            {/* Trust badges */}
            <div className="hero-trust mt-4 flex items-center gap-3 opacity-0">
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
                <StarRating />
                <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  G2 4.8/5
                </span>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  height: 16,
                  width: 1,
                }}
              />

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
                <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                  Trusted by 40,000+ businesses
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>

      {/* Bottom fade to blend into page */}
      <div
        className="hero-bottom-fade absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
        style={{
          height: 160,
          background: 'linear-gradient(to bottom, transparent 0%, #111018 100%)',
        }}
      />
    </div>
  )
}

export default HeroHome
