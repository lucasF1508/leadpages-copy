import React from 'react'
import { styled } from '@design'
import { BallTriangle } from 'react-loader-spinner'

const $Loader = styled('div', {
  position: 'relative',
  d: 'inline-flex',
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'center',
  ml: '$2',
  my: 'auto',
})

const Loader = ({ label, width = 30, height = 30, color, ...props }) => (
  <$Loader {...props}>
    <BallTriangle
      color={color || 'var(--colors-brand)'}
      height={height}
      width={width}
    />
    {label && label}
  </$Loader>
)
export default Loader
