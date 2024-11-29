import React from 'react'
import { styled } from '@design'
import Link from '@components/Link'
import Text from './Text'

const $TextStandard = styled(Text, {
  mw: '$content',
  mx: 'auto',
})

const $LinksContainer = styled('div', {
  '& > div': {
    '@>769': {
      alignItems: 'flex-start',
    },
  },
  '& form': {
    width: '100%',
    maxWidth: '$cols5',
  },
})

const TextStandard = ({ links, ...props }) => (
  <$TextStandard>
    <Text {...props} />
    {links && (
      <$LinksContainer>
        {links.map(({ _key, ...link }) => (
          <Link key={_key} {...link} />
        ))}
      </$LinksContainer>
    )}
  </$TextStandard>
)

export default TextStandard
