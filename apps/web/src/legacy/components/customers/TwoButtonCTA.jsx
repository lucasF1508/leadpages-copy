import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-right: 3rem;
  padding-left: 3rem;
  background-color: #0a236d;
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

const OutboundLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const Title = styled.div`
  font-family: 'Space Mono';
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  opacity: 0.5;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Headline = styled.h2`
  font-family: 'Value Serif';
  font-size: 56px;
  letter-spacing: -1px;
  line-height: 60px;
  color: #ffffff;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    font-size: 30px;
    line-height: 30px;
    letter-spacing: -0.1px;
  }
`;

const Caption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 18px;
  letter-spacing: -0.1px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  text-align: center;
  @media (max-width: 340px) {
    padding: 0;
  }
`;

const LeftButton = styled.button`
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 2rem;
  width: 278px;
  height: 48px;
  border-radius: 48px;
  border: 3px solid rgba(255, 255, 255, 0.7);
  background-color: transparent;
  color: #ffffff;
  font-family: 'Apercu Pro';
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }
  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
    cursor: pointer;
  }
`;

const RightButton = styled.button`
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 2rem;
  width: 278px;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #603eff;
  background-color: #603eff;
  color: #ffffff;
  font-family: 'Apercu Pro';
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }
  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
    cursor: pointer;
  }
`;

const TwoButtonCTA = ({ headline, caption }) => (
  <Container>
    <Title>Let’s Get Started</Title>
    <Headline>{headline}</Headline>
    <Caption>{caption}</Caption>
    <ButtonContainer>
      <OutboundLink
        href="https://docs.google.com/forms/d/e/1FAIpQLSewLVWXgi4vhrnrocbZ_Q7cksoR4hA9Kpbj4miYWQpiJFsvKg/viewform?usp=sf_link"
        target="_blank"
        alt="Share your story"
        rel="noreferrer noopener"
      >
        <LeftButton>Share Your Story</LeftButton>
      </OutboundLink>
      <StyledLink to="/pricing" alt="Start a free trial">
        <RightButton>Start a Free Trial</RightButton>
      </StyledLink>
    </ButtonContainer>
  </Container>
);

TwoButtonCTA.defaultProps = {
  headline: 'Create your own story',
  caption:
    'Join 40,000+ businesses that trust Leadpages every day to grow their business online. Already part of the tribe? Share your own story.',
};

TwoButtonCTA.propTypes = {
  headline: PropTypes.string,
  caption: PropTypes.string,
};

export default TwoButtonCTA;
