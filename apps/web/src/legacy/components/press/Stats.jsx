import React from 'react'
import { styled } from '@design'

const OuterContainer = styled('div', {
  position: 'relative',
  bc: '$primary',
  ta: 'center',
})

const LPUContainer = styled('div', {
  mw: '1140px',
  mx: 'auto',
  pt: '4rem',
  pb: '3rem',
  px: '3rem',

  '@>s': {
    pt: '4rem',
    pb: '3rem',
    px: '3rem',
  },
})

const Flexbox = styled('div', {
  d: 'flex',
  jc: 'space-around',

  '@media (max-width: 768px)': {
    d: 'block',
    w: '95%',
    mx: 'auto',
  },
})

const FlexItem = styled('div', {
  ta: 'center',
  px: '1%',
  f: '0 0 18%',
  mw: '18%',

  '@media (max-width: 768px)': {
    mw: '100%',
    mb: '3rem',
  },
})

const Headline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '40px',
  lineHeight: '48px',
  letterSpacing: '-0.5px',
  c: '$white',
  mb: '1rem',
})

const Caption = styled('div', {
  c: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '30px',
  fontWeight: 500,
  mb: '3rem',
})

const Stats = () => (
  <OuterContainer>
    <LPUContainer>
      <Flexbox>
        <FlexItem>
          <Headline>400k+</Headline>
          <Caption>Marketers Educated</Caption>
        </FlexItem>
        <FlexItem>
          <Headline>50+</Headline>
          <Caption>Employees</Caption>
        </FlexItem>
        <FlexItem>
          <Headline>$38m</Headline>
          <Caption>VC Money Raised</Caption>
        </FlexItem>
        <FlexItem>
          <Headline>1BN+</Headline>
          <Caption>Customer Page Views Daily</Caption>
        </FlexItem>
        <FlexItem>
          <Headline>150+</Headline>
          <Caption>Landing Page Templates</Caption>
        </FlexItem>
      </Flexbox>
    </LPUContainer>
  </OuterContainer>
)

export default Stats
