import React from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@design'
import Link from '@components/Link'
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

const $LinksContainer = styled('div', {
  '& > div': {
    alignItems: 'center',
  },

  '& form': {
    width: '100%',
    maxWidth: '$cols5',
  },
})

const TextHeadline = ({ hasSocialize, links, ...props }) => (
  <$TextHeadline>
    <$TextHeadlineInner {...props} />
    {links && (
      <$LinksContainer>
        {links.map(({ _key, ...link }) => (
          <Link key={_key} {...link} />
        ))}
      </$LinksContainer>
    )}
    {hasSocialize && <Socialize />}
  </$TextHeadline>
)

export default TextHeadline
