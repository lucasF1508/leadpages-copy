import React from 'react'
import { styled } from '@design'
import Link from 'next/link'
// images
import featuredImage from '@legacy/assets/images/product/checkouts/leadpages-checkout-payment-forms_751px@2x.png'
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'
import rightArrowPurple from '@legacy/assets/images/global/arrow_right_purple.svg'
import stripeLogo from '@legacy/assets/images/integrations/Stripe-Logo-46px@2x.svg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const MainContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
})

const OuterFlexContainer = styled(FlexRow, {
  flexWrap: 'wrap',
})

const InnerFlexContainer = styled(FlexRow, {
  display: 'flex',
  flexWrap: 'row wrap',
  justifyContent: 'center',
  width: '100%',
  marginBottom: 0,

  '@media (max-width: 1023px)': {
    flexFlow: 'column wrap',
    alignItems: 'center',
  },
})

const FlexRowItem6 = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
  justifyContent: 'space-between',
  textAlign: 'left',
  marginRight: '1%',
})

const TextContainer = styled(FlexRowItem6, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginLeft: '3rem',
  width: '50%',

  '@media (max-width: 1023px)': {
    width: '40%',
    mx: 'auto',
  },

  '@<s': {
    width: '70%',
    mx: 'auto',
  },

  '@media (max-width: 374px)': {
    width: '85%',
    mx: 'auto',
  },
})

const ImageContainer = styled(FlexRowItem6, {
  position: 'relative',
  display: 'flex',

  '@media (max-width: 1023px)': {
    width: '90%',
    maxWidth: '600px',
  },
})

const CustomImage = styled('img', {
  width: '100%',
  marginBottom: '-1px',
  alignSelf: 'flex-end',
})

const Headline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '24px',
  lineHeight: '24px',
  letterSpacing: '-0.07px',
  color: '$text',
  marginBottom: '16px',

  '@media (max-width: 768px)': {
    fontSize: '24px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginBottom: '16px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: '-0.08px',
    marginBottom: '22px',
  },

  '@media (min-width: 993px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
    marginBottom: '26px',
  },
})

const Caption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0px',
  color: '$textAlt',
  marginBottom: '16px',

  '@media (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
    marginBottom: '16px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
    marginBottom: '16px',
  },

  '@media (min-width: 993px)': {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
    marginBottom: '24px',
  },
})

const FeaturesContainer = styled('div', {
  marginBottom: '2rem',
  display: 'block',
})

const FeatureContainer = styled('div', {
  position: 'relative',
  paddingRight: '3%',
})

const Feature = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  display: 'block',
  paddingLeft: '24px',
  marginBottom: '0.75rem',
})

const SVG = styled('img', {
  position: 'absolute',
  top: '2px',
  display: 'inline',
})

const CTA = styled('div', {
  color: '$primary',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'left',
  fontWeight: 500,
  marginTop: '2rem',
  marginBottom: '1rem',
})

const ArrowRightPurple = styled('img', {
  width: '20px',
  height: '10px',
})

const StripeSVG = styled('img', {
  position: 'relative',
  display: 'inline-block',
  left: '5px',
  bottom: '-5px',
})

const CheckoutsProduct = () => (
  <OuterContainer>
    <MainContainer>
      <OuterFlexContainer>
        <InnerFlexContainer>
          <TextContainer>
            <Headline>Sell your products and services online</Headline>
            <Caption>
              Include an online checkout form on any webpage, sales page, or
              pop-up.
              <br />
              <span style={{ fontSize: '14px' }}>Powered by</span>
              <StripeSVG
                src={stripeLogo.src}
                alt="stripe integration logo"
              ></StripeSVG>
            </Caption>

            <FeaturesContainer>
              <FeatureContainer>
                <SVG src={checkSVG.src} alt="check mark svg" />
                <Feature>Accept all major credit cards</Feature>
              </FeatureContainer>
              <FeatureContainer>
                <SVG
                  src={checkSVG.src}
                  alt="Leadpages work perks careers left image"
                />
                <Feature>Collect shipping information</Feature>
              </FeatureContainer>
              <FeatureContainer>
                <SVG
                  src={checkSVG.src}
                  alt="Leadpages work perks careers left image"
                />
                <Feature>Send automatic receipts</Feature>
              </FeatureContainer>
              <FeatureContainer>
                <SVG
                  src={checkSVG.src}
                  alt="Leadpages work perks careers left image"
                />
                <Feature>Easily process refunds</Feature>
              </FeatureContainer>
              <Link
                href="/product/checkouts"
                aria-label="Leadpages checkouts product detail page"
              >
                <CTA>
                  Leadpages Checkouts
                  <ArrowRightPurple
                    src={rightArrowPurple.src}
                    alt="purple right arrow"
                  />
                </CTA>
              </Link>
            </FeaturesContainer>
          </TextContainer>
          <ImageContainer>
            <CustomImage
              src={featuredImage.src}
              alt="Leadpages checkouts product image"
            />
          </ImageContainer>
        </InnerFlexContainer>
      </OuterFlexContainer>
    </MainContainer>
  </OuterContainer>
)

export default CheckoutsProduct
