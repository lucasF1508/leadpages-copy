import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/leadmeter/make-the-most_Foreground@2x.png'
import bkgSVG from '@legacy/assets/images/shapes/arch-tan.svg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const Headline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  marginBottom: '2rem',
  color: '$text',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
})

const InnerContainer = styled(FlexRow, {
  flexWrap: 'wrap',
  marginTop: '3rem',
})

const BodyContainer = styled(FlexRow, {
  maxWidth: '1140px',
  mx: 'auto',
  flexWrap: 'wrap',
  px: '3rem',

  '@media (min-width: 576px)': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },

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
  marginBottom: '2rem',

  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 46%',
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const TextContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: '0',
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const HeadingContainer = styled(FlexRowItem6, {
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
  marginBottom: '0rem',

  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 577px) and (max-width: 993px)': {
    maxWidth: '80%',
    mx: 'auto',
  },

  '@>m': {
    flex: '0 0 46%',
    maxWidth: '46%',
  },
})

const SmallerCopy = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '1rem',
})

const Copy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginBottom: '2rem',
})

const SVGRightContainer = styled('img', {
  position: 'absolute',
  right: 0,
  bottom: 0,
  zIndex: -1,
  overflowX: 'hidden',
  maxWidth: '40%',
  maxHeight: '120%',

  '@<m': {
    maxWidth: '70%',
  },
})

const LeadmeterMakeTheMost = () => (
  <OuterContainer>
    <SVGRightContainer
      src={bkgSVG.src}
      alt="transform your web traffic into business growth"
    />

    <InnerContainer>
      <BodyContainer>
        <TextContainer>
          <HeadingContainer>
            <Headline>
              Make the most of every marketing dollar you spend
            </Headline>
            <Copy>
              Confidently send your paid traffic to a rigorously
              conversion-optimized landing page
            </Copy>
            <SmallerCopy>
              Leadmeter lets you get it right the first time: carefully
              optimizing your page content to deliver the best possible results.
              Whether you're running digital ads or drumming up organic traffic,
              you can be confident that your page will perform at its peak.
            </SmallerCopy>
          </HeadingContainer>
        </TextContainer>
        <ConversionImageContainer>
          <Image image={imageOne} alt="A/B split testing" />
        </ConversionImageContainer>
      </BodyContainer>
    </InnerContainer>
  </OuterContainer>
)

export default LeadmeterMakeTheMost
