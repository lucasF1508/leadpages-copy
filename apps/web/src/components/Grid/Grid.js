import React from 'react'
import { styled } from '@design'

const $Grid = styled('div', {})

const Grid = ({ css, children, ...props }) => {
  const defaultCss = {
    d: 'grid',
    gtc: 'repeat(3, 1fr)',
    gg: '$3',
  }

  return (
    <$Grid css={{ ...defaultCss, ...css }} {...props}>
      {children}
    </$Grid>
  )
}

export default Grid
