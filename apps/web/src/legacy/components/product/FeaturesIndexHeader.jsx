import React from 'react'
import { styled } from '@design'
// images
import bkgSVG from '@legacy/assets/images/shapes/wavy-lines-hourglass-gray.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  marginTop: '-60px',
  paddingTop: '60px',
  backgroundColor: '$grayAlt',
  zIndex: -2,
})

const HeaderContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '6rem',
  px: '3rem',

  '@>m': {
    px: '6rem',
  },
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  py: '3rem',

  '@<s': {
    display: 'block',
  },
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
})

const FlexRowLeft = styled(FlexRowItem, {
  justifyContent: 'space-between',
  textAlign: 'left',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 768px)': {
    flex: '0 0 60%',
    maxWidth: '60%',
  },

  '@>m': {
    marginBottom: '0rem',
    flex: '0 0 50%',
    maxWidth: '50%',
  },
})

const SmallHeading = styled('div', {
  fontFamily: 'Space Mono',
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
})

const LeftHeading = styled('div', {
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

const BackgroundImage = styled('img', {
  position: 'absolute',
  right: 0,
  overflowX: 'hidden',
  bottom: '-30px',
  width: '100%',
  zIndex: '$under',

  '@media (max-width: 490px)': {
    display: 'none',
  },

  '@media (min-width: 491px) and (max-width: 767px)': {
    bottom: '-40px',
  },

  '@media (min-width: 768px) and (max-width: 1030px)': {
    bottom: '-30px',
    width: '70%',
  },

  '@media (min-width: 1031px) and (max-width: 1299px)': {
    bottom: '-50px',
    width: '70%',
  },

  '@media (min-width: 1300px)': {
    bottom: '-80px',
    width: '70%',
  },
})

const FeaturesIndexHeader = () => (
  <OuterContainer>
    <BackgroundImage src={bkgSVG.src} alt="background svg" />
    <HeaderContainer>
      <FlexRow>
        <FlexRowLeft>
          <h1>
            <SmallHeading>Leadpages Features</SmallHeading>
          </h1>
          <LeftHeading>Bold features to build your business</LeftHeading>
        </FlexRowLeft>
      </FlexRow>
    </HeaderContainer>
  </OuterContainer>
)

export default FeaturesIndexHeader
