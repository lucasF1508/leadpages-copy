import React from 'react'
import { styled } from '@design'

const $FooterCopyright = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-end',
  ai: 'center',
  w: '100%',
  ws: 'nowrap',
  type: 'caption',
  box: {
    property: 'mt',
  },

  '@<xs': {
    fontSize: '0.675rem',
  },

  '& a[href]': {
    transition: 'color $base',
    ml: '0.25rem',

    '&:hover': {
      c: '$hover',
    },
  },
})

const FooterCopyright = ({ className, children }) => (
  <$FooterCopyright className={className}>{children}</$FooterCopyright>
)

export default FooterCopyright
