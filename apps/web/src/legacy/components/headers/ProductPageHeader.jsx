import React from 'react'
import { styled } from '@design'
// components
import Wistia_DemoVideo from '@legacy/components/videos/Wistia_DemoVideo'
// images
import heroImage from '@legacy/assets/images/heros/product-hero_lp-tools_560px@2x.png'
import backgroundSVG from '@legacy/assets/images/shapes/wavy-line-gray_brand.svg'
import playButtonSVG from '@legacy/assets/images/global/play-button-circle_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  mt: '-60px',
  pt: '60px',

  '@<s': {
    w: '100%',
  },
})

const InnerContainer = styled('div', {
  w: '100%',
  h: '100%',
  d: 'flex',
  ff: 'row wrap',
})

const HeaderContainer = styled('div', {
  mw: '1140px',
  mx: 'auto',
  pt: '100px',
  px: '3rem',
  f: '0 0 37%',

  '@<m': {
    mw: '750px',
    px: '3rem',
    f: '0 0 75%',
  },

  '@<s': {
    pt: '3rem',
    px: 0,
  },

  '@media (min-width: 1400px)': {
    mw: '500px',
    mr: '4%',
  },
})

const Title = styled('h1', {
  mt: '1rem',
  fontFamily: 'Value Serif',
  fontSize: '3.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '60px',
  c: '$text',
  mb: '2rem',

  '@media (max-width: 768px)': {
    ta: 'center',
  },

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const Subtitle = styled('p', {
  mt: '1rem',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  color: '$textAlt',
  lineHeight: '28px',

  '@media (max-width: 768px)': {
    ta: 'center',
  },
  '@<s': {
    fontSize: '16px',
    lineHeight: '24px',
  },
})

const ImageContainer = styled('div', {
  position: 'relative',
  f: '0 0 44%',
  d: 'flex',
  fd: 'row',
  ai: 'flex-end',
  pr: '2rem',

  '@<m': {
    f: '0 0 100%',
    jc: 'center',
    pr: 0,
  },
})

const HeroImage = styled('img', {
  w: '100%',
  mw: '560px',
  minWidth: '500px',
  bottom: 0,

  '@<m': {
    width: '50%',
  },

  '@media (max-width: 768px)': {
    width: '80%',
  },

  '@media (max-width: 600px)': {
    minWidth: '300px',
  },
})

const SVGContainer = styled('img', {
  position: 'absolute',
  height: '100%',
  top: 0,
  overflowX: 'hidden',
  z: '$under',

  '@media (max-width: 992px)': {
    right: '10%',
  },
  '@media (min-width: 993px)': {
    right: '20%',
  },
})

const VideoButtonHolder = styled('div', {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '188px',
  marginTop: '2rem',
  marginBottom: '4.5rem',
  color: '$primary',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '30px',
  height: '30px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
    justifyContent: 'center',
  },

  '@<xs': {
    alignSelf: 'center',
  },
})

const TextHolder = styled('div', {
  display: 'flex',
  alignItems: 'center',
  color: '$primary',
})

const VideoButtonSVG1 = styled('img', {
  height: '28px',
  width: '28px',
  marginRight: '5px',
})

const VideoButtonText = styled('span', {})

const BrandPageHeader = () => (
  <OuterContainer>
    <SVGContainer src={backgroundSVG.src} alt="background svg" />
    <InnerContainer>
      <HeaderContainer>
        <Title>All You Need to Get Online and Grow Your Business</Title>
        <Subtitle>
          Easily create digital content that’s engineered by expert marketers to
          turn clicks into customers.
        </Subtitle>

        <Wistia_DemoVideo>
          <VideoButtonHolder>
            <TextHolder>
              <VideoButtonSVG1 src={playButtonSVG.src} alt="play button icon" />
              <VideoButtonText>&nbsp;Watch a quick demo&nbsp;</VideoButtonText>
            </TextHolder>
          </VideoButtonHolder>
        </Wistia_DemoVideo>
      </HeaderContainer>
      <ImageContainer>
        <HeroImage src={heroImage.src} alt="hero image" />
      </ImageContainer>
    </InnerContainer>
  </OuterContainer>
)

export default BrandPageHeader
