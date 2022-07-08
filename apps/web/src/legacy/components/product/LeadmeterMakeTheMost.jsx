import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import bkgSVG from '../../assets/images/shapes/arch-tan.svg';

const OuterContainer = styled.div`
  position: relative;
`;

const Headline = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  margin-bottom: 2rem;
  color: #0f0c09;
  @media (min-width: 576px) {
    flex-direction: row-reverse;
  }
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const InnerContainer = styled(FlexRow)`
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const BodyContainer = styled(FlexRow)`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
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
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const TextContainer = styled(FlexRowItem6)`
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

const HeadingContainer = styled(FlexRowItem6)`
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
  margin-bottom: 0rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 577px) and (max-width: 993px) {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const SmallerCopy = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1rem;
`;

const Copy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 2rem;
`;

const SVGRightContainer = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow-x: hidden;
  max-width: 40%;
  @media (max-width: 992px) {
    max-width: 70%;
  }
  max-height: 120%;
`;

const LeadmeterMakeTheMost = () => (
  <StaticQuery
    query={graphql`
      query LeadmeterMakeTheMostQuery {
        imageOne: file(
          relativePath: { eq: "assets/images/product/leadmeter/make-the-most_Foreground@2x.png" }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/transformcomponent/tech_browser-shapes@2x.png"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <SVGRightContainer src={bkgSVG} alt="transform your web traffic into business growth" />

        <InnerContainer>
          <BodyContainer>
            <TextContainer>
              <HeadingContainer>
                <Headline>Make the most of every marketing dollar you spend</Headline>
                <Copy>
                  Confidently send your paid traffic to a rigorously conversion-optimized landing
                  page
                </Copy>
                <SmallerCopy>
                  Leadmeter lets you get it right the first time: carefully optimizing your page
                  content to deliver the best possible results. Whether you're running digital ads
                  or drumming up organic traffic, you can be confident that your page will perform
                  at its peak.
                </SmallerCopy>
              </HeadingContainer>
            </TextContainer>
            <ConversionImageContainer>
              <GatsbyImage image={getImage(data.imageOne)} alt="A/B split testing" />
            </ConversionImageContainer>
          </BodyContainer>
        </InnerContainer>
      </OuterContainer>
    )}
  />
);

export default LeadmeterMakeTheMost;
