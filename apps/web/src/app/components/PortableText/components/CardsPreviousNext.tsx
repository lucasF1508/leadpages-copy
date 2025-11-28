'use client'

import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import CardsPreviousNextRenderer from '@components/Text/Renderers/CardsPreviousNextRenderer'

const CardsPreviousNextType = ({
  className,
  value,
}: {
  className?: ClassValue
  value?: {
    heading?: string
    previous?: any
    next?: any
    [key: string]: any
  }
}) => {
  if (!value) return null

  const legacyValue = {
    node: value,
  }

  return (
    <div className={clsx('my-5 last:mb-0', className)}>
      <CardsPreviousNextRenderer {...legacyValue} />
    </div>
  )
}

export default CardsPreviousNextType

