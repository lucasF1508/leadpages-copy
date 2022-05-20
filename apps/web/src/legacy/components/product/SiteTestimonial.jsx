import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: relative;
  z-index: 4;
  background-color: #fef9f1;
  overflow-x: hidden;
`;

const InnerContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

const TestimonialsCaption = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  margin-bottom: 2rem;
  color: #e28f44;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const TestimonialsHeader = styled.div`
  display: none;
  @media (min-width: 577px) {
    display: block;
    font-family: 'Space Mono';
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 18px;
    text-transform: uppercase;
    opacity: 0.5;
    color: #000000;
    margin-bottom: 26px;
  }
`;

const TestimonialsMobileHeader = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
    font-family: 'Space Mono';
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 18px;
    text-transform: uppercase;
    opacity: 0.5;
    color: #000000;
    margin-bottom: 26px;
  }
`;

const TestimonialsQuote = styled.div`
  font-family: 'Apercu Pro';
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 2rem;
  color: #575452;
`;

const TestimonialsName = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #0f0c09;
`;

const TestimonialsTitle = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1rem;
  color: #575452;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
`;

const FlexRowLeft = styled(FlexRowItem)`
  justify-content: center;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 24%;
    flex: 0 0 24%;
    max-width: 156px;
    justify-content: flex-end;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 24%;
    flex: 0 0 24%;
    max-width: 24%;
    text-align: left;
  }
`;
const HeaderImgLeft = styled.div`
  width: 100%;
  max-width: 156px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialsImageContainer = styled.div`
  width: 100%;
  max-width: 156px;
  @media (max-width: 576px) {
    width: 100%;
    max-width: 126px;
  }
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  margin-left: 3%;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 69%;
    flex: 0 0 69%;
    max-width: 69%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 69%;
    flex: 0 0 69%;
    max-width: 69%;
    text-align: left;
  }
`;
const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  max-width: 156px;
  max-height: 156px;
`;

const SVG = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

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
    {bgImage && <SVG src={bgImage} alt={bgImageAlt} />}
    <InnerContainer>
      <FlexRow>
        <FlexRowLeft>
          <TestimonialsMobileHeader>{header}</TestimonialsMobileHeader>
          <HeaderImgLeft>
            <TestimonialsImageContainer>
              <Image image={image} alt={imageAlt} />
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
);

SiteTestimonial.defaultProps = {
  bgImage: '',
  bgImageAlt: 'Testimonial background image',
  header: '',
  caption: '',
};

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
};

export default SiteTestimonial;
