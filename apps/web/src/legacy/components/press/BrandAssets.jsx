import React from 'react'
import Link from 'next/link'
import { styled } from '@design'

const OuterContainer = styled('div', {
  position: 'relative',
  bc: '$primary',
  ta: 'center',
})

const LPUContainer = styled('div', {
  mw: '400px',
  mx: 'auto',
  pt: '4rem',
  pb: '6rem',
  px: '3rem',

  '@>s': {
    pt: '4rem',
    pb: '6rem',
    px: '3rem',
  },

  '@>m': {
    py: '10rem',
    px: '6rem',
  },
})

const Headline = styled('div', {
  w: '100%',
  fontFamily: 'Value Serif',
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '-0.07px',
  c: '$white',
  mb: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },

  '@media (min-width: 993px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },
})

const Caption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0px',
  c: '$white',
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

const Button = styled('button', {
  h: '48px',
  px: '2%',
  c: '$white',
  bc: 'transparent',
  b: '3px solid $colors$offWhite',
  br: '24px',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '30px',
  ta: 'center',
  transition: 'all 0.3s ease',
  minWidth: '200px',

  '&:hover': {
    bc: '$white',
    c: '$primary',
    cursor: 'pointer',
    b: '3px solid $colors$white',
  },

  '@<s': {
    fontSize: '14px',
  },
})

const FlexRow = styled('div', {
  minWidth: '120%',
  ml: '-10%',
  d: 'flex',
  flexWrap: 'wrap',
  jc: 'space-around',
})

const StyledLink = styled('a', {
  m: '2%',
})

const BrandAssets = () => (
  <OuterContainer>
    <LPUContainer>
      <Headline>Leadpages Brand Assets</Headline>
      <Caption>
        Here’s all the beauty of our brand boxed up neatly and ready for
        download.
      </Caption>
      <FlexRow>
        <StyledLink
          href="https://www.dropbox.com/sh/bopv26efyxrvq2l/AADZ4y0MeChxUWFbpkuMTlmVa?dl=1"
          aria-label="Download Brand Assets"
        >
          <Button>Download Brand Assets</Button>
        </StyledLink>
        <Link href="/brand" aria-label="Get Our Brand Guide" passHref>
          <StyledLink>
            <Button>Get Our Brand Guide</Button>
          </StyledLink>
        </Link>
      </FlexRow>
    </LPUContainer>
  </OuterContainer>
)

export default BrandAssets
