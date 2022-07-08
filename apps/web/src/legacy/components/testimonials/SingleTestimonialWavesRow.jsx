import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { GATSBY_IMAGE } from '../../constants/types';
// images
import BackgroundImageSVG from '../../assets/images/shapes/wavy-lines-mirror-sand.svg';

const TestimonialContainer = styled.div`
  background: #fef9f1 url(${BackgroundImageSVG});
  background-position: top -160px center;
  background-size: 1250px;
  background-repeat: no-repeat;
  padding-top: 6rem;
  padding-bottom: 5.875rem;
  padding-right: 6rem;
  padding-left: 6rem;
  @media (max-width: 992px) {
    background: #fef9f1;
  }
  @media (max-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (max-width: 320px) {
    padding-right: 1%;
    padding-left: 1%;
    min-width: 287px;
  }
`;

const ContentContainer = styled.div`
  max-width: 635px;
  margin: 0 auto;
`;

const Headline = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  margin-bottom: 2.2125rem;
  color: #e28f44;
  @media (max-width: 576px) {
    font-size: 1.833rem;
    line-height: 2.5rem;
    letter-spacing: -0.01rem;
    margin-bottom: 1.5rem;
  }
`;

const TestimonialQuote = styled.div`
  max-width: 635px;
  color: #575452;
  font-size: 1.375rem;
  line-height: 2.25rem;
  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: normal;
  }
`;

const TestimonialName = styled.div`
  font-family: 'Apercu Pro';
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #0f0c09;
`;

const TestimonialTitle = styled.div`
  font-family: 'Apercu Pro';
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;
  color: #575452;
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  @media (max-width: 576px) {
    margin-top: 1.5rem;
  }
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

const FlexRowLeft = styled(FlexRowItem)`
  display: flex;
  justify-content: left;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    margin-bottom: 0rem;
    flex: 0 0 24%;
    max-width: 72px;
    justify-content: flex-end;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    flex: 0 0 24%;
    text-align: left;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

const TestimonialImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  max-width: 72px;
  max-height: 72px;
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  margin-left: 3%;
  @media (min-width: 576px) {
    flex: 0 0 69%;
    max-width: 69%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    flex: 0 0 69%;
    max-width: 69%;
    text-align: left;
  }
  @media (max-width: 576px) {
    margin-left: 0;
  }
`;

const SingleTestimonialWavesRow = ({ image, imageAlt, quote, name, title, headline }) => (
  <TestimonialContainer>
    <ContentContainer>
      <Headline>{headline}</Headline>
      <TestimonialQuote>{quote}</TestimonialQuote>
      <FlexRow>
        <FlexRowLeft>
          <TestimonialImage image={image} alt={imageAlt} />
        </FlexRowLeft>
        <FlexRowRight>
          <TestimonialName>{name}</TestimonialName>
          <TestimonialTitle>{title}</TestimonialTitle>
        </FlexRowRight>
      </FlexRow>
    </ContentContainer>
  </TestimonialContainer>
);

SingleTestimonialWavesRow.defaultProps = {
  image: null,
  imageAlt: '',
};

SingleTestimonialWavesRow.propTypes = {
  image: GATSBY_IMAGE,
  imageAlt: PropTypes.string,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default SingleTestimonialWavesRow;
