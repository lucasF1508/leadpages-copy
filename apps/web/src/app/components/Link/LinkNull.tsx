'use client'

import type { LinkNullType } from '@types'
import React, { forwardRef } from 'react'
import { clsx } from 'clsx'
import { motion } from "motion/react"
import {isChildrenText} from '@/lib/utils/isChildrenText'
import LinkIcon from './LinkIcon'

export const LinkNull = forwardRef<HTMLSpanElement, LinkNullType>(
  ({ Icon = LinkIcon, children, className, classNames,  hasIcon, label }, ref) => {

    const hasLabel = isChildrenText(children) || label

    return (
      <motion.span className={clsx('link', className, classNames?.root)} ref={ref}>
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

export default LinkNull
