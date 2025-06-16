import type { LinkStyleType, LinkType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Link from '@/components/Link'

const _Link = ({
  children,
  value,
}: {
  children: React.ReactNode
  value?: LinkType
}) => {
  const {linkStyle} = value || {}

  if (linkStyle === 'inline' as LinkStyleType) {
    return (
      <Link {...value}>
        <span className='relative group'>
          {children}
          <div className={
            clsx(
            'h-full max-h-[0.125rem] bg-brand-violet-primary absolute w-full bottom-0 transition-all scale-y-100 duration-slow pointer-events-none -translate-y-full origin-bottom',
            'group-hover:scale-y-150 group-hover:bg-brand-fuchsia-strong'
          )}/>
        </span>
      </Link> 
    )
  }

  return <Link {...value}>{children}</Link>
}

export default _Link
