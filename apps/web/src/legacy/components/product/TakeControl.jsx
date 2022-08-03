import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import imageOne from '@legacy/assets/images/product/landing-page-builder/take-control-diy-foreground.png'
import TakeControlbkgSVG from '@legacy/assets/images/shapes/wedge-lavender.svg'

const TakeControlOuterContainer = styled('div', {
  position: 'relative',
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
})

const TakeControlInnerContainer = styled(FlexRow, {
  maxWidth: '1140px',
  mx: 'auto',
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

  '@media (min-width: 992px)': {
    marginBottom: 0,
  },
})

const TakeControlTextContainer = styled(FlexRowItem6, {
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

const TakeControlHeadingContainer = styled(FlexRowItem6, {
  '@>s': {
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@>m': {
    marginBottom: 0,
  },
})

const TakeControlCopyContainer = styled(FlexRowItem6, {
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

const TakeControlImageContainer = styled(FlexRowItem6, {
  alignSelf: 'flex-end',

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

const FlexRowItem6Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1.25rem',
  color: '$text',
})

const FlexRowItem6Copy = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '3rem',
})

const TakeControlHeading = styled('div', {
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

const TakeControl = () => (
  <TakeControlOuterContainer>
    <BackgroundImage src={TakeControlbkgSVG.src} alt="background svg" />
    <TakeControlInnerContainer>
      <TakeControlTextContainer>
        <TakeControlHeadingContainer>
          <TakeControlHeading>
            Take control of your marketing with drag-and-drop landing pages you
            can easily DIY
          </TakeControlHeading>
          <TransformCopy>
            Forget the time and expense of hiring a web designer&mdash;our
            landing page creator is the only partner you need.
          </TransformCopy>
        </TakeControlHeadingContainer>
        <TakeControlCopyContainer>
          <FlexRowItem6>
            <FlexRowItem6Heading>
              Code-free drag-and-drop customizations
            </FlexRowItem6Heading>
            <FlexRowItem6Copy>
              Quickly and easily craft professional-looking landing pages
              without the need to hire outside help.
            </FlexRowItem6Copy>
          </FlexRowItem6>
          <FlexRowItem6>
            <FlexRowItem6Heading>
              Mobile-responsive, high-converting templates
            </FlexRowItem6Heading>
            <FlexRowItem6Copy>
              Get a head-start with a gallery of more than 200 professionally
              designed templates that take the guess work out of the creative
              process.
            </FlexRowItem6Copy>
          </FlexRowItem6>
          <FlexRowItem6>
            <FlexRowItem6Heading>
              Features & functionality to fit any need
            </FlexRowItem6Heading>
            <FlexRowItem6Copy>
              Add a countdown timer, video player, Calendly schedule, OpenTable
              reservation widget, and more within the Drag & Drop Builder.
            </FlexRowItem6Copy>
          </FlexRowItem6>
        </TakeControlCopyContainer>
      </TakeControlTextContainer>
      <TakeControlImageContainer>
        <Image
          image={imageOne}
          alt="Features & functionality to fit any need"
        />
      </TakeControlImageContainer>
    </TakeControlInnerContainer>
  </TakeControlOuterContainer>
)

export default TakeControl
