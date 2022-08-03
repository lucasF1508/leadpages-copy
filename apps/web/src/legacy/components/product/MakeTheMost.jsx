import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import image1 from '@legacy/assets/images/product/alert-bars/all-web-properties-614px@2x.png'
import webBkgSVG from '@legacy/assets/images/shapes/rounded-square-lavender.svg'

const MainContainer = styled('div', {
  marginTop: '6rem',
})

const InnerContainer = styled('div', {
  position: 'relative',
})

const FlexRow = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
})

const WebPropertiesOuterContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  marginTop: '3rem',
})

const WebPropertiesContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  px: '3rem',

  '@>m': {
    px: '6rem',
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

  '@>s': {
    flex: '0 0 46%',
    maxWidth: '46%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const WebPropertiesTextContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const WebPropertiesHeadingContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const WebPropertiesSectionContainer = styled(FlexRowItem6, {
  display: 'flex',
  flexWrap: 'wrap',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const ConversionImageContainer = styled(FlexRowItem6, {
  alignSelf: 'flex-end',

  '@<s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    flex: '0 0 80%',
    maxWidth: '80%',
    mx: 'auto',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const WPSectionHeading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '2rem',
})

const WPSectionCopy = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '4rem',
})

const LeftHeading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  color: '$text',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const WebPropertiesCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginBottom: '4rem',
})

const BackgroundImage = styled('img', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: -1,
  overflowX: 'hidden',

  '@media (max-width: 768px)': {
    maxWidth: '80%',
  },
})

const MakeTheMost = () => (
  <MainContainer>
    <InnerContainer>
      <BackgroundImage src={webBkgSVG.src} alt="background svg" />
      <WebPropertiesOuterContainer>
        <WebPropertiesContainer>
          <WebPropertiesTextContainer>
            <WebPropertiesHeadingContainer>
              <LeftHeading>
                Make the most of all your web properties
              </LeftHeading>
              <WebPropertiesCopy>
                Leadpages is much more than a landing page software; you’ll
                access a versatile conversion toolkit.
              </WebPropertiesCopy>
            </WebPropertiesHeadingContainer>
            <WebPropertiesSectionContainer>
              <WPSectionHeading>Capture leads anywhere</WPSectionHeading>
              <WPSectionCopy>
                More than 90% of your web traffic isn’t ready to buy when they
                visit your website for the first time. Make the most of your
                hard-won traffic by varying the message, volume, and placement
                of your promotions across all the web properties you own. Less
                intrusive than a pop-up and more prominent than on-page text,
                alert bars (sometimes called sticky bars or sticky headers) are
                an attention-grabbing way to increase your conversions.
              </WPSectionCopy>
            </WebPropertiesSectionContainer>
          </WebPropertiesTextContainer>
          <ConversionImageContainer>
            <Image image={image1} alt="Capture leads anywhere" />
          </ConversionImageContainer>
        </WebPropertiesContainer>
      </WebPropertiesOuterContainer>
    </InnerContainer>
  </MainContainer>
)

export default MakeTheMost
