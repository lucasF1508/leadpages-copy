import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import checkSVG from '../../assets/images/global/check_in-circle.svg';

const OuterContainer = styled.div`
  text-align: center;
  background-color: #f7f7f7;
  padding-top: 6rem;
  padding-bottom: 6rem;
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

const PopUpTogether = () => (
  <StaticQuery
    query={graphql`
      query PopUpTogether {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/pop-up-builder/customize-content-479px@2x.png"
          }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/pop-up-builder/connect-integrations-359px@2x.png"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Title>Put your pop-up together in a matter of minutes</Title>
        <ReverseFlexbox>
          <FlexRow5>
            <FeatureTextContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark svg" />
                <Feature>Customize your content</Feature>
              </FeatureContainer>
              <FeatureCopy>
                Create a beautifully designed opt-in form by dragging and dropping text elements,
                images, buttons, and forms within the Drag & Drop Builder.
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
                <Feature>Connect your email service provider (ESP)</Feature>
              </FeatureContainer>
              <FeatureCopy>
                Route your new subscribers directly to your chosen email list by connecting your
                form to your email app.
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
      </OuterContainer>
    )}
  />
);

export default PopUpTogether;
