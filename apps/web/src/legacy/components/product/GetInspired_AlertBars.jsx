import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/alert-bars/inspiration-optin-alert-bar-720px@2x.png'
import imageTwo from '@legacy/assets/images/product/alert-bars/inspiration-link-landing-page-alert-bar-720px@2x.png'
import imageThree from '@legacy/assets/images/product/alert-bars/inspiration-blog-subscribe-alert-bar-720px@2x.png'
import imageFour from '@legacy/assets/images/product/alert-bars/inspiration-promote-sale-alert-bar-720px@2x.jpg'

const OuterContainer = styled('div', {})

const GIContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  py: '3rem',
  px: '3rem',
  textAlign: 'center',

  '@<s': {
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
  justifyContent: 'space-between',
  marginBottom: '2rem',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
})

const FlexRowLeft = styled(FlexRowItem, {
  justifyContent: 'space-between',
  textAlign: 'left',

  '@media (max-width: 767px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 768px)': {
    flex: '0 0 58%',
    maxWidth: '58%',
  },

  '@>m': {
    marginBottom: '0rem',
    flex: '0 0 64%',
    maxWidth: '64%',
  },
})

const FlexImg = styled('div', {
  width: '100%',
  marginTop: '2rem',
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',

  '@media (max-width: 767px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 768px)': {
    flex: '0 0 35%',
    maxWidth: '35%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    flex: '0 0 26%',
    maxWidth: '26%',
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

const GetInspired_AlertBars = () => (
  <OuterContainer>
    <GIContainer>
      <GITitle>Get inspired</GITitle>
      <GIHeadline>
        Put your alert bars to good use for your business.
      </GIHeadline>
      <GIFlexbox>
        <FlexRowLeft>
          <FlexImg>
            <Image image={imageOne} alt="get inspired" />
          </FlexImg>
        </FlexRowLeft>
        <FlexRowRight>
          <Feature>Create an opt-in opportunity</Feature>
          <FeatureCopy>
            Have a hot lead magnet? Highlight it in your bar! Include a simple
            opt-in form and CTA button to boost conversions and reduce bounce
            rates.
          </FeatureCopy>
        </FlexRowRight>
      </GIFlexbox>
      <GIFlexbox>
        <FlexRowLeft>
          <FlexImg>
            <Image image={imageTwo} alt="create an opt-in opportunity" />
          </FlexImg>
        </FlexRowLeft>
        <FlexRowRight>
          <Feature>Capture attention & drive traffic to a landing page</Feature>
          <FeatureCopy>
            Whether you’re announcing a discount sale or sending traffic to a
            freshly published blog post, a banner will get the headlines across
            without hindering a user’s experience.
          </FeatureCopy>
        </FlexRowRight>
      </GIFlexbox>
      <GIFlexbox>
        <FlexRowLeft>
          <FlexImg>
            <Image
              image={imageThree}
              alt="Capture attention & drive traffic to a landing page"
            />
          </FlexImg>
        </FlexRowLeft>
        <FlexRowRight>
          <Feature>Convert blog readers into leads</Feature>
          <FeatureCopy>
            Let your blog article be the center of attention while also
            promoting your newsletter or blog feed subscription in a
            non-intrusive opt-in bar.
          </FeatureCopy>
        </FlexRowRight>
      </GIFlexbox>
      <GIFlexbox>
        <FlexRowLeft>
          <FlexImg>
            <Image image={imageFour} alt="Convert blog readers into leads" />
          </FlexImg>
        </FlexRowLeft>
        <FlexRowRight>
          <Feature>Promote a sale or offer</Feature>
          <FeatureCopy>
            Put the spotlight on your discount sale, coupon code, or
            limited-time offer by showcasing it in your alert bar.
          </FeatureCopy>
        </FlexRowRight>
      </GIFlexbox>
    </GIContainer>
  </OuterContainer>
)

export default GetInspired_AlertBars
