import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import ArrowLeftSVG from '../../assets/images/global/arrow_left.svg';
import Tooltip from '../tooltips/Tooltip_GreatWhite';

const OuterContainer = styled.div`
  background-color: #f7f7f7;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 1140px;
  margin: 4rem 6rem 0;
  padding-bottom: 2.5rem;

  @media (max-width: 1023px) {
    margin: 3rem 3rem 0;
  }

  @media (max-width: 769px) {
    margin: 1.7rem 5.2rem 0 1.6rem;
  }

  @media (max-width: 675px) {
    flex-flow: column wrap;
    margin: 1rem 1.8rem 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  @media (max-width: 675px) {
    display: none;
  }
`;

const BackArrowSVG = styled.img`
  width: 8px;
  height: 8px;
  filter: invert(31%) sepia(7%) saturate(217%) hue-rotate(341deg) brightness(101%) contrast(91%);
  margin-right: 8px;
`;

const BackText = styled.p`
  display: inline;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
`;

const BackContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &:hover ${BackText} {
    color: #603eff;
  }
  &:hover ${BackArrowSVG} {
    filter: brightness(0) saturate(100%) invert(18%) sepia(75%) saturate(2974%) hue-rotate(244deg)
      brightness(123%) contrast(106%);
  }
`;

const LeftContainer = styled.div`
  @media (max-width: 675px) {
    z-index: 10;
  }
`;

const TextContainer = styled.div`
  padding-top: 6rem;
  margin-left: 1.4rem;
  @media (max-width: 1023px) {
    padding-top: 4rem;
  }

  @media (max-width: 675px) {
    padding-top: 0;
    margin-left: 0;
  }
`;

const Headline = styled.h1`
  color: #0f0c09;
  font-family: 'Value Serif';
  font-size: 40px;
  letter-spacing: -0.5px;
  line-height: 48px;
  margin-bottom: 24px;
  @media (max-width: 675px) {
    font-size: 28px;
    letter-spacing: 0;
    line-height: 34px;
    text-align: center;
  }
`;

const TooltipText = styled.p`
  display: inline;
  color: #575452;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
  margin-bottom: 24px;
`;

const IntegrationTipHover = styled.p`
  display: inline;
  color: #575452;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
  margin-bottom: 24px;
  @media (max-width: 675px) {
    text-align: center;
  }

  &:hover {
    color: #603eff;
    border-bottom: 3px solid #603eff;
    cursor: pointer !important;
  }
`;

const DescriptionText = styled.p`
  color: #575452;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 24px;
  margin-top: 1.5rem;
  @media (max-width: 675px) {
    font-size: 16px;
    text-align: center;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: 2rem;
  max-width: 430px;
  @media (max-width: 675px) {
    margin-left: 0;
    margin-top: -3rem;
  }
`;

const CircleHolder = styled.div`
  min-width: 430px;
  min-height: 430px;
  @media (max-width: 1023px) {
    min-width: 300px;
    min-height: 300px;
  }
  @media (max-width: 575px) {
    min-width: 215px;
    min-height: 215px;
  }
`;

const GrayCircle = styled.div`
  background-color: #e7e6e6;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntegrationsHeroImage = styled(GatsbyImage)`
  width: 100%;
  max-width: calc(100% - 50px);
  @media (max-width: 1023px) {
    max-width: 250px;
  }
  @media (max-width: 575px) {
    max-width: 175px;
  }
`;

const IntegrationToolTextWrapper = styled.div`
  @media (max-width: 675px) {
    text-align: center;
  }
`;

const IntegrationsSubpageHeader = ({ data }) => {
  const { headlineText, tooltipText, tooltipTitle, descriptionText, heroImage } = data;
  return (
    <OuterContainer>
      <InnerContainer>
        <StyledLink to="/integrations">
          <BackContainer>
            <BackArrowSVG src={ArrowLeftSVG} alt="left arrow" />
            <BackText>All Integrations</BackText>
          </BackContainer>
        </StyledLink>
        <LeftContainer>
          <TextContainer>
            <Headline>{headlineText}</Headline>
            <IntegrationToolTextWrapper>
              <Tooltip title={tooltipTitle}>
                <IntegrationTipHover tabIndex={0}>Integrated</IntegrationTipHover>
              </Tooltip>
              <TooltipText>{tooltipText}</TooltipText>
            </IntegrationToolTextWrapper>
            <DescriptionText>{descriptionText}</DescriptionText>
          </TextContainer>
        </LeftContainer>
        <RightContainer>
          <CircleHolder>
            <GrayCircle>
              <IntegrationsHeroImage image={heroImage} alt={headlineText} />
            </GrayCircle>
          </CircleHolder>
        </RightContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default IntegrationsSubpageHeader;

IntegrationsSubpageHeader.propTypes = {
  data: PropTypes.shape({
    headlineText: PropTypes.string.isRequired,
    tooltipText: PropTypes.string.isRequired,
    tooltipTitle: PropTypes.string.isRequired,
    descriptionText: PropTypes.string.isRequired,
    heroImage: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string,
        headers: PropTypes.objectOf(PropTypes.string),
      }),
      PropTypes.number,
      PropTypes.arrayOf(
        PropTypes.shape({
          uri: PropTypes.string,
          width: PropTypes.number,
          height: PropTypes.number,
          headers: PropTypes.objectOf(PropTypes.string),
        }),
      ),
    ]).isRequired,
  }).isRequired,
};
