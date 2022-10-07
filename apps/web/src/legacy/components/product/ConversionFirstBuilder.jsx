import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/website-builder/conversion-toolkit_Leadpages-464px@2x.png'
import imageTwo from '@legacy/assets/images/product/website-builder/fast-load-speeds_Leadpages-416px@2x.png'
import imageThree from '@legacy/assets/images/product/website-builder/mobile-responsive-website-design_Leadpages-356px@2x.png'
import imageFour from '@legacy/assets/images/product/website-builder/site-analytics-dashboard_Leadpages-464px@2x.png'
import imageFive from '@legacy/assets/images/product/website-builder/built-in-SEO_Leadpages-Sites_317px@2x.png'
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'
import bgSVG from '@legacy/assets/images/shapes/bounce-line-gray-thin.svg'

const OuterContainer = styled('div', {
  textAlign: 'center',
  py: '6rem',
  position: 'relative',
  overflowX: 'hidden',
})

const Title = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$text',
  marginBottom: '2rem',
  px: '3rem',
})

const Flexbox = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  py: '1rem',
  px: '3rem',
})

const ReverseFlexbox = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  py: '1rem',
  px: '3rem',

  '@>s': {
    flexDirection: 'row-reverse',
  },
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
})

const FlexRow1 = styled(FlexRowItem, {
  '@>s': {
    flex: '0 0 8.33%',
    maxWidth: '8.33%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const FlexRow4 = styled(FlexRowItem, {
  textAlign: 'left',
  position: 'relative',

  '@>s': {
    flex: '0 0 33.33%',
    maxWidth: '33.33%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const FlexRow5 = styled(FlexRowItem, {
  textAlign: 'left',
  position: 'relative',

  '@>s': {
    flex: '0 0 41.66%',
    maxWidth: '41.66%',
  },

  '@media (min-width: 992px)': {
    marginBottom: 0,
  },
})

const FlexImg = styled('div', {
  width: '100%',
})

const FeatureTextContainer = styled('div', {
  '@<m': {
    marginTop: '2rem',
    position: 'relative',
  },

  '@media (min-width: 993px)': {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
})

const FeatureContainer = styled('div', {
  position: 'relative',
})

const Feature = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '0.5rem',
  marginTop: '2rem',
  display: 'block',
  paddingLeft: '24px',
})

const FeatureCopy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$textAlt',
  marginTop: '1rem',
  marginBottom: '2rem',
})

const SVG = styled('img', {
  position: 'absolute',
  top: '3px',
  display: 'inline',
})

const AsteriskText = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$textAlt',
  textAlign: 'center',
  marginTop: '3rem',
  mx: 'auto',
  width: '85%',
})

const BGImage = styled('img', {
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: '$under',
  height: '100%',
})

const ConversionFirstBuilder = () => (
  <OuterContainer>
    <BGImage src={bgSVG.src} alt="background svg" />
    <Title>Experience the world’s first conversion-first website builder</Title>
    <ReverseFlexbox>
      <FlexRow5>
        <FeatureTextContainer>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>Complete conversion toolkit</Feature>
          </FeatureContainer>
          <FeatureCopy>
            Easily add opt-in forms, pop-ups, and alert bars to any page of your
            site, without leaving the Leadpages platform.
          </FeatureCopy>
        </FeatureTextContainer>
      </FlexRow5>
      <FlexRow1 />
      <FlexRow5>
        <FlexImg>
          <Image image={imageOne} alt="drag and drop builder" />
        </FlexImg>
      </FlexRow5>
    </ReverseFlexbox>
    <Flexbox>
      <FlexRow1 />
      <FlexRow1 />
      <FlexRow4>
        <FeatureTextContainer>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>Lightning-fast load speeds</Feature>
          </FeatureContainer>
          <FeatureCopy>
            Don’t let slow-loading web pages cost you conversions. Leadpages
            sites load 2.4 seconds faster and have a performance score 30%
            higher*.
          </FeatureCopy>
        </FeatureTextContainer>
      </FlexRow4>
      <FlexRow1 />
      <FlexRow5>
        <FlexImg>
          <Image image={imageTwo} alt="connect your email service provider" />
        </FlexImg>
      </FlexRow5>
    </Flexbox>
    <ReverseFlexbox>
      <FlexRow5>
        <FeatureTextContainer>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>100% Mobile-responsive design</Feature>
          </FeatureContainer>
          <FeatureCopy>
            All Leadpages sites are fully mobile-responsive and designed for
            optimal user experience on any device or screen size.
          </FeatureCopy>
        </FeatureTextContainer>
      </FlexRow5>
      <FlexRow1 />
      <FlexRow5>
        <FlexImg>
          <Image image={imageThree} alt="drag and drop builder" />
        </FlexImg>
      </FlexRow5>
    </ReverseFlexbox>
    <Flexbox>
      <FlexRow1 />
      <FlexRow1 />
      <FlexRow4>
        <FeatureTextContainer>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>Streamlined analytics dashboard</Feature>
          </FeatureContainer>
          <FeatureCopy>
            Check up on your site’s performance right inside the Leadpages
            dashboard or use third-party analytics or tracking code.
          </FeatureCopy>
        </FeatureTextContainer>
      </FlexRow4>
      <FlexRow1 />
      <FlexRow5>
        <FlexImg>
          <Image image={imageFour} alt="connect your email service provider" />
        </FlexImg>
      </FlexRow5>
    </Flexbox>
    <ReverseFlexbox>
      <FlexRow5>
        <FeatureTextContainer>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>Built-in SEO</Feature>
          </FeatureContainer>
          <FeatureCopy>
            Help your site rise to the top of search engine results with
            built-in SEO settings for meta descriptions and image optimizations.
          </FeatureCopy>
        </FeatureTextContainer>
      </FlexRow5>
      <FlexRow1 />
      <FlexRow5>
        <FlexImg>
          <Image image={imageFive} alt="drag and drop builder" />
        </FlexImg>
      </FlexRow5>
    </ReverseFlexbox>
    <AsteriskText>
      *Based on Google Lighthouse comparative audit of five leading landing page
      builders, rendering two distinct pages on both mobile and desktop on an
      applied fast 3G network.
    </AsteriskText>
  </OuterContainer>
)

export default ConversionFirstBuilder
