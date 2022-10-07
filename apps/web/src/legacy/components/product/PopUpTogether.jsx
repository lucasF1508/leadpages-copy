import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/pop-up-builder/customize-content-479px@2x.png'
import imageTwo from '@legacy/assets/images/product/pop-up-builder/connect-integrations-359px@2x.png'
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'

const OuterContainer = styled('div', {
  textAlign: 'center',
  backgroundColor: '$grayAlt',
  py: '6rem',
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

  '@>m': {
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

const PopUpTogether = () => (
  <OuterContainer>
    <Title>Put your pop-up together in a matter of minutes</Title>
    <ReverseFlexbox>
      <FlexRow5>
        <FeatureTextContainer>
          <FeatureContainer>
            <SVG src={checkSVG.src} alt="check mark svg" />
            <Feature>Customize your content</Feature>
          </FeatureContainer>
          <FeatureCopy>
            Create a beautifully designed opt-in form by dragging and dropping
            text elements, images, buttons, and forms within the Drag & Drop
            Builder.
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
            <Feature>Connect your email service provider (ESP)</Feature>
          </FeatureContainer>
          <FeatureCopy>
            Route your new subscribers directly to your chosen email list by
            connecting your form to your email app.
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
  </OuterContainer>
)

export default PopUpTogether
