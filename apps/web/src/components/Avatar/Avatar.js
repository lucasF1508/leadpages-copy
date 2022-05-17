import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Text from '@components/Text'

const $Avatar = styled('div', {
  d: 'flex',
  ai: 'center',

  variants: {
    layout: {
      horizontal: {
        ff: 'row nowrap',
        gap: '$2',
      },
      vertical: {
        ff: 'column nowrap',
        gap: '$1',
        ta: 'center',
      },
    },
  },
})

const $AvatarImage = styled(Image, {
  w: '$space$5',
  h: '$space$5',

  '@>s': {
    w: '$space$6',
    h: '$space$6',
  },

  '@>m': {
    w: '$space$8',
    h: '$space$8',
  },

  variants: {
    large: {
      true: {
        w: '5.5rem',
        h: '5.5rem',
      },
    },
  },
})

const $AvatarContentGroup = styled('div', {
  d: 'flex',
  ff: 'column nowrap',
})

const Avatar = ({
  image,
  name,
  title,
  large = false,
  layout = 'horizontal',
  ...props
}) => (
  <$Avatar layout={layout} {...props}>
    <$AvatarImage image={image} large={large} shape="round" />
    <$AvatarContentGroup>
      <Text tagStyle="caption" content={name} />
      <Text tagStyle="caption" content={title} css={{ c: '$textAlt' }} />
    </$AvatarContentGroup>
  </$Avatar>
)

export default Avatar
