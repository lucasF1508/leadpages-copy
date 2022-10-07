import React from 'react'
import { styled } from '@design'
import Image from '@components/Image'
// images
import CollectLeadsImage from '@legacy/assets/images/icons/featureicons/lilac_inbound.png'
import SellProductsImage from '@legacy/assets/images/icons/featureicons/coral_megaphone.png'
import EngageAudienceImage from '@legacy/assets/images/icons/featureicons/forest_credit-card.png'

const OuterContainer = styled('div', {
  position: 'relative',
})

const LPUContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  paddingTop: '4rem',
  paddingBottom: '6rem',
  px: '3rem',

  '@>m': {
    py: '10rem',
    px: '6rem',
  },
})

const LPUHeadline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '1.875rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.25rem',
  textAlign: 'center',
  marginBottom: '5rem',
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
  alignItems: 'flex-start',
  flexWrap: 'wrap',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  px: '1%',
  mx: 'auto',
})

const FlexRow3 = styled(FlexRowItem, {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',

  '@>s': {
    flex: '0 0 29.3333%',
    maxWidth: '29.3333%',
    marginBottom: 0,
  },

  '@>m': {
    flex: '0 0 27.3333%',
    maxWidth: '27.3333%',
  },
})

const FlexRow3Container = styled('div', {
  textAlign: 'center',
})

const StyledImage = styled(Image, {
  display: 'block',
  mx: 'auto',
  marginBottom: '2rem',
  height: '100%',
  width: '100%',
  maxHeight: '48px',
  maxWidth: '48px',
})

const FlexRow3Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: '2rem',
  color: '$text',
})

const FlexRow3Copy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center',
  marginBottom: '1.25rem',
  color: '$textAlt',
})

const LeadpagesUse = () => (
  <OuterContainer>
    <LPUContainer>
      <LPUHeadline>What is Leadpages used for?</LPUHeadline>
      <FlexRow>
        <FlexRow3>
          <FlexRow3Container>
            <StyledImage
              image={CollectLeadsImage}
              alt="collect quality leads"
            />
            <FlexRow3Heading>Collect quality leads</FlexRow3Heading>
            <FlexRow3Copy>
              Grow your email subscriber list with opt-in offers, instant
              digital file delivery, and conversion-optimized content.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            <StyledImage
              image={SellProductsImage}
              alt="sell products & services"
            />
            <FlexRow3Heading>Sell products & services</FlexRow3Heading>
            <FlexRow3Copy>
              Increase your revenue with high-converting sales pages and
              built-in checkouts powered by Stripe.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
        <FlexRow3>
          <FlexRow3Container>
            <StyledImage
              image={EngageAudienceImage}
              alt="engage your audience"
            />
            <FlexRow3Heading>Engage your audience</FlexRow3Heading>
            <FlexRow3Copy>
              Connect with your community by offering webinars, downloadable
              resources, and appointment scheduling.
            </FlexRow3Copy>
          </FlexRow3Container>
        </FlexRow3>
      </FlexRow>
    </LPUContainer>
  </OuterContainer>
)

export default LeadpagesUse
