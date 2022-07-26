import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import BackgroundImage from '../../assets/images/shapes/wedge-sand-step.png'
import OurStoryImage from '../../assets/images/totems/our-story_714px@2x.png'

const OuterContainer = styled('div', {
  pt: '6rem',
  position: 'relative',
  bc: '$white',
})

const FlexRow = styled('div', {
  mw: '1140px',
  mx: 'auto',
  d: 'flex',
  jc: 'space-between',
  position: 'relative',
})

const InnerContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  px: '3rem',

  '@>s': {
    px: '3rem',
  },

  '@>m': {
    px: '6rem',
  },
})

const FlexRowItem6 = styled('div', {
  minHeight: '1px',
  position: 'relative',
  ta: 'left',
  textDecoration: 'none',
  w: '100%',
  px: '1%',
  jc: 'space-between',
  mr: '1%',

  '@>s': {
    f: '0 0 46%',
    mw: '46%',
  },

  '@>m': {
    mb: '0rem',
    f: '0 0 46%',
    mw: '46%',
  },
})

const TextContainer = styled(FlexRowItem6, {
  '@>s': {
    f: '0 0 100%',
    mw: '100%',
  },

  '@>m': {
    mb: '0rem',
    f: '0 0 46%',
    mw: '46%',
  },
})

const ImageContainer = styled(FlexRowItem6, {
  alignSelf: 'flex-end',

  '@>s': {
    f: '0 0 100%',
    mw: '100%',
  },

  '@>m': {
    mb: '0rem',
    f: '0 0 46%',
    mw: '46%',
  },
})

const FlexRowItem6Copy = styled('div', {
  c: '$textAlt',
  fontFamily: `'Apercu Pro'`,
  fontSize: '14px',
  lineHeight: '20px',
  mb: '3rem',
})

const Heading = styled('div', {
  fontFamily: `'Value Serif'`,
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',
  c: '$text',
  mb: '2rem',
})

const TransformCopy = styled('div', {
  fontFamily: `'Apercu Pro'`,
  fontSize: '16px',
  lineHeight: '24px',
  c: '$textAlt',
  mt: '2rem',
  mb: '4rem',
})

const ImageWrapper = styled('div', {
  ml: 'auto',
  mw: '70vw',
})

const BackgroundImageContainer = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  ox: 'hidden',
  w: '50vw',
  mw: '700px',

  '@media (max-width: 768px)': {
    w: '70vw',
    mw: '100vw',
  },
})

const OurStory = () => (
  <OuterContainer>
    <BackgroundImageContainer>
      <Image image={BackgroundImage} aria-label="background image" />
    </BackgroundImageContainer>
    <InnerContainer>
      <TextContainer>
        <Heading>Our Story</Heading>
        <TransformCopy>
          Leadpages is a best-in-class digital lead generation platform that
          enables entrepreneurs and small business marketers to get online and
          grow. We make it possible to easily publish web pages, confidently
          generate leads, and consistently transform clicks into customers. From
          websites and landing pages to alert bars and pop-ups, Leadpages helps
          you get in business and stay in business online.
        </TransformCopy>
        <FlexRowItem6Copy>
          Headquartered in Minneapolis, Minnesota, our company started in 2012
          and has grown to serve hundreds of thousands of customers around the
          world.
        </FlexRowItem6Copy>
      </TextContainer>
      <ImageContainer>
        <ImageWrapper>
          <Image image={OurStoryImage} aria-label="our story image" />
        </ImageWrapper>
      </ImageContainer>
    </InnerContainer>
  </OuterContainer>
)

export default OurStory
