import type { ClassValue } from 'clsx';
import React from 'react'
import clsx from 'clsx'
 
interface PillProps {
  className?: ClassValue
  classNames?: {
    label?: ClassValue
    root?: ClassValue
  }
  content: string
}

const Pill = ({ className, classNames, content }: PillProps) => {
  if (!content) return null

  return (
    <div className={clsx('inline-flex py-0.5 rounded-lg bg-surface-neutral-opacity px-1.5', className, classNames?.root)}>
      <span className={clsx('bg-gradient-purple text-transparent bg-clip-text inline-flex type-overline-xxs pt-[0.125rem]', classNames?.label)}>
        {content}
      </span>
    </div>
  )
}
 
export default Pill