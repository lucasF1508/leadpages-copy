import React, { useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { styled } from '@design'
import Image from '@components/Image'
// components
import SEO from '@legacy/components/SEO'
import HardWork from '@legacy/components/careers/HardWork'
import LifeAtLeadpages from '@legacy/components/careers/LifeAtLeadpages'
import OpenPositions from '@legacy/components/careers/OpenPositions'
import WorkPerks from '@legacy/components/careers/WorkPerks'
// images
import lifeAtLeadpagesBGSVG from '@legacy/assets/images/shapes/semicircle-indigo.svg'
import lifeAtLeadpagesImage from '@legacy/assets/images/totems/life-at-leadpages_714px@2x.png'
import imageLeft from '@legacy/assets/images/totems/careers-at-leadpages_hero-left_535px@2x.png'
import imageRight from '@legacy/assets/images/totems/careers-at-leadpages_hero-right_535px@2x.png'
import bgLeft from '@legacy/assets/images/shapes/arch-lightgray.png'
import bgRight from '@legacy/assets/images/shapes/triangle-sand.png'
// data
import { openPositionsArray } from '@legacy/data/open-positions_data'

const OuterContainer = styled('div', {
  position: 'relative',
})

const HeroContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '4rem',

  '@media (min-width: 576px) and (max-width: 992px)': {
    paddingTop: '6rem',
  },

  '@media (min-width: 993px)': {
    paddingTop: '10rem',
  },
})

const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '730px',
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media (max-width: 768px)': {
    width: '80%',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    maxWidth: '576px',
    width: '75%',
  },

  '@media (min-width: 993px)': {
    maxWidth: '730px',
    width: '65%',
  },
})

const Button = styled('button', {
  width: '278px',
  height: '48px',
  backgroundColor: '$primary',
  border: '3px solid $colors$primary',
  borderRadius: '48px',
  color: '$white',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',

  '@<xs': {
    width: '240px',
    fontSize: '16px',
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
    cursor: 'pointer',
  },
})

const ImageFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',

  '@media (max-width: 768px)': {
    marginTop: 0,
  },

  '@media (min-width: 769px) and (max-width: 1050px)': {
    marginTop: '-4rem',
  },

  '@media (min-width: 1050px)': {
    marginTop: '-8rem',
  },
})

const LeftImage = styled(Image, {
  width: '100%',
  zIndex: -1,

  '@<s': {
    display: 'none',
  },
})

const RightImage = styled(Image, {
  width: '100%',
  zIndex: -1,
})

const Subtitle = styled('div', {
  h1: {
    fontFamily: 'Space Mono',
    fontSize: '12px',
    letterSpacing: '2px',
    lineHeight: '18px',
    textAlign: 'center',
    textTransform: 'uppercase',
    opacity: 0.5,
    marginBottom: '1rem',
  },
})

const Headline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '24px',
  lineHeight: '30px',
  letterSpacing: '-0.08px',
  color: '$text',
  marginBottom: '2rem',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: '-0.08px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },

  '@media (min-width: 993px)': {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
  },
})

const Caption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginBottom: '2rem',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
  },

  '@media (min-width: 993px)': {
    fontSize: '22px',
    lineHeight: '36px',
    letterSpacing: '0px',
    maxWidth: '730px',
  },
})

const LeftImageContainer = styled('div', {
  zIndex: -1,
  flex: '0 0 40%',

  '@<s': {
    display: 'none',
  },

  '@media (min-width: 1050px)': {
    flex: '0 0 30%',
  },
})

const RightImageContainer = styled('div', {
  zIndex: -1,
  flex: '0 0 40%',

  '@<s': {
    marginLeft: 'auto',
    flex: '0 0 80%',
    paddingTop: '2rem',
    marginRight: '10%',
  },

  '@media (min-width: 1050px)': {
    flex: '0 0 30%',
  },
})

const BGLeftContainer = styled('div', {
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: -1,
  width: '40%',

  '@<s': {
    display: 'none',
  },

  '@media (min-width: 1050px)': {
    width: '30%',
  },
})

const BGRightContainer = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: -1,
  overflowX: 'hidden',
  width: '40%',

  '@<s': {
    display: 'none',
  },

  '@media (min-width: 1050px)': {
    width: '30%',
  },
})

const CareersPage = () => (
  <>
    <SEO
      pathname="/careers"
      title="Leadpages Careers | Website & Landing Page Builder"
      description="At Leadpages, you're part of a team of builders. No matter what department you work in, you have a pivotal role here."
      image="https://static.leadpages.com/images/og/og-careers.jpg"
    />
    <OuterContainer>
      <HeroContainer>
        <TextContainer>
          <Subtitle>
            <h1>Careers</h1>
          </Subtitle>
          <Headline>Come work with us</Headline>
          <Caption>Join our team and love what you do even more.</Caption>
          <ScrollLink to="openpositions" spy smooth duration={500}>
            <Button>See Open Positions</Button>
          </ScrollLink>
        </TextContainer>
      </HeroContainer>
      <ImageFlexbox>
        <LeftImageContainer>
          <BGLeftContainer>
            <Image image={bgLeft} alt="background svg" />
          </BGLeftContainer>
          <LeftImage image={imageLeft} alt="See Open Positions" />
        </LeftImageContainer>
        <RightImageContainer>
          <BGRightContainer>
            <Image image={bgRight} alt="background svg" />
          </BGRightContainer>
          <RightImage image={imageRight} alt="See Open Positions" />
        </RightImageContainer>
      </ImageFlexbox>
    </OuterContainer>
    <LifeAtLeadpages
      headingText="Who we are"
      subheadingText1="We're passionate about helping entrepreneurs turn their ideas into real businesses, and providing them with the easiest most&mdash;effective tools to do it."
      subheadingText2="We want to work with people who refuse to check their personality at the door and who strive to bring their enthusiasm and best ideas to the table every day."
      image={lifeAtLeadpagesImage}
      imageAltText="life at leadpages"
      bgImage={lifeAtLeadpagesBGSVG}
      bgImageAltText="life at leadpages background"
    />
    <HardWork />
    <WorkPerks />
    <OpenPositions openPositionsArray={openPositionsArray} />
  </>
)

export default CareersPage
