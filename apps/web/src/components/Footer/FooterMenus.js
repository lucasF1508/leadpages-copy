import React from 'react'
import { styled } from '@design'

export const $FooterMenus = styled('div', {
  f: '1 1 100%',

  '@>s': {
    d: 'flex',
    ff: 'row nowrap',
    jc: 'flex-end',
    ai: 'flex-start',
    f: '0 0 auto',
  },

  '@>s , @<=l': {
    ml: 'auto',
    mr: 'auto',
    mw: '$small',
    w: '100%',
    jc: 'flex-start',
  },
})

const FooterMenus = ({ className, children }) => (
  <$FooterMenus className={className}>{children}</$FooterMenus>
)

export default FooterMenus
