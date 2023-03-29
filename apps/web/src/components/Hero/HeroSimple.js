import React from 'react'
import Text from '@components/Text'
import { styled, darkTheme } from '@design'
import useEvalBreakpoint from '@hooks/useEvalBreakpoint'
import { features } from 'config'
import Link from '@components/Link'
import { LinksContainer } from './HeroHome'
import { $Hero, $BackgroundImage } from './HeroDefault'

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
    backgroundColor: {
      gray: {
        bc: '$grayAlt',
      },
      gray4: {
        bc: '$gray',
      },
      white: {
        bc: '$white',
      },
      lavender: {
        bc: '$lavenderLight',
      },
      teal: {
        bc: '$tealLight',
      },
      purple: {
        bc: '$purple',
      },
      navy: {
        bc: '$darkBlue',
      },
    },
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

  const darkBackground = features.darkHeros.includes(backgroundColor)
  const bc = extendBackgroundColor ? palette?.dominant?.background : null

  return (
    <$HeroSimple
      className={darkBackground && darkTheme}
      size={size}
      backgroundColor={backgroundColor}
    >
      <$HeroSimpleInner>
        {backgroundImage && (
          <$BackgroundImage
            objectFit={isMobile ? 'cover' : 'contain'}
            objectPosition={
              isMobile && backgroundOffset ? `${backgroundOffset}%` : 'right'
            }
            image={backgroundImage}
            priority
            css={{
              '&::after': { backgroundColor: bc || `$${backgroundColor}` },
            }}
          />
        )}
        <$Text
          content={content}
          align={align}
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
