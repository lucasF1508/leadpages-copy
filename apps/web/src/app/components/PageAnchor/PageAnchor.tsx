import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import kebabCase from 'lodash/kebabCase'

export interface PageAnchorProps
  extends Omit<React.ComponentProps<'a'>, 'className'> {
  className?: ClassValue
  slug?: string
}

const PageAnchor = ({ className, slug, ...props }: PageAnchorProps) => {
  const id = kebabCase(slug || '').replace('#', '')

  if (!id) {
    return null
  }

  return (
    <a
      aria-label={`Link to ${slug}`}
      className={clsx('invisible absolute', className)}
      href={`#${id}`}
      id={id}
      {...props}
    >
      {slug}
    </a>
  )
}

export default PageAnchor
