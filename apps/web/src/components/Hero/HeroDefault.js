import React from 'react'
import { styled, darkTheme } from '@design'
import MediaWithText, {
  $MediaWithTextContent,
  $MediaWithTextMedia,
  $Media,
  $Link,
} from '@components/MediaWithText'
import Image from '@components/Image'
import useEvalBreakpoint from '@hooks/useEvalBreakpoint'
import { features } from 'config'

export const $Hero = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  boxSizing: 'border-box',
  box: [{ property: 'px' }],
  overflow: 'hidden',
  mt: '-$headerHeight$s',
  pt: '$headerHeight$s',
  position: 'relative',

  '@media (max-width: 768px)': {
    mh: '100%',
  },

  [`${$Link}`]: {
    minWidth: '$space$12',
  },

  [`&.${darkTheme}`]: {
    color: '$white',
  },

  variants: {
    size: {
      large: {
        minHeight: '47rem',

        h1: {
          typeSizes: 'h1',
        },
      },
      medium: {
        minHeight: '41rem',

        h1: {
          type: 'h2',
        },
      },
      small: {
        minHeight: '25rem',

        h1: {
          type: 'h2',
        },
      },
    },
    backgroundColor: {
      purple: {
        bc: '$purple',
      },
      navy: {
        bc: '$darkBlue',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export const $MediaWithText = styled(MediaWithText, {
  mw: '$extended',
  w: '100%',
  boxSizing: 'border-box',

  [`${$MediaWithTextContent}`]: {
    my: '$5',
  },

  [`${$MediaWithTextMedia}`]: {
    mb: '$5',
    boxSizing: 'border-box',

    '@>m': {
      px: 'calc($sizes$cols1 + $grid$x)',
    },

    '@>l': {
      my: '$5',
      px: 'unset',
    },
  },

  variants: {
    imageAlign: {
      center: {
        [`${$MediaWithTextMedia}`]: {
          alignSelf: 'center',
          justifySelf: 'center',
        },
      },
      bottom: {
        [`${$MediaWithTextMedia}`]: {
          mb: 'unset',
          alignSelf: 'flex-end',

          '@>l': {
            mt: '$5',
          },
        },
      },
      right: {
        [`${$MediaWithTextMedia}`]: {
          mb: 'unset',
          alignSelf: 'flex-end',
          justifySelf: 'flex-end',

          '@>l': {
            mt: '$5',
          },

          [`${$Media}`]: {
            width: 'auto',
            mr: '-1rem',

            '@>xs': {
              mr: '-1.5rem',
            },
            '@>s': {
              mr: '-3rem',
            },
            '@>m': {
              mr: '-5rem',
            },
            '@>l': {
              mr: '-6rem',
            },
            '@>xl': {
              mr: '-7.5rem',
            },
          },
        },
      },
    },
  },
})

export const $BackgroundImage = styled(Image, {
  position: 'absolute',
  inset: 0,
  mw: '$vast',
  mx: 'auto',

  '&::after': {
    content: '',
    position: 'absolute',
    left: '100%',
    ml: -1,
    top: 0,
    bottom: 0,
    width: '100vw',
  },
})

const HeroDefault = ({
  media,
  content,
  links,
  align = 'left',
  size = 'medium',
  imageAlign = 'center',
  backgroundOptions = {},
  backgroundImage,
  className,
}) => {
  const isMobile = useEvalBreakpoint('<=m')
  const { palette } = backgroundImage?.asset?.metadata || {}
  const {
    backgroundOffset = false,
    backgroundColor = false,
    extendBackgroundColor = false,
  } = backgroundOptions

  const darkBackground = features.darkHeros.includes(backgroundColor)
  const bc = extendBackgroundColor ? palette?.dominant?.background : null

  return (
    <$Hero
      className={`${className} ${darkBackground && darkTheme}`}
      size={size}
      backgroundColor={backgroundColor}
    >
      {backgroundImage && (
        <$BackgroundImage
          objectFit={isMobile ? 'cover' : 'contain'}
          objectPosition={
            isMobile && backgroundOffset ? `${backgroundOffset}%` : 'right'
          }
          image={backgroundImage}
          priority
          css={{
            '&::after': { bc },
          }}
        />
      )}
      <$MediaWithText
        layout={{ '@initial': 'vertical', '@>l': 'horizontal' }}
        priority="content"
        content={content}
        media={media}
        align={align}
        links={links}
        imageAlign={imageAlign}
      />
    </$Hero>
  )
}

export default HeroDefault
