import React from 'react'
import { styled } from '@design'

const $Svg = styled('svg', {})

const ArrowRight = (props) => (
  <$Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" {...props}>
    <polygon
      id="Line"
      className="st0"
      points="4.7,6.3 0.2,1.8 1.3,0.7 6.8,6.3 1.3,11.8 0.2,10.7 "
    />
  </$Svg>
)

export default ArrowRight
