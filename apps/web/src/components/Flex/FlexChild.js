import React from 'react'
import { styled } from '@design'

const $FlexChild = styled('div', {
  f: '0 1 50%',
})

const FlexChild = ({ children, ...props }) => (
  <$FlexChild {...props}>{children}</$FlexChild>
)

export default FlexChild
