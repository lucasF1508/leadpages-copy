import React from 'react'
import { styled } from '@design'

const $Tag = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  ai: 'center',
  h: '1.25rem',
  px: '0.625rem',
  type: 'sm',
  fontWeight: '$semiBold',
  alignSelf: 'flex-start',
  border: '1px solid $colors$primary',
  br: '0.625rem',
})

const Tag = ({ children, ...props }) => <$Tag {...props}>{children}</$Tag>

export default Tag
