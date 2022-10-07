import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/checkouts/sell-services-online_348px@2x.jpg'
import imageTwo from '@legacy/assets/images/product/checkouts/accept-recurring-payments_348px@2x.jpg'
import imageThree from '@legacy/assets/images/product/checkouts/deliver-digital-products_348px@2x.jpg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '6rem',
  paddingBottom: '3rem',
  px: '3rem',
  textAlign: 'center',

  '@>m': {
    px: '6rem',
    paddingTop: '6rem',
  },
})

const Title = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$text',
  marginBottom: '2rem',
})

const FlexContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  flexWrap: 'row nowrap',

  '@<s': {
    flexFlow: 'column wrap',
  },
})

const FlexRowItem = styled('div', {
  display: 'column',
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  textAlign: 'left',
  px: '2%',
  boxSizing: 'border-box',
})

const FlexImg = styled('div', {
  width: '100%',
  marginTop: '2rem',
  maxWidth: '342px',

  '@<s': {
    mx: 'auto',
  },
})

const Feature = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '0.5rem',
  marginTop: '2rem',

  '@<s': {
    textAlign: 'center',
    width: '100%',
    mx: 'auto',
  },
})

const FeatureCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$textAlt',
  marginTop: '1rem',
  marginBottom: '2rem',

  '@<s': {
    textAlign: 'center',
    width: '100%',
    mx: 'auto',
  },
})

const TurnYourExpertiseIntoRevenue = () => (
  <OuterContainer>
    <InnerContainer>
      <Title>Turn your expertise into revenue</Title>
      <FlexContainer>
        <FlexRowItem>
          <FlexImg>
            <Image image={imageOne} alt="sell services online" />
          </FlexImg>
          <Feature>Sell your services online</Feature>
          <FeatureCopy>
            Checkouts make it easy to promote products and sell professional
            services online through any webpage, sales page, or pop-up.
          </FeatureCopy>
        </FlexRowItem>
        <FlexRowItem>
          <FlexImg>
            <Image image={imageTwo} alt="accept recurring payments" />
          </FlexImg>
          <Feature>Accept Recurring Payments</Feature>
          <FeatureCopy>
            Automatically bill clients for recurring services or subscriptions
            at set intervals and create a steady income stream for your
            business.
          </FeatureCopy>
        </FlexRowItem>
        <FlexRowItem>
          <FlexImg>
            <Image image={imageThree} alt="deliver digital products" />
          </FlexImg>
          <Feature>Deliver digital products</Feature>
          <FeatureCopy>
            With digital asset delivery, you can automatically sell and deliver
            everything from webinars and courses, to ebooks and albums.
          </FeatureCopy>
        </FlexRowItem>
      </FlexContainer>
    </InnerContainer>
  </OuterContainer>
)

export default TurnYourExpertiseIntoRevenue
