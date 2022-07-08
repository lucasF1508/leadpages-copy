import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { GATSBY_IMAGE } from '../../constants/types';
import styled from 'styled-components';

const OuterContainer = styled.div`
  margin-top: -60px;
  padding-top: 108px;
  position: relative;
`;

const HeaderContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
  z-index: 2;
`;

const FlexRow = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
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
  justify-content: space-between;
  text-align: left;
  margin-bottom: 4rem;
  @media (max-width: 575px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40.6666%;
    flex: 0 0 40.6666%;
    max-width: 40.6666%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }
`;
const HeaderImgLeft = styled.div`
  width: 100%;
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  align-self: flex-end;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
    text-align: left;
  }
`;

const SmallHeading = styled.div`
  font-family: 'Space Mono';
  opacity: 0.5;
  color: #000000;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
`;

const LeftHeading = styled.div`
  margin-top: 1rem;
  font-family: 'Value Serif';
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0px;
  color: #0f0c09;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
  }

  @media (min-width: 993px) {
    font-size: 56px;
    line-height: 60px;
    letter-spacing: 0;
  }
`;

const LeftSubHeading = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const RTGButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RTGButton = styled.button`
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
  cursor: pointer;

  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }

  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }
`;

const ZapierPageHeader = ({ image, imageAltText }) => (
  <OuterContainer>
    <HeaderContainer>
      <FlexRow>
        <FlexRowLeft>
          <SmallHeading>Leadpages + Zapier</SmallHeading>
          <LeftHeading>
            <h1>Send your leads to the tools you love</h1>
          </LeftHeading>
          <LeftSubHeading>
            Easily collect leads on your Leadpages site, landing pages, pop-ups, and alert bars,
            then let the data flow to 1400+ apps through Zapier.
          </LeftSubHeading>
          <RTGButtonContainer>
            <StyledLink to="/pricing" alt="Leadpages Free Trial">
              <RTGButton>Try It Free</RTGButton>
            </StyledLink>
          </RTGButtonContainer>
        </FlexRowLeft>
        <FlexRowRight>
          <HeaderImgLeft>
            <GatsbyImage image={image} alt={imageAltText} />
          </HeaderImgLeft>
        </FlexRowRight>
      </FlexRow>
    </HeaderContainer>
  </OuterContainer>
);

ZapierPageHeader.defaultProps = {
  imageAltText: 'Zapier header background',
};

ZapierPageHeader.propTypes = {
  image: GATSBY_IMAGE.isRequired,
  imageAltText: PropTypes.string,
};

export default ZapierPageHeader;
