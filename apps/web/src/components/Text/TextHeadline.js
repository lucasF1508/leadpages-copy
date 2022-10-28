import React from 'react'
import { styled } from '@design'
import Text from './Text'

const $TextHeadline = styled(Text, {
  textAlign: 'center',

  h2: {
    mw: '$cols8',
    mx: 'auto',
  },
})

const TextHeadline = (props) => <$TextHeadline {...props} />

export default TextHeadline
