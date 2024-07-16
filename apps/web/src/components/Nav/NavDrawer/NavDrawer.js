import { styled } from '@design'
import { AnimatePresence, m } from 'framer-motion'
import NavDrawerMenu from './NavDrawerMenu'

const $NavDrawer = styled(m.div, {
  height: 'calc(100dvh - 100% - 1.25rem)',
  position: 'absolute',
  top: '100%',
  right: 0,
  left: 0,
  background: '$white',
  borderRadius: '0 0 $nav $nav',
  boxShadow: '$nav',
  transformOrigin: 'top',

  '@>m': {
    display: 'none',
  },
})

const $NavDrawerInner = styled(m.div, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  overflow: 'scroll',
  height: '100%',
  scrollbarWidth: 'none',

  '&:-webkit-scrollbar': {
    display: 'none',
  },
})

const NavDrawer = ({ isNavOpen, menu, buttons }) => (
  <AnimatePresence mode="wait">
    {isNavOpen && (
      <$NavDrawer
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1, transition: { delay: 0.2 } }}
        exit={{ scaleY: 0, transition: { duration: 0.075 } }}
        transition={{
          ease: 'easeOut',
        }}
      >
        <$NavDrawerInner>
          <NavDrawerMenu menu={menu} buttons={buttons} />
        </$NavDrawerInner>
      </$NavDrawer>
    )}
  </AnimatePresence>
)

export default NavDrawer
