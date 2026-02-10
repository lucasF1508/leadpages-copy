'use client'

import type { LinkExternalType } from '@types'
import React, { forwardRef, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { m as motion } from 'motion/react'
import { isChildrenText } from '@/lib/utils/isChildrenText'
import { getPersistedTrackingParams } from '@/lib/utils/trackingParams'
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
    const isSignatureFormHash =
      url === '#signature-form' || url?.includes('#signature-form')

    const preserveAllParams = (baseUrl: string): string => {
      if (typeof window === 'undefined') return baseUrl
      try {
        const isAbsolute = /^https?:\/\//.test(baseUrl)
        const u = isAbsolute
          ? new URL(baseUrl)
          : new URL(baseUrl, window.location.origin)
        const currentParams = getPersistedTrackingParams()
        currentParams.forEach((value, key) => {
          if (!u.searchParams.has(key)) u.searchParams.set(key, value)
        })
        return u.toString()
      } catch {
        const currentParams = getPersistedTrackingParams()
        if (currentParams.toString()) {
          const separator = baseUrl.includes('?') ? '&' : '?'
          return `${baseUrl}${separator}${currentParams.toString()}`
        }
        return baseUrl
      }
    }

    const combinedRef = (node: HTMLAnchorElement | null) => {
      ;(internalRef as React.MutableRefObject<HTMLAnchorElement | null>).current = node
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref) {
        const mutableRef = ref as React.MutableRefObject<HTMLAnchorElement | null>
        mutableRef.current = node
      }
    }

    useEffect(() => {
      const anchor = internalRef.current
      if (!anchor || condition === 'download' || !url) {
        return
      }

      const getFinalUrl = (): string => {
        if (isSignatureFormHash) return '/emailsignature/form'
        return preserveAllParams(url)
      }

      const handleClickCapture = (e: MouseEvent) => {
        const finalUrl = getFinalUrl()
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        window.location.href = finalUrl
      }

      anchor.addEventListener('click', handleClickCapture, true)

      const observer = new MutationObserver(() => {
        const correctUrl = getFinalUrl()
        if (anchor.href !== correctUrl && anchor.href.includes('my.leadpages.com')) {
          anchor.setAttribute('href', correctUrl)
          anchor.href = correctUrl
        }
      })

      observer.observe(anchor, { attributes: true, attributeFilter: ['href'] })

      const initialUrl = getFinalUrl()
      anchor.setAttribute('href', initialUrl)
      anchor.href = initialUrl

      return () => {
        anchor.removeEventListener('click', handleClickCapture, true)
        observer.disconnect()
      }
    }, [url, condition, isSignatureFormHash])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (url && condition !== 'download') {
        e.preventDefault()
        e.stopPropagation()
        const finalUrl = isSignatureFormHash ? '/emailsignature/form' : preserveAllParams(url)
        window.location.href = finalUrl
      }
    }

    const href = isSignatureFormHash ? '/emailsignature/form' : url

    return (
      <motion.a
        aria-label={ariaLabel}
        className={clsx(className, classNames?.root)}
        data-gtm={dataGtm}
        download={condition === 'download'}
        href={href}
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
