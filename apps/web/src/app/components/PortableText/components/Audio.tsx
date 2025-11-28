'use client'

import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import AudioRenderer from '@components/Text/Renderers/AudioRenderer'

const AudioType = ({
  className,
  value,
}: {
  className?: ClassValue
  value?: {
    src?: string
    [key: string]: any
  }
}) => {
  if (!value?.src) return null

  const legacyValue = {
    node: value,
  }

  return (
    <div className={clsx('my-5 last:mb-0', className)}>
      <AudioRenderer {...legacyValue} />
    </div>
  )
}

export default AudioType

