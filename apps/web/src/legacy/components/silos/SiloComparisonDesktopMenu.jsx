import React, { useState, useEffect } from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import { Link as ScrollLink } from 'react-scroll'
// Assets
import closeMenuIcon from '@legacy/assets/images/global/x_close.svg'
import downArrowIcon from '@legacy/assets/images/global/arrow_down_large.svg'
import ArrowLeftSVG from '@legacy/assets/images/global/arrow_left.svg'
// Components
import Link from 'next/link'
import SiloCompareImage from './SiloCompareImage'

const DesktopMenuContainer = styled('div', {
  background: '$white',
  position: 'fixed',
  top: '60px',
  height: '60px',
  width: '100%',
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
  zIndex: 49,
  display: 'none',

  '@>m': {
    '&.desktopMenuVisible': {
      display: 'block',
      transition: 'all 0.3s ease',
    },
  },
})

const DesktopMenuFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  mx: 'auto',
  py: '18px',
  maxWidth: '300px',

  '&.activesection': {
    display: 'block',
  },

  '&.section': {
    display: 'block',
  },
})

const DesktopMenuHeading = styled('div', {
  color: '$text',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  cursor: 'pointer',
})

const DesktopMenuIcon = styled('img', {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
  paddingTop: '5px',
})

const DesktopSubMenuContainer = styled('div', {
  background: '$white',
  position: 'fixed',
  top: '60px',
  width: '100%',
  borderTop: '1px solid rgba(15, 12, 9, 0.08)',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
  zIndex: 49,

  '@<m': {
    display: 'none',
  },
})

const DesktopSubMenuHeader = styled('div', {
  height: '60px',
  width: '100%',
  borderBottom: '1px solid rgba(15, 12, 9, 0.08)',
})

const DesktopSubMenuTextContainer = styled('div', {
  padding: '3%',
})

const SubMenuFlexbox = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '0 15%',
})

const SubMenuColumn = styled('div', {
  px: '2%',
})

const ColumnHeader = styled(DesktopMenuHeading, {
  marginBottom: '15px',
  cursor: 'auto',
})

const ColumnItem = styled(DesktopMenuHeading, {
  color: 'rgba(15, 12, 9, 0.5)',
  marginBottom: '15px',
})

const DesktopMenuColumnItem = styled(ColumnItem, {
  cursor: 'default',
})

const StyledScrollLink = styled(ScrollLink, {
  textDecoration: 'none',
  color: 'rgba(15, 12, 9, 0.5)',
  paddingBottom: '2px',

  '&:hover': {
    color: '$primary',
    cursor: 'pointer',
    borderBottom: '3px solid $colors$primary',
  },

  '&.active': {
    color: '$primary',
    cursor: 'pointer',
    borderBottom: '3px solid $colors$primary',
  },

  '&.activeLink': {
    color: '$primary',
    textDecoration: 'none',
  },
})

const MenuHeaderDisplayLink = styled(ScrollLink, {
  display: 'none',

  '&.activeSection': {
    display: 'block',
  },
})

const ColumnContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const BackToContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '250px',
  height: '131px',
  backgroundColor: '$white',
  boxShadow:
    '0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08)',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: `0 4px 8px 0 rgba(15, 12, 9, 0.04),
      0 10px 20px 0 rgba(15, 12, 9, 0.08)`,
  },
})

const BackToColFLex = styled('div', {
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const CompareText = styled('div', {
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '24px',
  color: '$text',
})

const BackToText = styled('div', {
  fontSize: '12px',
  lineHeight: '18px',
  letterSpacing: '2px',
  color: '$black',
  opacity: 0.5,
  marginBottom: '0.8rem',
  textTransform: 'uppercase',
  fontFamily: 'Space Mono',
})

const StyledArrowLeft = styled('img', {
  width: '15px',
  height: '12px',
  marginRight: '2rem',
})

const MenuHeaderLinkWrapper = styled('div', {
  position: 'absolute',
  background: '$white',
  width: '200px',
})

const SiloComparisonDesktopMenu = ({
  pageRoutes,
  verbiage,
  competitorImage,
}) => {
  const [showDesktopMenuBar, setShowDesktopMenuBar] = useState(false)
  const [showDesktopSubMenu, setShowDesktopSubMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const siloSidebar = document
          .getElementById('silo-sidebar')
          .getBoundingClientRect()
        const lastSection = document
          .getElementById('last-section')
          .getBoundingClientRect()

        if (siloSidebar.bottom < 0 && lastSection.bottom > 0) {
          setShowDesktopMenuBar(true)
        } else {
          setShowDesktopMenuBar(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleRouteClick = () => {
    setShowDesktopSubMenu(false)
  }

  const toggleDesktopSubMenuVisibility = () => {
    setShowDesktopSubMenu(!showDesktopSubMenu)
  }

  return (
    <>
      {/* Desktop Menu Bar */}
      <DesktopMenuContainer
        className={showDesktopMenuBar ? 'desktopMenuVisible' : ''}
      >
        <DesktopMenuFlexbox onClick={toggleDesktopSubMenuVisibility}>
          <DesktopMenuHeading>
            <MenuHeaderLinkWrapper>
              {verbiage.menu.title_closed}
            </MenuHeaderLinkWrapper>
            {pageRoutes.map(({ sectionPages, sectionName }) => (
              <div key={sectionName}>
                {sectionPages.map(({ pageName, pageUrl }) => (
                  <MenuHeaderLinkWrapper key={pageUrl}>
                    <MenuHeaderDisplayLink
                      onClick={() => handleRouteClick()}
                      activeClass="activeSection"
                      to={pageUrl}
                      aria-label={pageName}
                      spy
                      smooth
                      duration={500}
                      key={pageName}
                      offset={-62}
                    >
                      {pageName}
                    </MenuHeaderDisplayLink>
                  </MenuHeaderLinkWrapper>
                ))}
              </div>
            ))}
          </DesktopMenuHeading>
          <DesktopMenuIcon src={downArrowIcon.src} alt="down arrow" />
        </DesktopMenuFlexbox>
      </DesktopMenuContainer>
      {/* Desktop Sub Menu */}
      {showDesktopSubMenu && (
        <DesktopSubMenuContainer>
          <DesktopSubMenuHeader>
            <DesktopMenuFlexbox>
              <DesktopMenuHeading>
                {verbiage.menu.title_open}
              </DesktopMenuHeading>
              <DesktopMenuIcon
                src={closeMenuIcon.src}
                alt="close menu icon"
                onClick={toggleDesktopSubMenuVisibility}
              />
            </DesktopMenuFlexbox>
          </DesktopSubMenuHeader>
          <DesktopSubMenuTextContainer>
            <SubMenuFlexbox>
              <ColumnContainer>
                <SiloCompareImage competitorImage={competitorImage} />
                <Link href="/comparisons">
                  <BackToContainer>
                    <BackToColFLex>
                      <BackToText>Back To</BackToText>
                      <CompareText>
                        <StyledArrowLeft src={ArrowLeftSVG.src} />
                        All Comparisons
                      </CompareText>
                    </BackToColFLex>
                  </BackToContainer>
                </Link>
              </ColumnContainer>
              {pageRoutes.map(({ sectionName, sectionPages }) => (
                <SubMenuColumn key={sectionName}>
                  <ColumnHeader>{sectionName}</ColumnHeader>
                  {sectionPages.map(({ pageName, pageUrl }) => (
                    // Offset required to compensate for silo nav and main nav height
                    <DesktopMenuColumnItem key={pageUrl}>
                      <StyledScrollLink
                        onClick={() => handleRouteClick()}
                        activeClass="activeLink"
                        to={pageUrl}
                        aria-label={pageName}
                        spy
                        smooth
                        duration={500}
                        key={pageName}
                        offset={-62}
                      >
                        {pageName}
                      </StyledScrollLink>
                    </DesktopMenuColumnItem>
                  ))}
                </SubMenuColumn>
              ))}
            </SubMenuFlexbox>
          </DesktopSubMenuTextContainer>
        </DesktopSubMenuContainer>
      )}
    </>
  )
}

SiloComparisonDesktopMenu.defaultProps = {
  pageRoutes: [],
  competitorImage: null,
}

SiloComparisonDesktopMenu.propTypes = {
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
  competitorImage: PropTypes.string,
}

export default SiloComparisonDesktopMenu
