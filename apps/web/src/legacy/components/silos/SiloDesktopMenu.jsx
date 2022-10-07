import React, { useState, useEffect } from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { useRouter } from 'next/router'

// Assets
import closeMenuIcon from '@legacy/assets/images/global/x_close.svg'
import downArrowIcon from '@legacy/assets/images/global/arrow_down_large.svg'

const DesktopMenuContainer = styled('div', {
  background: '$white',
  position: 'sticky',
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
  position: 'sticky',
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
  margin: '0 25%',
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

const ColumnLink = styled('a', {
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

  '&.activeRoute': {
    color: '$primary',
    textDecoration: 'none',
  },
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
    borderBottom: 'none !important',
  },

  '&.activeRoute': {
    color: '$primary',
    textDecoration: 'none',
    borderBottom: 'none',
  },
})

const SiloDesktopMenu = ({
  pageRoutes,
  verbiage,
  numberOfColumns,
  useScrollLink,
}) => {
  const [showDesktopMenuBar, setShowDesktopMenuBar] = useState(false)
  const [showDesktopSubMenu, setShowDesktopSubMenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth > 991 && window.scrollY >= 1630) {
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

  const marginOption1 = numberOfColumns === 3 ? { margin: '0 15%' } : {}
  const marginOption2 = numberOfColumns >= 4 ? { margin: '0 5%' } : {}

  return (
    <>
      {/* Desktop Menu Bar */}
      <DesktopMenuContainer
        className={showDesktopMenuBar ? 'desktopMenuVisible' : ''}
      >
        <DesktopMenuFlexbox onClick={toggleDesktopSubMenuVisibility}>
          <DesktopMenuHeading>{verbiage.menu.title_closed}</DesktopMenuHeading>
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
            <SubMenuFlexbox css={{ ...marginOption1, ...marginOption2 }}>
              {pageRoutes.map(({ sectionName, sectionPages }) => (
                <SubMenuColumn key={sectionName}>
                  <ColumnHeader>{sectionName}</ColumnHeader>
                  {sectionPages.map(({ pageName, pageUrl }) => (
                    <DesktopMenuColumnItem key={pageUrl}>
                      {useScrollLink ? (
                        <StyledScrollLink
                          key={pageUrl}
                          to={pageUrl}
                          aria-label={pageName}
                          spy
                          smooth
                          duration={300}
                          offset={-550}
                          css={{ textDecoration: 'none' }}
                          onClick={() => handleRouteClick()}
                        >
                          {pageName}
                        </StyledScrollLink>
                      ) : (
                        <Link href={pageUrl} passHref>
                          <ColumnLink
                            onClick={() => handleRouteClick()}
                            aria-label={pageName}
                            css={{ textDecoration: 'none' }}
                            className={
                              router.pathname === pageUrl ? 'activeRoute' : ''
                            }
                          >
                            {pageName}
                          </ColumnLink>
                        </Link>
                      )}
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

SiloDesktopMenu.defaultProps = {
  pageRoutes: [],
  numberOfColumns: null,
  useScrollLink: false,
}

SiloDesktopMenu.propTypes = {
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
  numberOfColumns: PropTypes.number,
  useScrollLink: PropTypes.bool,
}

export default SiloDesktopMenu
