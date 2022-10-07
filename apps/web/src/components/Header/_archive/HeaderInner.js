import React from 'react'
import { styled } from '@design'

export const $HeaderInner = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'pace-between',
  ai: 'stretch',
  h: '100%',
  w: '100%',
  mw: '$base',
  ml: 'auto',
  mr: 'auto',
})

const HeaderInner = ({ children, className }) => (
  <$HeaderInner className={className}>{children}</$HeaderInner>
)

export default HeaderInner
