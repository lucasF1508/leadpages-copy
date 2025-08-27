'use client'

import type { LinkExternalType } from '@types'
import React, { forwardRef } from 'react'
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
    return (
      <motion.a
        aria-label={ariaLabel}
        className={clsx(className, classNames?.root)}
        data-gtm={dataGtm}
        download={condition === 'download'}
        href={url}
        ref={ref}
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
