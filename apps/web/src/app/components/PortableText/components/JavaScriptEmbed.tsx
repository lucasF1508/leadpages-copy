'use client'

import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import JavaScriptEmbed from '@components/JavaScriptEmbed/JavaScriptEmbed'

const JavaScriptEmbedType = ({
  className,
  value,
}: {
  className?: ClassValue
  value?: {
    code?: string
    [key: string]: any
  }
}) => {
  if (!value?.code) return null

  return (
    <div className={clsx('my-5 last:mb-0', className)}>
      <JavaScriptEmbed code={value.code} />
    </div>
  )
}

export default JavaScriptEmbedType

