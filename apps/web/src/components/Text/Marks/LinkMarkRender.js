import React from 'react'
import Link from '@components/Link'

const LinkMarkRender = (props) => {
  const { mark, children } = props
  return (
    <Link
      {...mark}
      linkStyle="text"
      css={{
        d: 'inline',
      }}
    >
      {children}
    </Link>
  )
}

export default LinkMarkRender
