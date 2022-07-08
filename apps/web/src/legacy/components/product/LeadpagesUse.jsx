import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: relative;
`;

const LPUContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4rem;
  padding-bottom: 6rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-top: 4rem;
    padding-bottom: 6rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const LPUHeadline = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  text-align: center;
  margin-bottom: 5rem;
  color: #0f0c09;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  margin-left: auto;
  margin-right: auto;
`;

const FlexRow3 = styled(FlexRowItem)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 29.3333%;
    flex: 0 0 29.3333%;
    max-width: 29.3333%;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 27.3333%;
    flex: 0 0 27.3333%;
    max-width: 27.3333%;
    margin-bottom: 0;
  }
`;

const FlexRow3Container = styled.div`
  text-align: center;
`;

const ImageContainer = styled(GatsbyImage)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  height: 100%;
  width: 100%;
  max-height: 48px;
  max-width: 48px;
`;

const FlexRow3Heading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
  color: #0f0c09;
`;

const FlexRow3Copy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 1.25rem;
  color: #575452;
`;

function LeadpagesUse() {
  const images = useStaticQuery(graphql`
    query LeadpagesUseQuery {
      CollectLeadsImage: file(
        relativePath: { eq: "assets/images/icons/featureicons/lilac_inbound.png" }
      ) {
        ...fixed
      }
      SellProductsImage: file(
        relativePath: { eq: "assets/images/icons/featureicons/coral_megaphone.png" }
      ) {
        ...fixed
      }
      EngageAudienceImage: file(
        relativePath: { eq: "assets/images/icons/featureicons/forest_credit-card.png" }
      ) {
        ...fixed
      }
    }
  `);
  return (
    <OuterContainer>
      <LPUContainer>
        <LPUHeadline>What is Leadpages used for?</LPUHeadline>
        <FlexRow>
          <FlexRow3>
            <FlexRow3Container>
              <ImageContainer
                image={getImage(images.CollectLeadsImage)}
                alt="collect quality leads"
              />
              <FlexRow3Heading>Collect quality leads</FlexRow3Heading>
              <FlexRow3Copy>
                Grow your email subscriber list with opt-in offers, instant digital file delivery,
                and conversion-optimized content.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <ImageContainer
                image={getImage(images.SellProductsImage)}
                alt="sell products & services"
              />
              <FlexRow3Heading>Sell products & services</FlexRow3Heading>
              <FlexRow3Copy>
                Increase your revenue with high-converting sales pages and built-in checkouts
                powered by Stripe.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <ImageContainer
                image={getImage(images.EngageAudienceImage)}
                alt="engage your audience"
              />
              <FlexRow3Heading>Engage your audience</FlexRow3Heading>
              <FlexRow3Copy>
                Connect with your community by offering webinars, downloadable resources, and
                appointment scheduling.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
        </FlexRow>
      </LPUContainer>
    </OuterContainer>
  );
}

export default LeadpagesUse;
