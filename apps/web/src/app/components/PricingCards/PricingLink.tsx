'use client'

import React, { useMemo } from 'react'
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

  // Calculate baseHref from link - this will update when link changes (e.g., when API data loads)
  const baseHref = useMemo(() => {
    const href = (link as any).href ?? (link as any).url ?? (link as any).to ?? '#'
    return href
  }, [link])

  // Update finalHref whenever baseHref changes (including when API data loads and replaces CMS URLs with Verifone URLs)
  const finalHref = useMemo(() => {
    const code = getCouponFromLocation()
    return code ? appendCouponToUrl(baseHref, code) : baseHref
  }, [baseHref])

  // Build a clean link object preserving all original properties but updating URLs
  const cleanLink = {
    ...link,
    href: finalHref,
    url: finalHref,
    to: finalHref,
  }

  return (
    <Link
      {...cleanLink}
      className="w-full"
      linkStyle={isFeatured ? 'button-solid' : 'button-secondary'}
      data-final-href={finalHref}
    />
  )
}

export default PricingCardLink
