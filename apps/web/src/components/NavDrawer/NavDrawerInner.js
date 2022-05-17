import React from 'react'
import { styled } from '@design'

const $NavDrawerInner = styled('div', {
  w: '100%',
  h: '100%',

  '& > div': {
    h: '100%',
    w: '100%',
    position: 'relative',
    d: 'flex',
    ff: 'column',
    jc: 'flex-start',
    ai: 'flex-start',
  },
})

const NavDrawerInner = ({ children }) => (
  <$NavDrawerInner>
    <div>{children}</div>
  </$NavDrawerInner>
)

export default NavDrawerInner
