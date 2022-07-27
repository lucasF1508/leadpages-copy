import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import imageOne from '../../assets/images/totems/leadpages_speaking_inquiries-686px@2x.jpg'

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
  textDecoration: 'none',
  w: '100%',
  px: '1%',
  jc: 'space-between',
  ta: 'left',
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
    mb: 0,
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
    mb: 0,
    f: '0 0 46%',
    mw: '46%',
  },
})

const Heading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',
  c: '$text',
  mb: '2rem',
})

const TransformCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0px',
  c: '$textAlt',
  mb: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },

  '@media (min-width: 993px)': {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
  },
})

const StyledImage = styled(Image, {
  ml: 'auto',
  mw: '70vw',
})

const OutboundLink = styled('a', {
  textDecoration: 'none',
  c: 'inherit',
  pb: '3px',
  bb: '3px solid $colors$primary',

  '&:hover': {
    c: '$colors$primary',
    bb: '3px solid $colors$indigoDark',
  },
})

const SpeakingInquiries = () => (
  <OuterContainer>
    <InnerContainer>
      <TextContainer>
        <Heading>Speaking inquiries</Heading>
        <TransformCopy>
          Interested in collaborating with a Leadpages expert on your upcoming
          podcast, webinar, workshop, or live event? We’d love to hear what you
          have in mind.
        </TransformCopy>
        <TransformCopy>
          Simply&nbsp;
          <OutboundLink
            href="mailto:support@leadpages.com"
            aria-label="alt link"
            rel="noreferrer noopener"
            target="_blank"
          >
            send us an email
          </OutboundLink>
          &nbsp; with all the details and someone from our team will be in
          touch.
        </TransformCopy>
      </TextContainer>
      <ImageContainer>
        <StyledImage image={imageOne} alt="leadpages speaking inquiries" />
      </ImageContainer>
    </InnerContainer>
  </OuterContainer>
)

export default SpeakingInquiries
