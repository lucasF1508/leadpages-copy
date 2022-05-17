import React from 'react'
import { styled } from '@design'

export const $InputWrap = styled('div', {
  position: 'relative',
  d: 'block',
  ff: 'row wrap',
  jc: 'flex-start',
  ai: 'center',
  variants: {
    type: {
      radio: { d: 'inline-flex' },
      checkbox: { d: 'inline-flex' },
    },
  },
})

const InputWrap = ({ type, children, ...props }) => (
  <$InputWrap type={type} {...props}>
    {children}
  </$InputWrap>
)

export default InputWrap
