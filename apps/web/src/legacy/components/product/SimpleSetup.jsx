import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/alert-bars/simple-setup_select-layout-416px@2x.png'
import imageTwo from '@legacy/assets/images/product/alert-bars/simple-setup_customize-416px@2x.png'
import imageThree from '@legacy/assets/images/product/alert-bars/simple-setup_connect-integrations-360px@2x.png'
import imageFour from '@legacy/assets/images/product/alert-bars/simple-setup_Publish-395px@2x.png'
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'

const OuterContainer = styled('div', {
  textAlign: 'center',
  backgroundColor: '$grayAlt',
  py: '3rem',

  '@>s': {
    py: '6rem',
  },
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
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
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  paddingTop: '1rem',
  paddingBottom: '3rem',
  px: '3rem',
})

const ReverseFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  paddingTop: '1rem',
  paddingBottom: '3rem',
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

  '@>s': {
    flex: '0 0 41.66%',
    maxWidth: '41.66%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const FlexImg = styled('div', {
  width: '100%',
  maxWidth: '412px',
})

const FeatureContainer = styled('div', {
  position: 'relative',
  marginTop: '2rem',

  '@media (min-width: 993px)': {
    my: 'auto',
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

const SimpleSetup = () => (
  <OuterContainer>
    <InnerContainer>
      <Title>Simple setup</Title>
      <ReverseFlexbox>
        <FlexRow1 />
        <FlexRow4>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>Select a layout</Feature>
            <FeatureCopy>
              Start with a pre-designed, mobile-responsive layout that can
              remain sticky to the top of your website (for desktop) or the
              bottom (for desktop and mobile users).
            </FeatureCopy>
          </FeatureContainer>
        </FlexRow4>
        <FlexRow1 />
        <FlexRow5>
          <FlexImg>
            <Image image={imageOne} alt="Select a layout" />
          </FlexImg>
        </FlexRow5>
      </ReverseFlexbox>
      <Flexbox>
        <FlexRow1 />
        <FlexRow1 />
        <FlexRow4>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>Customize your content</Feature>
            <FeatureCopy>
              Change the color of your bar, edit the text, include a hyperlink,
              opt-in form, or CTA button.
            </FeatureCopy>
          </FeatureContainer>
        </FlexRow4>
        <FlexRow1 />
        <FlexRow5>
          <FlexImg>
            <Image image={imageTwo} alt="Customize your content" />
          </FlexImg>
        </FlexRow5>
      </Flexbox>
      <ReverseFlexbox>
        <FlexRow1 />
        <FlexRow4>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>Connect your email service provider (ESP)</Feature>
            <FeatureCopy>
              Automatically route your new subscribers directly to your email
              list or segment within your preferred email app.
            </FeatureCopy>
          </FeatureContainer>
        </FlexRow4>
        <FlexRow1 />
        <FlexRow5>
          <FlexImg>
            <Image
              image={imageThree}
              alt="Connect your email service provider (ESP)"
            />
          </FlexImg>
        </FlexRow5>
      </ReverseFlexbox>
      <Flexbox>
        <FlexRow1 />
        <FlexRow1 />
        <FlexRow4>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>Publish</Feature>
            <FeatureCopy>
              Easily publish your alert bar on any landing page or website by
              copying and pasting a snippet of code.
            </FeatureCopy>
          </FeatureContainer>
        </FlexRow4>
        <FlexRow1 />
        <FlexRow5>
          <FlexImg>
            <Image image={imageFour} alt="Easily publish your alert bar" />
          </FlexImg>
        </FlexRow5>
      </Flexbox>
    </InnerContainer>
  </OuterContainer>
)

export default SimpleSetup
