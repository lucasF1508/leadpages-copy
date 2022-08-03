import React from 'react'
import { styled } from '@design'
// images
import rightbkgSVG from '@legacy/assets/images/shapes/bounce-tan.svg'

const NLContainer = styled('div', {
  position: 'relative',
})

const FlexBoxContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  textAlign: 'left',
  py: '3rem',
  px: '3rem',

  '@>m': {
    px: '12rem',
  },
})

const NLHeadline = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '1.375rem',
  fontWeight: 500,
  lineHeight: '2rem',
  marginBottom: '2rem',
  color: '$text',

  '@<s': {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
})

const NLCaption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  marginBottom: '4rem',
  color: '$textAlt',
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
  mx: 'auto',
})

const FlexRow3 = styled(FlexRowItem, {
  display: 'flex',
  justifyContent: 'space-between',
  flex: '0 0 100%',
  maxWidth: '100%',
  marginBottom: '2rem',

  '@>s': {
    flex: '0 0 31.3333%',
    maxWidth: '31.3333%',
    marginBottom: 0,
  },
})

const FlexRow3Container = styled('div', {
  marginRight: '2rem',
})

const FlexRow6Container = styled('div', {
  px: '1%',

  '@>s': {
    flex: '0 0 49%',
    maxWidth: '49%',
  },

  '@>m': {
    marginBottom: 0,
    flex: '0 0 60%',
    maxWidth: '60%',
  },
})

const FlexRow3Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  marginBottom: '1.25rem',
  color: '$text',
})

const FlexRow3Copy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '2rem',
  color: '$textAlt',
})

const BackgroundImage = styled('img', {
  position: 'absolute',
  right: 0,
  zIndex: '$under',

  '@<s': {
    display: 'none',
  },
})

const NoLimits = () => (
  <NLContainer>
    <BackgroundImage src={rightbkgSVG.src} alt="background svg" />
    <FlexBoxContainer>
      <FlexRow>
        <FlexRow6Container>
          <NLHeadline>
            Because you don’t believe in limits, neither do we
          </NLHeadline>
          <NLCaption>
            Leadpages is the only platform that doesn’t limit your growth or
            charge you more for your success. We want to partner with you on
            your small business journey, which means cheering you on—not capping
            your capabilities.
          </NLCaption>
        </FlexRow6Container>
      </FlexRow>
      <FlexRow>
        <FlexRow3>
          <FlexRow3Container>
            <FlexRow3Heading>Unlimited traffic & page views</FlexRow3Heading>
            <FlexRow3Copy>
              The sky’s the limit when it comes to page views and web traffic.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            <FlexRow3Heading>Unlimited lead generation</FlexRow3Heading>
            <FlexRow3Copy>
              Collect as many leads, opt-ins, and subscribers as you can.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            <FlexRow3Heading>Unlimited publishing</FlexRow3Heading>
            <FlexRow3Copy>
              Publish as many pages, pop-ups, and alert bars as you
              like&mdash;anywhere on the web.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
      </FlexRow>
    </FlexBoxContainer>
  </NLContainer>
)

export default NoLimits
