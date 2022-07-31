import React from 'react'
import { styled } from '@design'
// images
import facebookSVG from '@legacy/assets/images/icons/socialicons/facebook-large-circle-48px.svg'
import instagramSVG from '@legacy/assets/images/icons/socialicons/instagram-large-circle-48px.svg'
import linkedInSVG from '@legacy/assets/images/icons/socialicons/linkedin-large-circle-48px.svg'
import twitterSVG from '@legacy/assets/images/icons/socialicons/twitter-large-circle-48px.svg'

const OuterContainer = styled('div', {
  position: 'relative',
})

const PFContainer = styled('div', {
  maxWidth: '740px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '6rem',
  paddingBottom: '3rem',
  paddingRight: '3rem',
  paddingLeft: '3rem',
  textAlign: 'center',

  '@>s': {
    paddingRight: '6rem',
    paddingLeft: '6rem',
    paddingTop: '10rem',
  },
})

const PFTitle = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '#0f0c09',
  marginBottom: '2rem',
})

const PFHeadline = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0px',
  color: '#575452',

  '@media (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },

  '@media (min-width: 993px)': {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
  },
  paddingBottom: '3rem',
})

const SocializeText = styled(PFHeadline, {
  paddingBottom: '1rem',
})

const IconsContainer = styled('div', {})

const SocializeIcon = styled('img', {
  height: '48px',
  width: '48px',
  padding: '6px',
})

const OutboundLink = styled('a', {})

const HardWork = () => (
  <OuterContainer>
    <PFContainer>
      <PFTitle>Hard Work + Big Heart</PFTitle>
      <PFHeadline>
        We’re a Minneapolis and remote-based tech company that’s changing the
        way small businesses do marketing, lead generation, and conversion rate
        optimization online. With a growing team that works closely together, we
        move fast and enjoy what we do.
      </PFHeadline>
      <SocializeText>Socialize with us</SocializeText>
      <IconsContainer>
        <OutboundLink
          href="https://www.facebook.com/Leadpages"
          alt="alt link"
          rel="noreferrer noopener"
        >
          <SocializeIcon src={facebookSVG.src} alt="Facebook SVG Image" />
        </OutboundLink>
        <OutboundLink
          href="https://www.instagram.com/leadpages/"
          alt="alt link"
          rel="noreferrer noopener"
        >
          <SocializeIcon src={instagramSVG.src} alt="Instagram SVG Image" />
        </OutboundLink>
        <OutboundLink
          href="https://www.linkedin.com/company/leadpages"
          alt="alt link"
          rel="noreferrer noopener"
        >
          <SocializeIcon src={linkedInSVG.src} alt="LinkedIn SVG Image" />
        </OutboundLink>
        <OutboundLink
          href="https://www.twitter.com/Leadpages"
          alt="alt link"
          rel="noreferrer noopener"
        >
          <SocializeIcon src={twitterSVG.src} alt="Twitter SVG Image" />
        </OutboundLink>
      </IconsContainer>
    </PFContainer>
  </OuterContainer>
)

export default HardWork
