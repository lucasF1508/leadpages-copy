'use client'

import type { LinkInternalType } from '@types'
import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { motion } from 'motion/react'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { scrollToHash } from '@/hooks/useScrollToHash'
import { isChildrenText } from '@/lib/utils/isChildrenText'
import { normalizeUrl } from '@/lib/utils/normalizeUrl'
import { getPersistedTrackingParams } from '@/lib/utils/trackingParams'
import LinkIcon from './LinkIcon'

const LinkAnchor = forwardRef<HTMLAnchorElement, Partial<LinkInternalType>>(
  ({ children, className, href, onClick }, ref) => (
    <motion.a
      className={clsx(className)}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </motion.a>
  )
)

export const LinkInternal = forwardRef<HTMLAnchorElement, LinkInternalType>(
  (
    {
      Icon = LinkIcon,
      ariaLabel,
      children,
      className,
      classNames,
      dataGtm,
      hasHash,
      hasIcon,
      hash,
      label,
      page,
      url,
    },
    ref
  ) => {
    const pathname = usePathname() || ''

    if (!url) {
      console.error('Internal link was found without url', {
        children,
        className,
        label,
        page,
        url,
      })
      return null
    }

    // Normalizar la URL para eliminar trailing slashes
    const normalizedUrl = normalizeUrl(url)
    const [base] = pathname?.split(/[?#]/)
    const normalizedBase = normalizeUrl(base)
    const isSamePage = hasHash && normalizedBase === normalizedUrl
    const handleScroll = (e: React.UIEvent) => {
      e.preventDefault()
      if (hasHash && hash) {
        scrollToHash({ hash })
      }
    }

    const hasLabel = isChildrenText(children) || label

    // Preserve tracking params (URL + cookie __lptp) so XID/affiliate persist across navigation
    const preserveParams = () => {
      if (typeof window === 'undefined') return ''
      const currentParams = getPersistedTrackingParams()
      if (currentParams.toString()) return `?${currentParams.toString()}`
      return ''
    }

    const urlParams = preserveParams()
    const finalUrl = `${normalizedUrl}${urlParams}${hasHash && hash ? `#${hash}` : ''}`

    return (
      <NextLink
        href={finalUrl}
        legacyBehavior
        passHref
        shallow={isSamePage}
      >
        <LinkAnchor
          aria-label={ariaLabel}
          className={clsx(className, classNames?.root)}
          data-gtm={dataGtm}
          onClick={isSamePage ? handleScroll : undefined}
          ref={ref}
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
        </LinkAnchor>
      </NextLink>
    )
  }
)

export default LinkInternal
export { LinkIcon as InternalIcon }
