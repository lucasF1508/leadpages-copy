import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// Images
import QuotemarkSVG from '../../assets/images/global/quote-mark_tan_62px@2x.svg';

const OuterContainer = styled.div`
  position: relative;
  z-index: 4;
  background-color: #fef9f1;
  overflow-x: hidden;
`;

const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media (max-width: 1023px) {
    width: 80%;
  }
`;

const QuotemarkImage = styled.img`
  width: 64px;
  opacity: 0.3;
`;

const Quote = styled.h4`
  width: 80%;
  margin: 2rem auto;
  color: #575452;
  font-size: 22px;
  line-height: 36px;
  text-align: center;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const Image = styled(GatsbyImage)`
  max-height: 60px;
  max-width: 60px;
  margin: 5px auto;
`;

const ClientName = styled.p`
  color: #0f0c09;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;
const ClientTitle = styled.p`
  color: #575452;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
`;

const SingleTestimonialQuoteRow = ({ quote, image, imageAlt, clientName, clientTitle }) => (
  <OuterContainer>
    <InnerContainer>
      <QuotemarkImage src={QuotemarkSVG}></QuotemarkImage>
      <Quote>{quote}</Quote>
      {image && <Image image={image} alt={imageAlt} />}
      <ClientName>{clientName}</ClientName>
      <ClientTitle>{clientTitle}</ClientTitle>
    </InnerContainer>
  </OuterContainer>
);

SingleTestimonialQuoteRow.defaultProps = {
  imageAlt: 'Client testimonial headshot',
};

SingleTestimonialQuoteRow.propTypes = {
  quote: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  imageAlt: PropTypes.string,
  clientName: PropTypes.string.isRequired,
  clientTitle: PropTypes.string.isRequired,
};

export default SingleTestimonialQuoteRow;
