import React from 'react'
import Image from '@components/Image'
import { styled, darkTheme } from '@design'
import Text from '@components/Text'
import { features } from 'config'
import Link from '@components/Link'
import HeroVideoBrowser from './HeroVideoBrowser'
import { heroColors } from './HeroDefault'

export const $ShapesRight = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  z: 0,
  top: 0,
  right: 0,

  img: {
    height: '100%',
  },
})

const $Hero = styled('div', {
  position: 'relative',
  ox: 'hidden',
  o: 'hidden',
  mt: '-$headerHeight$s',
  pt: '$headerHeight$s',
  d: 'flex',

  '@media (max-width: 768px)': {
    h: '100%',
  },

  variants: {
    size: {
      large: { '@media (min-width: 769px)': { minHeight: '47rem' } },
      medium: { '@media (min-width: 769px)': { minHeight: '41rem' } },
      small: { '@media (min-width: 769px)': { minHeight: '25rem' } },
      default: { '@media (min-width: 769px)': { minHeight: '58rem' } },
    },
    backgroundColor: heroColors,
  },
  defaultVariants: {
    size: 'default',
  },
})

const InnerContainer = styled('div', {
  mw: '1140px',
  m: '0 auto 52px auto',
  p: '0 1.75rem',
  minHeight: '600px',
  position: 'relative',
  flex: 1,
  d: 'flex',
  ai: 'center',
  jc: 'center',
  ff: 'column',

  '@media (max-width: 768px)': {
    height: '100%',
    minHeight: '1px',
  },

  '@media (min-width: 577px) and (max-width: 768px)': {
    mb: '44px',
  },

  '@media (min-width: 769px)': {
    mb: '36px',
    p: '0 4rem',
  },
})

const $TextContainer = styled('div', {
  position: 'relative',
  mt: '17px',
  ml: 'auto',
  mr: 'auto',
  ta: 'center',
  width: '100%',
  z: 1,

  '@media  (min-width: 577px) and (max-width: 768px)': {
    mt: '55px',
  },

  '@media  (min-width: 769px)': {
    mt: '68px',
    mw: '872px',
  },
})

const $Text = styled(Text, {
  mb: '2rem',
})

export const $ShapesRightInner = styled('div', {
  minWidth: '100%',
  height: '100%',
})

export const $SVG = styled(Image, {
  height: '145%',
  width: 'calc(100% + 17rem)',
  right: '17rem',

  '@media (min-width: 577px)': {
    height: '130%',
    width: 'calc(100% + 8rem)',
    right: '8rem',
  },
})

export const LinksContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  '> div': {
    alignItems: 'center',
  },
})

const VideoBrowserContainer = styled('div', {
  position: 'relative',
  width: '100%',
  mt: '$4_5',
})

const HeroHomeAlt = ({
  content,
  links,
  media,
  backgroundOptions = {},
  backgroundImages = {},
  watchVideoLink,
  className,
  size = 'default',
}) => {
  const { displayBrowserContainer = false, backgroundColor = false } =
    backgroundOptions || {}

  const darkBackground = features.darkBackgrounds.includes(backgroundColor)
  const hasMedia = media?.condition !== 'none'

  return (
    <$Hero
      className={`${className || ''} ${darkBackground ? darkTheme : ''}`}
      size={size}
      backgroundColor={backgroundColor}
    >
      {backgroundImages?.right && (
        <$ShapesRight>
          <$ShapesRightInner>
            <$SVG image={backgroundImages?.right} alt="shapes" priority />
          </$ShapesRightInner>
        </$ShapesRight>
      )}
      <InnerContainer>
        <$TextContainer>
          {content && (
            <$Text
              content={content}
              css={{
                typeSizes: 'lg',

                '@media  (min-width: 769px)': {
                  typeSizes: '2xl',
                },
              }}
            />
          )}
          {links && (
            <LinksContainer>
              {links.map(({ _key, ...link }) => (
                <Link
                  key={_key}
                  {...link}
                  linkstyle={darkBackground && 'buttonInverse'}
                  css={{ px: '$3' }}
                />
              ))}
            </LinksContainer>
          )}
        </$TextContainer>
        {hasMedia && (
          <VideoBrowserContainer>
            <HeroVideoBrowser
              media={media}
              link={watchVideoLink}
              displayBrowserContainer={displayBrowserContainer}
              backgroundColor={backgroundColor}
            />
          </VideoBrowserContainer>
        )}
      </InnerContainer>
    </$Hero>
  )
}

export default HeroHomeAlt
