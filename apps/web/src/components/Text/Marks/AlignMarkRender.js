import React from 'react'
import { styled } from '@design'

const $TextAlign = styled('span', {
  d: 'block',
  ta: 'center',
})

const AlignMarkRender = ({ children }) => <$TextAlign>{children}</$TextAlign>

export default AlignMarkRender
