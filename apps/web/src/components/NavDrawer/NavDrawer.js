import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { styled, darkTheme } from '@design'
import Link from '@components/Link'

// images
import fullLogoSVG from '@legacy/assets/images/global/leadpages-wordmark_large.svg'
import burgerSVG from '@legacy/assets/images/global/burger.svg'
import closeSVG from '@legacy/assets/images/global/x_close.svg'
import rightArrow from '@legacy/assets/images/global/arrow_right.svg'
import {
  mobileExpertiseMenu,
  mobilePlatformMenu,
  mobileServicesMenu,
  mobileTemplatesMenu,
} from './NavDrawerMenus'
import NavDrawerSecondaryMenu from './NavDrawerSecondaryMenu'
import NavDrawerCTA from './NavDrawerCTA'

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

export const MobileMenuInnerItem = styled('div', {
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

  '@<navigationDesktopAlt': {
    display: 'flex',
  },

  width: '100%',
  height: '100%',
})

const TabletMenuContainer = styled('div', {
  '@media (max-width: 576px)': {
    display: 'none',
  },

  '@<navigationDesktopAlt': {
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

  '@<navigationDesktopAlt': {
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

export const MobileMenuInnerContainer = styled('div', {
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

  '@media (min-width: 577px) and (max-width: 1084px)': {
    width: '40%',
  },
})

const MobileMenuExpandableContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

const MobileMenuExpandableItem = styled(MobileMenuInnerItem, {})

export const MobileMenuInnerSeparator = styled('hr', {
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

const MobileMenuSeparator = styled('hr', {
  position: 'fixed',
  top: '5rem',
  left: 0,
  width: '100%',
  bc: '$text',
  opacity: 0.08,
})

export const MobileMenuX = styled('div', {
  position: 'fixed',
  top: '28px',
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
  top: '-3.5rem',
  display: 'inline',
})

export const MobileMenuLink = styled(Link, {
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

export const CloseIconContainer = styled('img', {
  width: '16px',
  height: '16px',
  position: 'relative',
  top: '0px',
  right: '-16px',
})

const ArrowRight = styled('img', {
  width: '20px',
  height: '10px',
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

export default function NavDrawer({
  className,
  scrollTarget,
  isPricingMenu,
  isStartPageHeader,
  hideSignUpButton,
  isScrolled,
  link,
  hideLoginButton,
  customCtaLink,
}) {
  const router = useRouter()
  const path = router.asPath

  const [isNavOpen, setNavOpen] = useState(false)
  const [isPlatformNavOpen, setPlatformNavOpen] = useState(false)
  const [isServicesNavOpen, setServicesNavOpen] = useState(false)
  const [isTemplatesNavOpen, setTemplatesNavOpen] = useState(false)
  const [isExpertiseNavOpen, setExpertiseNavOpen] = useState(false)

  const toggleMobilePlatformMenu = () => {
    setPlatformNavOpen(!isPlatformNavOpen)
  }

  const toggleMobileServicesMenu = () => {
    setServicesNavOpen(!isServicesNavOpen)
  }

  const toggleMobileExpertiseMenu = () => {
    setExpertiseNavOpen(!isExpertiseNavOpen)
  }

  const toggleMobileTemplatesMenu = () => {
    setTemplatesNavOpen(!isTemplatesNavOpen)
  }

  const showMobileMenu = () => {
    setNavOpen(true)
    setPlatformNavOpen(false)
    setExpertiseNavOpen(false)
    setServicesNavOpen(false)
    setTemplatesNavOpen(false)
  }

  const hideMobileMenu = () => {
    setNavOpen(false)
    setPlatformNavOpen(false)
    setExpertiseNavOpen(false)
    setServicesNavOpen(false)
    setTemplatesNavOpen(false)
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
                {isPlatformNavOpen && (
                  <NavDrawerSecondaryMenu
                    toggleMenu={toggleMobilePlatformMenu}
                    title="Platform"
                    hideMobileMenu={hideMobileMenu}
                    menuItems={mobilePlatformMenu}
                    path={path}
                  />
                )}

                {isExpertiseNavOpen && (
                  <NavDrawerSecondaryMenu
                    toggleMenu={toggleMobileExpertiseMenu}
                    title="Expertise"
                    hideMobileMenu={hideMobileMenu}
                    menuItems={mobileExpertiseMenu}
                    path={path}
                  />
                )}

                {isTemplatesNavOpen && (
                  <NavDrawerSecondaryMenu
                    toggleMenu={toggleMobileTemplatesMenu}
                    title="Templates"
                    hideMobileMenu={hideMobileMenu}
                    menuItems={mobileTemplatesMenu}
                    path={path}
                  />
                )}

                {isServicesNavOpen && (
                  <NavDrawerSecondaryMenu
                    toggleMenu={toggleMobileServicesMenu}
                    title="Services"
                    hideMobileMenu={hideMobileMenu}
                    menuItems={mobileServicesMenu}
                    path={path}
                  />
                )}

                <MobileMenuX onClick={hideMobileMenu}>
                  <CloseIconContainer src={closeSVG.src} alt="close icon svg" />
                </MobileMenuX>

                <MobileMenuLogoContainer
                  src={fullLogoSVG.src}
                  alt="leadpages full logo svg"
                />

                <MobileMenuExpandableContainer
                  onClick={toggleMobilePlatformMenu}
                >
                  <MobileMenuInnerItem
                    className={
                      path === '/platform' && 'active active-mobile-menu'
                    }
                  >
                    Platform
                  </MobileMenuInnerItem>

                  <MobileMenuExpandableItem>
                    <ArrowRight src={rightArrow.src} alt="right arrow" />
                  </MobileMenuExpandableItem>
                </MobileMenuExpandableContainer>

                <MobileMenuInnerSeparator />

                <MobileMenuExpandableContainer
                  onClick={toggleMobileServicesMenu}
                >
                  <MobileMenuInnerItem
                    className={
                      path === '/services' && 'active active-mobile-menu'
                    }
                  >
                    Services
                  </MobileMenuInnerItem>

                  <MobileMenuExpandableItem>
                    <ArrowRight src={rightArrow.src} alt="right arrow" />
                  </MobileMenuExpandableItem>
                </MobileMenuExpandableContainer>

                <MobileMenuInnerSeparator />

                <MobileMenuExpandableContainer
                  onClick={toggleMobileTemplatesMenu}
                >
                  <MobileMenuInnerItem
                    className={
                      path === '/templates' && 'active active-mobile-menu'
                    }
                  >
                    Templates
                  </MobileMenuInnerItem>

                  <MobileMenuExpandableItem>
                    <ArrowRight src={rightArrow.src} alt="right arrow" />
                  </MobileMenuExpandableItem>
                </MobileMenuExpandableContainer>

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
                  onClick={toggleMobileExpertiseMenu}
                >
                  <MobileMenuInnerItem
                    className={
                      path === '/marketing-resources' &&
                      'active active-mobile-menu'
                    }
                  >
                    Expertise
                  </MobileMenuInnerItem>

                  <MobileMenuExpandableItem>
                    <ArrowRight src={rightArrow.src} alt="right arrow" />
                  </MobileMenuExpandableItem>
                </MobileMenuExpandableContainer>

                <MobileMenuInnerSeparator />

                <MobileMenuLoginContainer>
                  <MobileMenuLogin>
                    {!hideLoginButton && (
                      <OutboundLink
                        condition="external"
                        url="https://my.leadpages.com/login/"
                        aria-label="Leadpages login"
                        rel="noopener"
                        target="_blank"
                        className="loginbutton"
                        data-gtm="login-button"
                      >
                        Log in
                      </OutboundLink>
                    )}
                  </MobileMenuLogin>
                  <MobileMenuSignUp>
                    <NavDrawerCTA
                      hideSignUpButton={hideSignUpButton}
                      isStartPageHeader={isStartPageHeader}
                      scrollTarget={scrollTarget}
                      link={link}
                      customCtaLink={customCtaLink}
                    />
                  </MobileMenuSignUp>
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
