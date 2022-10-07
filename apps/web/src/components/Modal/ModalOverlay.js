import React, { memo } from 'react'
import { m as motion } from 'framer-motion'
import { styled } from '@design'

export const $ModalOverlay = styled(motion.div, {
  position: 'absolute',
  top: 0,
  left: 0,
  d: 'block',
  z: '$overlay',
  w: '100%',
  h: '100%',
  backdropFilter: 'blur(8px)',
  bc: 'rgba($colorsRGB$black, 0.1)',
})

const ModalOverlay = ({ closeModal, ...props }) => (
  <$ModalOverlay
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    onClick={closeModal}
    {...props}
  />
)

export default memo(ModalOverlay)
