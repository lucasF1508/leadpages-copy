'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { pricingStore } from '@/stores/pricingStore'
import Link, { hasLink } from '../Link'
import { PriceType } from '../Price'

interface PricingCardLinkProps {
  isFeatured: boolean
  prices: PriceType[]
}

function getCouponFromLocation(): string | null {
  if (typeof window === 'undefined') return null
  const raw = new URLSearchParams(window.location.search).get('coupon')
  const code = raw ? raw.replace(/[^A-Za-z0-9_-]/g, '') : null
  return code || null
}

function appendCouponToUrl(rawHref: string, code: string): string {
  try {
    const base =
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://www.leadpages.com'
    const u = new URL(rawHref, base)
    u.searchParams.set('coupon', code)
    const out = u.toString()
    return out
  } catch {
    const out = `${rawHref}${rawHref.includes('?') ? '&' : '?'}coupon=${encodeURIComponent(code)}`
    return out
  }
}

const PricingCardLink = ({ isFeatured, prices }: PricingCardLinkProps) => {
  const currentSelection = pricingStore((s) => s.currentSelection)

  const price = useMemo(() => {
    const p =
      prices.find((p) => p.period === currentSelection) ?? prices[0] ?? null
    return p
  }, [prices, currentSelection])

  const link = useMemo(() => {
    const arr = price?.links || []
    const l = arr.find((l) => hasLink(l)) || null
    return l
  }, [price])

  if (!link) return null

  const baseHref: string =
    (link as any).href ?? (link as any).url ?? (link as any).to ?? '#'

  const [finalHref, setFinalHref] = useState<string>(baseHref)

  useEffect(() => {
    const code = getCouponFromLocation()
    const decorated = code ? appendCouponToUrl(baseHref, code) : baseHref
    setFinalHref(decorated)
  }, [baseHref])

  return (
    <Link
      {...link}
      href={finalHref}
      url={finalHref}
      className="w-full"
      linkStyle={isFeatured ? 'button-solid' : 'button-secondary'}
      data-final-href={finalHref}
    />
  )
}

export default PricingCardLink
