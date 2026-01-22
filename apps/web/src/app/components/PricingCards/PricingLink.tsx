'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { pricingStore } from '@/stores/pricingStore'
import Link, { hasLink } from '../Link'
import { PriceType } from '../Price'
import clsx from 'clsx'

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

function preserveAllParams(rawHref: string): string {
  if (typeof window === 'undefined') return rawHref
  
  try {
    // Handle both absolute URLs (https://...) and relative URLs
    const isAbsolute = /^https?:\/\//.test(rawHref)
    const u = isAbsolute 
      ? new URL(rawHref) 
      : new URL(rawHref, window.location.origin)
    
    const currentParams = new URLSearchParams(window.location.search)
    
    // Preserve all current URL parameters (affiliate, ps_xid, etc.)
    currentParams.forEach((value, key) => {
      // Don't override existing params in the href, but add missing ones
      if (!u.searchParams.has(key)) {
        u.searchParams.set(key, value)
      }
    })
    
    return u.toString()
  } catch {
    // Fallback: append params manually
    const currentParams = new URLSearchParams(window.location.search)
    if (currentParams.toString()) {
      const separator = rawHref.includes('?') ? '&' : '?'
      return `${rawHref}${separator}${currentParams.toString()}`
    }
    return rawHref
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

  // Store baseHref in ref so we can access it in the click handler
  const baseHrefRef = useRef<string>(baseHref)
  
  useEffect(() => {
    baseHrefRef.current = baseHref
  }, [baseHref])

  // Function to calculate finalHref dynamically using current URL params
  const getFinalHref = (): string => {
    if (typeof window === 'undefined') {
      return baseHrefRef.current
    }
    
    // First preserve all URL parameters (affiliate, ps_xid, etc.)
    let decorated = preserveAllParams(baseHrefRef.current)
    
    // Then append coupon if present
    const code = getCouponFromLocation()
    if (code) {
      decorated = appendCouponToUrl(decorated, code)
    }
    
    return decorated
  }

  // Initial state for SSR
  const [finalHref, setFinalHref] = useState<string>(() => {
    if (typeof window === 'undefined') return baseHref
    return getFinalHref()
  })

  // Update finalHref when baseHref changes (for display purposes)
  useEffect(() => {
    const decorated = getFinalHref()
    setFinalHref(decorated)
  }, [baseHref])

  // Extract url from link to prevent it from overriding finalHref
  const { url: _originalUrl, href: _originalHref, ...linkProps } = link as any
  
  const anchorRef = useRef<HTMLAnchorElement | null>(null)
  
  // Use direct navigation like planRedirect does, to avoid issues with motion.a
  // Add event listener directly to DOM in capture phase to intercept before other scripts
  useEffect(() => {
    let cleanupFn: (() => void) | null = null
    
    // Wait a bit for the anchor to be mounted
    const timeoutId = setTimeout(() => {
      const anchor = anchorRef.current
      if (!anchor) {
        return
      }
      
      const handleClickCapture = (e: MouseEvent) => {
        // Calculate finalHref dynamically at click time using current URL params
        const currentFinalHref = getFinalHref()
        
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        
        window.location.href = currentFinalHref
      }
      
      // Add listener in capture phase (runs before other listeners)
      anchor.addEventListener('click', handleClickCapture, true)
      
      // Also add a MutationObserver to detect href changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'href') {
            // Restore the correct href with params
            const correctHref = getFinalHref()
            if (anchor.href !== correctHref) {
              anchor.setAttribute('href', correctHref)
              anchor.href = correctHref
            }
          }
        })
      })
      
      observer.observe(anchor, {
        attributes: true,
        attributeFilter: ['href'],
        attributeOldValue: true,
      })
      
      cleanupFn = () => {
        anchor.removeEventListener('click', handleClickCapture, true)
        observer.disconnect()
      }
    }, 100)
    
    return () => {
      clearTimeout(timeoutId)
      if (cleanupFn) {
        cleanupFn()
      }
    }
  }, []) // Empty deps: listener added once, calculates href dynamically on click
  
  // React onClick handler as fallback
  // Note: stopImmediatePropagation is not available on React synthetic events
  // The native event listener in capture phase handles this
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()
    // Calculate finalHref dynamically at click time using current URL params
    const currentFinalHref = getFinalHref()
    window.location.href = currentFinalHref
  }
  
  // Get the label from the link
  const linkLabel = (link as any).label || (link as any).children || 'Start Building for Free'
  
  // Determine button classes based on linkStyle
  const buttonClasses = clsx(
    'w-full',
    isFeatured ? 'link-button-solid' : 'link-button-secondary',
    linkProps.className
  )
  
  return (
    <a
      ref={anchorRef}
      href={finalHref}
      onClick={handleClick}
      className={buttonClasses}
      data-gtm={linkProps.dataGtm}
      data-final-href={finalHref}
      aria-label={linkProps.ariaLabel}
    >
      <span className="link-label">{linkLabel}</span>
      {linkProps.hasIcon !== false && (
        <span className="link-icon">
          <span className="link-icon-background" />
          <span className="link-icon-content">→</span>
        </span>
      )}
    </a>
  )
}

export default PricingCardLink
