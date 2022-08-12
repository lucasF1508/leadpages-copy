import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
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
  py: '6rem',
  px: '3rem',
  textAlign: 'center',

  '@>m': {
    px: '6rem',
  },
})
const Supertitle = styled('div', {
  fontFamily: 'Space Mono',
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
})

const Title = styled('div', {
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
  zIndex: -1,

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

const BestOfHeader = ({ title, supertitle }) => (
  <OuterContainer>
    <BackgroundImage src={bkgSVG.src} alt="background svg" />
    <HeaderContainer>
      <Supertitle>{supertitle}</Supertitle>
      <Title>{title}</Title>
    </HeaderContainer>
  </OuterContainer>
)

BestOfHeader.propTypes = {
  title: PropTypes.string.isRequired,
  supertitle: PropTypes.string.isRequired,
}

export default BestOfHeader
