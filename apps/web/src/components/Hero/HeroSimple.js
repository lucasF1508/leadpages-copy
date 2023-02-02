import React from 'react'
import Text from '@components/Text'
import { styled, darkTheme } from '@design'
import useEvalBreakpoint from '@hooks/useEvalBreakpoint'
import { features } from 'config'
import { $Hero, $BackgroundImage } from './HeroDefault'

const $Text = styled(Text)

const $HeroSimple = styled($Hero, {
  ai: 'center',

  [`${$Text}`]: {
    my: '$5',
    w: '100%',
    boxSizing: 'border-box',
  },

  [`&.${darkTheme}`]: {
    color: '$white',
  },

  backgroundColor: {
    purple: {
      bc: '$purple',
    },
    navy: {
      bc: '$darkBlue',
    },
  },
})

const HeroSimple = ({
  content,
  links,
  align = 'left',
  size = 'small',
  backgroundOptions = {},
  backgroundImage,
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
    <$HeroSimple
      className={darkBackground && darkTheme}
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
      <$Text content={content} align={align} links={links} />
    </$HeroSimple>
  )
}

export default HeroSimple
