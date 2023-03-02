import React from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'
import Text from './Text'

const Socialize = dynamic(() => import('@components/Socialize'))

const $TextHeadline = styled(Text, {
  textAlign: 'center',

  h2: {
    mw: '$cols8',
    mx: 'auto',
  },

  h3: {
    mw: '$cols7',
    mx: 'auto',
  },
})

const TextHeadline = ({ hasSocialize, ...props }) => (
  <>
    <$TextHeadline {...props} />
    {hasSocialize && <Socialize />}
  </>
)

export default TextHeadline
