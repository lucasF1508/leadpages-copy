'use client'

import type { LinkExternalType } from '@types'
import React, { forwardRef, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { m as motion } from 'motion/react'
import { isChildrenText } from '@/lib/utils/isChildrenText'
import LinkIcon from './LinkIcon'

const Icons = {
  download: LinkIcon,
  external: LinkIcon,
}

export const LinkExternal = forwardRef<HTMLAnchorElement, LinkExternalType>(
  (
    {
      Icon: _Icon,
      ariaLabel,
      children,
      className,
      classNames,
      condition,
      dataGtm,
      hasIcon,
      label,
      rel = 'noopener noreferrer',
      target,
      url,
    },
    ref
  ) => {
    const Icon = _Icon || Icons[condition as keyof typeof Icons]


    const hasLabel = isChildrenText(children) || label
    const internalRef = useRef<HTMLAnchorElement | null>(null)
    
    // Function to preserve all URL parameters from current page
    const preserveAllParams = (baseUrl: string): string => {
      if (typeof window === 'undefined') return baseUrl
      
      try {
        const isAbsolute = /^https?:\/\//.test(baseUrl)
        const u = isAbsolute 
          ? new URL(baseUrl) 
          : new URL(baseUrl, window.location.origin)
        
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
          const separator = baseUrl.includes('?') ? '&' : '?'
          return `${baseUrl}${separator}${currentParams.toString()}`
        }
        return baseUrl
      }
    }
    
    // Use both refs: the forwarded ref and our internal ref
    const combinedRef = (node: HTMLAnchorElement | null) => {
      // Assign to internal ref
      ;(internalRef as React.MutableRefObject<HTMLAnchorElement | null>).current = node
      
      // Handle forwarded ref
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        // Type assertion needed because ref.current might be readonly in some cases
        const mutableRef = ref as React.MutableRefObject<HTMLAnchorElement | null>
        mutableRef.current = node
      }
    }
    
    // Force navigation with full URL including params to prevent tracking scripts from stripping them
    // Use capture phase to intercept before other listeners
    useEffect(() => {
      const anchor = internalRef.current
      if (!anchor || condition === 'download' || !url) {
        return
      }
      
      // Calculate URL with preserved params dynamically at click time
      const getFinalUrl = (): string => {
        return preserveAllParams(url)
      }
      
      const handleClickCapture = (e: MouseEvent) => {
        // Calculate final URL with params dynamically at click time
        const finalUrl = getFinalUrl()
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        window.location.href = finalUrl
      }
      
      // Add listener in capture phase (runs before other listeners)
      anchor.addEventListener('click', handleClickCapture, true)
      
      // Also monitor if the href is being changed and restore it immediately
      const observer = new MutationObserver(() => {
        const correctUrl = getFinalUrl()
        if (anchor.href !== correctUrl && anchor.href.includes('my.leadpages.com')) {
          // Force restore the correct URL with params
          anchor.setAttribute('href', correctUrl)
          anchor.href = correctUrl
        }
      })
      
      observer.observe(anchor, { attributes: true, attributeFilter: ['href'] })
      
      // Set initial href with params
      const initialUrl = getFinalUrl()
      anchor.setAttribute('href', initialUrl)
      anchor.href = initialUrl
      
      return () => {
        anchor.removeEventListener('click', handleClickCapture, true)
        observer.disconnect()
      }
    }, [url, condition])
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Fallback handler for React events
      // Note: stopImmediatePropagation is not available on React synthetic events
      // The native event listener in capture phase handles this
      if (url && condition !== 'download') {
        e.preventDefault()
        e.stopPropagation()
        const finalUrl = preserveAllParams(url)
        window.location.href = finalUrl
      }
    }
    
    return (
      <motion.a
        aria-label={ariaLabel}
        className={clsx(className, classNames?.root)}
        data-gtm={dataGtm}
        download={condition === 'download'}
        href={url}
        onClick={handleClick}
        ref={combinedRef}
        rel={rel}
        target={target ? '_blank' : undefined}
      >
        {hasLabel ? (
          <span className={clsx('link-label', classNames?.span)}>
            {children || label}
          </span>
        ) : (
          children
        )}
        {hasLabel && hasIcon && (
          <span className="link-icon">
            <span className="link-icon-background" />
            <Icon className={clsx(classNames?.icon)} />
          </span>
        )}
      </motion.a>
    )
  }
)

export default LinkExternal
export { LinkIcon as DownloadIcon, LinkIcon as ExternalIcon }
