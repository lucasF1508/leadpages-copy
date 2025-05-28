import type { LinkType } from '@types'
import React, { forwardRef } from 'react'
import clsx from 'clsx'
import LinkDisabled from './LinkDisabled'
import LinkExternal from './LinkExternal'
import LinkInternal from './LinkInternal'
import LinkNull from './LinkNull'

const Link = forwardRef<HTMLAnchorElement, LinkType>(
  (
    {
      className,
      condition,
      hasIcon = true,
      href,
      linkSize,
      linkStyle,
      url,
      ..._props
    },
    ref
  ) => {
    const props: LinkType = {
      className: clsx(
        linkStyle && `link-${linkStyle}`,
        linkSize && `link-${linkSize}`,
        hasIcon && `link-w-icon`,
        hasIcon && !linkStyle?.includes('text') && '[&_.link-icon-background]:hidden',
        !hasIcon && '[&_.link-label]:hover:transform-none',
        className
      ),
      condition,
      hasIcon,
      ref,
      url: url || href,
      ..._props,
    }

    switch (props.condition) {
      case 'internal':
        return <LinkInternal {...props} />
      case 'external':
      case 'download':
        return <LinkExternal {...props} />
      case 'disabled':
        return <LinkDisabled {...props} />
      default:
        return <LinkNull {...props} />
    }
  }
)

export default Link
