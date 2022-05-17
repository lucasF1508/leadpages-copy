import React from 'react'
import { styled } from '@design'

export const $FooterContent = styled('div', {
  mw: '$cols3',
  mb: '$4',

  '@>s': {
    ml: 'auto',
    mr: 'auto',
    mw: '$small',
    w: '100%',
  },

  '@>l': {
    mr: '$6',
    ml: 0,
    mw: '$cols3',
  },
})

const FooterContent = ({ className, children }) => (
  <$FooterContent className={className}>{children}</$FooterContent>
)

export default FooterContent
