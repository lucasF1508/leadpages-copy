import React from 'react'
import { styled } from '@design'
import { Pivot as Hamburger } from 'hamburger-react'

const $NavDrawerTrigger = styled('div', {
  d: 'flex',
  ff: 'row',
  jc: 'center',
  ai: 'center',
  pointerEvents: 'all',
  cursor: 'pointer',
  z: '$navTrigger',
  transition: 'color 0s linear',
  mr: '-$2',
  c: '$text',

  div: {
    br: '1rem',
  },

  '@>s': {
    top: '$5',
  },

  '@>navigationDesktop': {
    d: 'none',
  },

  variants: {
    isNavOpen: {
      true: {
        c: '$hover',
      },
    },
  },
})

const NavDrawerTrigger = ({ isNavOpen, setNavOpen, handleKeyPress }) => (
  <$NavDrawerTrigger isNavOpen={isNavOpen}>
    <Hamburger
      toggled={isNavOpen}
      toggle={setNavOpen}
      onKeyPress={handleKeyPress}
      size={22}
      distance="lg"
      hideOutline={false}
      label="Menu Icon"
    />
  </$NavDrawerTrigger>
)

export default NavDrawerTrigger
