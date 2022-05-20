import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  text-align: center;
  padding-top: 0rem;
  padding-bottom: 3rem;
  position: relative;
  background-color: #f7f7f7;
  overflow: hidden;
  @media (min-width: 576px) {
    padding-top: 0rem;
    padding-bottom: 3rem;
  }
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
`;

const ReverseFlexbox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 0rem;
  padding-bottom: 2rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    flex-direction: row-reverse;
  }
`;

const FlexRowItem = styled.div`
  display: column;
  min-height: 1px;
  position: relative;
  text-decoration: none;
  width: 100%;
  z-index: 2;
  display: flex;
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
`;

const FeatureCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 24px;
  color: #575452;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const CheckoutsFeatures = () => (
  <StaticQuery
    query={graphql`
      query CheckoutsFeaturesQuery {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/checkouts/flexible-publishing-options-464px@2x.png"
          }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/checkouts/third-party-integrations-424px@2x.png"
          }
        ) {
          ...constrained
        }
        imageThree: file(
          relativePath: {
            eq: "assets/images/product/checkouts/customizable-form-fields-540px@2x.png"
          }
        ) {
          ...constrained
        }
        imageFour: file(
          relativePath: {
            eq: "assets/images/product/checkouts/customizable-appearance-524px@2x.png"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <InnerContainer>
          <ReverseFlexbox>
            <FlexRow1 />
            <FlexRow4>
              <FeatureContainer>
                <Feature>Flexible publishing options</Feature>
                <FeatureCopy>
                  Publish your checkouts on a Leadpages webpage or embed a checkout pop-up on a
                  third-party site.
                </FeatureCopy>
              </FeatureContainer>
            </FlexRow4>
            <FlexRow1 />
            <FlexRow5>
              <FlexImg>
                <GatsbyImage image={getImage(data.imageOne)} alt="Publish your checkouts" />
              </FlexImg>
            </FlexRow5>
          </ReverseFlexbox>
          <Flexbox>
            <FlexRow1 />
            <FlexRow1 />
            <FlexRow4>
              <FeatureContainer>
                <Feature>Third-party integrations</Feature>
                <FeatureCopy>
                  In addition to processing their payment, send your customer data to a third-party
                  integration (such as an ESP or CRM).
                </FeatureCopy>
              </FeatureContainer>
            </FlexRow4>
            <FlexRow1 />
            <FlexRow5>
              <FlexImg>
                <GatsbyImage
                  image={getImage(data.imageTwo)}
                  alt="Send your customer data to a third-party integration"
                />
              </FlexImg>
            </FlexRow5>
          </Flexbox>
          <ReverseFlexbox>
            <FlexRow1 />
            <FlexRow4>
              <FeatureContainer>
                <Feature>Customizable form fields</Feature>
                <FeatureCopy>
                  Collect standard fields (email address, card number, expiration date, CVC/ CVV,
                  and billing zip code) as well as shipping-related information, as well as any
                  additional information you may desire (such as name, phone number, etc.).
                </FeatureCopy>
              </FeatureContainer>
            </FlexRow4>
            <FlexRow1 />
            <FlexRow5>
              <FlexImg>
                <GatsbyImage
                  image={getImage(data.imageThree)}
                  alt="Collect standard and customizable form fields"
                />
              </FlexImg>
            </FlexRow5>
          </ReverseFlexbox>
          <Flexbox>
            <FlexRow1 />
            <FlexRow1 />
            <FlexRow4>
              <FeatureContainer>
                <Feature>Customizable appearance</Feature>
                <FeatureCopy>
                  Easily customize the buy button’s color, style, and hover state just like a
                  regular form widget.
                </FeatureCopy>
              </FeatureContainer>
            </FlexRow4>
            <FlexRow1 />
            <FlexRow5>
              <FlexImg>
                <GatsbyImage
                  image={getImage(data.imageFour)}
                  alt="Easily customize the buy button"
                />
              </FlexImg>
            </FlexRow5>
          </Flexbox>
        </InnerContainer>
      </OuterContainer>
    )}
  />
);

export default CheckoutsFeatures;
