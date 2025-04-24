import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'

export interface LabelProps
  extends Omit<React.ComponentProps<'span'>, 'className'> {
  className?: ClassValue
  content?: string
}

const Label = ({ className, content }: LabelProps) => (
  <span className={clsx('type-overline', className)}>
    {content}
  </span>
)

export default Label
