import React from 'react'
import { m as motion } from 'framer-motion'
import { styled } from '@design'
import { FiX as Icon } from '@react-icons/all-files/fi/FiX'
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon'

const $ModalClose = styled(motion.div, {
  top: '$1',
  right: '0.125rem',
  position: 'absolute',
  z: 'calc($cover + 1)',
  w: '$space$4',
  h: '$space$4',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  cursor: 'pointer',

  svg: {
    d: 'block',
    w: '50%',
  },

  '@>s': {
    w: '$space$5',
    h: '$space$5',
    right: '0.25rem',
  },
})

const ModalClose = ({ closeModal, ...props }) => (
  <$ModalClose
    onClick={closeModal}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{
      duration: 0.3,
      delay: 0.05,
    }}
    {...props}
  >
    <AccessibleIcon label="close">
      <Icon />
    </AccessibleIcon>
  </$ModalClose>
)

export default ModalClose
