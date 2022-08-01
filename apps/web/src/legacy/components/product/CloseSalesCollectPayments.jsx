import React from 'react'
import { styled } from '@design'
// images
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$grayAlt',
})

const MainContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '3rem',
  paddingBottom: '1rem',
  px: '3rem',
  textAlign: 'center',

  '@>s': {
    px: '6rem',
    paddingTop: '6rem',
    paddingBottom: '3rem',
  },

  '@<s': {
    maxHeight: '500px',
  },
})

const MainHeading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  textAlign: 'center',
  marginBottom: '3rem',
  color: '$text',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
    marginBottom: '1rem',
  },

  '@media (min-width: 577px)': {
    flexDirection: 'row-reverse',
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },

  '@>m': {
    px: '6rem',
  },
})

const Flexbox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  display: 'column',
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '2%',
})

const FlexRowLeft = styled(FlexRowItem, {
  textAlign: 'left',

  '@>s': {
    flex: '0 0 37%',
    maxWidth: '37%',
    marginLeft: '2rem',
  },

  '@>m': {
    marginBottom: 0,
    marginLeft: '4rem',
  },
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',

  '@>s': {
    flex: '0 0 37%',
    maxWidth: '37%',
    marginLeft: '2rem',
  },

  '@>m': {
    marginBottom: 0,
    marginLeft: '4rem',
  },
})

const MainCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginTop: '1rem',
  marginBottom: '2rem',
})

const SVG = styled('img', {
  position: 'relative',
  top: '5px',
  display: 'inline-block',
})

const FeatureCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$textAlt',
  my: '1rem',
})

const FeatureContainer = styled('div', {
  marginBottom: '-10px',
})

const FeatureItem = styled('p', {
  display: 'flex',
  paddingLeft: '3%',
  position: 'relative',
  top: '-20px',
  left: '22px',
})

const CloseSalesCollectPayments = () => (
  <OuterContainer>
    <MainContainer>
      <MainHeading>Close Sales & Collect Payments Seamlessly</MainHeading>
      <Flexbox>
        <FlexRowLeft>
          <MainCopy>
            Leadpages Checkouts are powered by the popular payment gateway
            Stripe, which accepts all major credit cards swiftly and securely.
            Stripe is free to set up and its pricing system is based on a
            percentage of your sales, so you only pay if you’re actually making
            money.
          </MainCopy>
        </FlexRowLeft>
        <FlexRowRight>
          <FeatureCopy>
            <FeatureContainer>
              <SVG src={checkSVG.src} alt="check mark SVG" />
              <FeatureItem>Accept credit cards</FeatureItem>
            </FeatureContainer>
            <FeatureContainer>
              <SVG src={checkSVG.src} alt="check mark SVG" />
              <FeatureItem>
                Secure payment processing (SCA compliant)
              </FeatureItem>
            </FeatureContainer>
            <FeatureContainer>
              <SVG src={checkSVG.src} alt="check mark SVG" />
              <FeatureItem>
                Customizable form fields (including shipping-related fields)
              </FeatureItem>
            </FeatureContainer>
            <FeatureContainer>
              <SVG src={checkSVG.src} alt="check mark SVG" />
              <FeatureItem>Automatic receipt delivery</FeatureItem>
            </FeatureContainer>
            <FeatureContainer>
              <SVG src={checkSVG.src} alt="check mark SVG" />
              <FeatureItem>Refund processing</FeatureItem>
            </FeatureContainer>
          </FeatureCopy>
        </FlexRowRight>
      </Flexbox>
    </MainContainer>
  </OuterContainer>
)

export default CloseSalesCollectPayments
