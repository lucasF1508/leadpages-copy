import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
import { RPImage } from '@legacy/constants/types'

const OuterContainer = styled('div', {
  position: 'relative',
  paddingBottom: '4rem',
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
})

const Section = styled('div', {
  position: 'relative',
  background: '$white',
  px: '5%',
  marginTop: '-10%',
  marginBottom: '1rem',

  '@media (max-width: 768px)': {
    width: '75%',
  },
  '@media (min-width: 769px)': {
    width: '45%',
  },
})

const Title = styled('div', {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '19px',
  textTransform: 'uppercase',
  opacity: 0.5,
  color: '$black',
  marginBottom: '1rem',
  paddingTop: '2rem',

  '@media (min-width: 769px) and (max-width: 992px)': {
    paddingRight: '3.25rem',
    paddingLeft: '3.25rem',
    paddingTop: '2rem',
  },

  '@media (min-width: 993px)': {
    paddingLeft: '5.9rem',
    paddingTop: '4rem',
  },
})

const Caption = styled('h1', {
  fontFamily: 'Value Serif',
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '-0.07px',
  color: '$text',
  marginBottom: '1rem',

  '@media (max-width: 424px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginBottom: '1rem',
  },

  '@media (min-width: 425px) and (max-width: 992px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
    paddingTop: '2rem',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    paddingRight: '3.25rem',
    paddingLeft: '3.25rem',
  },

  '@media (min-width: 993px)': {
    fontSize: '40px',
    letterSpacing: '-0.5px',
    lineHeight: '48px',
    paddingLeft: '5.9rem',
    marginBottom: '2rem',
  },
})

const StyledImage = styled(Image, {
  width: '100%',
  height: '100%',
  zIndex: -1,
})

const CustomerFeatureHeader = ({ image, imageAlt, title, caption }) => (
  <OuterContainer>
    <InnerContainer>
      <StyledImage image={image} alt={imageAlt} />
      <Section>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
      </Section>
    </InnerContainer>
  </OuterContainer>
)

CustomerFeatureHeader.defaultProps = {
  title: '',
  caption: '',
}

CustomerFeatureHeader.propTypes = {
  image: RPImage.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string,
  caption: PropTypes.string,
}

export default CustomerFeatureHeader
