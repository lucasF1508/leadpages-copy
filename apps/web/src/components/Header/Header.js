import React from 'react'
import PropTypes from 'prop-types'
import Link from '@components/Link'
import { Link as ScrollLink } from 'react-scroll'
import { styled } from '@design'
// images
import burgerSVG from '@legacy/assets/images/global/burger.svg'
import closeSVG from '@legacy/assets/images/global/x_close.svg'
import fullLogoSVG from '@legacy/assets/images/global/leadpages-wordmark_large.svg'
import leftArrow from '@legacy/assets/images/global/arrow_left.svg'
import logoIconSVG from '@legacy/assets/images/global/leadpages-symbol_large.svg'
import rightArrow from '@legacy/assets/images/global/arrow_right.svg'

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
    background: '#fff',
    zIndex: 1501,
    borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
    '&:hover': {
      background: '#ffffff !important',
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
      '&:hover': {
        background: 'none',
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
      color: '#603eff',
      borderBottom: '3px solid #603eff',
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
      color: '#603eff',
      borderBottom: '3px solid #603eff',
      textDecoration: 'none',
      paddingBottom: '0.5rem',
      marginRight: '16px',
      letterSpacing: '-0.1px',
      fontSize: 'inherit',
    },
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
  top: '30px',
  right: '30px',
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
  top: '-3rem',
  display: 'inline',
})

const MobileMenuSubmenuHeadingContainer = styled('div', {
  position: 'relative',
  top: '-3rem',
  display: 'inline',
  cursor: 'pointer',
})

const LoginSignUpContainer = styled('div', {
  height: '48px',

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

const OutboundLink = styled('a', {
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

const MobileMenuLink = styled(Link, {
  textDecoration: 'none',
  color: '$textAlt',
  paddingBottom: '0.5rem',
  borderBottom: '3px solid transparent',

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

const MobileOutboundLink = styled('a', {
  textDecoration: 'none',
  color: '$textAlt',
  paddingBottom: '0.5rem',
  borderBottom: '3px solid transparent',

  '&:hover': {
    cursor: 'pointer',
    color: '$primary',
    borderBottom: '3px solid $colors$primary',
    textDecoration: 'none',
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

const BurgerIconContainer = styled('img', {
  width: '16px',
  height: '16px',
  position: 'relative',
  top: '2px',
  right: '3px',
  display: 'none',

  '@media (max-width: 576px)': {
    top: '16px',
  },

  '@media (max-width: 768px)': {
    display: 'inline',
  },

  '&:hover': {
    cursor: 'pointer',
  },

  '&.start-page-header': {
    filter: `invert(100%) sepia(100%) saturate(0%) hue-rotate(134deg)sp
      brightness(105%) contrast(103%)`,
  },

  '&.sign-up-button-hidden': {
    '@media (max-width: 768px)': {
      top: '16px',
    },
  },
})

const CloseIconContainer = styled('img', {
  width: '16px',
  height: '16px',
  position: 'relative',
  top: '0px',
  right: '-16px',
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

const ArrowLeft = styled('img', {
  width: '20px',
  height: '10px',
})

const ArrowRight = styled('img', {
  width: '20px',
  height: '10px',
})

const mobileMenuRouteActive = ({ isCurrent }) =>
  isCurrent ? { className: 'active active-mobile-menu' } : null

const mainMenuRouteActive = ({ isCurrent }) =>
  isCurrent ? { className: 'active-main-menu active' } : null

const mobileMenuSubRouteActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: 'active active-mobile-menu' } : null

const mainMenuSubRouteActive = ({ isPartiallyCurrent, location, href }) => {
  const isTemplateRoute =
    href === '/templates' && location.pathname.match(/templates\/?$/)
  return isPartiallyCurrent || isTemplateRoute
    ? { className: 'active-main-menu active' }
    : null
}

const subNavHoverTimeout = 150

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mobileMenuHidden: true,
      mobileProductMenuHidden: true,
      mobileResourcesMenuHidden: true,
      mouseOverProductLink: false,
      mouseOverProductMenu: false,
      mouseOverResourcesLink: false,
      mouseOverResourcesMenu: false,
      isScrolled: false,
    }

    this.hideMobileMenu = this.hideMobileMenu.bind(this)
    this.toggleMobileProductMenu = this.toggleMobileProductMenu.bind(this)
    this.hideMobileMenu = this.hideMobileMenu.bind(this)
    this.toggleMobileResourcesMenu = this.toggleMobileResourcesMenu.bind(this)
    this.showMobileMenu = this.showMobileMenu.bind(this)
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

  toggleMobileProductMenu() {
    const { mobileProductMenuHidden } = this.state
    this.setState({
      mobileProductMenuHidden: !mobileProductMenuHidden,
    })
  }

  toggleMobileResourcesMenu() {
    const { mobileResourcesMenuHidden } = this.state
    this.setState({
      mobileResourcesMenuHidden: !mobileResourcesMenuHidden,
    })
  }

  showMobileMenu() {
    this.setState({
      mobileMenuHidden: false,
      mobileProductMenuHidden: true,
      mobileResourcesMenuHidden: true,
    })
  }

  hideMobileMenu() {
    this.setState({
      mobileMenuHidden: true,
      mobileProductMenuHidden: true,
      mobileResourcesMenuHidden: true,
    })
  }

  render() {
    const {
      mouseOverProductLink,
      mouseOverProductMenu,
      mouseOverResourcesLink,
      mouseOverResourcesMenu,
      isScrolled,
      mobileMenuHidden,
      mobileProductMenuHidden,
      mobileResourcesMenuHidden,
    } = this.state
    const {
      hideSignUpButton,
      isPricingMenu,
      isStartPageHeader,
      noLogin,
      scrollTarget,
      underlaidMenu,
      headerBkgColor,
    } = this.props
    const classScrolled = isScrolled ? 'scrolled' : ''
    const productMenuOpen = mouseOverProductLink || mouseOverProductMenu
    const resourcesMenuOpen = mouseOverResourcesLink || mouseOverResourcesMenu

    return (
      <HeaderContainer
        scrolled={isScrolled}
        className={classScrolled}
        isStartPageHeader={isStartPageHeader}
        underlaidMenu={underlaidMenu}
        id="siteheader"
        style={
          headerBkgColor && !isScrolled
            ? { backgroundColor: headerBkgColor }
            : {}
        }
      >
        <DesktopMenuContainer>
          <MenuContainer
            className={isStartPageHeader ? 'start-page-header' : ''}
          >
            <Link condition="internal" url="/" data-gtm="desktop-menu-link">
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
                style={isPricingMenu ? { top: 3 } : { top: 7 }}
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
                <StyledLink
                  condition="internal"
                  getProps={mainMenuSubRouteActive}
                  url="/product"
                  onMouseEnter={this.enterProductLink}
                  onMouseLeave={this.leaveProductLink}
                  data-gtm="desktop-menu-link"
                  className="testing"
                >
                  Product
                </StyledLink>
                <StyledLink
                  condition="internal"
                  getProps={mainMenuSubRouteActive}
                  url="/templates"
                  data-gtm="desktop-menu-link"
                >
                  Templates
                </StyledLink>
                <StyledLink
                  condition="internal"
                  getProps={mainMenuSubRouteActive}
                  url="/pricing"
                  data-gtm="desktop-menu-link"
                >
                  Pricing
                </StyledLink>
                <StyledLink
                  condition="internal"
                  getProps={mainMenuSubRouteActive}
                  url="/marketing-resources"
                  onMouseEnter={this.enterResourcesLink}
                  onMouseLeave={this.leaveResourcesLink}
                  data-gtm="desktop-menu-link"
                >
                  Resources
                </StyledLink>
              </LinksContainer>
            )}
          </MenuContainer>
          <div>
            {!mobileMenuHidden && (
              <MobileMenuContainer>
                <MobileMenuSeparator />
                <TabletFlexbox>
                  <TabletMenuContainer />
                  <MobileMenuInnerContainer>
                    {!mobileProductMenuHidden && (
                      <MobileMenuInnerProductContainer>
                        <MobileMenuX onClick={this.hideMobileMenu}>
                          <CloseIconContainer
                            src={closeSVG.src}
                            alt="close icon svg"
                          />
                        </MobileMenuX>
                        <MobileMenuSubmenuHeadingContainer
                          onClick={this.toggleMobileProductMenu}
                        >
                          <ArrowLeft src={leftArrow.src} alt="left arrow" />
                          Product
                        </MobileMenuSubmenuHeadingContainer>
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/product"
                            data-gtm="mobile-menu-link"
                          >
                            Product Overview
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/product/website-builder"
                            data-gtm="mobile-menu-link"
                          >
                            Websites
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/product/landing-page-builder"
                            data-gtm="mobile-menu-link"
                          >
                            Landing Pages
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/product/pop-up-builder"
                            data-gtm="mobile-menu-link"
                          >
                            Pop-up Forms
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/product/alert-bars"
                            data-gtm="mobile-menu-link"
                          >
                            Alert Bars
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/integrations"
                            data-gtm="mobile-menu-link"
                          >
                            Integrations
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/product/feature-index"
                            data-gtm="mobile-menu-link"
                          >
                            Feature Index
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                      </MobileMenuInnerProductContainer>
                    )}

                    {!mobileResourcesMenuHidden && (
                      <MobileMenuInnerResourcesContainer>
                        <MobileMenuX onClick={this.hideMobileMenu}>
                          <CloseIconContainer
                            src={closeSVG.src}
                            alt="close icon svg"
                          />
                        </MobileMenuX>

                        <MobileMenuSubmenuHeadingContainer
                          onClick={this.toggleMobileResourcesMenu}
                        >
                          <ArrowLeft src={leftArrow.src} alt="left arrow" />
                          Resources
                        </MobileMenuSubmenuHeadingContainer>

                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/marketing-resources"
                            alt="marketing resources"
                            rel="noopener"
                            data-gtm="mobile-menu-link"
                          >
                            Resource Library
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileOutboundLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="https://www.leadpages.com/blog/"
                            alt="Leadpages blog"
                            rel="noopener"
                            data-gtm="mobile-menu-link"
                          >
                            Blog
                          </MobileOutboundLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileOutboundLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/webinars/"
                            alt="Leadpages webinar"
                            rel="noopener"
                            data-gtm="mobile-menu-link"
                          >
                            Webinars
                          </MobileOutboundLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileOutboundLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="https://www.leadpages.com/podcast"
                            alt="Leadpages podcast"
                            rel="noopener"
                            data-gtm="mobile-menu-link"
                          >
                            Podcast
                          </MobileOutboundLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="/customers"
                            alt="Leadpages podcast"
                            rel="noopener"
                            data-gtm="mobile-menu-link"
                          >
                            Customer Stories
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileOutboundLink
                            condition="internal"
                            getProps={mobileMenuRouteActive}
                            url="https://support.leadpages.com/hc/en-us"
                            alt="Leadpages support"
                            rel="noopener"
                            data-gtm="mobile-menu-link"
                          >
                            Support
                          </MobileOutboundLink>
                        </MobileMenuInnerItem>
                      </MobileMenuInnerResourcesContainer>
                    )}

                    <MobileMenuX onClick={this.hideMobileMenu}>
                      <CloseIconContainer
                        src={closeSVG.src}
                        alt="close icon svg"
                      />
                    </MobileMenuX>

                    <MobileMenuLogoContainer
                      src={fullLogoSVG.src}
                      alt="leadpages full logo svg"
                    />

                    <MobileMenuExpandableContainer
                      onClick={this.toggleMobileProductMenu}
                    >
                      <MobileMenuInnerItem getProps={mobileMenuSubRouteActive}>
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
                        getProps={mobileMenuRouteActive}
                        url="/templates"
                      >
                        Templates
                      </MobileMenuLink>
                    </MobileMenuInnerItem>
                    <MobileMenuInnerSeparator />
                    <MobileMenuInnerItem>
                      <MobileMenuLink
                        condition="internal"
                        getProps={mobileMenuRouteActive}
                        url="/pricing"
                      >
                        Pricing
                      </MobileMenuLink>
                    </MobileMenuInnerItem>
                    <MobileMenuInnerSeparator />
                    <MobileMenuExpandableContainer
                      onClick={this.toggleMobileResourcesMenu}
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
                          alt="Leadpages login"
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
                              alt="Start Free Trial"
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
                              condition="internal"
                              url={scrollTarget}
                              smooth
                              duration={500}
                              offset={-15}
                              alt="Start Free Trial"
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
                      alt="Leadpages login"
                      rel="noopener"
                      target="_blank"
                      className={`${
                        isScrolled ? 'button-scrolled' : ''
                      } 'loginbutton'`}
                      data-gtm="mobile-menu-link_login-button"
                    >
                      Log in
                    </StartPageLoginOutboundLink>
                  ) : (
                    <OutboundLink
                      condition="external"
                      url="https://my.leadpages.com/login/"
                      alt="Leadpages login"
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
                      condition="internal"
                      url={scrollTarget}
                      smooth
                      duration={500}
                      offset={-15}
                      alt="Try Start Plan Free"
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
                      alt="Try Start Plan Free"
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
                    alt="Start Free Trial"
                    data-gtm="mobile-menu-link"
                  >
                    <SignUpButton
                      className={isScrolled ? 'button-scrolled' : ''}
                    >
                      Start Free Trial
                    </SignUpButton>
                  </StyledButtonLink>
                ))}
              {!isPricingMenu && !isStartPageHeader && (
                <BurgerIconContainer
                  src={burgerSVG.src}
                  onClick={this.showMobileMenu}
                  alt="Burger Icon SVG"
                  className={`${
                    isStartPageHeader && !isScrolled ? 'start-page-header' : ''
                  } ${hideSignUpButton ? 'sign-up-button-hidden' : ''}`}
                />
              )}
            </SignUpContainer>
          </LoginSignUpContainer>

          {isPricingMenu && (
            <PricesWatchDemoContainer>
              <WatchDemoContainer>
                <OutboundButtonLink
                  condition="internal"
                  url="/demo"
                  alt="Start Free Trial"
                  data-gtm="desktop-menu-link"
                >
                  <WatchDemoButton
                    className={isScrolled ? 'button-scrolled' : ''}
                  >
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
                  <SubMenuItem>
                    <ProductLinkContainer>
                      <ProductSubMenuLink
                        condition="internal"
                        getProps={mainMenuRouteActive}
                        url="/product"
                        data-gtm="desktop-menu-link"
                      >
                        Product Overview
                      </ProductSubMenuLink>
                    </ProductLinkContainer>
                  </SubMenuItem>
                  <SubMenuList>
                    <SubMenuListItem>
                      <ProductLinkContainer>
                        <ProductSubMenuLink
                          condition="internal"
                          getProps={mainMenuRouteActive}
                          url="/product/website-builder"
                          data-gtm="desktop-menu-link"
                        >
                          Websites
                        </ProductSubMenuLink>
                      </ProductLinkContainer>
                    </SubMenuListItem>
                  </SubMenuList>
                  <SubMenuList>
                    <SubMenuListItem>
                      <ProductLinkContainer>
                        <ProductSubMenuLink
                          condition="internal"
                          getProps={mainMenuRouteActive}
                          url="/product/landing-page-builder"
                          data-gtm="desktop-menu-link"
                        >
                          Landing Pages
                        </ProductSubMenuLink>
                      </ProductLinkContainer>
                    </SubMenuListItem>
                  </SubMenuList>
                  <SubMenuList>
                    <SubMenuListItem>
                      <ProductLinkContainer>
                        <ProductSubMenuLink
                          condition="internal"
                          getProps={mainMenuRouteActive}
                          url="/product/pop-up-builder"
                          data-gtm="desktop-menu-link"
                        >
                          Pop-up Forms
                        </ProductSubMenuLink>
                      </ProductLinkContainer>
                    </SubMenuListItem>
                  </SubMenuList>
                  <SubMenuList>
                    <SubMenuListItem>
                      <ProductLinkContainer>
                        <ProductSubMenuLink
                          condition="internal"
                          getProps={mainMenuRouteActive}
                          url="/product/alert-bars"
                          data-gtm="desktop-menu-link"
                        >
                          Alert Bars
                        </ProductSubMenuLink>
                      </ProductLinkContainer>
                    </SubMenuListItem>
                  </SubMenuList>
                  <SubMenuItem>
                    <ProductLinkContainer>
                      <ProductSubMenuLink
                        condition="internal"
                        getProps={mainMenuRouteActive}
                        url="/integrations"
                        data-gtm="desktop-menu-link"
                      >
                        Integrations
                      </ProductSubMenuLink>
                    </ProductLinkContainer>
                  </SubMenuItem>
                  <SubMenuItem>
                    <ProductLinkContainer>
                      <ProductSubMenuLink
                        condition="internal"
                        getProps={mainMenuRouteActive}
                        url="/product/feature-index"
                        data-gtm="desktop-menu-link"
                      >
                        Feature Index
                      </ProductSubMenuLink>
                    </ProductLinkContainer>
                  </SubMenuItem>
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
                  <SubMenuItem>
                    <ResourcesLinkContainer>
                      <StyledLink
                        condition="internal"
                        url="/marketing-resources"
                        alt="Resource Library"
                        rel="noopener"
                        data-gtm="desktop-menu-link"
                        activeClassName="active"
                      >
                        Resource Library
                      </StyledLink>
                    </ResourcesLinkContainer>
                  </SubMenuItem>
                  <SubMenuItem>
                    <ResourcesLinkContainer>
                      <OutboundLink
                        condition="internal"
                        url="https://www.leadpages.com/blog/"
                        alt="Leadpages blog"
                        rel="noopener"
                        data-gtm="desktop-menu-link"
                      >
                        Blog
                      </OutboundLink>
                    </ResourcesLinkContainer>
                  </SubMenuItem>
                  <SubMenuItem>
                    <ResourcesLinkContainer>
                      <OutboundLink
                        condition="internal"
                        url="https://lp.leadpages.com/webinars/"
                        alt="Leadpages Webinar"
                        rel="noopener"
                        data-gtm="desktop-menu-link"
                      >
                        Webinars
                      </OutboundLink>
                    </ResourcesLinkContainer>
                  </SubMenuItem>
                  <SubMenuItem>
                    <ResourcesLinkContainer>
                      <OutboundLink
                        condition="internal"
                        url="https://lp.leadpages.com/podcast/"
                        alt="Leadpages podcast"
                        rel="noopener"
                        data-gtm="desktop-menu-link"
                      >
                        Podcast
                      </OutboundLink>
                    </ResourcesLinkContainer>
                  </SubMenuItem>
                  <SubMenuItem>
                    <ResourcesLinkContainer>
                      <StyledLink
                        condition="internal"
                        url="/customers"
                        alt="Customer Stories"
                        rel="noopener"
                        data-gtm="desktop-menu-link"
                        activeClassName="active"
                      >
                        Customer Stories
                      </StyledLink>
                    </ResourcesLinkContainer>
                  </SubMenuItem>
                  <SubMenuItem>
                    <ResourcesLinkContainer>
                      <OutboundLink
                        condition="external"
                        url="https://support.leadpages.com/hc/en-us"
                        alt="Leadpages Support"
                        rel="noopener"
                        data-gtm="desktop-menu-link"
                      >
                        Support
                      </OutboundLink>
                    </ResourcesLinkContainer>
                  </SubMenuItem>
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
}

Header.propTypes = {
  hideSignUpButton: PropTypes.bool,
  isPricingMenu: PropTypes.bool,
  isStartPageHeader: PropTypes.bool,
  noLogin: PropTypes.bool,
  scrollTarget: PropTypes.string,
  underlaidMenu: PropTypes.bool,
  headerBkgColor: PropTypes.string,
}

export default Header
