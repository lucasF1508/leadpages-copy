import React from 'react'
import { styled } from '@design'

const $InputLabel = styled('label', {
  position: 'relative',
  d: 'flex',
  ff: 'row',
  jc: 'flex-start',
  ai: 'center',
  mb: '$1',
  c: '$text',
  opacity: 1,
  type: 'caption',
})

const InputLabel = ({ required, label, inputID, children, ...props }) => (
  <$InputLabel htmlFor={inputID} {...props}>
    {label}
    {required && <span>*</span>}
    {children}
  </$InputLabel>
)

export default InputLabel
