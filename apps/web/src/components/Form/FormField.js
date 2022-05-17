import React from 'react'
import { styled } from '@design'
import { AnimatePresence } from 'framer-motion'
import { InputErrors, InputLabel, InputValid, InputWrap } from './Inputs'

const $FormField = styled('div', {
  position: 'relative',
  z: '$content',
  '& > div': {
    position: 'relative',
  },

  '@<s': {
    gc: '1 / -1',
  },

  variants: {
    type: {
      select: {
        z: '$aboveContent',
      },
      textarea: {
        gc: '1 / -1',
      },
      file: {
        gc: '1 / -1',
      },
    },
  },
})

const FormField = ({
  label,
  name,
  type,
  index,
  children,
  required,
  fieldState,
  hasLabel = true,
  ...props
}) => {
  const { error, invalid, isDirty } = fieldState
  return (
    <$FormField type={type} {...props}>
      {hasLabel && (
        <InputLabel
          label={label}
          inputID={name}
          type={type}
          required={required}
        />
      )}
      <InputWrap type={type}>
        {children}
        <AnimatePresence>
          {isDirty && !invalid && !['radio', 'checkbox'].includes(type) && (
            <InputValid type={type} />
          )}
          {invalid && error && (
            <InputErrors message={error.message} type={type} />
          )}
        </AnimatePresence>
      </InputWrap>
    </$FormField>
  )
}

export default FormField
