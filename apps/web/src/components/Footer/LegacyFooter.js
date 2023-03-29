import React from 'react'
import PropTypes from 'prop-types'
import * as NextLink from 'next/link'
import { styled } from '@design'
// images
import logoIconSVG from '@legacy/assets/images/global/leadpages-symbol_large.svg'
import RedbrickFooter from './RedbrickFooter'
import FooterRowBottom from './FooterRowBottom'

export const FlexRow = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '2rem',
})

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

const LogoIconContainer = styled('img', {
  width: '33px',
  height: '24px',
  position: 'relative',
  top: '7px',
})

const RedbrickRow = styled(FlexRow, {
  padding: '60px 0 10px',
  justifyContent: 'center',
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
})

export const FooterLast = () => (
  <RedbrickRow>
    <RedbrickFooter />
  </RedbrickRow>
)

const LegacyFooter = ({ slimFooter, isPreviewPage }) => {
  if (isPreviewPage) return null

  return (
    <FooterContainer slimFooter={slimFooter}>
      {!slimFooter && (
        <InnerContainer>
          <FlexRow>
            <Col4>
              <FlexColumn>
                <FlexColumnItem>
                  <NextLink href="/" passHref>
                    <StyledLink>
                      <LogoIconContainer
                        src={logoIconSVG.src}
                        alt="Leadpages SVG logo"
                      />
                    </StyledLink>
                  </NextLink>
                </FlexColumnItem>
              </FlexColumn>
            </Col4>
            <Col2>
              <SmallCaps>Product</SmallCaps>
              <FlexColumn>
                <FlexColumnItem>
                  <NextLink href="/product/feature-index" passHref>
                    <FooterLink data-gtm="footer-link">Features</FooterLink>
                  </NextLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <NextLink href="/integrations" passHref>
                    <FooterLink data-gtm="footer-link">Integrations</FooterLink>
                  </NextLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <NextLink href="/templates" passHref>
                    <FooterLink data-gtm="footer-link">Templates</FooterLink>
                  </NextLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <NextLink href="/pricing" passHref>
                    <FooterLink data-gtm="footer-link">Pricing</FooterLink>
                  </NextLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <OutboundFooterLink href="/demo" data-gtm="footer-link">
                    Watch a Demo
                  </OutboundFooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <NextLink href="/comparisons" passHref>
                    <FooterLink data-gtm="footer-link">Comparisons</FooterLink>
                  </NextLink>
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
                  <NextLink href="/landing-pages-guide" passHref>
                    <FooterLink data-gtm="footer-link">
                      Landing Pages Guide
                    </FooterLink>
                  </NextLink>
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
                  <NextLink href="/customers" passHref>
                    <FooterLink data-gtm="footer-link">
                      Customer Stories
                    </FooterLink>
                  </NextLink>
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
                  <NextLink href="/contact" passHref>
                    <FooterLink data-gtm="footer-link_contact-us-link">
                      Contact
                    </FooterLink>
                  </NextLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <NextLink href="/press" passHref>
                    <FooterLink data-gtm="footer-link">Press</FooterLink>
                  </NextLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <NextLink href="/careers" passHref>
                    <FooterLink data-gtm="footer-link">Careers</FooterLink>
                  </NextLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <NextLink href="/faq" passHref>
                    <FooterLink data-gtm="footer-link">FAQs</FooterLink>
                  </NextLink>
                </FlexColumnItem>
              </FlexColumn>
            </Col2>
          </FlexRow>
        </InnerContainer>
      )}
      <FooterRowBottom />
      <FooterLast />
    </FooterContainer>
  )
}

LegacyFooter.defaultProps = {
  slimFooter: false,
  isPreviewPage: false,
}

LegacyFooter.propTypes = {
  slimFooter: PropTypes.bool,
  isPreviewPage: PropTypes.bool,
}

export default LegacyFooter
