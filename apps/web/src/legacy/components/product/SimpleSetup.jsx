import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import checkSVG from '../../assets/images/global/check_in-circle.svg';

const OuterContainer = styled.div`
  text-align: center;
  background-color: #f7f7f7;
  padding-top: 3rem;
  padding-bottom: 3rem;
  @media (min-width: 576px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  margin-bottom: 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1rem;
  padding-bottom: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
`;

const ReverseFlexbox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1rem;
  padding-bottom: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    flex-direction: row-reverse;
  }
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-decoration: none;
  width: 100%;
`;

const FlexRow1 = styled(FlexRowItem)`
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 8.33%;
    flex: 0 0 8.33%;
    max-width: 8.33%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 8.33%;
    flex: 0 0 8.33%;
    max-width: 8.33%;
  }
`;

const FlexRow4 = styled(FlexRowItem)`
  text-align: left;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33%;
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.33%;
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
`;

const FlexRow5 = styled(FlexRowItem)`
  text-align: left;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.66%;
    flex: 0 0 41.66%;
    max-width: 41.66%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.66%;
    flex: 0 0 41.66%;
    max-width: 41.66%;
  }
`;

const FlexImg = styled.div`
  width: 100%;
  max-width: 412px;
`;

const FeatureContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  @media (min-width: 993px) {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const Feature = styled.div`
  color: #0f0c09;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
  display: block;
  padding-left: 24px;
`;

const FeatureCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  color: #575452;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const SVG = styled.img`
  position: absolute;
  top: 3px;
  display: inline;
`;

const SimpleSetup = () => (
  <StaticQuery
    query={graphql`
      query SimpleSetupQuery {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/alert-bars/simple-setup_select-layout-416px@2x.png"
          }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/alert-bars/simple-setup_customize-416px@2x.png"
          }
        ) {
          ...constrained
        }
        imageThree: file(
          relativePath: {
            eq: "assets/images/product/alert-bars/simple-setup_connect-integrations-360px@2x.png"
          }
        ) {
          ...constrained
        }
        imageFour: file(
          relativePath: { eq: "assets/images/product/alert-bars/simple-setup_Publish-395px@2x.png" }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <InnerContainer>
          <Title>Simple setup</Title>
          <ReverseFlexbox>
            <FlexRow1 />
            <FlexRow4>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>Select a layout</Feature>
                <FeatureCopy>
                  Start with a pre-designed, mobile-responsive layout that can remain sticky to the
                  top of your website (for desktop) or the bottom (for desktop and mobile users).
                </FeatureCopy>
              </FeatureContainer>
            </FlexRow4>
            <FlexRow1 />
            <FlexRow5>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageOne)} alt="Select a layout" />
              </FlexImg>
            </FlexRow5>
          </ReverseFlexbox>
          <Flexbox>
            <FlexRow1 />
            <FlexRow1 />
            <FlexRow4>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>Customize your content</Feature>
                <FeatureCopy>
                  Change the color of your bar, edit the text, include a hyperlink, opt-in form, or
                  CTA button.
                </FeatureCopy>
              </FeatureContainer>
            </FlexRow4>
            <FlexRow1 />
            <FlexRow5>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageTwo)} alt="Customize your content" />
              </FlexImg>
            </FlexRow5>
          </Flexbox>
          <ReverseFlexbox>
            <FlexRow1 />
            <FlexRow4>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>Connect your email service provider (ESP)</Feature>
                <FeatureCopy>
                  Automatically route your new subscribers directly to your email list or segment
                  within your preferred email app.
                </FeatureCopy>
              </FeatureContainer>
            </FlexRow4>
            <FlexRow1 />
            <FlexRow5>
              <FlexImg>
                <GatsbyImage
                  image={getImage(data.imageThree)}
                  alt="Connect your email service provider (ESP)"
                />
              </FlexImg>
            </FlexRow5>
          </ReverseFlexbox>
          <Flexbox>
            <FlexRow1 />
            <FlexRow1 />
            <FlexRow4>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>Publish</Feature>
                <FeatureCopy>
                  Easily publish your alert bar on any landing page or website by copying and
                  pasting a snippet of code.
                </FeatureCopy>
              </FeatureContainer>
            </FlexRow4>
            <FlexRow1 />
            <FlexRow5>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageFour)} alt="Easily publish your alert bar" />
              </FlexImg>
            </FlexRow5>
          </Flexbox>
        </InnerContainer>
      </OuterContainer>
    )}
  />
);

export default SimpleSetup;
