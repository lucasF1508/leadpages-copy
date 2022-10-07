import React from 'react'
import PropTypes from 'prop-types'
import Link from '@components/Link'
import { Link as ScrollLink } from 'react-scroll'
import { styled } from '@design'
import { withRouter } from 'next/router'
// images
import fullLogoSVG from '@legacy/assets/images/global/leadpages-wordmark_large.svg'
import logoIconSVG from '@legacy/assets/images/global/leadpages-symbol_large.svg'
// components
import NavDrawer from '@components/NavDrawer'

import { HEADER_HEIGHT } from '@legacy/constants'

const HeaderContainer = styled('header', {
  position: 'sticky',
  top: '0px',
  left: '0px',
  background: 'transparent',
  z: 1501,
  height: `${HEADER_HEIGHT}px`,

  '&:hover': {
    background: '$white',
  },

  '&.scrolled': {
    background: '$white',
    zIndex: 1501,
    borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

    '&:hover': {
      background: '$white !important',
    },
  },

  variants: {
    underlaidMenu: {
      true: {
        z: 50,
        '&:hover': {
          background: 'none',
        },
      },
    },
    isStartPageHeader: {
      true: {
        '&:hover': {
          background: 'none',
        },
      },
    },
  },
})

const DesktopMenuContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  height: '48px',
  paddingTop: '6px',
  position: 'relative',
  maxWidth: '1200px',
  margin: 'auto',

  '*': {
    '.active': {
      color: '$primary',
      borderBottom: '3px solid $colors$primary',
      textDecoration: 'none',
      paddingBottom: '0.5rem',
      marginRight: '16px',
      letterSpacing: '-0.1px',
      fontSize: '14px',
    },
  },
})

const MenuContainer = styled('div', {
  position: 'relative',
  paddingLeft: '1.5rem',

  '&.start-page-header': {
    '@media (max-width: 577px)': {
      padding: '0 !important',
      margin: '0 !important',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
})

const LoginSignUpContainer = styled('div', {
  height: '48px',
  display: 'flex',
  alignItems: 'center',

  '@media (max-width: 768px)': {
    paddingRight: '1.5rem',
  },

  '&.start-page-header': {
    '@media (max-width: 577px)': {
      display: 'none',
    },
    paddingRight: '0.5rem',
  },
})

const LoginContainer = styled('div', {
  display: 'inline-block',

  '&.no-login': {
    display: 'none',
  },
})

const SignUpContainer = styled('div', {
  display: 'inline-block',
  marginRight: '0px',
})

const PricesWatchDemoContainer = styled('div', {
  paddingRight: '1.5rem',
  height: '48px',
})

const WatchDemoContainer = styled('div', {
  display: 'inline-block',
})

const LinksContainer = styled('div', {
  display: 'inline-block',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  paddingLeft: '2.25rem',
  paddingRight: '0.25rem',
  whiteSpace: 'nowrap',
  transition: 'all 0.3s ease',

  '@media (max-width: 768px)': {
    display: 'none',
  },
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

const OutboundButtonLink = styled('a', {
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

const StyledLink = styled(Link, {
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

  '.active': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
    paddingBottom: '0.5rem',
    marginRight: '16px',
    letterSpacing: '-0.1px',
    fontSize: '14px',
  },

  '&:hover': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
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

const StartPageTrialOutboundLink = styled(OutboundLink, {
  '&:hover': {
    borderBottom: '3px solid transparent',
  },

  marginRight: '0px',
})

const StartPageTrialScrollingLink = styled(ScrollLink, {
  '&:hover': {
    borderBottom: '3px solid transparent',
  },
})

const StartPageLoginOutboundLink = styled(OutboundLink, {
  color: '$white',

  '&:hover': {
    color: '$white',
    borderBottom: '3px solid white',
  },

  '&.button-scrolled': {
    color: '$black',

    '&:hover': {
      color: '$primary',
      borderBottom: '3px solid $colors$primary',
    },
  },
})

const SignUpButton = styled('button', {
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
    bc: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $colors$primary',
  },

  '@media (max-width: 576px)': {
    display: 'none',
  },

  '&.start-page-header': {
    border: '3px solid rgba(255, 255, 255, 0.7)',
    color: 'white',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: 'white !important',
      color: '$primary !important',
      border: '3px solid white !important',
      boxShadow: `0 10px 10px 0 rgba(0, 0, 0, 0.26),
        0 14px 28px 0 rgba(0, 0, 0, 0.25) !important`,
    },

    '&.button-scrolled': {
      height: '48px',
    },
  },
})

const WatchDemoButton = styled('button', {
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
    bc: '$primary',
    color: '$white',
    cursor: 'pointer',
    border: '3px solid $colors$primary',
  },

  '@media (max-width: 568px)': {
    display: 'none',
  },
})

const FullLogoContainer = styled('img', {
  width: '146px',
  height: '24px',
  position: 'relative',
  top: '7px',
  display: 'inline',
  transition: 'left 0.3s ease',

  '@media (max-width: 576px)': {
    display: 'none',
  },

  '&:hover': {
    WebkitFilter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
    filter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
  },

  '&.hide-logo': {
    display: 'none',
  },

  '&.start-page-header': {
    filter: `invert(100%) sepia(98%) saturate(8%) hue-rotate(200deg)
      brightness(103%) contrast(100%)`,
    top: '0px !important',
    display: 'block',
  },

  '&.start-page-header-scrolled': {
    filter: 'brightness(0) saturate(100%)',
    display: 'block',
    top: '0px !important',

    '&:hover': {
      filter: `invert(18%) sepia(84%) saturate(3862%) hue-rotate(248deg)
        brightness(110%) contrast(101%)`,
    },
  },
})

const LogoIconContainer = styled('img', {
  width: '33px',
  height: '24px',
  position: 'relative',
  top: '7px',
  display: 'inline',
  transition: 'left 0.3s ease',

  '@media (min-width: 577px)': {
    display: 'none',
  },

  '&:hover': {
    WebkitFilter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
    filter: `invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%)`,
  },

  '&.show-logo': {
    display: 'inline',
  },

  '&.start-page-header': {
    display: 'none',
  },

  '&.start-page-header-scrolled': {
    display: 'none',
  },
})

const HeaderSubMenu = styled('div', {
  position: 'relative',
  width: '100%',
})

const ProductSubMenuContainer = styled('div', {
  background: '$white',
  marginLeft: '190px',
  maxWidth: '165px',
  boxShadow: `0 6px 12px 0 rgba(15, 12, 9, 0.3),
    0 12px 24px 0 rgba(15, 12, 9, 0.15)`,
  zIndex: 200,

  variants: {
    scrolled: {
      true: {
        ml: '75px',
      },
    },
  },
})

const ResourcesSubMenuContainer = styled('div', {
  background: '$white',
  marginLeft: '390px',
  maxWidth: '165px',
  boxShadow: `0 6px 12px 0 rgba(15, 12, 9, 0.3),
    0 12px 24px 0 rgba(15, 12, 9, 0.15)`,
  zIndex: 200,

  variants: {
    scrolled: {
      true: {
        ml: '275px',
      },
    },
  },
})

const DesktopSubMenuTextContainer = styled('div', {
  padding: '18px',
})

const SubMenuItem = styled('div', {
  paddingBottom: '0.5rem',
})

const SubMenuList = styled('ul', {
  paddingBottom: '0.5rem',
  paddingLeft: '18px',
})

const SubMenuListItem = styled('li', {
  '&::marker': {
    color: '$black',
  },
})

const ProductLinkContainer = styled('div', {
  padding: '1%',
})

const ResourcesLinkContainer = styled('div', {
  padding: '1%',
})

const ProductSubMenuLink = styled(Link, {
  textDecoration: 'none',
  fontFamily: `'Apercu Pro'`,
  fontSize: '14px',
  lineHeight: '20px',
  paddingBottom: '0.5rem',
  color: '$black',
  borderBottom: '3px solid transparent',
  display: 'inline',

  '.active': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
    paddingBottom: '0.5rem',
    marginRight: '16px',
    letterSpacing: '-0.1px',
    fontSize: '14px',
  },

  '.active-main-menu': {
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
    paddingBottom: '0.5rem',
    marginRight: '16px',
    letterSpacing: '-0.1px',
    fontSize: '14px',
  },

  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
    borderBottom: '3px solid $colors$primary',
  },
})

const subNavHoverTimeout = 150

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseOverProductLink: false,
      mouseOverProductMenu: false,
      mouseOverResourcesLink: false,
      mouseOverResourcesMenu: false,
      isScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { isScrolled } = this.state
    if (window.scrollY > 25) {
      return !isScrolled && this.setState({ isScrolled: true })
    }
    return isScrolled && this.setState({ isScrolled: false })
  }

  enterProductLink = () => {
    this.setState({ mouseOverProductLink: true })
  }

  leaveProductLink = () => {
    // Set a timeout so that the menu doesn't close before the
    // user has time to move their mouse over to it
    setTimeout(() => {
      this.setState({ mouseOverProductLink: false })
    }, subNavHoverTimeout)
  }

  enterProductMenu = () => {
    this.setState({ mouseOverProductMenu: true })
  }

  leaveProductMenu = () => {
    // Set a timeout so that the menu doesn't close if the
    // user is moving their mouse back to the link
    setTimeout(() => {
      this.setState({ mouseOverProductMenu: false })
    }, subNavHoverTimeout)
  }

  enterResourcesLink = () => {
    this.setState({ mouseOverResourcesLink: true })
  }

  leaveResourcesLink = () => {
    // Set a timeout so that the menu doesn't close before the
    // user has time to move their mouse over to it
    setTimeout(() => {
      this.setState({ mouseOverResourcesLink: false })
    }, subNavHoverTimeout)
  }

  enterResourcesMenu = () => {
    this.setState({ mouseOverResourcesMenu: true })
  }

  leaveResourcesMenu = () => {
    // Set a timeout so that the menu doesn't close if the
    // user is moving their mouse back to the link
    setTimeout(() => {
      this.setState({ mouseOverResourcesMenu: false })
    }, subNavHoverTimeout)
  }

  render() {
    const {
      mouseOverProductLink,
      mouseOverProductMenu,
      mouseOverResourcesLink,
      mouseOverResourcesMenu,
      isScrolled,
    } = this.state
    const {
      hideSignUpButton,
      isPricingMenu,
      isStartPageHeader,
      noLogin,
      scrollTarget,
      underlaidMenu,
      headerBkgColor,
      isPreviewPage,
      router,
    } = this.props

    if (isPreviewPage) return null

    const classScrolled = isScrolled ? 'scrolled' : ''
    const productMenuOpen = mouseOverProductLink || mouseOverProductMenu
    const resourcesMenuOpen = mouseOverResourcesLink || mouseOverResourcesMenu
    const path = router.asPath

    const mainNavigation = [
      {
        _id: 'product',
        condition: 'internal',
        url: '/product',
        onMouseEnter: this.enterProductLink,
        onMouseLeave: this.leaveProductLink,
        dataGtm: 'desktop-menu-link',
        label: 'Product',
      },
      {
        _id: 'templates',
        condition: 'internal',
        url: '/templates',
        dataGtm: 'desktop-menu-link',
        label: 'Templates',
      },
      {
        _id: 'pricing',
        condition: 'internal',
        url: '/pricing',
        dataGtm: 'desktop-menu-link',
        label: 'Pricing',
      },
      {
        _id: 'resources',
        condition: 'internal',
        url: '/marketing-resources',
        onMouseEnter: this.enterResourcesLink,
        onMouseLeave: this.leaveResourcesLink,
        dataGtm: 'desktop-menu-link',
        label: 'Resources',
      },
    ]

    const productSubmenu = [
      {
        _id: 'product',
        condition: 'internal',
        url: '/product',
        dataGtm: 'desktop-menu-link',
        label: 'Product Overview',
        isListItem: false,
      },
      {
        _id: 'websites',
        condition: 'internal',
        url: '/product/website-builder',
        dataGtm: 'desktop-menu-link',
        label: 'Websites',
        isListItem: true,
      },
      {
        _id: 'landing-page-builder',
        condition: 'internal',
        url: '/product/landing-page-builder',
        dataGtm: 'desktop-menu-link',
        label: 'Landing Pages',
        isListItem: true,
      },
      {
        _id: 'pop-up-builder',
        condition: 'internal',
        url: '/product/pop-up-builder',
        dataGtm: 'desktop-menu-link',
        label: 'Pop-up Forms',
        isListItem: true,
      },
      {
        _id: 'alert-bars',
        condition: 'internal',
        url: '/product/alert-bars',
        dataGtm: 'desktop-menu-link',
        label: 'Alert Bars',
        isListItem: true,
      },
      {
        _id: 'integrations',
        condition: 'internal',
        url: '/integrations',
        dataGtm: 'desktop-menu-link',
        label: 'Integrations',
        isListItem: false,
      },
      {
        _id: 'feature-index',
        condition: 'internal',
        url: '/product/feature-index',
        dataGtm: 'desktop-menu-link',
        label: 'Feature Index',
        isListItem: false,
      },
    ]

    const resourcesSubmenu = [
      {
        _id: 'resources',
        condition: 'internal',
        url: '/marketing-resources',
        ariaLabel: 'Resource Library',
        rel: 'noopener',
        dataGtm: 'desktop-menu-link',
        label: 'Resource Library',
      },
      {
        _id: 'blog',
        condition: 'external',
        url: 'https://www.leadpages.com/blog',
        ariaLabel: 'Leadpages Blog',
        rel: 'noopener',
        dataGtm: 'desktop-menu-link',
        label: 'Blog',
      },
      {
        _id: 'webinars',
        condition: 'external',
        url: 'https://lp.leadpages.com/webinars',
        ariaLabel: 'Leadpages Webinar',
        rel: 'noopener',
        dataGtm: 'desktop-menu-link',
        label: 'Webinars',
      },
      {
        _id: 'podcast',
        condition: 'external',
        url: 'https://lp.leadpages.com/podcast',
        ariaLabel: 'Leadpages Podcast',
        rel: 'noopener',
        dataGtm: 'desktop-menu-link',
        label: 'Podcast',
      },
      {
        _id: 'customer-stories',
        condition: 'internal',
        url: '/customers',
        ariaLabel: 'Customer Stories',
        rel: 'noopener',
        dataGtm: 'desktop-menu-link',
        label: 'Customer Stories',
      },
      {
        _id: 'support',
        condition: 'external',
        url: 'https://support.leadpages.com/hc/en-us',
        ariaLabel: 'Leadpages Support',
        rel: 'noopener',
        dataGtm: 'desktop-menu-link',
        label: 'Support',
      },
    ]

    return (
      <HeaderContainer
        scrolled={isScrolled.toString()}
        className={classScrolled}
        isStartPageHeader={isStartPageHeader}
        underlaidMenu={underlaidMenu}
        id="siteheader"
        css={
          headerBkgColor && !isScrolled
            ? {
                background: headerBkgColor,
                '&:hover': { background: headerBkgColor },
              }
            : {}
        }
      >
        <DesktopMenuContainer>
          <MenuContainer
            className={isStartPageHeader ? 'start-page-header' : ''}
          >
            <Link
              css={{ display: 'inline' }}
              condition="internal"
              url="/"
              data-gtm="desktop-menu-link"
            >
              <FullLogoContainer
                src={fullLogoSVG.src}
                alt="Leadpages full logo svg"
                className={`${isScrolled ? 'hide-logo' : ''} ${
                  isStartPageHeader ? 'start-page-header' : ''
                } ${
                  isStartPageHeader && isScrolled
                    ? 'start-page-header-scrolled'
                    : ''
                }`}
                css={isPricingMenu ? { top: 3 } : { top: 7 }}
              />
              <LogoIconContainer
                src={logoIconSVG.src}
                alt="leadpages logo icon svg"
                className={` ${isScrolled ? 'show-logo' : ''} ${
                  isStartPageHeader ? 'start-page-header' : ''
                } ${
                  isStartPageHeader && isScrolled
                    ? 'start-page-header-scrolled'
                    : ''
                }`}
              />
            </Link>
            {/* Links Conditional */}
            {!isPricingMenu && !isStartPageHeader && (
              <LinksContainer>
                {mainNavigation.map(
                  ({
                    _id,
                    condition,
                    url,
                    onMouseEnter,
                    onMouseLeave,
                    dataGtm,
                    label,
                  }) => (
                    <StyledLink
                      key={_id}
                      condition={condition}
                      url={url}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                      data-gtm={dataGtm}
                      className={
                        path.includes(_id) && 'active-main-menu active'
                      }
                    >
                      {label}
                    </StyledLink>
                  )
                )}
              </LinksContainer>
            )}
          </MenuContainer>
          <LoginSignUpContainer
            className={isStartPageHeader ? 'start-page-header' : ''}
          >
            {!isPricingMenu && (
              <LoginContainer className={noLogin ? 'no-login' : ''}>
                <LinksContainer>
                  {isStartPageHeader ? (
                    <StartPageLoginOutboundLink
                      condition="external"
                      url="https://my.leadpages.com/login/"
                      aria-label="Leadpages login"
                      rel="noopener"
                      target="_blank"
                      className={`${
                        isScrolled && 'button-scrolled'
                      } 'loginbutton'`}
                      data-gtm="mobile-menu-link_login-button"
                    >
                      Log in
                    </StartPageLoginOutboundLink>
                  ) : (
                    <OutboundLink
                      condition="external"
                      url="https://my.leadpages.com/login/"
                      aria-label="Leadpages login"
                      rel="noopener"
                      target="_blank"
                      className="loginbutton"
                      data-gtm="mobile-menu-link_login-button"
                    >
                      Log in
                    </OutboundLink>
                  )}
                </LinksContainer>
              </LoginContainer>
            )}
            <SignUpContainer>
              {!hideSignUpButton &&
                (isStartPageHeader ? (
                  scrollTarget ? (
                    <StartPageTrialScrollingLink
                      to={scrollTarget}
                      smooth
                      duration={500}
                      offset={-15}
                      aria-label="Try Start Plan Free"
                      data-gtm="mobile-menu-link"
                    >
                      <SignUpButton
                        className={
                          isScrolled ? 'button-scrolled' : 'start-page-header'
                        }
                      >
                        Try it Free
                      </SignUpButton>
                    </StartPageTrialScrollingLink>
                  ) : (
                    <StartPageTrialOutboundLink
                      condition="external"
                      url="https://my.leadpages.com/order-leadpages/12LcHxUf6q14/t/d3yy2ARDnfEVTPU7"
                      aria-label="Try Start Plan Free"
                      data-gtm="mobile-menu-link"
                    >
                      <SignUpButton
                        className={
                          isScrolled ? 'button-scrolled' : 'start-page-header'
                        }
                      >
                        Try it Free
                      </SignUpButton>
                    </StartPageTrialOutboundLink>
                  )
                ) : (
                  <StyledButtonLink
                    condition="internal"
                    url="/pricing"
                    aria-label="Start Free Trial"
                    data-gtm="mobile-menu-link"
                  >
                    <SignUpButton className={isScrolled && 'button-scrolled'}>
                      Start Free Trial
                    </SignUpButton>
                  </StyledButtonLink>
                ))}
            </SignUpContainer>

            <NavDrawer
              scrollTarget={scrollTarget}
              isPricingMenu={isPricingMenu}
              isStartPageHeader={isStartPageHeader}
              hideSignUpButton={hideSignUpButton}
            />
          </LoginSignUpContainer>

          {isPricingMenu && (
            <PricesWatchDemoContainer>
              <WatchDemoContainer>
                <OutboundButtonLink
                  condition="internal"
                  url="/demo"
                  aria-label="Start Free Trial"
                  data-gtm="desktop-menu-link"
                >
                  <WatchDemoButton className={isScrolled && 'button-scrolled'}>
                    Watch Demo
                  </WatchDemoButton>
                </OutboundButtonLink>
              </WatchDemoContainer>
            </PricesWatchDemoContainer>
          )}

          {productMenuOpen && (
            <HeaderSubMenu>
              <ProductSubMenuContainer
                onMouseEnter={this.enterProductMenu}
                onMouseLeave={this.leaveProductMenu}
                scrolled={isScrolled}
              >
                <DesktopSubMenuTextContainer>
                  {productSubmenu.map(
                    ({ _id, condition, url, dataGtm, label, isListItem }) => {
                      const Component = () => (
                        <ProductSubMenuLink
                          condition={condition}
                          url={url}
                          data-gtm={dataGtm}
                          className={path === url && 'active-main-menu active'}
                        >
                          {label}
                        </ProductSubMenuLink>
                      )

                      return isListItem ? (
                        <SubMenuList key={_id}>
                          <SubMenuListItem>
                            <ProductLinkContainer>
                              <Component />
                            </ProductLinkContainer>
                          </SubMenuListItem>
                        </SubMenuList>
                      ) : (
                        <SubMenuItem key={_id}>
                          <ProductLinkContainer>
                            <Component />
                          </ProductLinkContainer>
                        </SubMenuItem>
                      )
                    }
                  )}
                </DesktopSubMenuTextContainer>
              </ProductSubMenuContainer>
            </HeaderSubMenu>
          )}

          {resourcesMenuOpen && (
            <HeaderSubMenu>
              <ResourcesSubMenuContainer
                onMouseEnter={this.enterResourcesMenu}
                onMouseLeave={this.leaveResourcesMenu}
                scrolled={isScrolled}
              >
                <DesktopSubMenuTextContainer>
                  {resourcesSubmenu.map(
                    ({
                      _id,
                      condition,
                      url,
                      ariaLabel,
                      rel,
                      dataGtm,
                      label,
                    }) => {
                      const Component =
                        condition === 'internal' ? StyledLink : OutboundLink

                      return (
                        <SubMenuItem key={_id}>
                          <ResourcesLinkContainer>
                            <Component
                              condition={condition}
                              url={url}
                              aria-label={ariaLabel}
                              rel={rel}
                              data-gtm={dataGtm}
                              className={path === url && 'active'}
                            >
                              {label}
                            </Component>
                          </ResourcesLinkContainer>
                        </SubMenuItem>
                      )
                    }
                  )}
                </DesktopSubMenuTextContainer>
              </ResourcesSubMenuContainer>
            </HeaderSubMenu>
          )}
        </DesktopMenuContainer>
      </HeaderContainer>
    )
  }
}

Header.defaultProps = {
  hideSignUpButton: false,
  isPricingMenu: false,
  isStartPageHeader: false,
  noLogin: false,
  scrollTarget: '',
  underlaidMenu: false,
  headerBkgColor: null,
  isPreviewPage: false,
}

Header.propTypes = {
  hideSignUpButton: PropTypes.bool,
  isPricingMenu: PropTypes.bool,
  isStartPageHeader: PropTypes.bool,
  noLogin: PropTypes.bool,
  scrollTarget: PropTypes.string,
  underlaidMenu: PropTypes.bool,
  headerBkgColor: PropTypes.string,
  isPreviewPage: PropTypes.bool,
}

export default withRouter(Header)
