import React from 'react'
import Image from '@components/Image'
import { styled, darkTheme } from '@design'
import Text from '@components/Text'
import Link from '@components/Link'
import { features } from 'config'
import HeroVideoBrowser from './HeroVideoBrowser'

const ShapesLeft = styled('div', {
  position: 'absolute',
  left: '-69.85%',
  w: '100%',
  h: '100%',
  z: 0,

  img: {
    width: '70%',
  },

  '@media (min-width: 1066px)': {
    left: '-60.35%',
  },
})

const ShapesRight = styled('div', {
  position: 'absolute',
  right: '-61%',
  width: '100%',
  height: '100%',
  z: 0,

  img: {
    width: '110%',
  },

  '@media (min-width: 1066px)': {
    right: '-51%',
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
    backgroundColor: {
      gray: { bc: '$grayAlt' },
      gray4: { bc: '$gray' },
      tan: { bc: '$backgroundAlt' },
      white: { bc: '$white' },
      lavender: { bc: '$lavenderLight' },
      teal: { bc: '$tealLight' },
      purple: { bc: '$purple' },
      navy: { bc: '$darkBlue' },
    },
    alignBackgroundImages: {
      default: {
        [`& ${ShapesLeft}`]: {
          top: '-18%',

          '@media (min-width: 1066px)': {
            top: '-48%',
          },
        },

        [`& ${ShapesRight}`]: {
          top: '-3.75%',

          '@media (min-width: 1066px)': {
            top: '-27.25%',
          },
        },
      },
      bottom: {
        [`& ${ShapesLeft}, & ${ShapesRight}`]: {
          bottom: -52,
          d: 'flex',
          ai: 'flex-end',

          '@media (min-width: 577px) and (max-width: 768px)': {
            bottom: -44,
          },

          '@media (min-width: 769px)': {
            bottom: -36,
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'default',
    alignBackgroundImages: 'default',
  },
})

const InnerContainer = styled('div', {
  mw: '1140px',
  p: '0 4rem',
  m: '0 auto 52px auto',
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
  },
})

export const LinksContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
})

const TextContainer = styled('div', {
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
    mw: '760px',
  },
})

const $Text = styled(Text, {
  mb: '2rem',
})

const SVG = styled(Image, {})

const VideoBrowserContainer = styled('div', {
  position: 'relative',
  width: '100%',
  mt: '38px',

  '@media  (min-width: 577px) and (max-width: 768px)': {
    mt: '64px',
  },

  '@media  (min-width: 769px)': {
    mt: '86px',
  },
})

const HeroHome = ({
  content,
  links,
  media,
  backgroundOptions = {},
  backgroundImages = {},
  watchVideoLink,
  className,
  size = 'default',
  alignBackgroundImages = 'default',
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
      alignBackgroundImages={alignBackgroundImages}
    >
      <InnerContainer>
        <TextContainer>
          {content && <$Text content={content} />}
          {links && (
            <LinksContainer>
              {links.map(({ _key, ...link }) => (
                <Link key={_key} {...link} />
              ))}
            </LinksContainer>
          )}
        </TextContainer>
        {hasMedia ? (
          <VideoBrowserContainer>
            {backgroundImages?.left && (
              <ShapesLeft>
                <div style={{ width: '70%' }}>
                  <SVG image={backgroundImages?.left} alt="shapes" priority />
                </div>
              </ShapesLeft>
            )}
            {backgroundImages?.right && (
              <ShapesRight>
                <div style={{ width: '110%' }}>
                  <SVG image={backgroundImages?.right} alt="shapes" priority />
                </div>
              </ShapesRight>
            )}
            <HeroVideoBrowser
              media={media}
              link={watchVideoLink}
              displayBrowserContainer={displayBrowserContainer}
              backgroundColor={backgroundColor}
            />
          </VideoBrowserContainer>
        ) : (
          <>
            {backgroundImages?.left && (
              <ShapesLeft>
                <div style={{ width: '70%' }}>
                  <SVG image={backgroundImages?.left} alt="shapes" priority />
                </div>
              </ShapesLeft>
            )}
            {backgroundImages?.right && (
              <ShapesRight>
                <div style={{ width: '110%' }}>
                  <SVG image={backgroundImages?.right} alt="shapes" priority />
                </div>
              </ShapesRight>
            )}
          </>
        )}
      </InnerContainer>
    </$Hero>
  )
}

export default HeroHome
