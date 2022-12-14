import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import BackgroundImageSVG from '@legacy/assets/images/shapes/wavy-lines-mirror-sand.svg'

const TestimonialContainer = styled('div', {
  bc: '$backgroundAlt',
  backgroundImage: `url("${BackgroundImageSVG.src}")`,
  backgroundPosition: 'top -160px center',
  backgroundSize: '1250px',
  backgroundRepeat: 'no-repeat',
  pt: '6rem',
  pb: '5.875rem',
  pr: '6rem',
  pl: '6rem',

  '@<m': {
    bc: '$backgroundAlt',
  },

  '@<s': {
    pr: '3rem',
    pl: '3rem',
  },

  '@<xs': {
    pr: '1%',
    pl: '1%',
    mw: '287px',
  },
})

const ContentContainer = styled('div', {
  mw: '635px',
  m: '0 auto',
})

const Headline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  mb: '2.2125rem',
  c: '$textHighlight',

  '@<s': {
    fontSize: '1.833rem',
    lineHeight: '2.5rem',
    letterSpacing: '-0.01rem',
    mb: '1.5rem',
  },
})

const TestimonialQuote = styled('div', {
  mw: '635px',
  c: '$textAlt',
  fontSize: '1.375rem',
  lineHeight: '2.25rem',

  '@<s': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: 'normal',
  },
})

const TestimonialName = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: 500,
  mb: '1rem',
  c: '$text',
})

const TestimonialTitle = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  mb: '1rem',
  c: '$textAlt',
})

const FlexRow = styled('div', {
  d: 'flex',
  flexWrap: 'wrap',
  mt: '2.5rem',

  '@<s': {
    mt: '1.5rem',
  },
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  ta: 'center',
  textDecoration: 'none',
  w: '100%',
})

const FlexRowLeft = styled(FlexRowItem, {
  d: 'flex',
  jc: 'left',
  mb: '2rem',

  '@>s': {
    mb: 0,
    f: '0 0 24%',
    mw: '72px',
    jc: 'flex-end',
  },

  '@>m': {
    mb: 0,
    f: '0 0 24%',
    ta: 'left',
  },

  '@<s': {
    d: 'none',
  },
})

const TestimonialImage = styled(Image, {
  w: '100%',
  h: '100%',
  mw: '72px',
  maxHeight: '72px',
})

const FlexRowRight = styled(FlexRowItem, {
  ta: 'left',
  ml: '3%',

  '@media (min-width: 576px)': {
    f: '0 0 69%',
    mw: '69%',
  },

  '@media (min-width: 992px)': {
    mb: 0,
    f: '0 0 69%',
    mw: '69%',
    ta: 'left',
  },

  '@media (max-width: 576px)': {
    ml: 0,
  },
})

const QuotePricing = ({ image, text, title, authorName, authorTitle }) => (
  <TestimonialContainer>
    <ContentContainer>
      <Headline>{title}</Headline>
      <TestimonialQuote>{text}</TestimonialQuote>
      <FlexRow>
        <FlexRowLeft>
          <TestimonialImage image={image} />
        </FlexRowLeft>
        <FlexRowRight>
          <TestimonialName>{authorName}</TestimonialName>
          <TestimonialTitle>{authorTitle}</TestimonialTitle>
        </FlexRowRight>
      </FlexRow>
    </ContentContainer>
  </TestimonialContainer>
)

export default QuotePricing
