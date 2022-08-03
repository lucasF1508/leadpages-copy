import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/landing-page-builder/powerful-features_conversion-guidance.png'
import imageTwo from '@legacy/assets/images/product/landing-page-builder/powerful-features_lead-collection-traffic.png'
import imageThree from '@legacy/assets/images/product/landing-page-builder/powerful-features_unlimited-page-publishing.png'
import imageFour from '@legacy/assets/images/product/landing-page-builder/powerful-features_page-load-speed.png'

const OuterContainer = styled('div', {
  position: 'relative',
})

const PFContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '6rem',
  paddingBottom: '10rem',
  px: '3rem',
  textAlign: 'center',

  '@>s': {
    px: '6rem',
    paddingTop: '10rem',
  },
})

const PFTitle = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$text',
  marginBottom: '2rem',
})

const PFHeadline = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  paddingBottom: '4rem',
})

const PFFlexbox = styled('div', {
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
  textAlign: 'left',

  '@>s': {
    flex: '0 0 37%',
    maxWidth: '37%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const FlexImg = styled('div', {
  width: '100%',
  marginTop: '2rem',
  maxWidth: '342px',
})

const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',

  '@>s': {
    flex: '0 0 37%',
    maxWidth: '37%',
  },

  '@>m': {
    marginBottom: 0,
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

const PowerfulFeatures = () => (
  <OuterContainer>
    <PFContainer>
      <PFTitle>Powerful features you’ll only find at Leadpages</PFTitle>
      <PFHeadline>
        As one of the first landing page builders, we pioneered the conversion
        conversation. And we’re still leading the way.
      </PFHeadline>
      <PFFlexbox>
        <FlexRowLeft>
          <FlexImg>
            <Image image={imageOne} alt="powerful features" />
          </FlexImg>
          <Feature>Built-in conversion guidance</Feature>
          <FeatureCopy>
            Our exclusive technology predicts your page’s performance before you
            publish it and tells you what to tweak’so you can guess less and
            grow more.
          </FeatureCopy>
        </FlexRowLeft>
        <FlexRowRight>
          <FlexImg>
            <Image image={imageTwo} alt="conversion guidance" />
          </FlexImg>
          <Feature>Unlimited lead collection & traffic</Feature>
          <FeatureCopy>
            Unlike the other guys, we’ll never charge you more for your
            success—that means no limits on web visitors or lead
            collection.&nbsp;
          </FeatureCopy>
        </FlexRowRight>
      </PFFlexbox>
      <PFFlexbox>
        <FlexRowLeft>
          <FlexImg>
            <Image image={imageThree} alt="unlimited lead collection" />
          </FlexImg>
          <Feature>Unlimited page publishing</Feature>
          <FeatureCopy>
            Create dedicated landing pages for each and every traffic source or
            campaign without fear of dreaded publishing limits or “bandwidth
            exceeded” error messages.
          </FeatureCopy>
        </FlexRowLeft>
        <FlexRowRight>
          <FlexImg>
            <Image image={imageFour} alt="unlimited page publishing" />
          </FlexImg>
          <Feature>Unparalleled page load speed</Feature>
          <FeatureCopy>
            Our pages load 2.4 seconds faster and have a performance score 30%
            higher than other leading page builders, which helps you win more
            conversions, customers, sales, and a higher PPC ad quality score.
          </FeatureCopy>
        </FlexRowRight>
      </PFFlexbox>
    </PFContainer>
  </OuterContainer>
)

export default PowerfulFeatures
