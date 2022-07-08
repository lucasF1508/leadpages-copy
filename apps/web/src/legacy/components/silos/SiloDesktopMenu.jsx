import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Assets
import closeMenuIcon from '../../assets/images/global/x_close.svg';
import downArrowIcon from '../../assets/images/global/arrow_down_large.svg';

const DesktopMenuContainer = styled.div`
  background: #fff;
  position: sticky;
  top: 60px;
  height: 60px;
  width: 100%;
  border-top: 1px solid rgba(15, 12, 9, 0.08);
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
  z-index: 49;
  display: none;
  @media (min-width: 992px) {
    &.desktopMenuVisible {
      display: block;
      transition: all 0.3s ease;
    }
  }
`;

const DesktopMenuFlexbox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-top: 18px;
  padding-bottom: 18px;
  max-width: 300px;

  &.activesection {
    display: block;
  }

  &.section {
    display: block;
  }
`;

const DesktopMenuHeading = styled.div`
  color: #0f0c09;
  font-family: Apercu Pro;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
`;

const DesktopMenuIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  padding-top: 5px;
`;

const DesktopSubMenuContainer = styled.div`
  background: #fff;
  position: sticky;
  top: 60px;
  width: 100%;
  border-top: 1px solid rgba(15, 12, 9, 0.08);
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
  z-index: 49;
  @media (max-width: 991px) {
    display: none;
  }
`;

const DesktopSubMenuHeader = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
`;

const DesktopSubMenuTextContainer = styled.div`
  padding: 3%;
`;

const SubMenuFlexbox = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 25%;
  margin: ${props => (props.numberOfColumns === 3 ? '0 15%' : '')};
  margin: ${props => (props.numberOfColumns >= 4 ? '0 5%' : '')};
`;

const SubMenuColumn = styled.div`
  padding-left: 2%;
  padding-right: 2%;
`;

const ColumnHeader = styled(DesktopMenuHeading)`
  margin-bottom: 15px;
  cursor: auto;
`;

const ColumnItem = styled(DesktopMenuHeading)`
  color: rgba(15, 12, 9, 0.5);
  margin-bottom: 15px;
`;

const DesktopMenuColumnItem = styled(ColumnItem)`
  cursor: default;
`;

const ColumnLink = styled(Link)`
  text-decoration: none;
  color: rgba(15, 12, 9, 0.5);
  padding-bottom: 2px;
  &:hover {
    color: #603eff;
    cursor: pointer;
    border-bottom: 3px solid #603eff;
  }
  &.active {
    color: #603eff;
    cursor: pointer;
    border-bottom: 3px solid #603eff;
  }
  &.activeRoute {
    color: #603eff;
    text-decoration: none;
  }
`;

const StyledScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: rgba(15, 12, 9, 0.5);
  padding-bottom: 2px;
  &:hover {
    color: #603eff;
    cursor: pointer;
    border-bottom: 3px solid #603eff;
  }
  &.active {
    color: #603eff;
    cursor: pointer;
    border-bottom: none !important;
  }
  &.activeRoute {
    color: #603eff;
    text-decoration: none;
    border-bottom: none;
  }
`;

const SiloDesktopMenu = ({ pageRoutes, verbiage, numberOfColumns, useScrollLink }) => {
  const [showDesktopMenuBar, setShowDesktopMenuBar] = useState(false);
  const [showDesktopSubMenu, setShowDesktopSubMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth > 991 && window.scrollY >= 1630) {
          setShowDesktopMenuBar(true);
        } else {
          setShowDesktopMenuBar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleRouteClick = () => {
    setShowDesktopSubMenu(false);
  };

  const toggleDesktopSubMenuVisibility = () => {
    setShowDesktopSubMenu(!showDesktopSubMenu);
  };

  return (
    <>
      {/* Desktop Menu Bar */}
      <DesktopMenuContainer className={showDesktopMenuBar ? 'desktopMenuVisible' : ''}>
        <DesktopMenuFlexbox onClick={toggleDesktopSubMenuVisibility}>
          <DesktopMenuHeading>{verbiage.menu.title_closed}</DesktopMenuHeading>
          <DesktopMenuIcon src={downArrowIcon} alt="down arrow" />
        </DesktopMenuFlexbox>
      </DesktopMenuContainer>

      {/* Desktop Sub Menu */}
      {showDesktopSubMenu && (
        <DesktopSubMenuContainer>
          <DesktopSubMenuHeader>
            <DesktopMenuFlexbox>
              <DesktopMenuHeading>{verbiage.menu.title_open}</DesktopMenuHeading>
              <DesktopMenuIcon
                src={closeMenuIcon}
                alt="close menu icon"
                onClick={toggleDesktopSubMenuVisibility}
              />
            </DesktopMenuFlexbox>
          </DesktopSubMenuHeader>
          <DesktopSubMenuTextContainer>
            <SubMenuFlexbox numberOfColumns={numberOfColumns}>
              {pageRoutes.map(section => {
                const { sectionName, sectionPages } = section;
                return (
                  <SubMenuColumn key={sectionName}>
                    <ColumnHeader>{sectionName}</ColumnHeader>
                    {sectionPages.map(page => {
                      const { pageName, pageUrl } = page;
                      return (
                        <DesktopMenuColumnItem key={pageUrl}>
                          {useScrollLink ? (
                            <StyledScrollLink
                              key={pageUrl}
                              to={pageUrl}
                              alt={pageName}
                              spy
                              smooth
                              duration={300}
                              offset={-550}
                              style={{ textDecoration: 'none' }}
                              onClick={() => handleRouteClick()}
                            >
                              {pageName}
                            </StyledScrollLink>
                          ) : (
                            <ColumnLink
                              onClick={() => handleRouteClick()}
                              activeStyle={{ color: '#603eff' }}
                              partiallyActive={false}
                              to={pageUrl}
                              alt={pageName}
                              style={{ textDecoration: 'none' }}
                            >
                              {pageName}
                            </ColumnLink>
                          )}
                        </DesktopMenuColumnItem>
                      );
                    })}
                  </SubMenuColumn>
                );
              })}
            </SubMenuFlexbox>
          </DesktopSubMenuTextContainer>
        </DesktopSubMenuContainer>
      )}
    </>
  );
};

SiloDesktopMenu.defaultProps = {
  pageRoutes: [],
  numberOfColumns: null,
  useScrollLink: false,
};

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
        }),
      ),
    }),
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
};

export default SiloDesktopMenu;
