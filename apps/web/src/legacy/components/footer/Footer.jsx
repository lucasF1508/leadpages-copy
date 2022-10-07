import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'
// images
import logoIconSVG from '../../assets/images/global/leadpages-symbol_large.svg'
import facebookSVG from '../../assets/images/icons/socialicons/facebook-small-square.svg'
import instagramSVG from '../../assets/images/icons/socialicons/instagram-small-square.svg'
import linkedinSVG from '../../assets/images/icons/socialicons/linkedin-small-square.svg'
import pinterestSVG from '../../assets/images/icons/socialicons/pinterest-small-square.svg'
import twitterSVG from '../../assets/images/icons/socialicons/twitter-small-square.svg'
import RedbrickFooter from './RedbrickFooter'

const FooterContainer = styled.footer`
  border-top: 1px solid rgba(15, 12, 9, 0.08);
  padding-top: ${(props) => (props.slimFooter ? `0rem` : `3rem`)};
  padding-bottom: 1rem;
  padding-right: 6rem;
  padding-left: 6rem;
  margin-right: auto;
  margin-left: auto;
`

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
`

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
  margin-bottom: 1.5rem;
`

const Col2 = styled(FlexRowItem)`
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 47%;
    flex: 0 0 47%;
    max-width: 47%;
  }
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31.3333%;
    flex: 0 0 31.3333%;
    max-width: 31.3333%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 14.6666%;
    flex: 0 0 14.6666%;
    max-width: 14.6666%;
    text-align: left;
  }
`

const Col4 = styled(FlexRowItem)`
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31.3333%;
    flex: 0 0 31.3333%;
    max-width: 31.3333%;
    text-align: left;
  }
`

const SmallCaps = styled.div`
  margin-bottom: 0.8rem;
  font-family: 'Space Mono';
  font-size: 12px;
  font-style: normal;
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  line-height: 18px;
  opacity: 0.5;
  text-transform: uppercase;
`

const FlexColumn = styled.div`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`

const FlexColumnItem = styled.div`
  display: block;
  padding: 0.5rem 0;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  font-family: 'Apercu Pro';
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
    color: #603eff;
    text-decoration: none;
  }
`

const FooterLink = styled(StyledLink)`
  padding-bottom: 0.5rem;
  &:hover {
    cursor: pointer;
    color: #603eff;
    border-bottom: 3px solid #603eff;
    text-decoration: none;
  }
`

const OutboundFooterLink = styled.a`
  padding-bottom: 0.5rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #603eff;
    border-bottom: 3px solid #603eff;
    text-decoration: none;
  }
`

const FooterRowBottom = styled(FlexRow)`
  padding-top: 3rem;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 12, 9, 0.08);
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
  @media (max-width: 1199px) {
    text-align: center;
  }
`

const FooterCopyright = styled.div`
  font-family: 'Apercu Pro';
  font-size: 12px;
  align-self: start;
  color: #575452;
  @media (max-width: 1199px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 1rem;
  }
`

const FooterTOS = styled.div`
  font-family: 'Apercu Pro';
  font-size: 12px;
  align-self: end;
  color: #575452;
  @media (max-width: 1199px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 1200px) {
    display: flex;
  }
`

const FooterTOSText = styled.div``

const FooterIconsDesktopContainer = styled.div`
  padding-left: 18px;
  @media (max-width: 1199px) {
    display: none;
  }
`

const FooterIconsMobileContainer = styled.div`
  display: none;
  @media (max-width: 1199px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  }
`

const LogoIconContainer = styled.img`
  width: 33px;
  height: 24px;
  position: relative;
  top: 7px;
`

const SocialIconContainer = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  &:hover {
    -webkit-filter: invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%);
    filter: invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%);
  }
`

const RedbrickRow = styled(FlexRow)`
  padding: 60px 0 10px;
  justify-content: center;
  border-top: 1px solid rgba(15, 12, 9, 0.08);
`

const Footer = ({ slimFooter }) => {
  return (
    <FooterContainer slimFooter={slimFooter}>
      {!slimFooter && (
        <InnerContainer>
          <FlexRow>
            <Col4>
              <FlexColumn>
                <FlexColumnItem>
                  <StyledLink href="/">
                    <LogoIconContainer
                      src={logoIconSVG}
                      alt="Leadpages SVG logo"
                    />
                  </StyledLink>
                </FlexColumnItem>
              </FlexColumn>
            </Col4>
            <Col2>
              <SmallCaps>Product</SmallCaps>
              <FlexColumn>
                <FlexColumnItem>
                  <FooterLink
                    href="/product/feature-index"
                    data-gtm="footer-link"
                  >
                    Features
                  </FooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <FooterLink href="/integrations" data-gtm="footer-link">
                    Integrations
                  </FooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <FooterLink href="/templates" data-gtm="footer-link">
                    Templates
                  </FooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <FooterLink href="/pricing" data-gtm="footer-link">
                    Pricing
                  </FooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <OutboundFooterLink href="/demo" data-gtm="footer-link">
                    Watch a Demo
                  </OutboundFooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <FooterLink href="/comparisons" data-gtm="footer-link">
                    Comparisons
                  </FooterLink>
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
                    alt="Leadpages podcast"
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
                  <FooterLink
                    href="/landing-pages-guide"
                    data-gtm="footer-link"
                  >
                    Landing Pages Guide
                  </FooterLink>
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
                  <FooterLink href="/customers" data-gtm="footer-link">
                    Customer Stories
                  </FooterLink>
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
                  <FooterLink
                    href="/contact"
                    data-gtm="footer-link_contact-us-link"
                  >
                    Contact
                  </FooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <FooterLink href="/press" data-gtm="footer-link">
                    Press
                  </FooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <FooterLink href="/careers" data-gtm="footer-link">
                    Careers
                  </FooterLink>
                </FlexColumnItem>
                <FlexColumnItem>
                  <FooterLink href="/faq" data-gtm="footer-link">
                    FAQs
                  </FooterLink>
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
            <SocialIconContainer src={facebookSVG} alt="facebook icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/leadpages"
            rel="noreferrer noopener"
            alt="Leadpages LinkedIn Company Page"
            target="_blank"
            data-gtm="footer-link"
          >
            <SocialIconContainer src={linkedinSVG} alt="linkedin icon" />
          </a>
          <a
            href="https://www.twitter.com/Leadpages"
            rel="noreferrer noopener"
            alt="Leadpages Twitter Account"
            target="_blank"
            data-gtm="footer-link"
          >
            <SocialIconContainer src={twitterSVG} alt="twitter icon" />
          </a>
          <a
            href="https://www.instagram.com/leadpages/"
            rel="noreferrer noopener"
            alt="Leadpages Instagram Page"
            target="_blank"
            data-gtm="footer-link"
          >
            <SocialIconContainer src={instagramSVG} alt="instagram icon" />
          </a>
          <a
            href="https://www.pinterest.com/leadpagesHQ/"
            rel="noreferrer noopener"
            alt="Leadpages Pinterest Account"
            target="_blank"
            data-gtm="footer-link"
          >
            <SocialIconContainer src={pinterestSVG} alt="pinterest icon" />
          </a>
        </FooterIconsMobileContainer>
        <FooterTOS>
          <FooterTOSText>
            <StyledLink href="/privacy" data-gtm="footer-link">
              Privacy Policy
            </StyledLink>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <StyledLink href="/legal" data-gtm="footer-link">
              Legal
            </StyledLink>
          </FooterTOSText>
          <FooterIconsDesktopContainer>
            <a
              href="https://www.facebook.com/Leadpages"
              rel="noreferrer noopener"
              alt="Leadpages Facebook Page"
              target="_blank"
              data-gtm="footer-link"
            >
              <SocialIconContainer src={facebookSVG} alt="facebook icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/leadpages"
              rel="noreferrer noopener"
              alt="Leadpages LinkedIn Company Page"
              target="_blank"
              data-gtm="footer-link"
            >
              <SocialIconContainer src={linkedinSVG} alt="linkedin icon" />
            </a>
            <a
              href="https://www.twitter.com/Leadpages"
              rel="noreferrer noopener"
              alt="Leadpages Twitter Account"
              target="_blank"
              data-gtm="footer-link"
            >
              <SocialIconContainer src={twitterSVG} alt="twitter icon" />
            </a>
            <a
              href="https://www.instagram.com/leadpages/"
              rel="noreferrer noopener"
              alt="Leadpages Instagram Page"
              target="_blank"
              data-gtm="footer-link"
            >
              <SocialIconContainer src={instagramSVG} alt="instagram icon" />
            </a>
            <a
              href="https://www.pinterest.com/leadpagesHQ/"
              rel="noreferrer noopener"
              alt="Leadpages Pinterest Account"
              target="_blank"
              data-gtm="footer-link"
            >
              <SocialIconContainer src={pinterestSVG} alt="pinterest icon" />
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
}

Footer.propTypes = {
  slimFooter: PropTypes.bool,
}

export default Footer
