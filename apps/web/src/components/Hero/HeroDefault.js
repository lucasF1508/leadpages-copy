import React, { useContext } from 'react'
import { styled, darkTheme } from '@design'
import MediaWithText, {
  $MediaWithTextContent,
  $MediaWithTextMedia,
  $Media,
  $Link,
} from '@components/MediaWithText'
import Image from '@components/Image'
import useEvalBreakpoint from '@hooks/useEvalBreakpoint'
import { AppContext } from '@app'

const $Hero = styled('div', {
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
    bc: '$purple',
    color: '$white',
  },

  variants: {
    underlaidMenu: {
      // false: {
      //   '&::before': {
      //     content: '',
      //     position: 'absolute',
      //     inset: 0,
      //     height: '$space$7_5',
      //     background: '$white',
      //     z: 1030,
      //     top: 36,
      //   },
      // },
    },
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
  },

  defaultVariants: {
    size: 'medium',
  },
})

const $MediaWithText = styled(MediaWithText, {
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

const $BackgroundImage = styled(Image, {
  position: 'absolute',
  inset: 0,
})

const HeroDefault = ({
  media,
  content,
  links,
  align = 'left',
  size = 'medium',
  imageAlign = 'center',
  darkBackground = false,
  backgroundImage,
}) => {
  const { underlaidMenu = false } = useContext(AppContext)
  const isMobile = useEvalBreakpoint('<=m')

  return (
    <$Hero
      className={darkBackground && darkTheme}
      size={size}
      underlaidMenu={underlaidMenu}
    >
      {backgroundImage && (
        <$BackgroundImage
          objectFit={isMobile ? 'cover' : 'contain'}
          objectPosition="right"
          image={backgroundImage}
          priority
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
