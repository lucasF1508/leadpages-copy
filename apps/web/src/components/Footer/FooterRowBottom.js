import { styled } from '@design'
import React from 'react'

import * as NextLink from 'next/link'

import facebookSVG from '@legacy/assets/images/icons/socialicons/facebook-circle.svg'
import instagramSVG from '@legacy/assets/images/icons/socialicons/instagram.svg'
import linkedinSVG from '@legacy/assets/images/icons/socialicons/linkedin.svg'
import pinterestSVG from '@legacy/assets/images/icons/socialicons/pinterest.svg'
import twitterSVG from '@legacy/assets/images/icons/socialicons/x-twitter.svg'
import youtubeSVG from '@legacy/assets/images/icons/socialicons/youtube.svg'
import { StyledLink } from '@legacy/components/silos/SiloGlobalStyles'

const icons = [
  {
    name: 'facebook',
    alt: 'Leadpages Facebook Page',
    src: facebookSVG.src,
    href: 'https://www.facebook.com/Leadpages',
  },
  {
    name: 'linkedin',
    alt: 'Leadpages LinkedIn Company Page',
    src: linkedinSVG.src,
    href: 'https://www.linkedin.com/company/leadpages',
  },
  {
    name: 'instagram',
    alt: 'Leadpages Instagram Page',
    src: instagramSVG.src,
    href: 'https://www.instagram.com/leadpages/',
  },
  {
    name: 'youtube',
    alt: 'Leadpages Youtube Account',
    src: youtubeSVG.src,
    href: 'https://www.youtube.com/channel/UCcOTiK5iJ1OjGHgcqNB0Eqw',
  },
  {
    name: 'pinterest',
    alt: 'Leadpages Pinterest Account',
    src: pinterestSVG.src,
    href: 'https://www.pinterest.com/leadpagesHQ/',
  },
  {
    name: 'twitter',
    alt: 'Leadpages Twitter Account',
    src: twitterSVG.src,
    href: 'https://www.twitter.com/Leadpages',
  },
]

const $SocialIconLink = styled('a', {
  backgroundColor: '$text',
  width: '2rem',
  height: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$radii$s',

  '&:hover': {
    backgroundColor: '$purple',
  },
})

const $SocialIcon = styled('img', {
  width: '1rem',
  height: '1rem',
})

const $FooterRowBottom = styled('div', {
  py: '2.25rem',
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  '@>993': {
    flexDirection: 'row-reverse',
  },
})

const $FooterCopyright = styled('div', {
  fontFamily: `'Apercu Pro'`,
  fontSize: '0.75rem',
  textAlign: 'center',
  color: '$textAlt',
  flex: 1,

  '& a': {
    color: '$textAlt',
  },

  '@>993': {
    textAlign: 'left',
  },
})

const $FooterTOSTextSpan = styled('span', {})

const $FooterIconsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
  alignItems: 'center',
})

const $FooterAddress = styled('div', {
  mt: '$1_5',
})

const FooterRowBottom = () => (
  <$FooterRowBottom>
    <$FooterIconsContainer>
      {icons.map(({ name, alt, src, href }) => (
        <$SocialIconLink
          key={name}
          href={href}
          rel="noreferrer noopener"
          alt={alt}
          target="_blank"
          data-gtm="footer-link"
        >
          <$SocialIcon src={src} alt={`${name} icon`} />
        </$SocialIconLink>
      ))}
    </$FooterIconsContainer>
    <$FooterCopyright>
      <div>
        ©{new Date().getFullYear()} Leadpages (US), Inc. All Rights Reserved.{' '}
        <$FooterTOSTextSpan>
          <NextLink href="/privacy" passHref>
            <StyledLink data-gtm="footer-link">Privacy Policy</StyledLink>
          </NextLink>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <NextLink href="/legal" passHref>
            <StyledLink data-gtm="footer-link">Legal</StyledLink>
          </NextLink>
        </$FooterTOSTextSpan>
      </div>
      <$FooterAddress>
        212 3rd Ave N, Ste 475, Minneapolis MN, 55401-1478
      </$FooterAddress>
    </$FooterCopyright>
  </$FooterRowBottom>
)

export default FooterRowBottom
