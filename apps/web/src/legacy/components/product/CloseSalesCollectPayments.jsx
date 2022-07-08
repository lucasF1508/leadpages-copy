import React from 'react';
import styled from 'styled-components';
// images
import checkSVG from '../../assets/images/global/check_in-circle.svg';

const OuterContainer = styled.div`
  position: relative;
  background-color: #f7f7f7;
`;

const MainContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  padding-bottom: 1rem;
  padding-right: 3rem;
  padding-left: 3rem;
  text-align: center;
  @media (min-width: 576px) {
    padding-right: 6rem;
    padding-left: 6rem;
    padding-top: 6rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 576px) {
    max-height: 500px;
  }
`;

const MainHeading = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #0f0c09;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
    margin-bottom: 1rem;
  }
  @media (min-width: 577px) {
    flex-direction: row-reverse;
    padding-right: 6rem;
    padding-left: 6rem;
  }
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FlexRowItem = styled.div`
  display: column;
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
    margin-left: 2rem;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 37%;
    flex: 0 0 37%;
    max-width: 37%;
    margin-left: 4rem;
  }
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 37%;
    flex: 0 0 37%;
    max-width: 37%;
    margin-left: 2rem;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 37%;
    flex: 0 0 37%;
    max-width: 37%;
    text-align: left;
    margin-left: 4rem;
  }
`;

const MainCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const SVG = styled.img`
  position: relative;
  top: 5px;
  display: inline-block;
`;

const FeatureCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  color: #575452;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const FeatureContainer = styled.div`
  margin-bottom: -10px;
`;

const FeatureItem = styled.p`
  display: flex;
  padding-left: 3%;
  position: relative;
  top: -20px;
  left: 22px;
`;

const CloseSalesCollectPayments = () => {
  return (
    <OuterContainer>
      <MainContainer>
        <MainHeading>Close Sales & Collect Payments Seamlessly</MainHeading>
        <Flexbox>
          <FlexRowLeft>
            <MainCopy>
              Leadpages Checkouts are powered by the popular payment gateway Stripe, which accepts
              all major credit cards swiftly and securely. Stripe is free to set up and its pricing
              system is based on a percentage of your sales, so you only pay if you’re actually
              making money.
            </MainCopy>
          </FlexRowLeft>
          <FlexRowRight>
            <FeatureCopy>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark SVG" />
                <FeatureItem>Accept credit cards</FeatureItem>
              </FeatureContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark SVG" />
                <FeatureItem>Secure payment processing (SCA compliant)</FeatureItem>
              </FeatureContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark SVG" />
                <FeatureItem>
                  Customizable form fields (including shipping-related fields)
                </FeatureItem>
              </FeatureContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark SVG" />
                <FeatureItem>Automatic receipt delivery</FeatureItem>
              </FeatureContainer>
              <FeatureContainer>
                <SVG src={checkSVG} alt="check mark SVG" />
                <FeatureItem>Refund processing</FeatureItem>
              </FeatureContainer>
            </FeatureCopy>
          </FlexRowRight>
        </Flexbox>
      </MainContainer>
    </OuterContainer>
  );
};

export default CloseSalesCollectPayments;
