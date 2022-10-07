import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Image from '@components/Image'

const OuterContainer = styled('div', {
  position: 'relative',
  zIndex: 4,
  backgroundColor: '$tan',
  overflowX: 'hidden',
})

const InnerContainer = styled('div', {
  width: '80%',
  mx: 'auto',
  maxWidth: '1140px',
  py: '6rem',
})

const TestimonialsCaption = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  marginBottom: '2rem',
  color: '$textHighlight',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const TestimonialsHeader = styled('div', {
  display: 'none',

  '@media (min-width: 577px)': {
    display: 'block',
    fontFamily: 'Space Mono',
    fontSize: '12px',
    letterSpacing: '2px',
    lineHeight: '18px',
    textTransform: 'uppercase',
    opacity: 0.5,
    color: '$black',
    marginBottom: '26px',
  },
})

const TestimonialsMobileHeader = styled('div', {
  display: 'none',

  '@<s': {
    display: 'block',
    fontFamily: 'Space Mono',
    fontSize: '12px',
    letterSpacing: '2px',
    lineHeight: '18px',
    textTransform: 'uppercase',
    opacity: 0.5,
    color: '$black',
    marginBottom: '26px',
  },
})

const TestimonialsQuote = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '22px',
  lineHeight: '32px',
  marginBottom: '2rem',
  color: '$textAlt',
})

const TestimonialsName = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  marginBottom: '1rem',
  color: '$text',
})

const TestimonialsTitle = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1rem',
  color: '$textAlt',
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
})

const FlexRowLeft = styled(FlexRowItem, {
  justifyContent: 'center',
  marginBottom: '2rem',

  '@>s': {
    marginBottom: 0,
    flex: '0 0 24%',
    maxWidth: '156px',
    justifyContent: 'flex-end',
  },

  '@>m': {
    maxWidth: '24%',
    textAlign: 'left',
  },
})
const HeaderImgLeft = styled('div', {
  width: '100%',
  maxWidth: '156px',
  mx: 'auto',
})

const TestimonialsImageContainer = styled('div', {
  width: '100%',
  maxWidth: '156px',

  '@<s': {
    width: '100%',
    maxWidth: '126px',
  },
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',
  marginLeft: '3%',

  '@>s': {
    flex: '0 0 69%',
    maxWidth: '69%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const StyledImage = styled(Image, {
  width: '100%',
  height: '100%',
  maxWidth: '156px',
  maxHeight: '156px',
})

const SVG = styled('img', {
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  height: '100%',
  width: '100%',
})

const SiteTestimonial = ({
  bgImage,
  bgImageAlt,
  header,
  image,
  imageAlt,
  caption,
  quote,
  name,
  title,
}) => (
  <OuterContainer>
    {bgImage && <SVG src={bgImage.src} alt={bgImageAlt} />}
    <InnerContainer>
      <FlexRow>
        <FlexRowLeft>
          <TestimonialsMobileHeader>{header}</TestimonialsMobileHeader>
          <HeaderImgLeft>
            <TestimonialsImageContainer>
              <StyledImage image={image} alt={imageAlt} />
            </TestimonialsImageContainer>
          </HeaderImgLeft>
        </FlexRowLeft>
        <FlexRowRight>
          <TestimonialsHeader>{header}</TestimonialsHeader>
          <TestimonialsCaption>{caption}</TestimonialsCaption>
          <TestimonialsQuote>{quote}</TestimonialsQuote>
          <TestimonialsName>{name}</TestimonialsName>
          <TestimonialsTitle>{title}</TestimonialsTitle>
        </FlexRowRight>
      </FlexRow>
    </InnerContainer>
  </OuterContainer>
)

SiteTestimonial.defaultProps = {
  bgImage: '',
  bgImageAlt: 'Testimonial background image',
  header: '',
  caption: '',
}

SiteTestimonial.propTypes = {
  bgImage: PropTypes.node,
  bgImageAlt: PropTypes.string,
  header: PropTypes.string,
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SiteTestimonial
