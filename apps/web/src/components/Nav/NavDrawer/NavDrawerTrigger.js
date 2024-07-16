import { styled } from '@design'
import { Slant as Hamburger } from 'hamburger-react'

const $NavDrawerTrigger = styled('div', {
  cursor: 'pointer',
  ml: '$3',

  '@>m': {
    display: 'none',
  },

  variants: {
    isDark: {
      true: {
        color: '$white',
      },
    },
  },
})

const NavDrawerTrigger = ({ setNavOpen, isNavOpen, isDark }) => (
  <$NavDrawerTrigger isDark={isDark}>
    <Hamburger
      color="currentColor"
      distance="lg"
      hideOutline
      label="Menu"
      rounded
      size={24}
      toggle={setNavOpen}
      toggled={isNavOpen}
    />
  </$NavDrawerTrigger>
)

export default NavDrawerTrigger
