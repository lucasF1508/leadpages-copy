import React from 'react'
import { styled } from '@design'
// images
import bkgSVG from '../../assets/images/shapes/wavy-lines-hourglass-gray.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  mt: '-60px',
  pt: '60px',
  bc: '$grayAlt',
  z: -2,
  o: 'hidden',
})

const HeaderContainer = styled('div', {
  mw: '1140px',
  mx: 'auto',
  py: '6rem',
  px: '3rem',

  '@>m': {
    px: '6rem',
  },
})

const FlexRow = styled('div', {
  d: 'flex',
  jc: 'space-between',
  py: '3rem',

  '@>s': {
    d: 'block',
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
  jc: 'space-between',
  ta: 'left',

  '@>s': {
    f: '0 0 100%',
    mw: '100%',
  },

  '@media (min-width: 768px)': {
    f: '0 0 60%',
    mw: '60%',
  },

  '@>m': {
    mb: '0rem',
    f: '0 0 50%',
    mw: '50%',
  },
})

const SmallHeading = styled('div', {
  fontFamily: 'Space Mono',
  opacity: 0.5,
  c: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  tt: 'uppercase',
})

const LeftHeading = styled('div', {
  mt: '1rem',
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
  c: '$text',
  mb: '2rem',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const BackgroundSVG = styled('img', {
  position: 'absolute',
  top: '-20%',
  right: 0,
  o: 'hidden',
  bottom: 0,
  z: '$under',
  h: '130%',
})

const PressHeader = () => (
  <OuterContainer>
    <BackgroundSVG src={bkgSVG.src} alt="background svg" />
    <HeaderContainer>
      <FlexRow>
        <FlexRowLeft>
          <h1>
            <SmallHeading>Leadpages Press & Media</SmallHeading>
          </h1>
          <LeftHeading>
            The latest news, updates and resources on Leadpages
          </LeftHeading>
        </FlexRowLeft>
      </FlexRow>
    </HeaderContainer>
  </OuterContainer>
)

export default PressHeader
