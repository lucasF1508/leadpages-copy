import React from 'react'
import Link from '@components/Link'

const LinkMarkRender = (props) => {
  const { mark, children } = props
  const { linkStyle, condition } = mark
  const css = {}
  const iconProps =
    condition === 'internal' ? { hasIcon: true, icon: condition } : {}

  if (['button', 'ghost'].includes(linkStyle)) {
    css.marginTop = '2rem'
  }

  return (
    <Link {...iconProps} css={css} {...mark}>
      {children}
    </Link>
  )
}

export default LinkMarkRender
