import React from 'react'
import { styled } from '@design'
import Text from './Text'

const $TextStandard = styled(Text, {
  mw: '$content',
  mx: 'auto',
})

const TextStandard = (props) => <$TextStandard {...props} />

export default TextStandard
