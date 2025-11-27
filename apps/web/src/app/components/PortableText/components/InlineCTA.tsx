'use client'

import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import InlineCTA from '@components/Text/Renderers/InlineCTA'

const InlineCTAType = ({
  className,
  value,
}: {
  className?: ClassValue
  value?: {
    // For schemaInlineCTAGlobalBlock: has a reference to a global CTA
    cta?: {
      _ref?: string
      _type?: string
      [key: string]: any
    }
    // For inlineCTA (legacy): has data directly embedded
    content?: any
    image?: any
    links?: any[]
    ctaLink?: any
    [key: string]: any
  }
}) => {
  // Handle schemaInlineCTAGlobalBlock (with reference)
  if (value?.cta) {
    const legacyValue = {
      node: {
        cta: value.cta,
      },
    }
    return (
      <div className={clsx('my-5 last:mb-0', className)}>
        <InlineCTA {...legacyValue} />
      </div>
    )
  }
  
  // Handle inlineCTA (legacy, embedded directly)
  // The legacy component expects node with all fields directly
  if (value && (value.content || value.image)) {
    const legacyValue = {
      node: value,
    }
    return (
      <div className={clsx('my-5 last:mb-0', className)}>
        <InlineCTA {...legacyValue} />
      </div>
    )
  }
  
  return null
}

export default InlineCTAType

