import { navOffset } from '@components/Nav/Nav'
import { styled } from '@design'
import useStickyHeader from '@hooks/useStickyHeader'
import { AnimatePresence, m } from 'framer-motion'

const $NavSecondary = styled(m.div, {
  bc: '$white',
  position: 'fixed',
  top: 0,
  pt: 'calc($headerHeight$s + $space$1_5)',
  zIndex: '$flyout',
  w: '100%',
  borderBottom: '1px solid $lightGray3',
  boxShadow:
    '0px 10px 20px rgba(15, 12, 9, 0.08), 0px 12px 32px rgba(15, 12, 9, 0.12);',
})

const $NavSecondaryInner = styled('div', {
  maxWidth: '$extended',
  mx: 'auto',
  py: '1.125rem',

  '@>1025': {
    py: '$3',
  },
})

const NavSecondary = ({ children, visible = true }) => {
  const { showHeader, stickyMotionProps } = useStickyHeader({
    offsetTop: 10,
  })

  return (
    <AnimatePresence>
      {visible && (
        <$NavSecondary
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: showHeader ? 0 : navOffset * -1 }}
          exit={{ opacity: 0 }}
          transition={stickyMotionProps?.transition}
        >
          <$NavSecondaryInner>{children}</$NavSecondaryInner>
        </$NavSecondary>
      )}
    </AnimatePresence>
  )
}

export default NavSecondary
