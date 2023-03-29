import { styled } from '@design'
import React from 'react'

import * as NextLink from 'next/link'

import facebookSVG from '@legacy/assets/images/icons/socialicons/facebook-small-square.svg'
import instagramSVG from '@legacy/assets/images/icons/socialicons/instagram-small-square.svg'
import linkedinSVG from '@legacy/assets/images/icons/socialicons/linkedin-small-square.svg'
import pinterestSVG from '@legacy/assets/images/icons/socialicons/pinterest-small-square.svg'
import twitterSVG from '@legacy/assets/images/icons/socialicons/twitter-small-square.svg'
import { StyledLink } from '@legacy/components/silos/SiloGlobalStyles'
import { FlexRow } from './LegacyFooter'

const SocialIconContainer = styled('img', {
  width: '16px',
  height: '16px',
  marginRight: '8px',

  '&:hover': {
    WebkitFilter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
    filter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
  },
})

const $FooterRowBottom = styled(FlexRow, {
  paddingTop: '3rem',
  justifyContent: 'space-between',
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',

  '@media (max-width: 768px)': {
    paddingTop: '2rem',
  },

  '@media (max-width: 1199px)': {
    textAlign: 'center',
  },
})

const FooterCopyright = styled('div', {
  fontFamily: `'Apercu Pro'`,
  fontSize: '12px',
  alignSelf: 'start',
  color: '$textAlt',

  '@media (max-width: 1199px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
    marginBottom: '1rem',
  },
})

const FooterTOS = styled('div', {
  fontFamily: `'Apercu Pro'`,
  fontSize: '12px',
  alignSelf: 'end',
  color: '$textAlt',

  '@media (max-width: 1199px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 1200px)': {
    display: 'flex',
  },
})

const FooterTOSText = styled('div', {})

const FooterIconsDesktopContainer = styled('div', {
  paddingLeft: '18px',

  '@media (max-width: 1199px)': {
    display: 'none',
  },
})

const FooterIconsMobileContainer = styled('div', {
  display: 'none',

  '@media (max-width: 1199px)': {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem',
  },
})

const FooterRowBottom = () => (
  <$FooterRowBottom>
    <FooterCopyright>
      ©{new Date().getFullYear()} Leadpages (US), Inc. All Rights Reserved.
    </FooterCopyright>
    <FooterIconsMobileContainer>
      <a
        href="https://www.facebook.com/Leadpages"
        rel="noreferrer noopener"
        alt="Leadpages Facebook Page"
        target="_blank"
        data-gtm="footer-link"
      >
        <SocialIconContainer src={facebookSVG.src} alt="facebook icon" />
      </a>
      <a
        href="https://www.linkedin.com/company/leadpages"
        rel="noreferrer noopener"
        alt="Leadpages LinkedIn Company Page"
        target="_blank"
        data-gtm="footer-link"
      >
        <SocialIconContainer src={linkedinSVG.src} alt="linkedin icon" />
      </a>
      <a
        href="https://www.twitter.com/Leadpages"
        rel="noreferrer noopener"
        alt="Leadpages Twitter Account"
        target="_blank"
        data-gtm="footer-link"
      >
        <SocialIconContainer src={twitterSVG.src} alt="twitter icon" />
      </a>
      <a
        href="https://www.instagram.com/leadpages/"
        rel="noreferrer noopener"
        alt="Leadpages Instagram Page"
        target="_blank"
        data-gtm="footer-link"
      >
        <SocialIconContainer src={instagramSVG.src} alt="instagram icon" />
      </a>
      <a
        href="https://www.pinterest.com/leadpagesHQ/"
        rel="noreferrer noopener"
        alt="Leadpages Pinterest Account"
        target="_blank"
        data-gtm="footer-link"
      >
        <SocialIconContainer src={pinterestSVG.src} alt="pinterest icon" />
      </a>
    </FooterIconsMobileContainer>
    <FooterTOS>
      <FooterTOSText>
        <NextLink href="/privacy" passHref>
          <StyledLink data-gtm="footer-link">Privacy Policy</StyledLink>
        </NextLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <NextLink href="/legal" passHref>
          <StyledLink data-gtm="footer-link">Legal</StyledLink>
        </NextLink>
      </FooterTOSText>
      <FooterIconsDesktopContainer>
        <a
          href="https://www.facebook.com/Leadpages"
          rel="noreferrer noopener"
          alt="Leadpages Facebook Page"
          target="_blank"
          data-gtm="footer-link"
        >
          <SocialIconContainer src={facebookSVG.src} alt="facebook icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/leadpages"
          rel="noreferrer noopener"
          alt="Leadpages LinkedIn Company Page"
          target="_blank"
          data-gtm="footer-link"
        >
          <SocialIconContainer src={linkedinSVG.src} alt="linkedin icon" />
        </a>
        <a
          href="https://www.twitter.com/Leadpages"
          rel="noreferrer noopener"
          alt="Leadpages Twitter Account"
          target="_blank"
          data-gtm="footer-link"
        >
          <SocialIconContainer src={twitterSVG.src} alt="twitter icon" />
        </a>
        <a
          href="https://www.instagram.com/leadpages/"
          rel="noreferrer noopener"
          alt="Leadpages Instagram Page"
          target="_blank"
          data-gtm="footer-link"
        >
          <SocialIconContainer src={instagramSVG.src} alt="instagram icon" />
        </a>
        <a
          href="https://www.pinterest.com/leadpagesHQ/"
          rel="noreferrer noopener"
          alt="Leadpages Pinterest Account"
          target="_blank"
          data-gtm="footer-link"
        >
          <SocialIconContainer src={pinterestSVG.src} alt="pinterest icon" />
        </a>
      </FooterIconsDesktopContainer>
    </FooterTOS>
  </$FooterRowBottom>
)

export default FooterRowBottom
