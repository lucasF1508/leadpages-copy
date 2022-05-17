import React from 'react'
import { styled } from '@design'
import Text from '@components/Text'
import Avatar from '@components/Avatar'

const $Quote = styled('blockquote', {
  d: 'flex',
  ff: 'column nowrap',
  gap: '$4',
})

const Quote = ({ content, image, name, title, ...props }) => (
  <$Quote {...props}>
    <Text
      tagStyle="h5"
      content={content}
      css={{
        c: '$textAlt',
        borderLeft: '2px solid $colors$border',
        pl: '$2',
      }}
    />
    <Avatar image={image} name={name} title={title} css={{ pl: '$2' }} />
  </$Quote>
)

export default Quote
