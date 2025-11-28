'use client'

import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import DropShadowBox from '@components/Text/Renderers/DropShadowBox'

const DropShadowBoxType = ({
  className,
  value,
}: {
  className?: ClassValue
  value?: {
    content?: any
    [key: string]: any
  }
}) => {
  if (!value?.content) return null

  const legacyValue = {
    node: value,
  }

  return (
    <div className={clsx('my-5 last:mb-0', className)}>
      <DropShadowBox {...legacyValue} />
    </div>
  )
}

export default DropShadowBoxType

