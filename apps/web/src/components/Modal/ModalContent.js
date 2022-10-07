import React from 'react'
import { m as motion } from 'framer-motion'
import { styled } from '@design'

const $ModalContent = styled(motion.div, {
  position: 'relative',
  d: 'block',
  w: '100%',
  mx: 'auto',
  z: '$cover',
  maxHeight: '100%',
  o: 'auto',

  '& figure': {
    maxHeight: '100vh',
  },
  '& img': {
    objectFit: 'contain',
  },
})

const ModalContent = ({ children, ...props }) => (
  <$ModalContent
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{
      duration: 0.3,
      delay: 0.1,
    }}
    {...props}
  >
    {children}
  </$ModalContent>
)

export default ModalContent
