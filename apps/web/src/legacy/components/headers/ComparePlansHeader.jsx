import React from 'react'
import { styled } from '@design'
import { Link as ScrollLink } from 'react-scroll'
import Image from '@components/Image'
// images
import desktopHeroImage from '@legacy/assets/images/heros/compareplans-hero_desktop_1780px@2x.png'
import mobileHeroImage from '@legacy/assets/images/heros/compareplans-hero_mobile_1112px@2x.png'
import bkgSVG from '@legacy/assets/images/shapes/circle-lavender_compare.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  marginTop: '-60px',
  paddingTop: '60px',
  backgroundColor: '$darkBlue',

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
  zIndex: 3,
  position: 'relative',

  '@media (min-width: 1441px)': {
    justifyContent: 'center',
  },
})

const HeaderContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '100px',
  px: '3rem',
  flex: '0 0 40%',

  '@<m': {
    maxWidth: '750px',
    px: '3rem',
    flex: '0 0 75%',
    textAlign: 'center',
  },

  '@<s': {
    paddingTop: '3rem',
    px: 0,
  },

  '@media (min-width: 1141px)': {
    maxWidth: '525px',
    marginRight: '2%',
  },
})

const Title = styled('h1', {
  marginTop: '1rem',
  fontFamily: 'Value Serif',
  fontSize: '3.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
  color: '$white',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '30px',
    lineHeight: '34px',
    letterSpacing: 0,
    textAlign: 'center',
  },
})

const Subtitle = styled('p', {
  marginTop: '1rem',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  color: '$white',
  lineHeight: '28px',

  '@<s': {
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'center',
  },
})

const ScrollingLink = styled(ScrollLink, {
  cursor: 'pointer',
  textDecoration: 'none',
})

const Button = styled('button', {
  width: '206px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$primary',
  backgroundColor: '$primary',
  color: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  marginTop: '2rem',

  '@<s': {
    width: '80%',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
  },
})

const ImageContainer = styled('div', {
  flex: '0 0 45%',
  marginTop: '100px',

  '@<m': {
    width: '100%',
    flex: '0 0 100%',
    marginTop: '10px',
    display: 'flex',
  },

  '@media (max-width: 768px)': {
    marginTop: '30px',
  },
})

const HeroImage = styled(Image, {
  width: '115%',
  maxWidth: '450px',

  '@<m': {
    width: '50%',
    marginTop: '1rem',
    mx: 'auto',
  },

  '@<s': {
    minWidth: '300px',
  },
})

const BackgroundImage = styled('img', {
  position: 'absolute',
  height: '100%',
  top: 0,
  overflowX: 'hidden',
  zIndex: 0,
  right: '10%',

  '@>m': {
    right: '20%',
  },
})

const ComparePlansHeader = ({ deviceSize, scrollTarget }) => (
  <OuterContainer>
    <BackgroundImage src={bkgSVG.src} alt="background svg" />
    <InnerContainer>
      <HeaderContainer>
        <Title>Get Online & Grow</Title>
        <Subtitle>
          Easily create your website and landing pages with the only platform
          engineered by marketing nerds.
        </Subtitle>
        <ScrollingLink
          to={scrollTarget}
          smooth
          duration={500}
          offset={-15}
          aria-label="Start Your Free Trial"
        >
          <Button>Start Your Free Trial</Button>
        </ScrollingLink>
      </HeaderContainer>
      <ImageContainer>
        <HeroImage
          image={deviceSize === 'mobile' ? mobileHeroImage : desktopHeroImage}
        />
      </ImageContainer>
    </InnerContainer>
  </OuterContainer>
)

export default ComparePlansHeader
