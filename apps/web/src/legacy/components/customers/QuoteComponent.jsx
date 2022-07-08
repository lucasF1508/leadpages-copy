import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterContainer = styled.div`
  padding-top: 7rem;
  padding-bottom: 5rem;
  background-color: #fef9f1;
  text-align: center;
  @media (max-width: 576px) {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 360px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15%;
  padding-left: 15%;
`;

const Heading = styled.div`
  opacity: 0.5;
  color: #000000;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  font-family: 'Space Mono';
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Quote = styled.div`
  font-family: 'Value Serif';
  color: #e28f44;
  margin-bottom: 4rem;
  @media (max-width: 424px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.07px;
  }

  @media (min-width: 425px) and (max-width: 992px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
  }

  @media (min-width: 993px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
  }
`;

const Author = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #0f0c09;
`;

const QuoteComponent = ({ heading, quote, author }) => (
  <OuterContainer>
    <InnerContainer>
      <Heading>{heading}</Heading>
      <Quote>{quote}</Quote>
      <Author>{author}</Author>
    </InnerContainer>
  </OuterContainer>
);

QuoteComponent.defaultProps = {
  heading: '',
  author: '',
};

QuoteComponent.propTypes = {
  heading: PropTypes.string,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
};

export default QuoteComponent;
