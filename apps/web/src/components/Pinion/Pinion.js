import React from 'react'
import { styled } from '@design'
import { pinionTokens } from '@design/tokens/pinion'

const $Pinion = styled('section', pinionTokens)

const $Inner = styled('div', {})

const Pinion = ({ component, children, width, ...props }) => (
  <$Pinion component={component} {...props}>
    <$Inner width={width}>{children}</$Inner>
  </$Pinion>
)

export default Pinion
