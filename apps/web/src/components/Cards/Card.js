import React from 'react'
import { styled } from '@design'
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight'
import Heading from '@components/Heading'
import Link from '@components/Link'
import Media from '@components/Media'
import Text from '@components/Text'

const $Card = styled('div', {
  d: 'flex',
  w: '100%',
  br: '$s',
  o: 'hidden',
  bc: '$white',
  bs: '$m',

  variants: {
    layout: {
      horizontal: {
        ff: 'row nowrap',
      },
      vertical: {
        ff: 'column',
        jc: 'flex-start',
        ai: 'flex-start',
      },
    },
  },
})

const $CardImage = styled('div', {
  position: 'relative',
  w: '100%',
  ratio: '5:3',
  f: '0 0 50%',

  variants: {
    align: {
      left: {
        order: -1,
      },
      right: {
        order: 1,
      },
    },
  },

  defaultVariants: {
    align: 'left',
  },
})

const $CardTextContent = styled('div', {
  d: 'flex',
  ff: 'column nowrap',
  p: '$4 $2',

  '@>s': {
    p: '$5 $3',
  },

  variants: {
    layout: {
      horizontal: {
        gap: '$2',
      },
      vertical: {
        gap: '$1',
      },
    },
  },
})

const Card = ({
  align,
  children,
  content,
  heading,
  image,
  layout = 'vertical',
  link,
  ...props
}) => (
  <$Card layout={layout} {...props}>
    {image && (
      <$CardImage align={align} layout={layout}>
        <Media image={image} type="fluid" />
      </$CardImage>
    )}
    <$CardTextContent layout={children ? null : layout}>
      {children || (
        <>
          {heading && <Heading tag="h6" heading={heading} css={{ mb: 0 }} />}
          {content && <Text tagStyle="baseTypeAlt" content={content} />}
          {link && (
            <Link
              linkStyle="text"
              {...link}
              css={{ gap: '$1', mt: '0.625rem' }}
            >
              {link?.label}
              <FiArrowRight />
            </Link>
          )}
        </>
      )}
    </$CardTextContent>
  </$Card>
)

export default Card
