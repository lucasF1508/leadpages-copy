import React from 'react'
import clsx from 'clsx'

const SkeletonLoader = ({ children, className, style }: React.HTMLProps<HTMLDivElement>) => <div
  className={clsx(
    'bg-dark/10 animate-pulse rounded-sm h-[1lh] w-full',
    className
  )}
  style={style}
>{children}</div>

export default SkeletonLoader