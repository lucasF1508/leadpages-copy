import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
// Assets
import closeMenuIcon from '../../assets/images/global/x_close.svg';
import downArrowIcon from '../../assets/images/global/arrow_down_large.svg';
import ArrowLeftSVG from '../../assets/images/global/arrow_left.svg';
// Components
import SiloCompareImage from './SiloCompareImage';

const DesktopMenuContainer = styled.div`
  background: #fff;
  position: fixed;
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
  position: fixed;
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
  margin: 0 15%;
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
    border-bottom: 3px solid #603eff;
  }
  &.activeLink {
    color: #603eff;
    text-decoration: none;
  }
`;

const MenuHeaderDisplayLink = styled(ScrollLink)`
  display: none;

  &.activeSection {
    display: block;
  }
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BackToContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 250px;
  max-width: 250px;
  height: 131px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08);
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08);
  }
`;

const BackToColFLex = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompareText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #0f0c09;
`;

const BackToText = styled.div`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 2px;
  color: #000000;
  opacity: 0.5;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  font-family: 'Space Mono';
`;

const StyledInternalLink = styled(Link)`
  text-decoration: none;
`;

const StyledArrowLeft = styled.img`
  width: 15px;
  height: 12px;
  margin-right: 2rem;
`;

const MenuHeaderLinkWrapper = styled.div`
  position: absolute;
  background: #fff;
  width: 200px;
`;

const SiloComparisonDesktopMenu = ({ pageRoutes, verbiage, competitorImage }) => {
  const [showDesktopMenuBar, setShowDesktopMenuBar] = useState(false);
  const [showDesktopSubMenu, setShowDesktopSubMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const siloSidebar = document.getElementById('silo-sidebar').getBoundingClientRect();
        const lastSection = document.getElementById('last-section').getBoundingClientRect();

        if (siloSidebar.bottom < 0 && lastSection.bottom > 0) {
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
          <DesktopMenuHeading>
            <MenuHeaderLinkWrapper>{verbiage.menu.title_closed}</MenuHeaderLinkWrapper>
            {pageRoutes.map(section => {
              const { sectionPages, sectionName } = section;
              return (
                <div key={sectionName}>
                  {sectionPages.map(page => {
                    const { pageName, pageUrl } = page;
                    return (
                      <MenuHeaderLinkWrapper>
                        <MenuHeaderDisplayLink
                          onClick={() => handleRouteClick()}
                          activeClass="activeSection"
                          to={pageUrl}
                          alt={pageName}
                          spy
                          smooth
                          duration={500}
                          key={pageName}
                          offset={-62}
                        >
                          {pageName}
                        </MenuHeaderDisplayLink>
                      </MenuHeaderLinkWrapper>
                    );
                  })}
                </div>
              );
            })}
          </DesktopMenuHeading>
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
            <SubMenuFlexbox>
              <ColumnContainer>
                <SiloCompareImage competitorImage={competitorImage} />
                <StyledInternalLink to="/comparisons">
                  <BackToContainer>
                    <BackToColFLex>
                      <BackToText>Back To</BackToText>
                      <CompareText>
                        <StyledArrowLeft src={ArrowLeftSVG} />
                        All Comparisons
                      </CompareText>
                    </BackToColFLex>
                  </BackToContainer>
                </StyledInternalLink>
              </ColumnContainer>
              {pageRoutes.map(section => {
                const { sectionName, sectionPages } = section;
                return (
                  <SubMenuColumn key={sectionName}>
                    <ColumnHeader>{sectionName}</ColumnHeader>
                    {sectionPages.map(page => {
                      const { pageName, pageUrl } = page;
                      // Offset required to compensate for silo nav and main nav height
                      return (
                        <DesktopMenuColumnItem key={pageUrl}>
                          <StyledScrollLink
                            onClick={() => handleRouteClick()}
                            activeClass="activeLink"
                            to={pageUrl}
                            alt={pageName}
                            spy
                            smooth
                            duration={500}
                            offset={-62}
                          >
                            {pageName}
                          </StyledScrollLink>
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

SiloComparisonDesktopMenu.defaultProps = {
  pageRoutes: [],
  competitorImage: null,
};

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
  competitorImage: PropTypes.string,
};

export default SiloComparisonDesktopMenu;
