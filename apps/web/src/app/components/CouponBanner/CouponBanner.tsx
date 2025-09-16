'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

type Tone = 'neutral' | 'purple'

export interface CouponBannerProps {
  className?: string
  label?: string
  showWhenNoCoupon?: boolean
  tone?: Tone
}

const COOKIE_NAME = 'lp_coupon'
const QUERY_KEY = 'coupon'

function sanitize(raw: null | string): null | string {
  if (!raw) return null
  const cleaned = raw.replace(/[^A-Za-z0-9_-]/g, '')
  return cleaned.length >= 2 ? cleaned : null
}
function readFromUrl(): null | string {
  if (typeof window === 'undefined') return null
  const val = new URLSearchParams(window.location.search).get(QUERY_KEY)
  return sanitize(val)
}
function setCookie(name: string, value: string) {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${7 * 24 * 3600}; Path=/; Secure; SameSite=Lax`
}

export default function CouponBanner({
  className,
  label = 'Coupon Code:',
  showWhenNoCoupon = false,
}: CouponBannerProps) {
  const [code, setCode] = useState<null | string>(null)

  useEffect(() => {
    const fromUrl = readFromUrl()
    if (fromUrl) {
      setCookie(COOKIE_NAME, fromUrl)
      ;(window as any).dataLayer = (window as any).dataLayer || []
      ;(window as any).dataLayer.push({ coupon: fromUrl, event: 'coupon_applied_from_url' })
      setCode(fromUrl)
    } else {
      setCode(null)
    }
  }, [])

  if (!showWhenNoCoupon && !code) return null

  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-xl px-4 py-2 md:px-6 md:py-2',
        'bg-[#524F5F33] ring-1 ring-white/5 shadow-lg',
        className
      )}
    >
      <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4">
        <span className="text-sm md:text-lg font-medium text-white/90">
          {label}
        </span>

        <div className="flex w-full items-center gap-2 md:w-auto min-w-0">
          <span
            className={clsx(
              'inline-flex h-6 sm:h-7 w-full sm:w-[20rem] md:w-[24rem] lg:w-[32rem]',
              'items-center justify-start rounded-md px-2',
              'text-[12px] sm:text-sm font-semibold',
              'bg-[#bcbabc] text-black',
              'ring-1 ring-zinc-400/60 shadow-sm',
              'truncate'
            )}
            title={code ?? 'No coupon'}
          >
            {code ?? '— — — — —'}
          </span>

          <span
            className={clsx(
              'inline-flex h-6 sm:h-7 px-2 whitespace-nowrap',
              'items-center justify-center rounded-md',
              'text-[11px] sm:text-xs font-medium',
              'bg-white/10 text-white/80 ring-1 ring-white/15'
            )}
          >
            {code ? 'Applied' : 'Pending'}
          </span>
        </div>
      </div>
    </div>
  )
}
