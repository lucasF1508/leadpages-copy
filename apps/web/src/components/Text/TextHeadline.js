import React from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'
import Text from './Text'

const Socialize = dynamic(() => import('@components/Socialize'))

const $TextHeadline = styled('div', {
  mw: '$cols8',
  mx: 'auto',
})

const $TextHeadlineInner = styled(Text, {
  textAlign: 'center',

  h2: {
    mw: '$cols8',
    mx: 'auto',
  },

  h3: {
    mw: '$cols7',
    mx: 'auto',
  },

  '& a': {
    fontWeight: '$medium',
  },
})

const TextHeadline = ({ hasSocialize, ...props }) => (
  <$TextHeadline>
    <$TextHeadlineInner {...props} />
    {hasSocialize && <Socialize />}
  </$TextHeadline>
)

export default TextHeadline
