import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
// Images
import ArrowRightPurple from '../../assets/images/global/arrow_right_purple.svg';
import leadpagesLogoSVG from '../../assets/images/global/leadpages-wordmark_white.svg';

const CardImageItem = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #0a236d;
  height: 180px;
`;

const TextContentItem = styled.div`
  padding: 2.25rem 2.18rem 2.4rem 2.25rem;
`;

const CompetitorSVG = styled.img`
  width: 50%;
  max-height: 41px;
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  transition: 0.5s;
`;

const LeadpagesSVG = styled.img`
  max-height: 26px;
  max-width: 60%;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #0f0c09;
  margin-bottom: 1.8rem;
`;
const CardDescription = styled.div`
  line-height: 24px;
  color: #575452;
  margin-bottom: 2.3rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardLinkItem = styled.div``;

const StyledLink = styled(Link)`
  font-weight: 500;
  line-height: 24px;
  color: #603eff;
  text-decoration: none;
  cursor: pointer;
`;

const StyledBottomText = styled.span`
  padding-bottom: 0.5rem;
`;

const ArrowSVG = styled.img`
  height: 11px;
  width: 12px;
  margin-left: 12px;
`;

const VersusText = styled.span`
  font-weight: 500;
  font-size: 13.9px;
  line-height: 17px;
  text-align: center;
  color: #c3c2c1;
  margin: 0 1.2rem 0 1.2rem;
`;

const VersusContainer = styled.div`
  position: absolute;
  left: -175px;
  transition: 0.5s;
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: #ffffff;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 2.2rem;
  transition: all 0.3s ease;

  box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08);

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08);
  }

  & ${CardTitle}, ${StyledBottomText} {
    transition: all 0.3s ease;
  }

  &:hover ${CardTitle} {
    color: #603eff;
  }
  &:hover ${StyledBottomText} {
    border-bottom: solid 3px #603eff;
  }

  &:hover ${CompetitorSVG} {
    right: 2rem;
    max-height: 26px;
    max-width: 30%;
    transform: translate(0, -50%);
  }

  &:hover ${VersusContainer} {
    left: 2.25rem;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1, 1);
  }

  &:hover ${CardImageItem} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ComparisonCards = ({ image, imageAlt, title, description, link, linkAlt }) => {
  return (
    <CardContainer>
      <StyledLink to={link} alt={linkAlt}>
        <CardImageItem>
          <VersusContainer>
            <LeadpagesSVG src={leadpagesLogoSVG} alt="Leadpages logo" />
            <VersusText>vs.</VersusText>
          </VersusContainer>
          <CompetitorSVG src={image} alt={imageAlt} />
        </CardImageItem>
        <TextContentItem>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardLinkItem>
            <StyledBottomText>Read Comparison</StyledBottomText>
            <ArrowSVG src={ArrowRightPurple} alt="right arrow" />
          </CardLinkItem>
        </TextContentItem>
      </StyledLink>
    </CardContainer>
  );
};

ComparisonCards.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkAlt: PropTypes.string.isRequired,
};

export default ComparisonCards;
