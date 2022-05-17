import React from 'react'
import { styled } from '@design'
import { m } from 'framer-motion'
import { BiErrorCircle as Icon } from '@react-icons/all-files/bi/BiErrorCircle'
import Text from '@components/Text'

const $InputErrorsMessage = styled('div', {
  d: 'block',
  w: '100%',
  p: '$1 0',
})

const $InputErrorsIcon = styled(m.div, {
  w: '$space$2',
  h: '$space$2',
  position: 'absolute',
  top: '$2',
  right: '$2',
  mb: '-0.375rem',

  '& svg': {
    d: 'block',
    w: '100%',
    h: '100%',
    fill: '$error',
  },

  variants: {
    type: {
      radio: { right: 0 },
      checkbox: { right: 0 },
      select: { right: '$5' },
      file: { right: '$7' },
      textarea: { bottom: '$2' },
    },
  },
})

const InputErrors = ({ message, type, ...props }) => (
  <>
    <$InputErrorsMessage type={type} role="alert" {...props}>
      <Text
        as="span"
        content={message}
        css={{ c: '$error', d: 'block', type: 'caption' }}
      />
    </$InputErrorsMessage>

    {type !== 'form' && (
      <$InputErrorsIcon
        type={type}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <Icon />
      </$InputErrorsIcon>
    )}
  </>
)

export default InputErrors
