import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div``;

const GIContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
  text-align: center;
  @media (min-width: 576px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const GITitle = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  margin-bottom: 2rem;
`;

const GIHeadline = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 1.25rem;
`;

const GIFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
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
  @media (max-width: 767px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 58%;
    flex: 0 0 58%;
    max-width: 58%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 %;
    flex: 0 0 64%;
    max-width: 64%;
  }
`;
const FlexImg = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  @media (max-width: 767px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 35%;
    flex: 0 0 35%;
    max-width: 35%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 26%;
    flex: 0 0 26%;
    max-width: 26%;
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

const GetInspired_AlertBars = () => (
  <StaticQuery
    query={graphql`
      query GetInspiredAlertBarsQuery {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/alert-bars/inspiration-optin-alert-bar-720px@2x.png"
          }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/alert-bars/inspiration-link-landing-page-alert-bar-720px@2x.png"
          }
        ) {
          ...constrained
        }
        imageThree: file(
          relativePath: {
            eq: "assets/images/product/alert-bars/inspiration-blog-subscribe-alert-bar-720px@2x.png"
          }
        ) {
          ...constrained
        }
        imageFour: file(
          relativePath: {
            eq: "assets/images/product/alert-bars/inspiration-promote-sale-alert-bar-720px@2x.jpg"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <GIContainer>
          <GITitle>Get inspired</GITitle>
          <GIHeadline>Put your alert bars to good use for your business.</GIHeadline>
          <GIFlexbox>
            <FlexRowLeft>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageOne)} alt="get inspired" />
              </FlexImg>
            </FlexRowLeft>
            <FlexRowRight>
              <Feature>Create an opt-in opportunity</Feature>
              <FeatureCopy>
                Have a hot lead magnet? Highlight it in your bar! Include a simple opt-in form and
                CTA button to boost conversions and reduce bounce rates.
              </FeatureCopy>
            </FlexRowRight>
          </GIFlexbox>
          <GIFlexbox>
            <FlexRowLeft>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageTwo)} alt="create an opt-in opportunity" />
              </FlexImg>
            </FlexRowLeft>
            <FlexRowRight>
              <Feature>Capture attention & drive traffic to a landing page</Feature>
              <FeatureCopy>
                Whether you’re announcing a discount sale or sending traffic to a freshly published
                blog post, a banner will get the headlines across without hindering a user’s
                experience.
              </FeatureCopy>
            </FlexRowRight>
          </GIFlexbox>
          <GIFlexbox>
            <FlexRowLeft>
              <FlexImg>
                <GatsbyImage
                  image={getImage(data.imageThree)}
                  alt="Capture attention & drive traffic to a landing page"
                />
              </FlexImg>
            </FlexRowLeft>
            <FlexRowRight>
              <Feature>Convert blog readers into leads</Feature>
              <FeatureCopy>
                Let your blog article be the center of attention while also promoting your
                newsletter or blog feed subscription in a non-intrusive opt-in bar.
              </FeatureCopy>
            </FlexRowRight>
          </GIFlexbox>
          <GIFlexbox>
            <FlexRowLeft>
              <FlexImg>
                <GatsbyImage
                  image={getImage(data.imageFour)}
                  alt="Convert blog readers into leads"
                />
              </FlexImg>
            </FlexRowLeft>
            <FlexRowRight>
              <Feature>Promote a sale or offer</Feature>
              <FeatureCopy>
                Put the spotlight on your discount sale, coupon code, or limited-time offer by
                showcasing it in your alert bar.
              </FeatureCopy>
            </FlexRowRight>
          </GIFlexbox>
        </GIContainer>
      </OuterContainer>
    )}
  />
);

export default GetInspired_AlertBars;
