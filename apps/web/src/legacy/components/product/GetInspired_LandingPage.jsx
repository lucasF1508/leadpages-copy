import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
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
  justify-content: space-between;
  text-align: left;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 44%;
    flex: 0 0 44%;
    max-width: 44%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 %;
    flex: 0 0 37%;
    max-width: 37%;
  }
`;
const FlexImg = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 44%;
    flex: 0 0 44%;
    max-width: 44%;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const GIButtonContainer = styled.div``;

const GIButtonCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  color: #603eff;
`;

const GIButton = styled.button`
  width: 100%;
  max-width: 286px;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #d1c6f9;
  background-color: #ffffff;
  font-family: 'Apercu Pro';
  @media (min-width: 992px) {
    max-width: 350px;
  }
  &:hover {
    background-color: #603eff;
    color: #ffffff;
    cursor: pointer;
    border: 3px solid #603eff;
  }
  &:hover ${GIButtonCopy} {
    color: #ffffff;
  }
`;

const GetInspired_LandingPage = () => (
  <StaticQuery
    query={graphql`
      query GetInspiredLandingPageQuery {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/get-inspired-opt-in-pages.png"
          }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/get-inspired-sales-pages.png"
          }
        ) {
          ...constrained
        }
        imageThree: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/get-inspired-checkout-pages.png"
          }
        ) {
          ...constrained
        }
        imageFour: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/get-inspired-thank-you-pages.png"
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
          <GIHeadline>Put your landing pages to good use for your business.</GIHeadline>
          <GIFlexbox>
            <FlexRowLeft>
              <FlexImg>
                <GatsbyImage
                  image={getImage(data.imageOne)}
                  alt="Put your landing pages to good use for your business"
                />
              </FlexImg>
              <Feature>Opt-in pages</Feature>
              <FeatureCopy>
                Collect email subscribers, add them to your lists, and instantly deliver digital
                files with the Lead Magnet Delivery System.
              </FeatureCopy>
            </FlexRowLeft>
            <FlexRowRight>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageTwo)} alt="Opt-in pages" />
              </FlexImg>
              <Feature>Thank-you pages & confirmation pages</Feature>
              <FeatureCopy>
                Reassure your audience of a successful sale or subscription with a follow-up page
                that perfectly matches the rest of your campaign.
              </FeatureCopy>
            </FlexRowRight>
          </GIFlexbox>
          <GIFlexbox>
            <FlexRowLeft>
              <FlexImg>
                <GatsbyImage
                  image={getImage(data.imageThree)}
                  alt="Thank-you pages & confirmation pages"
                />
              </FlexImg>
              <Feature>Sales pages</Feature>
              <FeatureCopy>
                Pitch your products and services with highly persuasive sales pages that overcome
                objections and drive towards conversion.
              </FeatureCopy>
            </FlexRowLeft>
            <FlexRowRight>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageFour)} alt="Sales pages" />
              </FlexImg>
              <Feature>Checkout pages</Feature>
              <FeatureCopy>
                With built-in payment and ecommerce integrations, make sales and deliver digital
                products from any landing page, squeeze page, or pop-up opt-in form.
              </FeatureCopy>
            </FlexRowRight>
          </GIFlexbox>
          <GIButtonContainer>
            <StyledLink to="/templates">
              <GIButton>
                <GIButtonCopy>See All Landing Page Templates</GIButtonCopy>
              </GIButton>
            </StyledLink>
          </GIButtonContainer>
        </GIContainer>
      </OuterContainer>
    )}
  />
);

export default GetInspired_LandingPage;
