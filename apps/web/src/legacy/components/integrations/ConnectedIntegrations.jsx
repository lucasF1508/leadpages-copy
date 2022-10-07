import React from 'react'
import { styled } from '@design'
import Link from 'next/link'
import Image from '@components/Image'

// Assets
import desktopImage from '@legacy/assets/images/integrations/leadpages_integrations_1208px@2x.png'
import mobileOne from '@legacy/assets/images/integrations/drip-68px@2x.jpg'
import mobileTwo from '@legacy/assets/images/integrations/google-analytics-68px@2x.jpg'
import mobileThree from '@legacy/assets/images/integrations/salesforce-68px@2x.jpg'
import mobileFour from '@legacy/assets/images/integrations/gotowebinar-68px@2x.jpg'
import mobileFive from '@legacy/assets/images/integrations/Facebook-pixel-ads-68px@2x.jpg'
import mobileSix from '@legacy/assets/images/integrations/open-table-68px@2x.jpg'
import mobileSeven from '@legacy/assets/images/integrations/zapier-68px@2x.jpg'
import mobileEight from '@legacy/assets/images/integrations/stripe-68px@2x.jpg'
import mobileNine from '@legacy/assets/images/integrations/mailchimp_68px@2x.jpg'

const OuterContainer = styled('div', {
  paddingTop: '6rem',
  paddingRight: '6rem',
  paddingLeft: '6rem',
  backgroundColor: 'white',

  '@media (max-width: 425px)': {
    paddingRight: '2%',
    paddingLeft: '2%',
  },

  '@media (min-width: 426px) and (max-width: 576px)': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },

  '@media (min-width: 577px)': {
    paddingTop: '10rem',
  },
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const ImageContainer = styled('div', {
  width: '100%',
  marginBottom: '2rem',
})

const TextContainer = styled('div', {
  textAlign: 'center',

  '@media (max-width: 425px)': {
    paddingRight: '1.5rem',
    paddingLeft: '1.5rem',
  },
})

const Title = styled('div', {
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  fontFamily: `'Space Mono'`,
  textTransform: 'uppercase',
  marginBottom: '2rem',
})

const Heading = styled('div', {
  fontFamily: `'Value Serif'`,
  fontSize: '24px',
  lineHeight: '30px',
  letterSpacing: '-0.08px',
  color: '$text',
  marginBottom: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: '-0.08px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },

  '@media (min-width: 993px)': {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
  },
})

const Caption = styled('div', {
  color: '$textAlt',
  fontFamily: `'Apercu Pro'`,
  fontSize: '14px',
  lineHeight: '20px',
  marginBottom: '4rem',

  '@media (max-width: 576px)': {
    fontSize: '14px',
    lineHeight: '20px',
  },

  '@media (min-width: 577px) and (max-width: 991px)': {
    fontSize: '16px',
    lineHeight: '24px',
  },

  '@media (min-width: 992px)': {
    fontSize: '18px',
    lineHeight: '28px',
  },
})

const StyledLink = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
})

const ButtonContainer = styled('div', {
  marginTop: '4rem',
  textAlign: 'center',

  '@media (max-width: 340px)': {
    padding: 0,
  },
})

const Button = styled('button', {
  height: '48px',
  borderRadius: '48px',
  color: '$primary',
  background: 'transparent',
  border: '3px solid $colors$secondary',
  fontFamily: `'Apercu Pro'`,
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  marginBottom: '4rem',
  padding: '0rem 1rem',
  '@media (max-width: 425px)': {
    minWidth: '240px',
    fontSize: '16px',
    alignSelf: 'center',
  },
  '&:hover': {
    border: '3px solid $colors$primary',
    backgroundColor: '$primary',
    color: '$white',
    cursor: 'pointer',
  },
})

const DesktopImage = styled(Image, {
  display: 'none',

  '@media (min-width: 577px)': {
    display: 'block',
  },
})

const MobileImage = styled(Image, {
  display: 'none',

  '@media (max-width: 576px)': {
    width: '100%',
    height: '100%',
    display: 'block',
    margin: '3%',
    maxWidth: '68px',
    maxHeight: '68px',
    boxShadow: `0 0 2px 0 rgba(15, 12, 9, 0.04),
      0 2px 4px 0 rgba(15, 12, 9, 0.08)`,
  },
})

const MobileFlexContainer = styled('div', {
  display: 'none',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '90%',
  maxWidth: '357px',
  margin: 'auto',

  '@media (max-width: 425px)': {
    width: '99%',
  },

  '@media (max-width: 576px)': {
    display: 'flex',
  },
})

const ConnectedIntegrations = () => (
  <OuterContainer>
    <InnerContainer>
      <TextContainer>
        <Title>Leadpages Integrations</Title>
        <Heading>
          <h2>Save time by connecting the data dots</h2>
        </Heading>
        <Caption>
          Integrate your favorite online marketing apps to automatically add
          leads to email lists and trigger follow-up workflows.
        </Caption>
      </TextContainer>
      <ImageContainer>
        <DesktopImage image={desktopImage} alt="Desktop integrations image" />
        <MobileFlexContainer>
          <MobileImage image={mobileOne} alt="drip integration" />
          <MobileImage image={mobileTwo} alt="google analytics integration" />
          <MobileImage image={mobileThree} alt="salesforce integration" />
          <MobileImage image={mobileFour} alt="gotowebinar integration" />
          <MobileImage
            image={mobileFive}
            alt="Facebook pixel ads integration"
          />
          <MobileImage image={mobileSix} alt="OpenTable integration" />
          <MobileImage image={mobileSeven} alt="Zapier integration" />
          <MobileImage image={mobileEight} alt="Stripe integration" />
          <MobileImage image={mobileNine} alt="Mailchimp integration" />
        </MobileFlexContainer>
      </ImageContainer>
      <ButtonContainer>
        <Link href="/integrations" passHref>
          <StyledLink>
            <Button>Explore Leadpages Integrations</Button>
          </StyledLink>
        </Link>
      </ButtonContainer>
    </InnerContainer>
  </OuterContainer>
)

export default ConnectedIntegrations
