import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// images
import checkSVG from '../../assets/images/global/check_in-circle.svg';
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';
import stripeLogo from '../../assets/images/integrations/Stripe-Logo-46px@2x.svg';

const OuterContainer = styled.div`
  position: relative;
`;

const MainContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const OuterFlexContainer = styled(FlexRow)`
  flex-wrap: wrap;
`;

const InnerFlexContainer = styled(FlexRow)`
  display: flex;
  flex-wrap: row wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 0;
  @media (max-width: 1023px) {
    flex-flow: column wrap;
    align-items: center;
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
`;

const TextContainer = styled(FlexRowItem6)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;
  width: 50%;
  @media (max-width: 1023px) {
    width: 40%;
    margin-right: auto;
    margin-left: auto;
  }
  @media (max-width: 576px) {
    width: 70%;
    margin-right: auto;
    margin-left: auto;
  }
  @media (max-width: 374px) {
    width: 85%;
    margin-right: auto;
    margin-left: auto;
  }
`;

const ImageContainer = styled(FlexRowItem6)`
  position: relative;
  display: flex;
  @media (max-width: 1023px) {
    width: 90%;
    max-width: 600px;
  }
`;

const CustomImage = styled(GatsbyImage)`
  width: 100%;
  margin-bottom: -1px;
  align-self: flex-end;
`;

const Title = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  opacity: 0.5;
  color: #000000;
  margin-bottom: 26px;
`;

const Headline = styled.div`
  font-family: 'Value Serif';
  font-size: 24px;
  line-height: 24px;
  letter-spacing: -0.07px;
  color: #0f0c09;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.07px;
    margin-bottom: 16px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.08px;
    margin-bottom: 22px;
  }

  @media (min-width: 993px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
    margin-bottom: 26px;
  }
`;

const Caption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #575452;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    margin-bottom: 16px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    margin-bottom: 16px;
  }

  @media (min-width: 993px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
    margin-bottom: 24px;
  }
`;

const SVGContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 50%;
  overflow-x: hidden;
  @media (max-width: 480px) {
    display: none;
  }
`;

const FeaturesContainer = styled.div`
  margin-bottom: 2rem;
  display: block;
`;

const FeatureContainer = styled.div`
  position: relative;
  padding-right: 3%;
`;

const Feature = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  display: block;
  padding-left: 24px;
  margin-bottom: 0.75rem;
`;

const SVG = styled.img`
  position: absolute;
  top: 2px;
  display: inline;
`;

const CTA = styled.div`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  font-weight: 500;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const StripeSVG = styled.img`
  position: relative;
  display: inline-block;
  left: 5px;
  bottom: -5px;
`;

const CheckoutsProduct = () => {
  const images = useStaticQuery(graphql`
    query CheckoutsProductQuery {
      featuredImage: file(
        relativePath: {
          eq: "assets/images/product/checkouts/leadpages-checkout-payment-forms_751px@2x.png"
        }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <OuterContainer>
      <MainContainer>
        <OuterFlexContainer>
          <InnerFlexContainer>
            <TextContainer>
              <Headline>Sell your products and services online</Headline>
              <Caption>
                Include an online checkout form on any webpage, sales page, or pop-up.
                <br />
                <span style={{ fontSize: '14px' }}>Powered by</span>
                <StripeSVG src={stripeLogo} alt="stripe integration logo"></StripeSVG>
              </Caption>

              <FeaturesContainer>
                <FeatureContainer>
                  <SVG src={checkSVG} alt="check mark svg" />
                  <Feature>Accept all major credit cards</Feature>
                </FeatureContainer>
                <FeatureContainer>
                  <SVG src={checkSVG} alt="Leadpages work perks careers left image" />
                  <Feature>Collect shipping information</Feature>
                </FeatureContainer>
                <FeatureContainer>
                  <SVG src={checkSVG} alt="Leadpages work perks careers left image" />
                  <Feature>Send automatic receipts</Feature>
                </FeatureContainer>
                <FeatureContainer>
                  <SVG src={checkSVG} alt="Leadpages work perks careers left image" />
                  <Feature>Easily process refunds</Feature>
                </FeatureContainer>
                <StyledLink to="/product/checkouts" alt="Leadpages checkouts product detail page">
                  <CTA>
                    Leadpages Checkouts
                    <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                  </CTA>
                </StyledLink>
              </FeaturesContainer>
            </TextContainer>
            <ImageContainer>
              <CustomImage
                image={getImage(images.featuredImage)}
                alt="Leadpages checkouts product image"
              />
            </ImageContainer>
          </InnerFlexContainer>
        </OuterFlexContainer>
      </MainContainer>
    </OuterContainer>
  );
};

export default CheckoutsProduct;
