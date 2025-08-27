'use client'

import type { LinkLeadpagesTriggerType } from '@types'
import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { m as motion } from 'motion/react'
import { isChildrenText } from '@/lib/utils/isChildrenText'
import LinkIcon from './LinkIcon'

export const LinkLeadpagesTrigger = forwardRef<
  HTMLAnchorElement,
  LinkLeadpagesTriggerType
>(
  (
    {
      Icon: _Icon,
      ariaLabel,
      children,
      className,
      classNames,
      dataGtm,
      hasIcon,
      label,
      leadpagesDomain,
      popUpId,
      rel = 'noopener noreferrer',
      url = '#',
    },
    ref
  ) => {
    const Icon = _Icon || LinkIcon
    const hasLabel = isChildrenText(children) || label
    return (
      <motion.a
        aria-label={ariaLabel}
        className={clsx(className, classNames?.root)}
        data-gtm={dataGtm}
        data-leadbox-domain={leadpagesDomain}
        data-leadbox-popup={popUpId}
        href={url}
        ref={ref}
        rel={rel}
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

export default LinkLeadpagesTrigger
