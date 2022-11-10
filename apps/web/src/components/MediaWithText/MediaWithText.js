import React from 'react'
import { styled } from '@design'
import Media from '@components/Media'
import Image from '@components/Image'
import Heading from '@components/Heading'
import Text from '@components/Text'
import Link from '@components/Link'
import Flex from '@components/Flex'
import Checkmark from '@components/Svgs/Checkmark'
import isObject from 'lodash/isObject'

export const $MediaWithText = styled('div', {
  d: 'flex',
  gap: '$5',

  variants: {
    priority: {},
    layout: {
      horizontal: {
        ff: 'row nowrap',
        ai: 'center',
        jc: 'space-between',
        gap: 'calc($sizes$cols1 + $grid$x)',
      },
      vertical: { ff: 'column nowrap', ai: 'flex-start' },
    },
  },
  compoundVariants: [
    {
      layout: 'vertical',
      priority: 'content',
      css: {
        ai: 'center',
      },
    },
  ],
})

export const $MediaWithTextContent = styled('div', {
  d: 'flex',
  ff: 'column',
  jc: 'center',
  gap: '$cols1',

  variants: {
    priority: {},
    align: {},
    layout: {
      horizontal: { f: '1 0 $sizes$cols4' },
      vertical: { f: '0 1 auto' },
    },
  },
  compoundVariants: [
    {
      layout: 'horizontal',
      align: 'left',
      css: {
        order: -1,
      },
    },
    {
      layout: 'horizontal',
      priority: 'content',
      css: {
        f: '1 0 $sizes$cols5',
        ta: 'left',
      },
    },
    {
      layout: 'vertical',
      priority: 'content',
      css: {
        ta: 'center',
        order: -1,
      },
    },
    {
      layout: 'horizontal',
      priority: 'content',
      align: 'right',
      css: {
        order: 1,
      },
    },
    {
      layout: 'vertical',
      priority: 'content',
      align: 'right',
      css: {
        order: -1,
      },
    },
  ],
  defaultVariants: {
    layout: 'horizontal',
  },
})

export const $MediaWithTextMedia = styled('div', {
  w: '100%',
  position: 'relative',

  variants: {
    priority: {},
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
  compoundVariants: [
    {
      layout: 'horizontal',
      priority: 'content',
      css: {
        f: '1 1 $sizes$cols6',
      },
    },
  ],
  defaultVariants: {
    layout: 'horizontal',
  },
})

export const $Media = styled(Media, {})

const $BackgroundImage = styled(Image, {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
})

const $LinkTextWrapper = styled('span', {})

const $Checkmark = styled(Checkmark, {
  color: '$text',
  transition: 'all 0.3s ease',
})

export const $Link = styled(Link, {
  '&[class*="linkStyle-text"]': {
    color: '$textAlt',
    type: 'button',
    textAlign: 'left',
    fontWeight: 500,
    mb: '$2',

    '&:last-child': {
      mb: 0,
    },

    '> svg': {
      position: 'relative',
      top: -1,
    },

    '> span': {
      transition: 'all 0.3s ease',
      borderBottom: '2px solid transparent',
    },

    '&:hover > span': {
      color: '$primary',
      borderBottom: '2px solid $colors$primary',
    },

    [`&:hover ${$Checkmark}`]: {
      color: '$primary',
    },
  },
})

const $LinkContainer = styled(Flex, {
  mt: '$3',

  variants: {
    priority: {
      content: {
        gap: '$1_5',
      },
    },
    layout: {},
  },
  compoundVariants: [
    {
      layout: 'horizontal',
      priority: 'content',
      css: {
        ff: 'row wrap',
        jc: 'flex-start',
        ai: 'center',
      },
    },
    {
      layout: 'vertical',
      priority: 'content',
      css: {
        ff: 'row wrap',
        jc: 'center',
        ai: 'center',
      },
    },
  ],
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
  layout: _layout = 'horizontal',
  priority = 'media',
  ...props
}) => {
  const hasArrows = !!linkDecorators.includes('arrows')
  const hasCheckmarks = !!linkDecorators.includes('checkmarks')
  const iconProps = hasArrows ? { hasIcon: true, icon: 'internal' } : {}
  const layout = isObject(_layout)
    ? _layout
    : { '@initial': 'vertical', '@>m': _layout }

  return (
    <$MediaWithText priority={priority} layout={layout} {...props}>
      <$MediaWithTextMedia
        priority={priority}
        layout={layout}
        hasBackground={!!backgroundImage}
      >
        {backgroundImage && (
          <$BackgroundImage objectFit="contain" image={backgroundImage} />
        )}
        <$Media type={type} media={media} ratio={media?.ratio} />
      </$MediaWithTextMedia>
      <$MediaWithTextContent
        layout={layout}
        align={{ '@initial': 'none', '@>s': align }}
        priority={priority}
      >
        {heading && <Heading heading={heading} tag="h5" css={{ mb: 0 }} />}
        {content && <Text content={content} />}
        {links && (
          <$LinkContainer priority={priority} layout={layout}>
            {links.map(({ _key, _type, ...link }) => (
              <$Link css={{ gap: '$2' }} key={_key} {...iconProps} {...link}>
                {hasCheckmarks && <$Checkmark />}
                <$LinkTextWrapper>{link?.label}</$LinkTextWrapper>
              </$Link>
            ))}
          </$LinkContainer>
        )}
      </$MediaWithTextContent>
    </$MediaWithText>
  )
}

export default MediaWithText
