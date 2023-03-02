import React from 'react'
import { styled } from '@design'
import facebookSVG from '@legacy/assets/images/icons/socialicons/facebook-large-circle-48px.svg'
import instagramSVG from '@legacy/assets/images/icons/socialicons/instagram-large-circle-48px.svg'
import linkedInSVG from '@legacy/assets/images/icons/socialicons/linkedin-large-circle-48px.svg'
import twitterSVG from '@legacy/assets/images/icons/socialicons/twitter-large-circle-48px.svg'

const $Socialize = styled('div', {
  d: 'flex',
  ff: 'column',
  ai: 'center',
  mx: 'auto',
  mt: '$6',
})

const SocializeText = styled('div', {
  mb: '$2',
  c: '$textAlt',
})

const IconsContainer = styled('div', {})

const SocializeIcon = styled('img', {
  height: '48px',
  width: '48px',
  padding: '6px',
})

const OutboundLink = styled('a', {})

const Socialize = () => (
  <$Socialize>
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
  </$Socialize>
)
export default Socialize
