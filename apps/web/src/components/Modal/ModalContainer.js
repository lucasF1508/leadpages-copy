import React from 'react'
import { m as motion } from 'framer-motion'
import { styled } from '@design'

export const $ModalContainer = styled(motion.div, {
  position: 'fixed',
  top: 0,
  left: 0,
  box: [{ property: 'py' }, { property: 'px' }],
  w: '100%',
  h: '100%',
  d: 'flex',
  ff: 'column',
  jc: 'center',
  ai: 'center',
  z: '$cover',
  o: 'hidden',
})

const ModalContainer = ({ children, ...props }) => (
  <$ModalContainer {...props}>{children}</$ModalContainer>
)

export default ModalContainer
