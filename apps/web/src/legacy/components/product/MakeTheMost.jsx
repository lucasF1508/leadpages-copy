import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import webBkgSVG from '../../assets/images/shapes/rounded-square-lavender.svg';

const MainContainer = styled.div`
  margin-top: 6rem;
`;

const InnerContainer = styled.div`
  position: relative;
`;

const FlexRow = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const WebPropertiesOuterContainer = styled(FlexRow)`
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const WebPropertiesContainer = styled(FlexRow)`
  flex-wrap: wrap;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const FlexRowItem6 = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
  justify-content: space-between;
  text-align: left;
  margin-right: 1%;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const WebPropertiesTextContainer = styled(FlexRowItem6)`
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const WebPropertiesHeadingContainer = styled(FlexRowItem6)`
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const WebPropertiesSectionContainer = styled(FlexRowItem6)`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const ConversionImageContainer = styled(FlexRowItem6)`
  align-self: flex-end;
  @media (max-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 577px) and (max-width: 991px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const WPSectionHeading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2rem;
`;

const WPSectionCopy = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 4rem;
`;

const LeftHeading = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  color: #0f0c09;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const WebPropertiesCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 4rem;
`;

const SVGRightContainer = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow-x: hidden;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const MakeTheMost = () => (
  <StaticQuery
    query={graphql`
      query MakeTheMostQuery {
        image1: file(
          relativePath: { eq: "assets/images/product/alert-bars/all-web-properties-614px@2x.png" }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <MainContainer>
        <InnerContainer>
          <SVGRightContainer src={webBkgSVG} alt="background svg" />
          <WebPropertiesOuterContainer>
            <WebPropertiesContainer>
              <WebPropertiesTextContainer>
                <WebPropertiesHeadingContainer>
                  <LeftHeading>Make the most of all your web properties</LeftHeading>
                  <WebPropertiesCopy>
                    Leadpages is much more than a landing page software; you’ll access a versatile
                    conversion toolkit.
                  </WebPropertiesCopy>
                </WebPropertiesHeadingContainer>
                <WebPropertiesSectionContainer>
                  <WPSectionHeading>Capture leads anywhere</WPSectionHeading>
                  <WPSectionCopy>
                    More than 90% of your web traffic isn’t ready to buy when they visit your
                    website for the first time. Make the most of your hard-won traffic by varying
                    the message, volume, and placement of your promotions across all the web
                    properties you own. Less intrusive than a pop-up and more prominent than on-page
                    text, alert bars (sometimes called sticky bars or sticky headers) are an
                    attention-grabbing way to increase your conversions.
                  </WPSectionCopy>
                </WebPropertiesSectionContainer>
              </WebPropertiesTextContainer>
              <ConversionImageContainer>
                <GatsbyImage image={getImage(data.image1)} alt="Capture leads anywhere" />
              </ConversionImageContainer>
            </WebPropertiesContainer>
          </WebPropertiesOuterContainer>
        </InnerContainer>
      </MainContainer>
    )}
  />
);

export default MakeTheMost;
