import React, { useEffect, useState } from 'react'
import Link from '@components/Link'
import { theme, darkTheme } from '@design'
import { withRouter } from 'next/router'
import { m as motion } from 'framer-motion'
// images
import fullLogoSVG from '@legacy/assets/images/global/leadpages-wordmark_large.svg'
import logoIconSVG from '@legacy/assets/images/global/leadpages-symbol_large.svg'
// components
import NavDrawer from '@components/NavDrawer'
import {
  HeaderContainer,
  DesktopMenuContainer,
  MenuContainer,
  FullLogoContainer,
  LogoIconContainer,
  LinksContainer,
  StyledLink,
  StyledMainNav,
  LoginSignUpContainer,
  LoginContainer,
  StartPageLoginOutboundLink,
  OutboundLink,
  SignUpContainer,
  SignUpButton,
  StartPageTrialOutboundLink,
  StyledButtonLink,
  PricesWatchDemoContainer,
  WatchDemoButton,
  WatchDemoContainer,
  HeaderSubMenu,
  LinkContainer,
  SubMenuItem,
  DesktopSubMenuTextContainer,
  StartPageTrialScrollingLink,
  OutboundButtonLink,
  SubMenuContainer,
  DropDownOuter,
} from './HeaderComponents'
import {
  expertiseSubMenu,
  platformSubMenu,
  templatesSubMenu,
  useCasesSubMenu,
} from './HeaderDropdownMenus'
import HeaderCarat from './HeaderCarat'

const DropdownItem = ({ _id, condition, url, dataGtm, className, label }) => {
  const [active, setActive] = useState(false)
  return (
    <StyledMainNav
      key={_id}
      condition={condition}
      url={url}
      onMouseEnter={() => {
        setActive(true)
      }}
      onMouseLeave={() => {
        setActive(false)
      }}
      data-gtm={dataGtm}
      className={className}
    >
      {label}
      <HeaderCarat active={active} />
    </StyledMainNav>
  )
}

const Header = ({
  hideSignUpButton = false,
  isPricingMenu = false,
  isStartPageHeader = false,
  noLogin = false,
  scrollTarget = '',
  underlaidMenu = false,
  headerBkgColor = null,
  isPreviewPage = false,
  router,
  darkHero,
}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 25) {
      return !isScrolled && setIsScrolled(true)
    }
    return isScrolled && setIsScrolled(false)
  }

  if (isPreviewPage) return null

  const classScrolled = isScrolled ? 'scrolled' : ''
  const classDark = darkHero ? darkTheme : ''
  const classStartPage = isStartPageHeader ? 'start-page-header' : ''
  const path = router.asPath

  const mainNavigation = [
    {
      _id: 'platform',
      dataGtm: 'desktop-menu-link',
      label: 'Platform',
      subMenu: platformSubMenu,
    },
    {
      _id: 'use-cases',
      dataGtm: 'desktop-menu-link',
      label: 'Use Cases',
      subMenu: useCasesSubMenu,
    },
    {
      _id: 'templates',
      dataGtm: 'desktop-menu-link',
      label: 'Templates',
      subMenu: templatesSubMenu,
    },
    {
      _id: 'pricing',
      dataGtm: 'desktop-menu-link',
      label: 'Pricing',
      url: '/pricing',
      condition: 'internal',
    },
    {
      _id: 'expertise',
      dataGtm: 'desktop-menu-link',
      label: 'Expertise',
      subMenu: expertiseSubMenu,
    },
  ]

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <HeaderContainer
      scrolled={isScrolled.toString()}
      className={`${classScrolled} ${!isScrolled && classDark}`}
      isStartPageHeader={isStartPageHeader}
      darkHero={darkHero}
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
        <MenuContainer className={classStartPage}>
          <Link condition="internal" url="/" data-gtm="desktop-menu-link">
            <FullLogoContainer
              src={fullLogoSVG.src}
              alt="Leadpages full logo svg"
              className={`${isScrolled ? 'hide-logo' : 'show-logo'} ${
                isStartPageHeader ? 'start-page-header' : ''
              } ${
                isStartPageHeader && isScrolled
                  ? 'start-page-header-scrolled'
                  : ''
              }`}
              css={isPricingMenu && { top: 3 }}
            />
            <LogoIconContainer
              src={logoIconSVG.src}
              alt="leadpages logo icon svg"
              className={` ${isScrolled ? 'show-logo' : 'hide-logo'} ${
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
                ({ _id, condition, url, dataGtm, label, subMenu }) => (
                  <>
                    {url ? (
                      <StyledLink
                        key={_id}
                        condition={condition}
                        url={url}
                        data-gtm={dataGtm}
                        className={
                          path.includes(_id) && 'active-main-menu active'
                        }
                      >
                        {label}
                      </StyledLink>
                    ) : (
                      <motion.div
                        whileHover="hovered"
                        initial="rested"
                        style={{
                          position: 'relative',
                        }}
                      >
                        <DropdownItem
                          key={_id}
                          condition={condition}
                          url={url}
                          data-gtm={dataGtm}
                          className={
                            _id === 'templates' &&
                            !path.startsWith('/platform') &&
                            path.includes(_id) &&
                            'active-main-menu active'
                          }
                          label={label}
                        />
                        <DropDownOuter
                          variants={{
                            hovered: { opacity: 1, pointerEvents: 'all' },
                            rested: {
                              opacity: 0,
                              pointerEvents: 'none',
                            },
                          }}
                          transition={{
                            duration: 0.15,
                            delay: 0.15,
                          }}
                          className="drop-down-outer"
                        >
                          <HeaderSubMenu className={theme}>
                            <SubMenuContainer scrolled={isScrolled}>
                              <DesktopSubMenuTextContainer>
                                {subMenu.map(
                                  ({
                                    _id: __id,
                                    condition: _condition,
                                    url: _url,
                                    ariaLabel,
                                    rel,
                                    dataGtm: _dataGtm,
                                    label: _label,
                                  }) => {
                                    const Component =
                                      _condition === 'internal'
                                        ? StyledLink
                                        : OutboundLink

                                    return (
                                      <SubMenuItem key={__id}>
                                        <LinkContainer>
                                          <Component
                                            condition={_condition}
                                            url={
                                              _condition === 'internal' && _url
                                            }
                                            href={
                                              _condition === 'external' && _url
                                            }
                                            aria-label={ariaLabel}
                                            rel={rel}
                                            data-gtm={_dataGtm}
                                            className={
                                              path === _url && 'active'
                                            }
                                          >
                                            {_label}
                                          </Component>
                                        </LinkContainer>
                                      </SubMenuItem>
                                    )
                                  }
                                )}
                              </DesktopSubMenuTextContainer>
                            </SubMenuContainer>
                          </HeaderSubMenu>
                        </DropDownOuter>
                      </motion.div>
                    )}
                  </>
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
                    href="https://my.leadpages.com/login/"
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
                    href="https://my.leadpages.com/login/"
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
                <>
                  {scrollTarget ? (
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
                      href="https://my.leadpages.com/order-leadpages/12LcHxUf6q14/t/d3yy2ARDnfEVTPU7"
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
                  )}
                </>
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
            className={theme}
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
                href="/demo"
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
      </DesktopMenuContainer>
    </HeaderContainer>
  )
}

export default withRouter(Header)
