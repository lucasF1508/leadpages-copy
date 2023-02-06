import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { styled, darkTheme } from '@design'
import Link from '@components/Link'
import { Link as ScrollLink } from 'react-scroll'
// images
import fullLogoSVG from '@legacy/assets/images/global/leadpages-wordmark_large.svg'
import burgerSVG from '@legacy/assets/images/global/burger.svg'
import closeSVG from '@legacy/assets/images/global/x_close.svg'
import leftArrow from '@legacy/assets/images/global/arrow_left.svg'
import rightArrow from '@legacy/assets/images/global/arrow_right.svg'

const MobileMenuContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 55,
  width: '100%',
  height: '100vh',
  overflow: 'hidden',

  '*': {
    '.active': {
      color: '$primary',
      borderBottom: '3px solid $colors$primary',
      textDecoration: 'none',
      paddingBottom: '0.5rem',
      marginRight: '16px',
      letterSpacing: '-0.1px',
      fontSize: 'inherit',
    },
  },
})

const MobileMenuInnerItem = styled('div', {
  marginTop: '1rem',
  marginBottom: '1rem',
  color: '$textAlt',
  fontFamily: `'Apercu Pro'`,
  fontSize: '16px !important',
  lineHeight: '24px',

  '&:hover': {
    cursor: 'pointer',
  },
})

const TabletFlexbox = styled('div', {
  '@media (max-width: 576px)': {
    display: 'inline',
  },

  '@media (max-width: 768px)': {
    display: 'flex',
  },

  width: '100%',
  height: '100%',
})

const TabletMenuContainer = styled('div', {
  '@media (max-width: 576px)': {
    display: 'none',
  },

  '@media (max-width: 768px)': {
    position: 'relative',
    height: '100%',
    width: '60%',
    background: 'black',
    opacity: 0.7,
  },
})

const BurgerIconContainer = styled('img', {
  width: '16px',
  height: '16px',
  position: 'relative',
  right: '3px',
  display: 'none',
  ml: '16px',

  '@media (max-width: 768px)': {
    display: 'block',
  },

  '&:hover': {
    cursor: 'pointer',
  },

  [`.${darkTheme} &`]: {
    filter: `invert(100%) sepia(98%) saturate(8%) hue-rotate(200deg)
      brightness(103%) contrast(100%)`,
  },

  '&.start-page-header': {
    filter: `invert(100%) sepia(100%) saturate(0%) hue-rotate(134deg)sp
      brightness(105%) contrast(103%)`,
  },
})

const MobileMenuInnerContainer = styled('div', {
  position: 'relative',
  height: '100%',
  paddingTop: '5rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
  paddingBottom: '10rem',
  background: '$white',

  '@media (max-width: 576px)': {
    width: '100%',
  },

  '@media (min-width: 577px) and (max-width: 768px)': {
    width: '40%',
  },
})

const MobileMenuInnerProductContainer = styled('div', {
  zIndex: 101,
  padding: 0,
  position: 'relative',
  height: '100%',
  width: '100%',
  background: '$white',
})

const MobileMenuInnerResourcesContainer = styled('div', {
  zIndex: 60,
  padding: 0,
  position: 'relative',
  height: '100%',
  width: '100%',
  background: '$white',
})

const MobileMenuExpandableContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

const MobileMenuExpandableItem = styled(MobileMenuInnerItem, {})

const MobileMenuInnerSeparator = styled('hr', {
  backgroundColor: '#0f0c09',
  opacity: 0.08,
})

const MobileMenuLoginContainer = styled('div', {
  textAlign: 'center',
})

const MobileMenuLogin = styled('div', {
  color: '$textAlt',
  marginTop: '2rem',
  marginBottom: '2rem',
  fontFamily: `'Apercu Pro'`,
  fontSize: '14px',
  lineHeight: '20px',
})

const MobileMenuSignUp = styled('div', {})

const MobileMenuSignUpButton = styled('button', {
  height: '48px',
  width: '144px',
  color: '$primary',
  background: 'transparent',
  border: '3px solid $colors$secondary',
  borderRadius: '24px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '30px',
  textAlign: 'center',
  transition: 'all 0.3s ease',

  '&:hover': {
    backgroundColor: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $primary',
  },
})

const MobileMenuSeparator = styled('hr', {
  position: 'fixed',
  top: '5rem',
  left: 0,
  width: '100%',
  bc: '$text',
  opacity: 0.08,
})

const MobileMenuX = styled('div', {
  position: 'fixed',
  top: '23px',
  right: '26px',
  width: '33px',
  height: '24px',
  zIndex: 55,

  '&:hover': {
    cursor: 'pointer',
  },
})

const MobileMenuLogoContainer = styled('img', {
  width: '146px',
  height: '24px',
  position: 'relative',
  top: '-3.65rem',
  display: 'inline',
})

const MobileMenuSubmenuHeadingContainer = styled('div', {
  position: 'relative',
  top: '-3.65rem',
  display: 'inline',
  cursor: 'pointer',
})

const ScrollingButtonLink = styled(ScrollLink, {
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: 'inherit',
  paddingBottom: '0.5rem',
  marginRight: '16px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '14px',
  letterSpacing: '-0.1px',
  lineHeight: '20px',

  '&:hover': {
    cursor: 'pointer',
  },
})

const MobileMenuLink = styled(Link, {
  textDecoration: 'none',
  color: '$textAlt',
  paddingBottom: '0.5rem',
  borderBottom: '3px solid transparent',
  display: 'inline',

  '.active': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
    paddingBottom: '0.5rem',
    marginRight: '16px',
    letterSpacing: '-0.1px',
    fontSize: '16px !important',
  },

  '.active-mobile-menu': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
    paddingBottom: '0.5rem',
    marginRight: '16px',
    fontSize: '16px',
    lineHeight: '24px',
  },

  '&:hover': {
    cursor: 'pointer',
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
  },
})

const MobileOutboundLink = styled(Link, {
  textDecoration: 'none',
  color: '$textAlt',
  paddingBottom: '0.5rem',
  borderBottom: '3px solid transparent',
  display: 'inline',

  '&:hover': {
    cursor: 'pointer',
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
  },
})

const CloseIconContainer = styled('img', {
  width: '16px',
  height: '16px',
  position: 'relative',
  top: '0px',
  right: '-16px',
})

const ArrowLeft = styled('img', {
  width: '20px',
  height: '10px',
})

const ArrowRight = styled('img', {
  width: '20px',
  height: '10px',
})

const StyledButtonLink = styled(Link, {
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: 'inherit',
  paddingBottom: '0.5rem',
  marginRight: '16px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '14px',
  letterSpacing: '-0.1px',
  lineHeight: '20px',
  display: 'inline',

  '&:hover': {
    cursor: 'pointer',
  },
})

const OutboundLink = styled(Link, {
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  color: 'inherit',
  paddingBottom: '0.5rem',
  marginRight: '16px',
  fontFamily: `'Apercu Pro'`,
  fontSize: '14px',
  letterSpacing: '-0.1px',
  lineHeight: '20px',
  borderBottom: '3px solid transparent',
  display: 'inline',

  '&:hover': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    cursor: 'pointer',
  },
})

const mobileProductMenu = [
  {
    _id: 'product',
    condition: 'internal',
    url: '/product',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Product Overview',
  },
  {
    _id: 'websites',
    condition: 'internal',
    url: '/product/website-builder',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Websites',
  },
  {
    _id: 'landing-page-builder',
    condition: 'internal',
    url: '/product/landing-page-builder',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Landing Pages',
  },
  {
    _id: 'ai-engine',
    condition: 'internal',
    url: '/product/ai-engine',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'AI Engine',
  },
  {
    _id: 'pop-up-builder',
    condition: 'internal',
    url: '/product/pop-up-builder',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Pop-up Forms',
  },
  {
    _id: 'alert-bars',
    condition: 'internal',
    url: '/product/alert-bars',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Alert Bars',
  },
  {
    _id: 'integrations',
    condition: 'internal',
    url: '/integrations',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Integrations',
  },
  {
    _id: 'feature-index',
    condition: 'internal',
    url: '/product/feature-index',
    dataGtm: 'mobile-menu-link',
    hasSeparator: false,
    label: 'Feature Index',
  },
]

const mobileResourcesMenu = [
  {
    _id: 'marketing-resources',
    condition: 'internal',
    url: '/marketing-resources',
    ariaLabel: 'marketing resources',
    rel: 'noopener',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Resource Library',
  },
  {
    _id: 'blog',
    condition: 'external',
    url: 'https://www.leadpages.com/blog',
    ariaLabel: 'Leadpages blog',
    rel: 'noopener',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Blog',
  },
  {
    _id: 'webinars',
    condition: 'external',
    url: '/webinars',
    ariaLabel: 'Leadpages webinar',
    rel: 'noopener',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Webinars',
  },

  {
    _id: 'podcast',
    condition: 'external',
    url: 'https://www.leadpages.com/podcast',
    ariaLabel: 'Leadpages podcast',
    rel: 'noopener',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Podcast',
  },
  {
    _id: 'customers',
    condition: 'internal',
    url: '/customers',
    ariaLabel: 'Leadpages customers',
    dataGtm: 'mobile-menu-link',
    hasSeparator: true,
    label: 'Customer Stories',
  },
  {
    _id: 'support',
    condition: 'external',
    url: 'https://support.leadpages.com/hc/en-us',
    ariaLabel: 'Leadpages support',
    rel: 'noopener',
    dataGtm: 'mobile-menu-link',
    hasSeparator: false,
    label: 'Support',
  },
]

export default function NavDrawer({
  className,
  scrollTarget,
  isPricingMenu,
  isStartPageHeader,
  hideSignUpButton,
}) {
  const router = useRouter()
  const path = router.asPath

  const [isNavOpen, setNavOpen] = useState(false)
  const [isProductNavOpen, setProductNavOpen] = useState(false)
  const [isRousourcesNavOpen, setRousourcesNavOpen] = useState(false)

  const toggleMobileProductMenu = () => {
    setProductNavOpen(!isProductNavOpen)
  }

  const toggleMobileResourcesMenu = () => {
    setRousourcesNavOpen(!isRousourcesNavOpen)
  }

  const showMobileMenu = () => {
    setNavOpen(true)
    setProductNavOpen(false)
    setRousourcesNavOpen(false)
  }

  const hideMobileMenu = () => {
    setNavOpen(false)
    setProductNavOpen(false)
    setRousourcesNavOpen(false)
  }

  useEffect(() => {
    if (isNavOpen) {
      hideMobileMenu()
    }
  }, [router.asPath])

  return (
    <>
      <div className={className}>
        {isNavOpen && (
          <MobileMenuContainer>
            <MobileMenuSeparator />
            <TabletFlexbox>
              <TabletMenuContainer />
              <MobileMenuInnerContainer>
                {isProductNavOpen && (
                  <MobileMenuInnerProductContainer>
                    <MobileMenuX onClick={hideMobileMenu}>
                      <CloseIconContainer
                        src={closeSVG.src}
                        alt="close icon svg"
                      />
                    </MobileMenuX>
                    <MobileMenuSubmenuHeadingContainer
                      onClick={toggleMobileProductMenu}
                    >
                      <ArrowLeft src={leftArrow.src} alt="left arrow" />
                      Product
                    </MobileMenuSubmenuHeadingContainer>
                    {mobileProductMenu.map(
                      ({
                        _id,
                        condition,
                        url,
                        dataGtm,
                        hasSeparator,
                        label,
                      }) => (
                        <>
                          <MobileMenuInnerItem>
                            <MobileMenuLink
                              key={_id}
                              condition={condition}
                              url={url}
                              dataGtm={dataGtm}
                              className={
                                path === url && 'active active-mobile-menu'
                              }
                            >
                              {label}
                            </MobileMenuLink>
                          </MobileMenuInnerItem>
                          {hasSeparator && <MobileMenuInnerSeparator />}
                        </>
                      )
                    )}
                  </MobileMenuInnerProductContainer>
                )}

                {isRousourcesNavOpen && (
                  <MobileMenuInnerResourcesContainer>
                    <MobileMenuX onClick={hideMobileMenu}>
                      <CloseIconContainer
                        src={closeSVG.src}
                        alt="close icon svg"
                      />
                    </MobileMenuX>

                    <MobileMenuSubmenuHeadingContainer
                      onClick={toggleMobileResourcesMenu}
                    >
                      <ArrowLeft src={leftArrow.src} alt="left arrow" />
                      Resources
                    </MobileMenuSubmenuHeadingContainer>
                    {mobileResourcesMenu.map(
                      ({
                        _id,
                        condition,
                        url,
                        ariaLabel,
                        rel,
                        dataGtm,
                        hasSeparator,
                        label,
                      }) => {
                        const Component =
                          condition === 'internal'
                            ? MobileMenuLink
                            : MobileOutboundLink

                        return (
                          <>
                            <MobileMenuInnerItem key={_id}>
                              <Component
                                condition={condition}
                                url={url}
                                aria-label={ariaLabel}
                                rel={rel}
                                data-gtm={dataGtm}
                                className={
                                  path === url && 'active active-mobile-menu'
                                }
                              >
                                {label}
                              </Component>
                            </MobileMenuInnerItem>
                            {hasSeparator && <MobileMenuInnerSeparator />}
                          </>
                        )
                      }
                    )}
                  </MobileMenuInnerResourcesContainer>
                )}

                <MobileMenuX onClick={hideMobileMenu}>
                  <CloseIconContainer src={closeSVG.src} alt="close icon svg" />
                </MobileMenuX>

                <MobileMenuLogoContainer
                  src={fullLogoSVG.src}
                  alt="leadpages full logo svg"
                />

                <MobileMenuExpandableContainer
                  onClick={toggleMobileProductMenu}
                >
                  <MobileMenuInnerItem
                    className={
                      path === '/product' && 'active active-mobile-menu'
                    }
                  >
                    Product
                  </MobileMenuInnerItem>

                  <MobileMenuExpandableItem>
                    <ArrowRight src={rightArrow.src} alt="right arrow" />
                  </MobileMenuExpandableItem>
                </MobileMenuExpandableContainer>
                <MobileMenuInnerSeparator />
                <MobileMenuInnerItem>
                  <MobileMenuLink
                    condition="internal"
                    url="/templates"
                    className={
                      path === '/templates' && 'active active-mobile-menu'
                    }
                  >
                    Templates
                  </MobileMenuLink>
                </MobileMenuInnerItem>
                <MobileMenuInnerSeparator />
                <MobileMenuInnerItem>
                  <MobileMenuLink
                    condition="internal"
                    url="/pricing"
                    className={
                      path === '/pricing' && 'active active-mobile-menu'
                    }
                  >
                    Pricing
                  </MobileMenuLink>
                </MobileMenuInnerItem>
                <MobileMenuInnerSeparator />
                <MobileMenuExpandableContainer
                  onClick={toggleMobileResourcesMenu}
                >
                  <MobileMenuInnerItem>Resources</MobileMenuInnerItem>
                  <MobileMenuExpandableItem>
                    <ArrowRight src={rightArrow.src} alt="right arrow" />
                  </MobileMenuExpandableItem>
                </MobileMenuExpandableContainer>
                <MobileMenuInnerSeparator />
                <MobileMenuLoginContainer>
                  <MobileMenuLogin>
                    <OutboundLink
                      condition="internal"
                      url="https://my.leadpages.com/login/"
                      aria-label="Leadpages login"
                      rel="noopener"
                      target="_blank"
                      className="loginbutton"
                      data-gtm="login-button"
                    >
                      Log in
                    </OutboundLink>
                  </MobileMenuLogin>
                  {!hideSignUpButton && (
                    <MobileMenuSignUp>
                      {!scrollTarget && (
                        <StyledButtonLink
                          condition="internal"
                          url="/pricing"
                          aria-label="Start Free Trial"
                          data-gtm="mobile-menu-link"
                        >
                          <MobileMenuSignUpButton>
                            {isStartPageHeader
                              ? 'Try it Free'
                              : 'Start Free Trial'}
                          </MobileMenuSignUpButton>
                        </StyledButtonLink>
                      )}
                      {scrollTarget && (
                        <ScrollingButtonLink
                          to={scrollTarget}
                          smooth
                          duration={500}
                          offset={-15}
                          aria-label="Start Free Trial"
                          data-gtm="mobile-menu-link"
                        >
                          <MobileMenuSignUpButton>
                            {isStartPageHeader
                              ? 'Try it Free'
                              : 'Start Free Trial'}
                          </MobileMenuSignUpButton>
                        </ScrollingButtonLink>
                      )}
                    </MobileMenuSignUp>
                  )}
                </MobileMenuLoginContainer>
              </MobileMenuInnerContainer>
            </TabletFlexbox>
          </MobileMenuContainer>
        )}
      </div>
      {!isPricingMenu && !isStartPageHeader && (
        <BurgerIconContainer
          src={burgerSVG.src}
          onClick={showMobileMenu}
          alt="Burger Icon SVG"
          className={`${
            isStartPageHeader && !isScrolled ? 'start-page-header' : ''
          } ${hideSignUpButton && 'sign-up-button-hidden'}`}
        />
      )}
    </>
  )
}
