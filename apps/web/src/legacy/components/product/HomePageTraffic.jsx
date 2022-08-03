import React from 'react'
import { styled } from '@design'
// images
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'
import bgSVG from '@legacy/assets/images/shapes/bounce-line-gray-thick.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$grayAlt',
})

const HPTContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  py: '6rem',
  px: '3rem',
  textAlign: 'center',

  '@>s': {
    px: '6rem',
  },
})

const TextContainer = styled('div', {
  position: 'relative',
  zIndex: 2,
})

const BGImage = styled('img', {
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 1,
  height: '100%',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

const HPTTitle = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '22px',
  lineHeight: '32px',
  color: '$text',
  fontWeight: 500,
  marginBottom: '2rem',
})

const HPTCaption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginBottom: '1.25rem',
})

const HPTFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '3%',
})

const FlexRowLeft = styled(FlexRowItem, {
  justifyContent: 'space-between',
  textAlign: 'left',
  flex: '0 0 33%',
  maxWidth: '33%',

  '@media (max-width: 768px)': {
    flex: '0 0 80%',
    maxWidth: '80%',
  },
})
const FlexRowRight = styled(FlexRowItem, {
  textAlign: 'left',
  alignSelf: 'center',
  flex: '0 0 33%',
  maxWidth: '33%',

  '@media (max-width: 768px)': {
    flex: '0 0 80%',
    maxWidth: '80%',
  },
})

const FeaturesContainer = styled('div', {
  my: '2rem',
})

const FeatureContainer = styled('div', {
  position: 'relative',
  marginBottom: '0.5rem',
  display: 'block',
})

const Feature = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '2rem',
  display: 'inline-block',
  paddingLeft: '32px',

  '@media (max-width: 768px)': {
    paddingLeft: '24px',
  },
})

const FeatureCopy = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
})

const SVG = styled('img', {
  position: 'absolute',
  top: '3px',
  display: 'inline-block',
})

const HomePageTraffic = () => (
  <OuterContainer>
    <BGImage src={bgSVG.src} alt="background svg" />
    <HPTContainer>
      <TextContainer>
        <HPTTitle>
          Still sending traffic to your home page and hoping for the best?
        </HPTTitle>
        <HPTCaption>Stop it. Right now.</HPTCaption>
        <HPTFlexbox>
          <FlexRowLeft>
            <FeaturesContainer>
              <FeatureContainer>
                <SVG src={checkSVG.src} alt="check mark svg" />
                <Feature>Make the most of your advertising budget</Feature>
                <FeatureCopy>
                  Match any ad and every campaign to a relevant landing page
                  that is uniquely designed for a specific target audience.
                  Forget ‘one-size-fits all’ and customize your content for each
                  audience for maximum persuasive impact.
                </FeatureCopy>
              </FeatureContainer>
            </FeaturesContainer>
          </FlexRowLeft>
          <FlexRowRight>
            <FeaturesContainer>
              <FeatureContainer>
                <SVG src={checkSVG.src} alt="check mark svg" />
                <Feature>Grow your email list 2x faster</Feature>
                <FeatureCopy>
                  Why use a landing page builder? Small businesses that publish
                  at least 10 landing pages are able to grow their email
                  subscriber leads twice as fast. Quickly customize and publish
                  high-converting pages and give your audience an abundance of
                  opt-in opportunities.&nbsp;
                </FeatureCopy>
              </FeatureContainer>
            </FeaturesContainer>
          </FlexRowRight>
        </HPTFlexbox>
      </TextContainer>
    </HPTContainer>
  </OuterContainer>
)

export default HomePageTraffic
