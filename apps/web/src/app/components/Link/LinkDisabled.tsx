'use client'

import type { LinkDisabledType } from '@types'
import React, { forwardRef } from 'react'
import { clsx } from 'clsx'
import { motion } from "motion/react"
import {isChildrenText} from '@/lib/utils/isChildrenText'
import { DownloadIcon, ExternalIcon } from './LinkExternal'
import { InternalIcon } from './LinkInternal'

const Icons = {
  download: DownloadIcon,
  external: ExternalIcon,
  internal: InternalIcon,
}

export const LinkDisabled = forwardRef<HTMLSpanElement, LinkDisabledType>(
  ({ Icon: _Icon, children, className, classNames, condition, hasIcon, label }, ref) => {
    const Icon = _Icon || Icons[condition as keyof typeof Icons]
    const hasLabel = isChildrenText(children) || label
    return (
      <motion.span className={clsx('link-text disabled', className, classNames?.root)} ref={ref}>
        {hasLabel ? <span className={clsx("link-label", classNames?.span)}>{children || label}</span> : children}
        {hasLabel && hasIcon &&
          <span className="link-icon">
            <span className="link-icon-background" />
            <Icon className={clsx(classNames?.icon)} />
          </span>
        }
      </motion.span>
    )
  }
)

export default LinkDisabled
