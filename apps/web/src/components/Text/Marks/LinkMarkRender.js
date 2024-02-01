import React from 'react'
import Link from '@components/Link'

const LinkMarkRender = (props) => {
  const { mark, children } = props
  const { linkStyle, condition = 'external', href, url } = mark
  const css = {}

  if (['button', 'ghost'].includes(linkStyle)) {
    css.marginTop = '2rem'
  }

  return (
    <Link {...mark} css={css} url={href || url} condition={condition}>
      {children}
    </Link>
  )
}

export default LinkMarkRender
