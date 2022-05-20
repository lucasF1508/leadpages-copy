import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: relative;
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
  text-align: center;
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
    padding-top: 6rem;
  }
`;

const Title = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  margin-bottom: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: row nowrap;
  @media (max-width: 576px) {
    flex-flow: column wrap;
  }
`;

const FlexRowItem = styled.div`
  display: column;
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  text-align: left;
  padding-left: 2%;
  padding-right: 2%;
  box-sizing: border-box;
`;

const FlexImg = styled.div`
  width: 100%;
  margin-top: 2rem;
  max-width: 342px;
  @media (max-width: 576px) {
    margin-left: auto;
    margin-right: auto;
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
  @media (max-width: 576px) {
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FeatureCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  color: #575452;
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TurnYourExpertiseIntoRevenue = () => (
  <StaticQuery
    query={graphql`
      query TurnYourExpertiseIntoRevenueQuery {
        imageOne: file(
          relativePath: { eq: "assets/images/product/checkouts/sell-services-online_348px@2x.jpg" }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/checkouts/accept-recurring-payments_348px@2x.jpg"
          }
        ) {
          ...constrained
        }
        imageThree: file(
          relativePath: {
            eq: "assets/images/product/checkouts/deliver-digital-products_348px@2x.jpg"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <InnerContainer>
          <Title>Turn your expertise into revenue</Title>
          <FlexContainer>
            <FlexRowItem>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageOne)} alt="sell services online" />
              </FlexImg>
              <Feature>Sell your services online</Feature>
              <FeatureCopy>
                Checkouts make it easy to promote products and sell professional services online
                through any webpage, sales page, or pop-up.
              </FeatureCopy>
            </FlexRowItem>
            <FlexRowItem>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageTwo)} alt="accept recurring payments" />
              </FlexImg>
              <Feature>Accept Recurring Payments</Feature>
              <FeatureCopy>
                Automatically bill clients for recurring services or subscriptions at set intervals
                and create a steady income stream for your business.
              </FeatureCopy>
            </FlexRowItem>
            <FlexRowItem>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageThree)} alt="deliver digital products" />
              </FlexImg>
              <Feature>Deliver digital products</Feature>
              <FeatureCopy>
                With digital asset delivery, you can automatically sell and deliver everything from
                webinars and courses, to ebooks and albums.
              </FeatureCopy>
            </FlexRowItem>
          </FlexContainer>
        </InnerContainer>
      </OuterContainer>
    )}
  />
);

export default TurnYourExpertiseIntoRevenue;
