import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'

const OuterContainer = styled('div', {
  paddingTop: '7rem',
  paddingBottom: '5rem',
  backgroundColor: '$tan',
  textAlign: 'center',

  '@<s': {
    paddingTop: '4rem',
    paddingBottom: '3rem',
  },

  '@media (max-width: 360px)': {
    px: '1rem',
  },
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  px: '15%',
})

const Heading = styled('div', {
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  fontFamily: 'Space Mono',
  textTransform: 'uppercase',
  marginBottom: '2rem',
})

const Quote = styled('div', {
  fontFamily: 'Value Serif',
  color: '$textHighlight',
  marginBottom: '4rem',

  '@media (max-width: 424px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
  },

  '@media (min-width: 425px) and (max-width: 992px)': {
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

const Author = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  color: '$text',
})

const QuoteComponent = ({ heading, quote, author }) => (
  <OuterContainer>
    <InnerContainer>
      <Heading>{heading}</Heading>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
    </InnerContainer>
  </OuterContainer>
)

QuoteComponent.defaultProps = {
  heading: '',
  author: '',
}

QuoteComponent.propTypes = {
  heading: PropTypes.string,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
}

export default QuoteComponent
