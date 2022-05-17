import React from 'react'
import { styled } from '@design'

export const $FooterInner = styled('div', {
  mw: '$base',
  ml: 'auto',
  mr: 'auto',
  d: 'flex',
  ff: 'column',
  jc: 'flex-start',
  ai: 'flex-start',

  '@>l': {
    ff: 'row wrap',
    jc: 'space-between',
    ai: 'flex-start',
  },
})

const FooterInner = ({ className, children }) => (
  <$FooterInner className={className}>{children}</$FooterInner>
)

export default FooterInner
