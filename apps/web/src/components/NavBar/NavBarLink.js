import React from 'react'
import Link from '@components/Link'
import { Link as NavBarPrimitiveLink } from '@radix-ui/react-navigation-menu'

const NavBarLink = ({ children, css, isMobile = false, ...link }, ref) => {
  const linkProps = {
    ref,
    linkStyle: 'none',
    css: {
      position: 'relative',
      z: '$aboveContent',
      d: 'flex',
      jc: 'flex-start',

      svg: {
        d: 'block',
        h: '$space$2',
        w: '$space$2',
      },
      ...css,
    },
    ...link,
  }

  if (!isMobile) {
    return (
      <NavBarPrimitiveLink asChild>
        <Link aria-label={link?.label} {...linkProps}>
          {children || link?.label}
        </Link>
      </NavBarPrimitiveLink>
    )
  }

  return (
    <Link aria-label={link?.label} {...linkProps}>
      {children || link?.label}
    </Link>
  )
}

export default React.forwardRef(NavBarLink)
