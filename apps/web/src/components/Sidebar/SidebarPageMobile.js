import React, { useState, useEffect, useContext } from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'
// Assets
import closeMenuIcon from '@legacy/assets/images/global/x_close.svg'
import downArrowIcon from '@legacy/assets/images/global/arrow_down_large.svg'
import { useRouter } from 'next/router'
import { getSidebarSlug, SidebarContext } from './SidebarProvider'
import { $PageLink } from './SidebarPage'

const MobileSubMenuSection = styled('div', {
  paddingBottom: '16px',
})

const SubmenuInnerSeparator = styled('hr', {
  backgroundColor: '$text',
  opacity: 0.08,
  marginBottom: '16px',
})

const MobileSubMenuHeading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  color: '$text',
  fontSize: '18px',
  lineHeight: '28px',
  letterSpacing: '0px',
  marginBottom: '24px',
})

const MobileSubMenuSubheading = styled('div', {
  color: 'inherit',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  paddingBottom: '1rem',

  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
  },
})

const MobileMenuContainer = styled('div', {
  display: 'none',
  position: 'fixed',
  top: '0px',
  width: '100%',
  zIndex: 1501,
  height: '72px',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',

  '@<m': {
    '&.mobileMenuVisible': {
      display: 'block',
      transition: 'all 0.3s ease',
    },
  },
})

const MobileMenuFlexbox = styled('div', {
  marginTop: '24px',
  marginLeft: '32px',
  marginRight: '24px',
  display: 'flex',
  justifyContent: 'space-between',
})

const MobileMenuHeading = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  cursor: 'pointer',
})

const MobileMenuIcon = styled('img', {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
})

const MobileMenuSubmenu = styled('div', {
  zIndex: 150,
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
})

const SubmenuHeader = styled('div', {
  height: '72px',
  width: '100%',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
})

const SubmenuHeaderFlexbox = styled('div', {
  paddingTop: '24px',
  marginLeft: '32px',
  marginRight: '24px',
  display: 'flex',
  justifyContent: 'space-between',
})

const SubmenuHeaderHeading = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  cursor: 'pointer',
})

const SubmenuHeaderIcon = styled('img', {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
})

const SubmenuContent = styled('div', {
  width: '100%',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
  py: '1rem',
  px: '2.5rem',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  height: '90%',
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  MsOverflowStyle: 'none',
  boxSizing: 'border-box',

  '&::WebkitScrollbar': {
    display: 'none',
  },

  '@media (max-width: 350px)': {
    maxWidth: '85%',
  },
})

const StyledScrollLink = styled(ScrollLink, {
  textDecoration: 'none',
  color: 'rgba(15, 12, 9, 0.5)',
  cursor: 'pointer',

  [`&:hover,
    &.active,
    &.activeRoute`]: {
    color: '$primary',
  },
})

const MenuHeaderDisplayLink = styled(ScrollLink, {
  display: 'none',

  '&.activeSection': {
    display: 'block',
  },
})

const MenuHeaderLinkWrapper = styled('div', {
  position: 'absolute',
  background: '$white',
  width: '200px',
})

const SiloComparisonMobileMenu = ({ links, verbiage }) => {
  const [showMobileMenuBar, setShowMobileMenuBar] = useState(false)
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false)
  const { active } = useContext(SidebarContext)
  const { asPath } = useRouter()
  const url = asPath.replace(/[#|?].*/g, '')

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 991 && window.scrollY > 72) {
          setShowMobileMenuBar(true)
        } else {
          setShowMobileMenuBar(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleRouteClick = () => {
    setShowMobileSubMenu(false)
  }

  const toggleMobileSubMenuVisibility = () => {
    setShowMobileSubMenu(!showMobileSubMenu)
  }

  return (
    <>
      {/* Mobile Menu Bar */}
      <MobileMenuContainer
        className={showMobileMenuBar ? 'mobileMenuVisible' : ''}
        onClick={toggleMobileSubMenuVisibility}
      >
        <MobileMenuFlexbox>
          <MobileMenuHeading>
            <MenuHeaderLinkWrapper>
              {verbiage.menu.title_closed}
            </MenuHeaderLinkWrapper>
            {links.map(({ title: sectionTitle, links: sectionLinks }) => (
              <div key={sectionTitle}>
                {sectionLinks.map(({ heading, title, isPageLink, link }) => {
                  const sectionHeading = isPageLink
                    ? link?.label
                    : title || heading
                  const sectionSlug = getSidebarSlug(sectionHeading)

                  const isActive = active === sectionSlug || url === link?.url

                  return (
                    <MenuHeaderLinkWrapper key={sectionSlug}>
                      <MenuHeaderDisplayLink
                        className={isActive && 'activeSection'}
                        onClick={() => handleRouteClick()}
                        to={sectionSlug}
                        aria-label={sectionHeading}
                        smooth
                        duration={500}
                        key={sectionHeading}
                        offset={-62}
                      >
                        {sectionHeading}
                      </MenuHeaderDisplayLink>
                    </MenuHeaderLinkWrapper>
                  )
                })}
              </div>
            ))}
          </MobileMenuHeading>
          <MobileMenuIcon src={downArrowIcon.src} alt="down arrow" />
        </MobileMenuFlexbox>
      </MobileMenuContainer>
      {/* Mobile Sub Menu */}
      {showMobileSubMenu && (
        <MobileMenuSubmenu>
          <SubmenuHeader>
            <SubmenuHeaderFlexbox>
              <SubmenuHeaderHeading>
                {verbiage.menu.title_open}
              </SubmenuHeaderHeading>
              <SubmenuHeaderIcon
                src={closeMenuIcon.src}
                alt="close menu icon"
                onClick={toggleMobileSubMenuVisibility}
              />
            </SubmenuHeaderFlexbox>
          </SubmenuHeader>
          <SubmenuContent>
            {links.map(({ title: sectionTitle, links: sectionLinks }) => (
              <MobileSubMenuSection key={sectionTitle}>
                <SubmenuInnerSeparator />
                <MobileSubMenuHeading>{sectionTitle}</MobileSubMenuHeading>
                {sectionLinks.map(({ heading, title, isPageLink, link }) => {
                  const sectionHeading = isPageLink
                    ? link?.label
                    : title || heading
                  const sectionSlug = getSidebarSlug(sectionHeading)

                  const isActive = active === sectionSlug || url === link?.url

                  return !isPageLink ? (
                    <StyledScrollLink
                      onClick={() => handleRouteClick()}
                      className={isActive && 'active'}
                      to={sectionSlug}
                      alt={sectionHeading}
                      smooth
                      duration={500}
                      key={sectionHeading}
                      css={{ textDecoration: 'none' }}
                      offset={-100}
                    >
                      <MobileSubMenuSubheading>
                        {sectionHeading}
                      </MobileSubMenuSubheading>
                    </StyledScrollLink>
                  ) : (
                    <$PageLink
                      className={isActive && 'active'}
                      key={sectionSlug}
                      {...link}
                      disabled={isActive}
                      linkStyle="none"
                    />
                  )
                })}
              </MobileSubMenuSection>
            ))}
          </SubmenuContent>
        </MobileMenuSubmenu>
      )}
    </>
  )
}

SiloComparisonMobileMenu.defaultProps = {
  pageRoutes: [],
}

SiloComparisonMobileMenu.propTypes = {
  pageRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      sectionName: PropTypes.string,
      sectionCardTitle: PropTypes.string,
      sectionPages: PropTypes.arrayOf(
        PropTypes.shape({
          pageName: PropTypes.string,
          pageUrl: PropTypes.string,
          pageTitle: PropTypes.string,
          pageSupertitle: PropTypes.string,
        })
      ),
    })
  ),
  verbiage: PropTypes.shape({
    main: PropTypes.shape({
      title: PropTypes.string,
      supertitle: PropTypes.string,
    }),
    menu: PropTypes.shape({
      title_closed: PropTypes.string,
      title_open: PropTypes.string,
    }),
  }).isRequired,
}

export default SiloComparisonMobileMenu
