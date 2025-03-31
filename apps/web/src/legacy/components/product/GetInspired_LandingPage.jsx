import React from 'react'
import { styled } from '@design'
// components
import Image from '@components/Image'
import Link from 'next/link'
// images
import imageOne from '@legacy/assets/images/product/landing-page-builder/get-inspired-opt-in-pages.png'
import imageTwo from '@legacy/assets/images/product/landing-page-builder/get-inspired-sales-pages.png'
import imageThree from '@legacy/assets/images/product/landing-page-builder/get-inspired-checkout-pages.png'
import imageFour from '@legacy/assets/images/product/landing-page-builder/get-inspired-thank-you-pages.png'

const OuterContainer = styled('div', {})

const GIContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  p: '3rem',
  textAlign: 'center',

  '@>s': {
    px: '6rem',
  },
})

const GITitle = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$text',
  marginBottom: '2rem',
})

const GIHeadline = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginBottom: '1.25rem',
})

const GIFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '2%',
})

const FlexRowLeft = styled(FlexRowItem, {
  justifyContent: 'space-between',
  textAlign: 'left',

  '@>s': {
    flex: '0 0 80%',
    maxWidth: '80%',
  },

  '@media (min-width: 768px)': {
    flex: '0 0 44%',
    maxWidth: '44%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 37%',
    maxWidth: '37%',
  },
})

const FlexImg = styled('div', {
  width: '100%',
  marginTop: '2rem',
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',

  '@>s': {
    flex: '0 0 80%',
    maxWidth: '80%',
  },

  '@media (min-width: 768px)': {
    flex: '0 0 44%',
    maxWidth: '44%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 37%',
    maxWidth: '37%',
    textAlign: 'left',
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
})

const FeatureCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$textAlt',
  marginTop: '1rem',
  marginBottom: '2rem',
})

const GIButtonContainer = styled('div', {})

const GIButtonCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  color: '$primary',
})

const GIButton = styled('button', {
  width: '100%',
  maxWidth: '286px',
  height: '48px',
  borderRadius: '48px',
  border: '3px solid $colors$purpleLight',
  backgroundColor: '$white',
  fontFamily: 'Apercu Pro',

  '@>m': {
    maxWidth: '350px',
  },

  '&:hover': {
    backgroundColor: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $colors$primary',
  },

  [`&:hover ${GIButtonCopy}`]: {
    color: '$white',
  },
})

const GetInspired_LandingPage = () => (
  <OuterContainer>
    <GIContainer>
      <GITitle>Get inspired</GITitle>
      <GIHeadline>
        Put your landing pages to good use for your business.
      </GIHeadline>
      <GIFlexbox>
        <FlexRowLeft>
          <FlexImg>
            <Image
              image={imageOne}
              alt="Put your landing pages to good use for your business"
            />
          </FlexImg>
          <Feature>Opt-in pages</Feature>
          <FeatureCopy>
            Collect email subscribers, add them to your lists, and instantly
            deliver digital files with the Lead Magnet Delivery System.
          </FeatureCopy>
        </FlexRowLeft>
        <FlexRowRight>
          <FlexImg>
            <Image image={imageTwo} alt="Opt-in pages" />
          </FlexImg>
          <Feature>Thank-you pages & confirmation pages</Feature>
          <FeatureCopy>
            Reassure your audience of a successful sale or subscription with a
            follow-up page that perfectly matches the rest of your campaign.
          </FeatureCopy>
        </FlexRowRight>
      </GIFlexbox>
      <GIFlexbox>
        <FlexRowLeft>
          <FlexImg>
            <Image
              image={imageThree}
              alt="Thank-you pages & confirmation pages"
            />
          </FlexImg>
          <Feature>Sales pages</Feature>
          <FeatureCopy>
            Pitch your products and services with highly persuasive sales pages
            that overcome objections and drive towards conversion.
          </FeatureCopy>
        </FlexRowLeft>
        <FlexRowRight>
          <FlexImg>
            <Image image={imageFour} alt="Sales pages" />
          </FlexImg>
          <Feature>Checkout pages</Feature>
          <FeatureCopy>
            With built-in payment and ecommerce integrations, make sales and
            deliver digital products from any landing page, squeeze page, or
            pop-up opt-in form.
          </FeatureCopy>
        </FlexRowRight>
      </GIFlexbox>
      <GIButtonContainer>
        <Link href="/templates">
          <GIButton>
            <GIButtonCopy>See All Landing Page Templates</GIButtonCopy>
          </GIButton>
        </Link>
      </GIButtonContainer>
    </GIContainer>
  </OuterContainer>
)

export default GetInspired_LandingPage
