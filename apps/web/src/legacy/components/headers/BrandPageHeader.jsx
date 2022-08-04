import React, { useEffect } from 'react'
import { styled } from '@design'
// images
import bkgSVG from '@legacy/assets/images/shapes/wavy-line-gray_brand.svg'
import heroImage from '@legacy/assets/images/totems/hero-totem.png'
import Image from '@components/Image'

const Holder = styled('div', {
  backgroundColor: '$grayAlt',
  position: 'relative',
  zIndex: -2,
})

const OuterContainer = styled('div', {
  position: 'relative',
  marginTop: '-60px',
  paddingTop: '60px',

  '@<s': {
    width: '100%',
  },
})

const InnerContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
})

const HeaderContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '100px',
  paddingRight: '6rem',
  paddingLeft: '6rem',
  flex: '0 0 30%',

  '@<m': {
    maxWidth: '750px',
    paddingLeft: '3rem',
    paddingRight: '3rem',
    flex: '0 0 75%',
  },

  '@<s': {
    paddingTop: '3rem',
    paddingLeft: 0,
    paddingRight: 0,
  },
})

const Supertitle = styled('h2', {
  fontFamily: 'Space Mono',
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
})

const Title = styled('h1', {
  marginTop: '1rem',
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
  color: '$text',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const Subtitle = styled('p', {
  marginTop: '1rem',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  color: '$textAlt',
  lineHeight: '28px',

  '@<s': {
    fontSize: '16px',
    lineHeight: '24px',
  },
})

const ImageContainer = styled('div', {
  flex: '0 0 45%',
  marginTop: '100px',

  '@<m': {
    width: '100%',
    flex: '0 0 100%',
    marginTop: '30px',
  },
})

const HeroImage = styled(Image, {
  width: '115%',
  maxWidth: '750px',
  minWidth: '500px',
  float: 'right',

  '@<m': {
    width: '50%',
  },

  '@<s': {
    maxWidth: '300px',
  },
})

const SVGContainer = styled('img', {
  position: 'absolute',
  height: '100%',
  top: 0,
  overflowX: 'hidden',
  zIndex: -1,

  '@<m': {
    right: '10%',
  },

  '@>m': {
    right: '20%',
  },
})

const BrandPageHeader = () => {
  return (
    <Holder>
      <OuterContainer>
        <SVGContainer src={bkgSVG.src} alt="background svg" />
        <InnerContainer>
          <HeaderContainer>
            <Supertitle>Jump on our brand’s bandwagon</Supertitle>
            <Title>The Leadpages Brand</Title>
            <Subtitle>
              Our brand is both our personality and our promise, so consistency
              is key. Use these guidelines whenever you work with our brand
              assets, logo, content, and trademark.
            </Subtitle>
          </HeaderContainer>
          <ImageContainer>
            <HeroImage image={heroImage}></HeroImage>
          </ImageContainer>
        </InnerContainer>
      </OuterContainer>
    </Holder>
  )
}

export default BrandPageHeader
