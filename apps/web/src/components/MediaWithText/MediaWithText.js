import React from 'react'
import { styled } from '@design'
import Media from '@components/Media'
import Image from '@components/Image'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'
import Flex from '@components/Flex'
import Checkmark from '@components/Svgs/Checkmark'

export const $MediaWithText = styled('div', {
  d: 'flex',
  gap: 'calc($sizes$cols1 + $grid$x)',

  variants: {
    layout: {
      horizontal: { ff: 'row nowrap', ai: 'center', jc: 'space-between' },
      vertical: { ff: 'column nowrap', ai: 'flex-start' },
    },
  },
})

export const $MediaWithTextContent = styled('div', {
  d: 'flex',
  ff: 'column',
  jc: 'center',
  gap: '$cols1',

  variants: {
    align: { left: { '@>m': { order: -1 } } },
    layout: {
      horizontal: { f: '1 1 $sizes$cols4' },
      vertical: { f: '0 1 auto' },
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
})

export const $MediaWithTextMedia = styled('div', {
  w: '100%',
  position: 'relative',

  variants: {
    align: { left: { order: -1 } },
    layout: {
      horizontal: { f: '1 1 $sizes$cols7' },
      vertical: { f: '0 1 auto' },
    },
    hasBackground: {
      true: {
        // padding: '$10',
      },
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
})

const $BackgroundImage = styled(Image, {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
})

const $LinkTextWrapper = styled('span', {
  transition: 'all 0.3s ease',
  borderBottom: '2px solid transparent',
})

const $Checkmark = styled(Checkmark, {
  color: '$text',
  transition: 'all 0.3s ease',
})

const $Link = styled(Link, {
  '&[class*="linkStyle-text"]': {
    color: '$textAlt',
    type: 'button',
    textAlign: 'left',
    fontWeight: 500,
    mb: '$2',

    '> svg': {
      position: 'relative',
      top: -1,
    },
  },

  '&last-child': {
    mb: 0,
  },

  [`&:hover ${$LinkTextWrapper}`]: {
    color: '$primary',
    borderBottom: '2px solid $colors$primary',
  },

  [`&:hover ${$Checkmark}`]: {
    color: '$primary',
  },
})

const MediaWithText = ({
  type,
  media = {},
  heading,
  content,
  align = 'right',
  links,
  linkDecorators = [],
  backgroundImage,
  ...props
}) => {
  const hasArrows = !!linkDecorators.includes('arrows')
  const hasCheckmarks = !!linkDecorators.includes('checkmarks')
  const iconProps = hasArrows ? { hasIcon: true, icon: 'internal' } : {}

  return (
    <$MediaWithText
      layout={{ '@initial': 'vertical', '@>m': 'horizontal' }}
      {...props}
    >
      <$MediaWithTextMedia
        layout={{ '@initial': 'vertical', '@>m': 'horizontal' }}
        hasBackground={!!backgroundImage}
      >
        {backgroundImage && (
          <$BackgroundImage objectFit="contain" image={backgroundImage} />
        )}
        <Media type={type} media={media} ratio={media?.ratio} />
      </$MediaWithTextMedia>
      <$MediaWithTextContent
        layout={{ '@initial': 'vertical', '@>m': 'horizontal' }}
        align={{ '@initial': 'none', '@>s': align }}
      >
        {heading && <Heading heading={heading} tag="h5" css={{ mb: 0 }} />}
        {content && <Text content={content} />}
        {links && (
          <Flex css={{ mt: '$3' }}>
            {links.map(({ _key, ...link }) => (
              <$Link css={{ gap: '$2' }} {...iconProps} key={_key} {...link}>
                {hasCheckmarks && <$Checkmark />}
                <$LinkTextWrapper>{link?.label}</$LinkTextWrapper>
              </$Link>
            ))}
          </Flex>
        )}
      </$MediaWithTextContent>
    </$MediaWithText>
  )
}

export default MediaWithText
