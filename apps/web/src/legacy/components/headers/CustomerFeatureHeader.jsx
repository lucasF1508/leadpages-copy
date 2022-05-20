import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { GATSBY_IMAGE } from '../../constants/types';

const OuterContainer = styled.div`
  position: relative;
  padding-bottom: 4rem;
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.div`
  position: relative;
  background: #fff;
  @media (max-width: 768px) {
    width: 75%;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: -10%;
    margin-bottom: 1rem;
  }
  @media (min-width: 769px) {
    width: 45%;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: -10%;
    margin-bottom: 1rem;
  }
`;

const Title = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  opacity: 0.5;
  color: #000;
  margin-bottom: 1rem;
  padding-top: 2rem;
  @media (min-width: 769px) and (max-width: 992px) {
    padding-right: 3.25rem;
    padding-left: 3.25rem;
    padding-top: 2rem;
  }

  @media (min-width: 993px) {
    padding-left: 5.9rem;
    padding-top: 4rem;
  }
`;

const Caption = styled.h1`
  font-family: 'Value Serif';
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.07px;
  color: #0f0c09;
  margin-bottom: 1rem;
  @media (max-width: 424px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.07px;
    margin-bottom: 1rem;
  }
  @media (min-width: 425px) and (max-width: 992px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
    padding-top: 2rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-right: 3.25rem;
    padding-left: 3.25rem;
  }
  @media (min-width: 993px) {
    font-size: 40px;
    letter-spacing: -0.5px;
    line-height: 48px;
    padding-left: 5.9rem;
    margin-bottom: 2rem;
  }
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const CustomerFeatureHeader = ({ image, imageAlt, title, caption }) => (
  <OuterContainer>
    <InnerContainer>
      <Image image={image} alt={imageAlt} />
      <Section>
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
      </Section>
    </InnerContainer>
  </OuterContainer>
);

CustomerFeatureHeader.defaultProps = {
  title: '',
  caption: '',
};

CustomerFeatureHeader.propTypes = {
  image: GATSBY_IMAGE.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string,
  caption: PropTypes.string,
};

export default CustomerFeatureHeader;
