import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/website-builder/publishing-option_1-and-1-Ionos_160px@2x.jpg'
import imageTwo from '@legacy/assets/images/product/website-builder/publishing-option_Go-daddy_160px@2x.jpg'
import imageThree from '@legacy/assets/images/product/website-builder/publishing-option_Google-Domains_160px@2x.jpg'
import imageFour from '@legacy/assets/images/product/website-builder/publishing-option_Domain-com_160px@2x.jpg'
import imageFive from '@legacy/assets/images/product/website-builder/publishing-option_Leadpages-domain_160px@2x.jpg'
import imageSix from '@legacy/assets/images/product/website-builder/publishing-option_bluehost_160px@2x.jpg'
import imageSeven from '@legacy/assets/images/product/website-builder/publishing-option_DNS-made-easy_160px@2x.jpg'
import imageEight from '@legacy/assets/images/product/website-builder/publishing-option_namecheap_160px@2x.jpg'
import imageNine from '@legacy/assets/images/product/website-builder/publishing-option_Host-gator_160px@2x.jpg'

const STContainer = styled('div', {
  paddingTop: '6rem',
  paddingBottom: '6rem',
  px: '6rem',
  backgroundColor: '$primary',

  '@>s': {
    paddingTop: '10rem',
  },

  '@media (max-width: 768px)': {
    px: '2.5rem',
  },
})

const FlexRow = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
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
  textAlign: 'left',
  alignSelf: 'center',

  '@media (max-width: 900px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    flex: '0 0 40.6666%',
    maxWidth: '40.6666%',
  },
})
const HeaderImgLeft = styled('div', {
  width: '100%',
})

const LeftContainer = styled('div', {})

const FlexRowRight = styled(FlexRowItem, {
  alignSelf: 'center',

  '@media (max-width: 900px)': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    flex: '0 0 49%',
    maxWidth: '49%',
  },
})

const LeftHeading = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  lineHeight: '36px',
  letterSpacing: '-0.1px',
  color: '$white',
  marginBottom: '2rem',
})

const LeftSubHeading = styled('div', {
  color: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '28px',
  marginBottom: '2rem',
})

const StyledImage = styled(Image, {
  width: '100%',
  height: '100%',
  maxHeight: '84px',
  maxWidth: '160px',
  margin: '3%',
  flex: '0 0 27%',
})

const FlexContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
})

const PublishingOptionsGrid = () => (
  <STContainer>
    <FlexRow>
      <FlexRowLeft>
        <LeftContainer>
          <LeftHeading>
            Flexible publishing options to fit your needs
          </LeftHeading>
          <LeftSubHeading>
            Publish your site to your free Leadpages domain (hosted on our
            servers) or connect a third-party domain of your choice. All annual
            Leadpages subscriptions also include a voucher for free domain
            registration for one year, so you can get online faster than ever
            before.
          </LeftSubHeading>
        </LeftContainer>
      </FlexRowLeft>
      <FlexRowRight>
        <HeaderImgLeft>
          <FlexContainer>
            <StyledImage image={imageOne} alt="ionos logo" />
            <StyledImage image={imageTwo} alt="godaddy logo" />
            <StyledImage image={imageThree} alt="google domains logo" />
            <StyledImage image={imageFour} alt="domain.com logo" />
            <StyledImage image={imageFive} alt="leadpages logo" />
            <StyledImage image={imageSix} alt="bluehost logo" />
            <StyledImage image={imageSeven} alt="dns made easy logo" />
            <StyledImage image={imageEight} alt="namecheap logo" />
            <StyledImage image={imageNine} alt="hostgator logo" />
          </FlexContainer>
        </HeaderImgLeft>
      </FlexRowRight>
    </FlexRow>
  </STContainer>
)

export default PublishingOptionsGrid
