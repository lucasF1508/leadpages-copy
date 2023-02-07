import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { styled } from '@design'
// images
import logoIconSVG from '@legacy/assets/images/global/leadpages-symbol_large.svg'
import facebookSVG from '@legacy/assets/images/icons/socialicons/facebook-small-square.svg'
import instagramSVG from '@legacy/assets/images/icons/socialicons/instagram-small-square.svg'
import linkedinSVG from '@legacy/assets/images/icons/socialicons/linkedin-small-square.svg'
import pinterestSVG from '@legacy/assets/images/icons/socialicons/pinterest-small-square.svg'
import twitterSVG from '@legacy/assets/images/icons/socialicons/twitter-small-square.svg'
import RedbrickFooter from './RedbrickFooter'

const FooterContainer = styled('footer', {
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
  paddingTop: '3rem',
  paddingBottom: '1rem',
  paddingRight: '6rem',
  paddingLeft: '6rem',
  marginRight: 'auto',
  marginLeft: 'auto',
  variants: {
    slimFooter: {
      true: {
        pt: '0rem',
      },
    },
  },
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
})

const FlexRow = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '2rem',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  paddingLeft: '1%',
  paddingRight: '1%',
  marginBottom: '1.5rem',
})

const Col2 = styled(FlexRowItem, {
  '@media (min-width: 576px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 47%',
    flex: '0 0 47%',
    maxWidth: '47%',
  },

  '@media (min-width: 768px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 31.3333%',
    flex: '0 0 31.3333%',
    maxWidth: '31.3333%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 14.6666%',
    flex: '0 0 14.6666%',
    maxWidth: '14.6666%',
    textAlign: 'left',
  },
})

const Col4 = styled(FlexRowItem, {
  '@media (min-width: 768px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 100%',
    flex: '0 0 100%',
    maxWidth: '100%',
  },

  '@media (min-width: 992px)': {
    marginBottom: '0rem',
    WebkitBoxFlex: 0,
    MsFlex: '0 0 31.3333%',
    flex: '0 0 31.3333%',
    maxWidth: '31.3333%',
    textAlign: 'left',
  },
})

const SmallCaps = styled('div', {
  marginBottom: '0.8rem',
  fontFamily: `'Space Mono'`,
  fontSize: '12px',
  fontStyle: 'normal',
  color: 'rgba(0, 0, 0, 0.5)',
  letterSpacing: '2px',
  lineHeight: '18px',
  opacity: 0.5,
  textTransform: 'uppercase',
})

const FlexColumn = styled('div', {
  WebkitBoxOrient: 'vertical',
  WebkitBoxDirection: 'normal',
  MsFlexDirection: 'column',
  flexDirection: 'column',
  display: 'flex',
  MsFlexWrap: 'wrap',
  flexWrap: 'wrap',
  paddingLeft: 0,
  marginBottom: 0,
  listStyle: 'none',
})

const FlexColumnItem = styled('div', {
  display: 'block',
  padding: '0.5rem 0',
  fontSize: '14px',
  lineHeight: '20px',
  textDecoration: 'none',
  fontFamily: `'Apercu Pro'`,
})

const StyledLink = styled('a', {
  textDecoration: 'none',
  color: 'inherit',

  '&:hover': {
    cursor: 'pointer',
    color: '$primary',
    textDecoration: 'none',
  },
})

const FooterLink = styled(StyledLink, {
  paddingBottom: '0.5rem',

  '&:hover': {
    cursor: 'pointer',
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
  },
})

const OutboundFooterLink = styled('a', {
  paddingBottom: '0.5rem',
  color: 'inherit',
  textDecoration: 'none',

  '&:hover': {
    cursor: 'pointer',
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
  },
})

const FooterRowBottom = styled(FlexRow, {
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

const LogoIconContainer = styled('img', {
  width: '33px',
  height: '24px',
  position: 'relative',
  top: '7px',
})

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

const RedbrickRow = styled(FlexRow, {
  padding: '60px 0 10px',
  justifyContent: 'center',
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
})

const Footer = ({ slimFooter, isPreviewPage }) => {
  if (isPreviewPage) return null

  return (
    <FooterContainer slimFooter={slimFooter}>
      {!slimFooter && (
        <InnerContainer>
          <FlexRow>
            <Col4>
              <FlexColumn>
                <FlexColumnItem>
                  <Link href="/" passHref>
                    <StyledLink>
                      <LogoIconContainer
                        src={logoIconSVG.src}
                        alt="Leadpages SVG logo"
                      />
                    </StyledLink>
                  </Link>
                </FlexColumnItem>
              </FlexColumn>
            </Col4>
            <Col2>
              <SmallCaps>Product</SmallCaps>
              <FlexColumn>
                <FlexColumnItem>
                  <Link href="/product/feature-index" passHref>
                    <FooterLink data-gtm="footer-link">Features</FooterLink>
                  </Link>
                </FlexColumnItem>
                <FlexColumnItem>
                  <Link href="/integrations" passHref>
                    <FooterLink data-gtm="footer-link">Integrations</FooterLink>
                  </Link>
                </FlexColumnItem>
                <FlexColumnItem>
                  <Link href="/templates" passHref>
                    <FooterLink data-gtm="footer-link">Templates</FooterLink>
                  </Link>
                </FlexColumnItem>
                <FlexColumnItem>
                  <Link href="/pricing" passHref>
                    <FooterLink data-gtm="footer-link">Pricing</FooterLink>
                  </Link>
                </FlexColumnItem>
                <FlexColumnItem>
                  <OutboundFooterLink href="/demo" data-gtm="footer-link">
                    Watch a Demo
                  </OutboundFooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <Link href="/comparisons" passHref>
                    <FooterLink data-gtm="footer-link">Comparisons</FooterLink>
                  </Link>
                </FlexColumnItem>
              </FlexColumn>
            </Col2>
            <Col2>
              <SmallCaps>Resources</SmallCaps>
              <FlexColumn>
                <FlexColumnItem>
                  <OutboundFooterLink
                    href="https://www.leadpages.com/blog/"
                    alt="Leadpages Blog"
                    rel="noopener"
                    data-gtm="footer-link"
                  >
                    Blog
                  </OutboundFooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <OutboundFooterLink
                    href="/podcast"
                    aria-label="Leadpages podcast"
                    data-gtm="footer-link"
                  >
                    Podcast
                  </OutboundFooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <OutboundFooterLink
                    href="/webinars"
                    alt="Leadpages webinar"
                    data-gtm="footer-link"
                  >
                    Webinar
                  </OutboundFooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <Link href="/landing-pages-guide" passHref>
                    <FooterLink data-gtm="footer-link">
                      Landing Pages Guide
                    </FooterLink>
                  </Link>
                </FlexColumnItem>
                <FlexColumnItem>
                  <OutboundFooterLink
                    href="/why-leadpages"
                    alt="Why Leadpages"
                    data-gtm="footer-link"
                  >
                    Why Leadpages?
                  </OutboundFooterLink>
                </FlexColumnItem>
              </FlexColumn>
            </Col2>
            <Col2>
              <SmallCaps>Community</SmallCaps>
              <FlexColumn>
                <FlexColumnItem>
                  <OutboundFooterLink
                    href="https://support.leadpages.com/hc/en-us"
                    alt="visit the help center"
                    target="_blank"
                    rel="noreferrer noopener"
                    data-gtm="footer-link"
                  >
                    Help Center
                  </OutboundFooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <Link href="/customers" passHref>
                    <FooterLink data-gtm="footer-link">
                      Customer Stories
                    </FooterLink>
                  </Link>
                </FlexColumnItem>
                <FlexColumnItem>
                  <OutboundFooterLink
                    href="https://www.facebook.com/groups/leadpages/"
                    alt="Leadpages Facebook"
                    rel="noopener noreferrer"
                    target="_blank"
                    data-gtm="footer-link"
                  >
                    Facebook Group
                  </OutboundFooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <OutboundFooterLink href="/affiliates" data-gtm="footer-link">
                    Affiliate Program
                  </OutboundFooterLink>
                </FlexColumnItem>
              </FlexColumn>
            </Col2>
            <Col2>
              <SmallCaps>Company</SmallCaps>
              <FlexColumn>
                <FlexColumnItem>
                  <Link href="/contact" passHref>
                    <FooterLink data-gtm="footer-link_contact-us-link">
                      Contact
                    </FooterLink>
                  </Link>
                </FlexColumnItem>
                <FlexColumnItem>
                  <Link href="/press" passHref>
                    <FooterLink data-gtm="footer-link">Press</FooterLink>
                  </Link>
                </FlexColumnItem>
                <FlexColumnItem>
                  <Link href="/careers" passHref>
                    <FooterLink data-gtm="footer-link">Careers</FooterLink>
                  </Link>
                </FlexColumnItem>
                <FlexColumnItem>
                  <Link href="/faq" passHref>
                    <FooterLink data-gtm="footer-link">FAQs</FooterLink>
                  </Link>
                </FlexColumnItem>
              </FlexColumn>
            </Col2>
          </FlexRow>
        </InnerContainer>
      )}
      <FooterRowBottom>
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
            <Link href="/privacy" passHref>
              <StyledLink data-gtm="footer-link">Privacy Policy</StyledLink>
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/legal" passHref>
              <StyledLink data-gtm="footer-link">Legal</StyledLink>
            </Link>
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
              <SocialIconContainer
                src={instagramSVG.src}
                alt="instagram icon"
              />
            </a>
            <a
              href="https://www.pinterest.com/leadpagesHQ/"
              rel="noreferrer noopener"
              alt="Leadpages Pinterest Account"
              target="_blank"
              data-gtm="footer-link"
            >
              <SocialIconContainer
                src={pinterestSVG.src}
                alt="pinterest icon"
              />
            </a>
          </FooterIconsDesktopContainer>
        </FooterTOS>
      </FooterRowBottom>
      <RedbrickRow>
        <RedbrickFooter />
      </RedbrickRow>
    </FooterContainer>
  )
}

Footer.defaultProps = {
  slimFooter: false,
  isPreviewPage: false,
}

Footer.propTypes = {
  slimFooter: PropTypes.bool,
  isPreviewPage: PropTypes.bool,
}

export default Footer
