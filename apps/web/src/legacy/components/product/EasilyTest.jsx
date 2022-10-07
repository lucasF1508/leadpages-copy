import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/landing-page-builder/AB-testing_a-b-testLandingPages-1055px@2x.png'
import skillbkgSVG from '@legacy/assets/images/shapes/semicircle-sand.svg'

const ETContainer = styled('div', {})

const CopyContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '6rem',
  paddingBottom: '3rem',
  px: '3rem',
  textAlign: 'center',

  '@>s': {
    px: '6rem',
    paddingTop: '10rem',
  },
})

const ETTitle = styled('div', {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  opacity: 0.5,
  color: '$text',
  marginBottom: '2rem',
})

const ETHeadline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  marginBottom: '2rem',
  px: '15%',
})

const ETCaption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$textAlt',
  marginBottom: '1.25rem',
  px: '15%',
})

const ImgContainer = styled('div', {
  position: 'relative',
})

const FrontImage = styled(Image, {
  width: '80%',
  maxWidth: '1055px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const BGImage = styled('img', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: '$under',
})

const EasilyTest = () => (
  <ETContainer>
    <CopyContainer>
      <ETTitle>Unlimited A/B Split Testing</ETTitle>
      <ETHeadline>
        Easily test your pages to find out what works best for your audience
        (and do more of it!)
      </ETHeadline>
      <ETCaption>
        Optimize your pages for conversions by running A/B split tests on any
        landing page.
      </ETCaption>
    </CopyContainer>
    <ImgContainer>
      <BGImage src={skillbkgSVG.src} alt="background svg" />
      <FrontImage image={imageOne} alt="Unlimited A/B Split Testing" />
    </ImgContainer>
  </ETContainer>
)

export default EasilyTest
