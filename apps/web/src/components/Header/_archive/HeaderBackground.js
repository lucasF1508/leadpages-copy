import React from 'react'
import { styled } from '@design'
import { m as motion } from 'framer-motion'
import useStickyHeader from '@hooks/useStickyHeader'

const $HeaderBackground = styled(motion.div, {
  position: 'fixed',
  top: '-$headerHeight$s',
  left: 0,
  z: '$headerBackground',
  h: '$headerHeight$s',
  w: '100%',
  bc: '$white',
})

const HeaderBackground = () => {
  const { stickyMotionProps } = useStickyHeader()
  return <$HeaderBackground {...stickyMotionProps} />
}
export default HeaderBackground
