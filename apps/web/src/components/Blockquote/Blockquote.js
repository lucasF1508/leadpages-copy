import React from 'react'
import { styled } from '@design'
import Heading from '@components/Heading'
import Text from '@components/Text'

const $Blockquote = styled('blockquote', {
  d: 'flex',
  ff: 'column nowrap',
  gap: '$4',
  bc: '$blackA4',
  p: '$4',
  br: '$card',

  '@>s': {
    p: '$6',
  },
})

const Blockquote = ({ content, author, ...props }) => (
  <$Blockquote {...props}>
    {content && <Text as="div" tagStyle="h3" content={content} />}
    {author && <Heading tag="h5" css={{ m: 0 }} heading={author} />}
  </$Blockquote>
)

export default Blockquote
