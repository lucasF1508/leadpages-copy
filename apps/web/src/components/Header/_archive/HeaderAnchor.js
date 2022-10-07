import React from 'react'
import { styled } from '@design'

export const $HeaderAnchor = styled('div', {
  f: '1 1 auto',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'center',
})

const HeaderAnchor = ({ children, className }) => (
  <$HeaderAnchor className={className}>{children}</$HeaderAnchor>
)

export default HeaderAnchor
