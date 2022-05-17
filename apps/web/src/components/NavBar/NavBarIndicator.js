import React from 'react'
import { styled } from '@design'

const $NavBarIndicator = styled('div', {
  position: 'absolute',
  h: '$space$1',
  top: '100%',
  mt: '-0.75rem',
  o: 'hidden',
  w: '100%',
  z: '$cover',
})

const $NavBarIndicatorTrack = styled('div', {
  d: 'flex',
  ai: 'flex-end',
  jc: 'flex-start',
  h: '100%',
  w: '100%',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 200ms ease',
  },
})

const $NavBarIndicatorArrow = styled('svg', {
  transformOrigin: 'bottom center',
  top: 0,
  fill: '$backgroundContrast',
  d: 'block',
  w: '1rem',
  ml: '-1rem',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'opacity, transform, 200ms ease',
    '[data-state="visible"] &': {
      transform: 'scale(1)',
      opacity: 1,
    },
    '[data-state="hidden"] &': {
      transform: 'scale(0)',
      opacity: 0,
    },
  },
})

const NavBarIndicator = ({ navIsOpen, translateIndicator }) => (
  <$NavBarIndicator data-state={navIsOpen ? 'visible' : 'hidden'}>
    <$NavBarIndicatorTrack
      css={{
        transform: `translateX(${translateIndicator})`,
      }}
    >
      <$NavBarIndicatorArrow viewBox="0 0 16 7.4">
        <path d="M6.6.8 0 7.4h16L9.4.8c-.8-.8-2-.8-2.8 0z" />
      </$NavBarIndicatorArrow>
    </$NavBarIndicatorTrack>
  </$NavBarIndicator>
)

export default NavBarIndicator
