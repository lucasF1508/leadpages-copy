import React from 'react'
import { darkTheme, styled } from '@design'
import { features } from 'config'
import useEvalBreakpoint from '@hooks/useEvalBreakpoint'
import Link from '@components/Link'
import Text from '@components/Text'
import { $BackgroundImage, $Hero, heroColors } from './HeroDefault'
import { LinksContainer } from './HeroHome'

const $Text = styled(Text, {
  variants: {
    align: {
      left: { mr: 'auto' },
      center: { mx: 'auto', ta: 'center' },
    },
    maxWidth: {
      small: {
        mw: 'calc($cols4 + $space$8)',
      },
      medium: {
        mw: 'calc($cols6 + $space$6)',
      },
      large: {
        mw: 'calc($cols8 + $space$6)',
      },
    },
  },
})

const $HeroSimple = styled($Hero, {
  ai: 'center',

  [`${$Text}`]: {
    w: '100%',
    boxSizing: 'border-box',
  },

  [`&.${darkTheme}`]: {
    color: '$white',
  },

  variants: {
    backgroundColor: heroColors,
  },
})

const $HeroSimpleInner = styled('div', {
  w: '100%',
  mw: '$extended',
})

const HeroSimple = ({
  content,
  links,
  align = 'left',
  size = 'small',
  maxWidth = 'medium',
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

  const darkBackground = features.darkBackgrounds.includes(backgroundColor)
  const bc = extendBackgroundColor ? palette?.dominant?.background : null

  return (
    <$HeroSimple
      backgroundColor={backgroundColor}
      className={darkBackground && darkTheme}
      size={size}
    >
      <$HeroSimpleInner>
        {backgroundImage && (
          <$BackgroundImage
            css={{
              '&::after': { backgroundColor: bc || `$${backgroundColor}` },
            }}
            image={backgroundImage}
            objectFit={isMobile ? 'cover' : 'contain'}
            objectPosition={
              isMobile && backgroundOffset ? `${backgroundOffset}%` : 'right'
            }
            priority
          />
        )}
        <$Text
          align={align}
          content={content}
          links={links}
          maxWidth={maxWidth}
        />
        {links && (
          <LinksContainer>
            {links.map(({ _key, ...link }) => (
              <Link key={_key} {...link} />
            ))}
          </LinksContainer>
        )}
      </$HeroSimpleInner>
    </$HeroSimple>
  )
}

export default HeroSimple
