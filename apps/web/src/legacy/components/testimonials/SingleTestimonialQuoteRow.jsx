import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'
// Images
import QuotemarkSVG from '@legacy/assets/images/global/quote-mark_tan_62px@2x.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  zIndex: 4,
  backgroundColor: '$tan',
  overflowX: 'hidden',
})

const InnerContainer = styled('div', {
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  mx: 'auto',
  maxWidth: '1140px',
  py: '3rem',

  '@media (max-width: 1023px)': {
    width: '80%',
  },
})

const QuotemarkImage = styled('img', {
  width: '64px',
  opacity: 0.3,
})

const Quote = styled('h4', {
  width: '80%',
  margin: '2rem auto',
  color: '$textAlt',
  fontSize: '22px',
  lineHeight: '36px',
  textAlign: 'center',

  '@<s': {
    width: '100%',
  },
})

const StyledImage = styled(Image, {
  maxHeight: '60px',
  maxWidth: '60px',
  margin: '5px auto',
})

const ClientName = styled('p', {
  color: '$text',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  textAlign: 'center',
})

const ClientTitle = styled('p', {
  color: '$textAlt',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center',
})

const SingleTestimonialQuoteRow = ({
  quote,
  image,
  imageAlt,
  clientName,
  clientTitle,
}) => (
  <OuterContainer>
    <InnerContainer>
      <QuotemarkImage src={QuotemarkSVG.src} />
      <Quote>{quote}</Quote>
      {image && <StyledImage image={image} alt={imageAlt} />}
      <ClientName>{clientName}</ClientName>
      <ClientTitle>{clientTitle}</ClientTitle>
    </InnerContainer>
  </OuterContainer>
)

SingleTestimonialQuoteRow.defaultProps = {
  imageAlt: 'Client testimonial headshot',
}

SingleTestimonialQuoteRow.propTypes = {
  quote: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  imageAlt: PropTypes.string,
  clientName: PropTypes.string.isRequired,
  clientTitle: PropTypes.string.isRequired,
}

export default SingleTestimonialQuoteRow
