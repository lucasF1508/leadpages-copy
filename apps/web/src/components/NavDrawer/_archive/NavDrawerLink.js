import React from 'react'
import { styled } from '@design'
import Link from '@components/Link'

const $NavDrawerLink = styled('div', {
  position: 'relative',
  box: { property: 'px' },
  pr: '$4',
  py: '$2',
  w: '100%',
  cursor: 'pointer',
  ta: 'left',
  bt: '$base',
})

const NavDrawerLink = (props) => (
  <$NavDrawerLink>
    <Link
      css={{
        c: '$text',
        type: 'textMd',
        fontWeight: '$medium',
      }}
      {...props}
    />
  </$NavDrawerLink>
)

export default NavDrawerLink
