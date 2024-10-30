import React, { useState, useEffect, useContext } from 'react'
import { styled } from '@design'
import { Link as ScrollLink } from 'react-scroll'
// Assets
import closeMenuIcon from '@legacy/assets/images/global/x_close.svg'
import downArrowIcon from '@legacy/assets/images/global/arrow_down_large.svg'
import { useRouter } from 'next/router'
import useStickyHeader from '@hooks/useStickyHeader'
import { m as motion } from 'framer-motion'
import { navOffset } from '@components/Nav/Nav'
import scrollLock from '@hooks/useScrollLock'
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

const MobileMenuContainer = styled(motion.div, {
  display: 'none',
  position: 'fixed',
  top: '0px',
  width: '100%',
  zIndex: '$headerBackground',
  height: '72px',
  background: '$white',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
  paddingTop: '5.125rem',

  '@<m': {
    '&.mobileMenuVisible': {
      display: 'block',
    },
  },
})

const MobileMenuFlexbox = styled('div', {
  marginLeft: '32px',
  marginRight: '32px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  position: 'relative',
})

const MobileMenuHeading = styled('div', {
  color: '$textAlt',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const MobileMenuIcon = styled('img', {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
})

const MobileMenuSubmenu = styled('div', {
  position: 'absolute',
  bottom: '-1px',
  transform: 'translateY(100%)',
  left: '-32px',
  right: '-32px',
  overflow: 'scroll',

  variants: {
    showHeader: {
      true: {
        maxHeight: 'calc(100vh - 10.25rem)',
      },
      false: {
        maxHeight: 'calc(100vh - 5.125rem)',
      },
    },
  },
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

const MenuHeaderLinkWrapper = styled('div', {
  background: '$white',
})

const getActiveTitle = (links, activeFromContext, url) =>
  links.reduce((acc, { links: sectionLinks }) => {
    if (acc) return acc

    return sectionLinks.reduce(
      (innerAcc, { heading, title, isPageLink, link }) => {
        if (innerAcc) return innerAcc

        const sectionHeading = isPageLink ? link?.label : title || heading
        const sectionSlug = getSidebarSlug(sectionHeading)
        const isActive = activeFromContext === sectionSlug || url === link?.url

        return isActive ? sectionHeading : innerAcc
      },
      null
    )
  }, null)

const SiloComparisonMobileMenu = ({ links, verbiage }) => {
  const [showMobileMenuBar, setShowMobileMenuBar] = useState(false)
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false)
  const { active } = useContext(SidebarContext)
  const { asPath } = useRouter()
  const url = asPath.replace(/[#|?].*/g, '')
  const activeTitle = getActiveTitle(links, active, url)

  const { showHeader, stickyMotionProps } = useStickyHeader({
    offsetTop: 10,
  })

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

  useEffect(() => {
    scrollLock(showMobileSubMenu)
  }, [showMobileSubMenu])

  return (
    <MobileMenuContainer
      className={showMobileMenuBar ? 'mobileMenuVisible' : ''}
      onClick={toggleMobileSubMenuVisibility}
      animate={{
        y: !showHeader ? navOffset * -1 : 0,
      }}
      transition={stickyMotionProps?.transition}
    >
      <MobileMenuFlexbox>
        <MobileMenuHeading>
          <MenuHeaderLinkWrapper>
            {showMobileSubMenu
              ? verbiage.menu.title_open
              : activeTitle || verbiage.menu.title_closed}
          </MenuHeaderLinkWrapper>
          {!showMobileSubMenu ? (
            <MobileMenuIcon src={downArrowIcon.src} alt="down arrow" />
          ) : (
            <MobileMenuIcon
              src={closeMenuIcon.src}
              alt="close menu icon"
              onClick={toggleMobileSubMenuVisibility}
            />
          )}
        </MobileMenuHeading>
        {showMobileSubMenu && (
          <MobileMenuSubmenu showHeader={showHeader}>
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
      </MobileMenuFlexbox>
    </MobileMenuContainer>
  )
}

export default SiloComparisonMobileMenu
