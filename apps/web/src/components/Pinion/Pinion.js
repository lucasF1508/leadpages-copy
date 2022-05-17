import React from 'react'
import { styled } from '@design'
import { pinionTokens } from '@design/tokens/pinion'

const $Pinion = styled('section', pinionTokens)

const Pinion = ({ component, children, ...props }) => (
  <$Pinion component={component} {...props}>
    <div>{children}</div>
  </$Pinion>
)

export default Pinion
