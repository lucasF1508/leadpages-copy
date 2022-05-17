import React from 'react'
import { styled } from '@design'
import Media from '@components/Media'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight'

export const $MediaWithText = styled('div', {
  d: 'flex',
  gap: '$4',

  variants: {
    layout: {
      horizontal: { ff: 'row nowrap', ai: 'center' },
      vertical: { ff: 'column nowrap', ai: 'flex-start' },
    },
  },
})

export const $MediaWithTextContent = styled('div', {
  d: 'flex',
  ff: 'column',
  jc: 'center',
  gap: '$3',
  f: '1 1 50%',

  variants: {
    align: {
      left: {
        order: -1,
      },
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
})

export const $MediaWithTextMedia = styled('div', {
  w: '100%',
  f: '1 0 50%',
})

const MediaWithText = ({
  type,
  media = {},
  heading,
  content,
  align = 'right',
  link,
  ...props
}) => (
  <$MediaWithText
    layout={{ '@initial': 'vertical', '@>s': 'horizontal' }}
    {...props}
  >
    <$MediaWithTextMedia>
      <Media type={type} media={media} />
    </$MediaWithTextMedia>
    <$MediaWithTextContent align={{ '@initial': 'none', '@>s': align }}>
      {heading && <Heading heading={heading} tag="h5" css={{ mb: 0 }} />}
      {content && <Text tagStyle="baseTypeAlt" content={content} />}
      {link && (
        <Link {...link}>
          {link?.label}
          <FiArrowRight />
        </Link>
      )}
    </$MediaWithTextContent>
  </$MediaWithText>
)

export default MediaWithText
