import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import checkSVG from '../../assets/images/global/check_in-circle.svg';
import bgSVG from '../../assets/images/shapes/bounce-line-gray-thin.svg';

const OuterContainer = styled.div`
  text-align: center;
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
  overflow-x: hidden;
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
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 3rem;
  padding-left: 3rem;
`;

const ReverseFlexbox = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 1rem;
  padding-bottom: 1rem;
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
  position: relative;
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
  position: relative;
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
`;

const FeatureTextContainer = styled.div`
  @media (max-width: 992px) {
    margin-top: 2rem;
    position: relative;
  }
  @media (min-width: 993px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const FeatureContainer = styled.div`
  position: relative;
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

const AsteriskText = styled.div`
  font-family: 'Apercu Pro';
  font-size: 12px;
  line-height: 18px;
  color: #575452;
  text-align: center;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
`;

const BGImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  height: 100%;
`;

const ConversionFirstBuilder = () => (
  <StaticQuery
    query={graphql`
      query ConversionFirst {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/website-builder/conversion-toolkit_Leadpages-464px@2x.png"
          }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/website-builder/fast-load-speeds_Leadpages-416px@2x.png"
          }
        ) {
          ...constrained
        }
        imageThree: file(
          relativePath: {
            eq: "assets/images/product/website-builder/mobile-responsive-website-design_Leadpages-356px@2x.png"
          }
        ) {
          ...constrained
        }
        imageFour: file(
          relativePath: {
            eq: "assets/images/product/website-builder/site-analytics-dashboard_Leadpages-464px@2x.png"
          }
        ) {
          ...constrained
        }
        imageFive: file(
          relativePath: {
            eq: "assets/images/product/website-builder/built-in-SEO_Leadpages-Sites_317px@2x.png"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <BGImage src={bgSVG} alt="background svg" />
        <Title>Experience the world’s first conversion-first website builder</Title>
        <ReverseFlexbox>
          <FlexRow5>
            <FeatureTextContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>Complete conversion toolkit</Feature>
              </FeatureContainer>
              <FeatureCopy>
                Easily add opt-in forms, pop-ups, and alert bars to any page of your site, without
                leaving the Leadpages platform.
              </FeatureCopy>
            </FeatureTextContainer>
          </FlexRow5>
          <FlexRow1 />
          <FlexRow5>
            <FlexImg>
              <GatsbyImage image={getImage(data.imageOne)} alt="drag and drop builder" />
            </FlexImg>
          </FlexRow5>
        </ReverseFlexbox>
        <Flexbox>
          <FlexRow1 />
          <FlexRow1 />
          <FlexRow4>
            <FeatureTextContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>Lightning-fast load speeds</Feature>
              </FeatureContainer>
              <FeatureCopy>
                Don’t let slow-loading web pages cost you conversions. Leadpages sites load 2.4
                seconds faster and have a performance score 30% higher*.
              </FeatureCopy>
            </FeatureTextContainer>
          </FlexRow4>
          <FlexRow1 />
          <FlexRow5>
            <FlexImg>
              <GatsbyImage
                image={getImage(data.imageTwo)}
                alt="connect your email service provider"
              />
            </FlexImg>
          </FlexRow5>
        </Flexbox>
        <ReverseFlexbox>
          <FlexRow5>
            <FeatureTextContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>100% Mobile-responsive design</Feature>
              </FeatureContainer>
              <FeatureCopy>
                All Leadpages sites are fully mobile-responsive and designed for optimal user
                experience on any device or screen size.
              </FeatureCopy>
            </FeatureTextContainer>
          </FlexRow5>
          <FlexRow1 />
          <FlexRow5>
            <FlexImg>
              <GatsbyImage image={getImage(data.imageThree)} alt="drag and drop builder" />
            </FlexImg>
          </FlexRow5>
        </ReverseFlexbox>
        <Flexbox>
          <FlexRow1 />
          <FlexRow1 />
          <FlexRow4>
            <FeatureTextContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>Streamlined analytics dashboard</Feature>
              </FeatureContainer>
              <FeatureCopy>
                Check up on your site’s performance right inside the Leadpages dashboard or use
                third-party analytics or tracking code.
              </FeatureCopy>
            </FeatureTextContainer>
          </FlexRow4>
          <FlexRow1 />
          <FlexRow5>
            <FlexImg>
              <GatsbyImage
                image={getImage(data.imageFour)}
                alt="connect your email service provider"
              />
            </FlexImg>
          </FlexRow5>
        </Flexbox>
        <ReverseFlexbox>
          <FlexRow5>
            <FeatureTextContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>Built-in SEO</Feature>
              </FeatureContainer>
              <FeatureCopy>
                Help your site rise to the top of search engine results with built-in SEO settings
                for meta descriptions and image optimizations.
              </FeatureCopy>
            </FeatureTextContainer>
          </FlexRow5>
          <FlexRow1 />
          <FlexRow5>
            <FlexImg>
              <GatsbyImage image={getImage(data.imageFive)} alt="drag and drop builder" />
            </FlexImg>
          </FlexRow5>
        </ReverseFlexbox>
        <AsteriskText>
          *Based on Google Lighthouse comparative audit of five leading landing page builders,
          rendering two distinct pages on both mobile and desktop on an applied fast 3G network.
        </AsteriskText>
      </OuterContainer>
    )}
  />
);

export default ConversionFirstBuilder;
