import React from 'react'
import { styled } from '@design'
import { Viewport } from '@radix-ui/react-navigation-menu'
import { scaleIn, scaleOut } from './NavBarAnimations'

const $NavBarViewport = styled(Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  width: 'var(--radix-navigation-menu-viewport-width)',
  h: 'var(--radix-navigation-menu-viewport-height)',
  br: '0.75rem',
  o: 'hidden',
  bc: '$white',
  bs: '$dropdown',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
})

const $NavBarViewportInner = styled('div', {
  w: '100%',
  d: 'flex',
  jc: 'center',
  br: '0.75rem',
  o: 'hidden',
  transition: 'transform 300ms ease',
})

const $NavBarViewportContainer = styled('div', {
  position: 'absolute',
  w: '100vw',
  top: '100%',
  left: 0,
  mt: '-$3_5',
  perspective: '2000px',
  transition: 'transform 300ms ease',
  o: 'hidden',
})

const NavBarViewport = ({ translateViewport }) => (
  <$NavBarViewportContainer>
    <$NavBarViewportInner
      css={{
        transform: `translateX(${translateViewport})`,
      }}
    >
      <$NavBarViewport />
    </$NavBarViewportInner>
  </$NavBarViewportContainer>
)

export default NavBarViewport
