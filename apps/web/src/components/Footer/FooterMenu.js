import React from 'react'
import { styled } from '@design'

const $FooterMenu = styled('div', {
  d: 'flex',
  ff: 'column',
  jc: 'flex-start',
  ai: 'flex-start',
  mt: '$4',

  '&:first-child': {
    mt: 0,
  },

  '@>s': {
    ml: '$6',
    mt: 0,

    '&:first-child': {
      ml: 0,
    },
  },
})

const FooterMenu = ({ className, children }) => (
  <$FooterMenu className={className}>{children}</$FooterMenu>
)

export default FooterMenu
