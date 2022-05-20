import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: relative;
`;

const PFContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 10rem;
  padding-right: 3rem;
  padding-left: 3rem;
  text-align: center;
  @media (min-width: 576px) {
    padding-right: 6rem;
    padding-left: 6rem;
    padding-top: 10rem;
  }
`;

const PFTitle = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  margin-bottom: 2rem;
`;

const PFHeadline = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  padding-bottom: 4rem;
`;

const PFFlexbox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
`;

const FlexRowLeft = styled(FlexRowItem)`
  text-align: left;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 37%;
    flex: 0 0 37%;
    max-width: 37%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 37%;
    flex: 0 0 37%;
    max-width: 37%;
  }
`;
const FlexImg = styled.div`
  width: 100%;
  margin-top: 2rem;
  max-width: 342px;
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 37%;
    flex: 0 0 37%;
    max-width: 37%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 37%;
    flex: 0 0 37%;
    max-width: 37%;
    text-align: left;
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
`;

const FeatureCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  color: #575452;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const PowerfulFeatures = () => (
  <StaticQuery
    query={graphql`
      query PowerfulFeaturesQuery {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/powerful-features_conversion-guidance.png"
          }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/powerful-features_lead-collection-traffic.png"
          }
        ) {
          ...constrained
        }
        imageThree: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/powerful-features_unlimited-page-publishing.png"
          }
        ) {
          ...constrained
        }
        imageFour: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/powerful-features_page-load-speed.png"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <PFContainer>
          <PFTitle>Powerful features you’ll only find at Leadpages</PFTitle>
          <PFHeadline>
            As one of the first landing page builders, we pioneered the conversion conversation. And
            we’re still leading the way.
          </PFHeadline>
          <PFFlexbox>
            <FlexRowLeft>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageOne)} alt="powerful features" />
              </FlexImg>
              <Feature>Built-in conversion guidance</Feature>
              <FeatureCopy>
                Our exclusive technology predicts your page’s performance before you publish it and
                tells you what to tweak’so you can guess less and grow more.
              </FeatureCopy>
            </FlexRowLeft>
            <FlexRowRight>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageTwo)} alt="conversion guidance" />
              </FlexImg>
              <Feature>Unlimited lead collection & traffic</Feature>
              <FeatureCopy>
                Unlike the other guys, we’ll never charge you more for your success—that means no
                limits on web visitors or lead collection.&nbsp;
              </FeatureCopy>
            </FlexRowRight>
          </PFFlexbox>
          <PFFlexbox>
            <FlexRowLeft>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageThree)} alt="unlimited lead collection" />
              </FlexImg>
              <Feature>Unlimited page publishing</Feature>
              <FeatureCopy>
                Create dedicated landing pages for each and every traffic source or campaign without
                fear of dreaded publishing limits or “bandwidth exceeded” error messages.
              </FeatureCopy>
            </FlexRowLeft>
            <FlexRowRight>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageFour)} alt="unlimited page publishing" />
              </FlexImg>
              <Feature>Unparalleled page load speed</Feature>
              <FeatureCopy>
                Our pages load 2.4 seconds faster and have a performance score 30% higher than other
                leading page builders, which helps you win more conversions, customers, sales, and a
                higher PPC ad quality score.
              </FeatureCopy>
            </FlexRowRight>
          </PFFlexbox>
        </PFContainer>
      </OuterContainer>
    )}
  />
);

export default PowerfulFeatures;
