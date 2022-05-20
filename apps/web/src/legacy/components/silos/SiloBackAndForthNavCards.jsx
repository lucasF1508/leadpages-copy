import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Assets
import rightArrowIcon from '../../assets/images/global/arrow_right.svg';
import leftArrowIcon from '../../assets/images/global/arrow_left.svg';

const CardSectionHeading = styled.h2`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 80%;
  @media (max-width: 768px) {
    margin-top: 35px;
    margin-top: 35px;
    width: 100%;
    font-size: 20px;
    letter-spacing: -0.07px;
    line-height: 24px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(15, 12, 9, 0.5);
  cursor: pointer;
  &:hover {
    color: #603eff;
  }
  &.active {
    color: #603eff;
  }
`;

const Flexbox = styled.div`
  padding: 1.75rem 1.8rem 1.2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardTextContainer = styled.div``;

const CardSupertitle = styled.div`
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  opacity: 0.5;
  color: #000000;
  font-family: 'Space Mono';
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const CardTitle = styled.div`
  font-family: Apercu Pro;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #0f0c09;
  margin-bottom: 8px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }

  @media (min-width: 993px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
  }
`;

const ArrowRight = styled.img`
  width: 20px;
  height: 10px;
  margin: auto 0 auto 2rem;
`;

const ArrowLeft = styled.img`
  width: 20px;
  height: 10px;
  margin: 2.7rem 2.25rem auto 0;
`;

const Card = styled.div`
  max-width: 825px;
  background-color: #ffffff !important;
  margin-bottom: 12px;
  box-shadow: 0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15);
  width: 250px;
  margin-right: 1.4rem;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 12px 0 rgba(15, 12, 9, 0.3), 0 12px 24px 0 rgba(15, 12, 9, 0.15);
  }

  &:hover ${CardTitle} {
    color: #603eff;
  }

  &:hover ${ArrowRight}, ${ArrowLeft} {
    filter: invert(33%) sepia(92%) saturate(6067%) hue-rotate(247deg) brightness(101%)
      contrast(102%);
  }
`;

const SiloBackAndForthNavCards = ({
  heading,
  backToUrl,
  backToTitle,
  backToSuperTitle,
  nextUrl,
  nextTitle,
  nextSuperTitle,
}) => {
  return (
    <div style={{ display: 'block' }}>
      <CardSectionHeading>{heading}</CardSectionHeading>
      <CardsContainer>
        <Card>
          <StyledLink to={backToUrl}>
            <Flexbox>
              <ArrowLeft src={leftArrowIcon} alt="left arrow" />
              <CardTextContainer>
                <CardSupertitle>{backToSuperTitle}</CardSupertitle>
                <CardTitle>{backToTitle}</CardTitle>
              </CardTextContainer>
            </Flexbox>
          </StyledLink>
        </Card>

        <Card>
          <StyledLink to={nextUrl}>
            <Flexbox>
              <CardTextContainer>
                <CardSupertitle>{nextSuperTitle}</CardSupertitle>
                <CardTitle>{nextTitle}</CardTitle>
              </CardTextContainer>
              <ArrowRight src={rightArrowIcon} alt="right arrow" />
            </Flexbox>
          </StyledLink>
        </Card>
      </CardsContainer>
    </div>
  );
};

SiloBackAndForthNavCards.propTypes = {
  heading: PropTypes.string.isRequired,
  backToUrl: PropTypes.string.isRequired,
  backToTitle: PropTypes.string.isRequired,
  backToSuperTitle: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
  nextTitle: PropTypes.string.isRequired,
  nextSuperTitle: PropTypes.string.isRequired,
};

export default SiloBackAndForthNavCards;
