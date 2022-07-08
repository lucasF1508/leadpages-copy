import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import styled from 'styled-components'
// images
import burgerSVG from '../../legacy/assets/images/global/burger.svg'
import closeSVG from '../../legacy/assets/images/global/x_close.svg'
import fullLogoSVG from '../../legacy/assets/images/global/leadpages-wordmark_large.svg'
import leftArrow from '../../legacy/assets/images/global/arrow_left.svg'
import logoIconSVG from '../../legacy/assets/images/global/leadpages-symbol_large.svg'
import rightArrow from '../../legacy/assets/images/global/arrow_right.svg'

import { HEADER_HEIGHT } from '../../legacy/constants'

const HeaderContainer = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
  background: transparent;
  z-index: ${(props) => (props.underlaidMenu ? 50 : 1501)};
  height: ${HEADER_HEIGHT}px;
  &:hover {
    background: ${(props) =>
      props.isStartPageHeader || props.underlaidMenu ? 'none' : '#ffffff'};
  }
  &.scrolled {
    background: #fff;
    z-index: 1501;
    border-bottom: 1px solid rgba(15, 12, 9, 0.08);
    &:hover {
      background: #ffffff !important;
    }
  }
`

const DesktopMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 48px;
  padding-top: 6px;
  position: relative;
  max-width: 1200px;
  margin: auto;
  * {
    .active {
      color: #603eff;
      border-bottom: 3px solid #603eff;
      text-decoration: none;
      padding-bottom: 0.5rem;
      margin-right: 16px;
      letter-spacing: -0.1px;
      font-size: 14px;
    }
  }
`

const MenuContainer = styled.div`
  position: relative;
  padding-left: 1.5rem;
  &.start-page-header {
    @media (max-width: 577px) {
      padding: 0 !important;
      margin: 0 !important;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`

const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 55;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  * {
    .active {
      color: #603eff;
      border-bottom: 3px solid #603eff;
      text-decoration: none;
      padding-bottom: 0.5rem;
      margin-right: 16px;
      letter-spacing: -0.1px;
      font-size: inherit;
    }
  }
`

const TabletFlexbox = styled.div`
  @media (max-width: 576px) {
    display: inline;
  }
  @media (max-width: 768px) {
    display: flex;
  }
  width: 100%;
  height: 100%;
`

const TabletMenuContainer = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
  @media (max-width: 768px) {
    position: relative;
    height: 100%;
    width: 60%;
    background: black;
    opacity: 0.7;
  }
`

const MobileMenuInnerContainer = styled.div`
  position: relative;
  height: 100%;
  padding-top: 5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 10rem;
  background: #ffffff;
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    width: 40%;
  }
`

const MobileMenuInnerProductContainer = styled.div`
  z-index: 101;
  padding: 0;
  position: relative;
  height: 100%;
  width: 100%;
  background: #ffffff;
`

const MobileMenuInnerResourcesContainer = styled.div`
  z-index: 60;
  padding: 0;
  position: relative;
  height: 100%;
  width: 100%;
  background: #ffffff;
`

const MobileMenuExpandableContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const MobileMenuInnerItem = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 16px !important;
  line-height: 24px;
  &:hover {
    cursor: pointer;
  }
`

const MobileMenuExpandableItem = styled(MobileMenuInnerItem)``

const MobileMenuInnerSeparator = styled.hr`
  background-color: #0f0c09;
  opacity: 0.08;
`

const MobileMenuLoginContainer = styled.div`
  text-align: center;
`
const MobileMenuLogin = styled.div`
  color: #575452;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
`

const MobileMenuSignUp = styled.div``

const MobileMenuSignUpButton = styled.button`
  height: 48px;
  width: 144px;
  color: #603eff;
  background: transparent;
  border: 3px solid #d1c5f9;
  border-radius: 24px;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #603eff;
    color: #ffffff;
    cursor: pointer;
    border: 3px solid #603eff;
  }
`

const MobileMenuSeparator = styled.hr`
  position: fixed;
  top: 5rem;
  left: 0;
  width: 100%;
  background-color: #0f0c09;
  opacity: 0.08;
`

const MobileMenuX = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  width: 33px;
  height: 24px;
  z-index: 55;
  &:hover {
    cursor: pointer;
  }
`

const MobileMenuLogoContainer = styled.img`
  width: 146px;
  height: 24px;
  position: relative;
  top: -3rem;
  display: inline;
`

const MobileMenuSubmenuHeadingContainer = styled.div`
  position: relative;
  top: -3rem;
  display: inline;
  cursor: pointer;
`

const LoginSignUpContainer = styled.div`
  height: 48px;
  @media (max-width: 768px) {
    padding-right: 1.5rem;
  }
  &.start-page-header {
    @media (max-width: 577px) {
      display: none;
    }
    padding-right: 0.5rem;
  }
`

const LoginContainer = styled.div`
  display: inline-block;
  &.no-login {
    display: none;
  }
`

const SignUpContainer = styled.div`
  display: inline-block;
  margin-right: 0px;
`

const PricesWatchDemoContainer = styled.div`
  padding-right: 1.5rem;
  height: 48px;
`

const WatchDemoContainer = styled.div`
  display: inline-block;
`

const LinksContainer = styled.div`
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2.25rem;
  padding-right: 0.25rem;
  white-space: nowrap;
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    display: none;
  }
`

const StyledButtonLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: inherit;
  padding-bottom: 0.5rem;
  margin-right: 16px;
  font-family: 'Apercu Pro';
  font-size: 14px;
  letter-spacing: -0.1px;
  line-height: 20px;
  &:hover {
    cursor: pointer;
  }
`

const OutboundButtonLink = styled.a`
  text-decoration: none;
  white-space: nowrap;
  color: inherit;
  padding-bottom: 0.5rem;
  margin-right: 16px;
  font-family: 'Apercu Pro';
  font-size: 14px;
  letter-spacing: -0.1px;
  line-height: 20px;
  &:hover {
    cursor: pointer;
  }
`

const ScrollingButtonLink = styled(ScrollLink)`
  text-decoration: none;
  white-space: nowrap;
  color: inherit;
  padding-bottom: 0.5rem;
  margin-right: 16px;
  font-family: 'Apercu Pro';
  font-size: 14px;
  letter-spacing: -0.1px;
  line-height: 20px;
  &:hover {
    cursor: pointer;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: inherit;
  padding-bottom: 0.5rem;
  margin-right: 16px;
  font-family: 'Apercu Pro';
  font-size: 14px;
  letter-spacing: -0.1px;
  line-height: 20px;
  border-bottom: 3px solid transparent;
  .active {
    color: #603eff;
    border-bottom: 3px solid #603eff;
    text-decoration: none;
    padding-bottom: 0.5rem;
    margin-right: 16px;
    letter-spacing: -0.1px;
    font-size: 14px;
  }
  &:hover {
    color: #603eff;
    border-bottom: 3px solid #603eff;
    cursor: pointer;
  }
`

const OutboundLink = styled.a`
  text-decoration: none;
  white-space: nowrap;
  color: inherit;
  padding-bottom: 0.5rem;
  margin-right: 16px;
  font-family: 'Apercu Pro';
  font-size: 14px;
  letter-spacing: -0.1px;
  line-height: 20px;
  border-bottom: 3px solid transparent;
  &:hover {
    color: #603eff;
    border-bottom: 3px solid #603eff;
    cursor: pointer;
  }
`

const StartPageTrialOutboundLink = styled(OutboundLink)`
  &:hover {
    border-bottom: 3px solid transparent;
  }
  margin-right: 0px;
`

const StartPageTrialScrollingLink = styled(ScrollLink)`
  &:hover {
    border-bottom: 3px solid transparent;
  }
`

const StartPageLoginOutboundLink = styled(OutboundLink)`
  color: white;
  &:hover {
    color: white;
    border-bottom: 3px solid white;
  }
  &.button-scrolled {
    color: black;
    &:hover {
      color: #603eff;
      border-bottom: 3px solid #603eff;
    }
  }
`

const MobileMenuLink = styled(Link)`
  text-decoration: none;
  color: #575452;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid transparent;
  .active {
    color: #603eff;
    border-bottom: 3px solid #603eff;
    text-decoration: none;
    padding-bottom: 0.5rem;
    margin-right: 16px;
    letter-spacing: -0.1px;
    font-size: 16px !important;
  }
  .active-mobile-menu {
    color: #603eff;
    border-bottom: 3px solid #603eff;
    text-decoration: none;
    padding-bottom: 0.5rem;
    margin-right: 16px;
    font-size: 16px;
    line-height: 24px;
  }
  &:hover {
    cursor: pointer;
    color: #603eff;
    border-bottom: 3px solid #603eff;
    text-decoration: none;
  }
`

const MobileOutboundLink = styled.a`
  text-decoration: none;
  color: #575452;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid transparent;
  &:hover {
    cursor: pointer;
    color: #603eff;
    border-bottom: 3px solid #603eff;
    text-decoration: none;
  }
`

const SignUpButton = styled.button`
  height: 48px;
  width: 144px;
  color: #603eff;
  background: transparent;
  border: 3px solid #d1c5f9;
  border-radius: 24px;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #603eff;
    color: #ffffff;
    cursor: pointer;
    border: 3px solid #603eff;
  }
  @media (max-width: 576px) {
    display: none;
  }
  &.start-page-header {
    border: 3px solid rgba(255, 255, 255, 0.7);
    color: white;
    text-decoration: none;
    &:hover {
      background-color: white !important;
      color: #603eff !important;
      border: 3px solid white !important;
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.26),
        0 14px 28px 0 rgba(0, 0, 0, 0.25) !important;
    }
    &.button-scrolled {
      height: 48px;
    }
  }
`

const WatchDemoButton = styled.button`
  height: 48px;
  width: 144px;
  color: #603eff;
  background: transparent;
  border: 3px solid #d1c5f9;
  border-radius: 24px;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    background-color: #603eff;
    color: #ffffff;
    cursor: pointer;
    border: 3px solid #603eff;
  }
  @media (max-width: 568px) {
    display: none;
  }
`

const FullLogoContainer = styled.img`
  width: 146px;
  height: 24px;
  position: relative;
  top: 7px;
  display: inline;
  transition: left 0.3s ease;
  @media (max-width: 576px) {
    display: none;
  }
  &:hover {
    -webkit-filter: invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%);
    filter: invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%);
  }
  &.hide-logo {
    display: none;
  }
  &.start-page-header {
    filter: invert(100%) sepia(98%) saturate(8%) hue-rotate(200deg)
      brightness(103%) contrast(100%);
    top: 0px !important;
    display: block;
  }
  &.start-page-header-scrolled {
    filter: brightness(0) saturate(100%);
    display: block;
    top: 0px !important;
    &:hover {
      filter: invert(18%) sepia(84%) saturate(3862%) hue-rotate(248deg)
        brightness(110%) contrast(101%);
    }
  }
`

const LogoIconContainer = styled.img`
  width: 33px;
  height: 24px;
  position: relative;
  top: 7px;
  display: inline;
  transition: left 0.3s ease;
  @media (min-width: 577px) {
    display: none;
  }
  &:hover {
    -webkit-filter: invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%);
    filter: invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg)
      brightness(101%) contrast(103%);
  }
  &.show-logo {
    display: inline;
  }
  &.start-page-header {
    display: none;
  }
  &.start-page-header-scrolled {
    display: none;
  }
`

const BurgerIconContainer = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
  right: 3px;
  display: none;
  @media (max-width: 576px) {
    top: 16px;
  }
  @media (max-width: 768px) {
    display: inline;
  }
  &:hover {
    cursor: pointer;
  }
  &.start-page-header {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(134deg)
      brightness(105%) contrast(103%);
  }
  &.sign-up-button-hidden {
    @media (max-width: 768px) {
      top: 16px;
    }
  }
`

const CloseIconContainer = styled.img`
  width: 16px;
  height: 16px;
  position: relative;
  top: 0px;
  right: -16px;
`

const HeaderSubMenu = styled.div`
  position: relative;
  width: 100%;
`

const ProductSubMenuContainer = styled.div`
  background: #ffffff;
  margin-left: 190px;
  max-width: 165px;
  box-shadow: 0 6px 12px 0 rgba(15, 12, 9, 0.3),
    0 12px 24px 0 rgba(15, 12, 9, 0.15);
  z-index: 200;
  ${(props) => (props.scrolled ? 'margin-left: 75px;' : 'margin-left: 190px;')};
`

const ResourcesSubMenuContainer = styled.div`
  background: #ffffff;
  margin-left: 390px;
  ${(props) =>
    props.scrolled ? 'margin-left: 275px;' : 'margin-left: 390px;'};
  max-width: 165px;
  box-shadow: 0 6px 12px 0 rgba(15, 12, 9, 0.3),
    0 12px 24px 0 rgba(15, 12, 9, 0.15);
  z-index: 200;
`

const DesktopSubMenuTextContainer = styled.div`
  padding: 18px;
`

const SubMenuItem = styled.div`
  padding-bottom: 0.5rem;
`

const SubMenuList = styled.ul`
  padding-bottom: 0.5rem;
  padding-left: 18px;
`

const SubMenuListItem = styled.li`
  padding-bottom: 0.5rem;
  list-style: none;

  &::before {
    color: #575452;
    content: '\2022';
  }
`

const ProductLinkContainer = styled.div`
  padding: 1%;
`

const ResourcesLinkContainer = styled.div`
  padding: 1%;
`

const ProductSubMenuLink = styled(Link)`
  text-decoration: none;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  padding-bottom: 0.5rem;
  color: #000000;
  border-bottom: 3px solid transparent;
  .active {
    color: #603eff;
    border-bottom: 3px solid #603eff;
    text-decoration: none;
    padding-bottom: 0.5rem;
    margin-right: 16px;
    letter-spacing: -0.1px;
    font-size: 14px;
  }
  .active-main-menu {
    color: #603eff;
    border-bottom: 3px solid #603eff;
    text-decoration: none;
    padding-bottom: 0.5rem;
    margin-right: 16px;
    letter-spacing: -0.1px;
    font-size: 14px;
  }
  &:hover {
    color: #603eff;
    cursor: pointer;
    border-bottom: 3px solid #603eff;
  }
`

const ArrowLeft = styled.img`
  width: 20px;
  height: 10px;
`

const ArrowRight = styled.img`
  width: 20px;
  height: 10px;
`

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
            {/* <Link href="/" data-gtm="desktop-menu-link">
              <>
                <FullLogoContainer
                  src={fullLogoSVG}
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
                  src={logoIconSVG}
                  alt="leadpages logo icon svg"
                  className={` ${isScrolled ? 'show-logo' : ''} ${
                    isStartPageHeader ? 'start-page-header' : ''
                  } ${
                    isStartPageHeader && isScrolled
                      ? 'start-page-header-scrolled'
                      : ''
                  }`}
                />
              </>
            </Link> */}
            {/* Links Conditional */}
            {!isPricingMenu && !isStartPageHeader && (
              <LinksContainer>
                <StyledLink
                  getProps={mainMenuSubRouteActive}
                  href="/product"
                  onMouseEnter={this.enterProductLink}
                  onMouseLeave={this.leaveProductLink}
                  data-gtm="desktop-menu-link"
                  className="testing"
                >
                  Product
                </StyledLink>
                <StyledLink
                  getProps={mainMenuSubRouteActive}
                  href="/templates"
                  data-gtm="desktop-menu-link"
                >
                  Templates
                </StyledLink>
                <StyledLink
                  getProps={mainMenuSubRouteActive}
                  href="/pricing"
                  data-gtm="desktop-menu-link"
                >
                  Pricing
                </StyledLink>
                <StyledLink
                  getProps={mainMenuSubRouteActive}
                  href="/marketing-resources"
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
                            src={closeSVG}
                            alt="close icon svg"
                          />
                        </MobileMenuX>
                        <MobileMenuSubmenuHeadingContainer
                          onClick={this.toggleMobileProductMenu}
                        >
                          <ArrowLeft src={leftArrow} alt="left arrow" />
                          Product
                        </MobileMenuSubmenuHeadingContainer>
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            getProps={mobileMenuRouteActive}
                            href="/product"
                            data-gtm="mobile-menu-link"
                          >
                            Product Overview
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            getProps={mobileMenuRouteActive}
                            href="/product/website-builder"
                            data-gtm="mobile-menu-link"
                          >
                            Websites
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            getProps={mobileMenuRouteActive}
                            href="/product/landing-page-builder"
                            data-gtm="mobile-menu-link"
                          >
                            Landing Pages
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            getProps={mobileMenuRouteActive}
                            href="/product/pop-up-builder"
                            data-gtm="mobile-menu-link"
                          >
                            Pop-up Forms
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            getProps={mobileMenuRouteActive}
                            href="/product/alert-bars"
                            data-gtm="mobile-menu-link"
                          >
                            Alert Bars
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            getProps={mobileMenuRouteActive}
                            href="/integrations"
                            data-gtm="mobile-menu-link"
                          >
                            Integrations
                          </MobileMenuLink>
                        </MobileMenuInnerItem>
                        <MobileMenuInnerSeparator />
                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            getProps={mobileMenuRouteActive}
                            href="/product/feature-index"
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
                            src={closeSVG}
                            alt="close icon svg"
                          />
                        </MobileMenuX>

                        <MobileMenuSubmenuHeadingContainer
                          onClick={this.toggleMobileResourcesMenu}
                        >
                          <ArrowLeft src={leftArrow} alt="left arrow" />
                          Resources
                        </MobileMenuSubmenuHeadingContainer>

                        <MobileMenuInnerItem>
                          <MobileMenuLink
                            getProps={mobileMenuRouteActive}
                            href="/marketing-resources"
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
                            getProps={mobileMenuRouteActive}
                            href="https://www.leadpages.com/blog/"
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
                            getProps={mobileMenuRouteActive}
                            href="/webinars/"
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
                            getProps={mobileMenuRouteActive}
                            href="https://www.leadpages.com/podcast"
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
                            getProps={mobileMenuRouteActive}
                            href="/customers"
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
                            getProps={mobileMenuRouteActive}
                            href="https://support.leadpages.com/hc/en-us"
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
                      <CloseIconContainer src={closeSVG} alt="close icon svg" />
                    </MobileMenuX>

                    <MobileMenuLogoContainer
                      src={fullLogoSVG}
                      alt="leadpages full logo svg"
                    />

                    <MobileMenuExpandableContainer
                      onClick={this.toggleMobileProductMenu}
                    >
                      <MobileMenuInnerItem getProps={mobileMenuSubRouteActive}>
                        Product
                      </MobileMenuInnerItem>

                      <MobileMenuExpandableItem>
                        <ArrowRight src={rightArrow} alt="right arrow" />
                      </MobileMenuExpandableItem>
                    </MobileMenuExpandableContainer>
                    <MobileMenuInnerSeparator />
                    <MobileMenuInnerItem>
                      <MobileMenuLink
                        getProps={mobileMenuRouteActive}
                        href="/templates"
                      >
                        Templates
                      </MobileMenuLink>
                    </MobileMenuInnerItem>
                    <MobileMenuInnerSeparator />
                    <MobileMenuInnerItem>
                      <MobileMenuLink
                        getProps={mobileMenuRouteActive}
                        href="/pricing"
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
                        <ArrowRight src={rightArrow} alt="right arrow" />
                      </MobileMenuExpandableItem>
                    </MobileMenuExpandableContainer>
                    <MobileMenuInnerSeparator />
                    <MobileMenuLoginContainer>
                      <MobileMenuLogin>
                        <OutboundLink
                          href="https://my.leadpages.com/login/"
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
                              href="/pricing"
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
                              href={scrollTarget}
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
                      href="https://my.leadpages.com/login/"
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
                      href="https://my.leadpages.com/login/"
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
                      href={scrollTarget}
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
                      href="https://my.leadpages.com/order-leadpages/12LcHxUf6q14/t/d3yy2ARDnfEVTPU7"
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
                    href="/pricing"
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
                  src={burgerSVG}
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
                  href="/demo"
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
                        getProps={mainMenuRouteActive}
                        href="/product"
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
                          getProps={mainMenuRouteActive}
                          href="/product/website-builder"
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
                          getProps={mainMenuRouteActive}
                          href="/product/landing-page-builder"
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
                          getProps={mainMenuRouteActive}
                          href="/product/pop-up-builder"
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
                          getProps={mainMenuRouteActive}
                          href="/product/alert-bars"
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
                        getProps={mainMenuRouteActive}
                        href="/integrations"
                        data-gtm="desktop-menu-link"
                      >
                        Integrations
                      </ProductSubMenuLink>
                    </ProductLinkContainer>
                  </SubMenuItem>
                  <SubMenuItem>
                    <ProductLinkContainer>
                      <ProductSubMenuLink
                        getProps={mainMenuRouteActive}
                        href="/product/feature-index"
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
                        href="/marketing-resources"
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
                        href="https://www.leadpages.com/blog/"
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
                        href="https://lp.leadpages.com/webinars/"
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
                        href="https://lp.leadpages.com/podcast/"
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
                        href="/customers"
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
                        href="https://support.leadpages.com/hc/en-us"
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
