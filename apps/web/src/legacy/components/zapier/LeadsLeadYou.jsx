import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
import Script from 'next/script'
// images
import backgroundImage from '@legacy/assets/images/totems/where-will-leads-636px@2x.png'

const OuterContainer = styled('div', {
  position: 'relative',
  py: '6rem',
})

const FlexRow = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
})

const InnerContainer = styled(FlexRow, {
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

const TextContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 70%',
    maxWidth: '70%',
  },
})

const HeadingContainer = styled(FlexRowItem6, {
  marginTop: '4rem',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const CopyContainer = styled(FlexRowItem6, {
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

const ImageContainer = styled(FlexRowItem6, {
  alignSelf: 'flex-end',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 30%',
    maxWidth: '30%',
  },
})

const Heading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',
  color: '$text',
  marginBottom: '2rem',
})

const TransformCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginTop: '2rem',
  marginBottom: '4rem',
})

const BackgroundContainer = styled('div', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: -1,
  width: '100%',

  '@<m': {
    display: 'none',
  },
})

const BackgroundImage = styled(Image, {
  marginRight: 0,
  marginLeft: 'auto',
  overflowX: 'hidden',
  width: '30%',
  maxWidth: '30%',
})

const ZapierEmbed = styled('div', {
  marginBottom: '6rem',
})

const LeadsLeadYou = () => (
  <OuterContainer>
    <BackgroundContainer>
      <BackgroundImage image={backgroundImage} alt="a background image" />
    </BackgroundContainer>
    <InnerContainer>
      <TextContainer>
        <HeadingContainer>
          <Heading>Where will your leads lead you?</Heading>
          <TransformCopy>
            With Leadpages’ Zapier integration, whenever your landing page
            receives a form submission, Zapier shuttles that data to any app you
            choose. Use one of these popular zaps and make manual entry a thing
            of the past.
          </TransformCopy>
        </HeadingContainer>
        <ZapierEmbed id="zap-container">
          <Script src="https://zapier.com/zapbook/embed/widget.js?services=leadpages&container=true&html_id=zap-container&limit=3" />
        </ZapierEmbed>
        <CopyContainer />
      </TextContainer>
      <ImageContainer />
    </InnerContainer>
  </OuterContainer>
)

export default LeadsLeadYou
