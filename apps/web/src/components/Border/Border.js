import React from 'react'
import { styled } from '@design'

export const $Border = styled('hr', {
  b: 'none',
  bt: '0.25rem solid $colors$border',
  w: '100%',
  pe: 'none',
})

const Border = ({ className }) => <$Border className={className} />

export default Border
