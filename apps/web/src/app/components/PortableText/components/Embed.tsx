import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import Embed from '@/components/Embed'

const EmbedType = ({
  className,
  value: { code, isResponsive, ratio } = {},
}: {
  className?: ClassValue
  value?: {
    code?: string
    isResponsive?: boolean
    ratio?: string
  }
}) => (
  <Embed
    className={clsx('my-5 last:mb-0', className)}
    code={code}
    isResponsive={isResponsive}
    ratio={ratio}
  />
)

export default EmbedType
