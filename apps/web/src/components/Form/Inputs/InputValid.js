import React from 'react'
import { m } from 'framer-motion'
import { styled } from '@design'
import { FiCheckCircle as Icon } from '@react-icons/all-files/fi/FiCheckCircle'

const $InputValid = styled(m.div, {
  position: 'absolute',
  right: '$2',
  top: 0,
  w: '$space$2',
  h: '$space$2',
  mt: '$2',

  '& svg': {
    d: 'block',
    w: '100%',
    h: '100%',
    fill: '$success',
  },

  variants: {
    type: {
      radio: {
        right: 0,
      },
      checkbox: {
        right: 0,
      },
      select: {
        right: '$5',
      },
      multiselect: {
        right: '$5',
      },
      file: {
        right: '$7',
      },
    },
  },
})

const InputValid = ({ type, ...props }) => (
  <$InputValid
    type={type}
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    exit={{ scale: 0 }}
    {...props}
  >
    <Icon />
  </$InputValid>
)

export default InputValid
