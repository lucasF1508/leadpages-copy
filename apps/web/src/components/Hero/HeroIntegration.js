import React from 'react'
import { styled } from '@design'
import HeroDefault from './HeroDefault'

export const $HeroIntegration = styled(HeroDefault, {
  bc: '$gray3',
})

const HeroIntegration = (props) => <$HeroIntegration {...props} />

export default HeroIntegration
