import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
// Assets
import closeMenuIcon from '../../assets/images/global/x_close.svg';
import downArrowIcon from '../../assets/images/global/arrow_down_large.svg';

const MobileSubMenuSection = styled.div`
  padding-bottom: 16px;
`;

const SubmenuInnerSeparator = styled.hr`
  background-color: #0f0c09;
  opacity: 0.08;
  margin-bottom: 16px;
`;

const MobileSubMenuHeading = styled.div`
  font-family: Apercu Pro;
  font-weight: 500;
  color: #0f0c09;
  margin-bottom: 28px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0px;
  margin-bottom: 24px;
`;

const MobileSubMenuSubheading = styled.div`
  color: inherit;
  font-family: Apercu Pro;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 1rem;
  &:hover {
    color: #603eff;
    cursor: pointer;
  }
`;

const MobileMenuContainer = styled.div`
  display: none;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1501;
  height: 72px;
  background: #fff;
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
  @media (max-width: 991px) {
    &.mobileMenuVisible {
      display: block;
      transition: all 0.3s ease;
    }
  }
`;

const MobileMenuFlexbox = styled.div`
  margin-top: 24px;
  margin-left: 32px;
  margin-right: 24px;
  display: flex;
  justify-content: space-between;
`;

const MobileMenuHeading = styled.div`
  color: #575452;
  font-family: Apercu Pro;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
`;

const MobileMenuIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const MobileMenuSubmenu = styled.div`
  z-index: 150;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
`;

const SubmenuHeader = styled.div`
  height: 72px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
`;

const SubmenuHeaderFlexbox = styled.div`
  padding-top: 24px;
  margin-left: 32px;
  margin-right: 24px;
  display: flex;
  justify-content: space-between;
`;

const SubmenuHeaderHeading = styled.div`
  color: #575452;
  font-family: Apercu Pro;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
`;

const SubmenuHeaderIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const SubmenuContent = styled.div`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid rgba(15, 12, 9, 0.08);
  padding-top: 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-bottom: 1rem;
  font-family: Apercu Pro;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  height: 90%;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  ::-webkit-scrollbar {
    display: none;
  } /* Chrome */
  @media (max-width: 350px) {
    max-width: 85%;
  }
`;

const StyledScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: rgba(15, 12, 9, 0.5);
  cursor: pointer;

  &:hover,
  &.active,
  &.activeRoute {
    color: #603eff;
  }
`;

const MenuHeaderDisplayLink = styled(ScrollLink)`
  display: none;
  &.activeSection {
    display: block;
  }
`;

const MenuHeaderLinkWrapper = styled.div`
  position: absolute;
  background: #fff;
  width: 200px;
`;

const SiloComparisonMobileMenu = ({ pageRoutes, verbiage }) => {
  const [showMobileMenuBar, setShowMobileMenuBar] = useState(false);
  const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // const lastSection = document.getElementById('last-section').getBoundingClientRect();

      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 991 && window.scrollY > 72) {
          setShowMobileMenuBar(true);
        } else {
          setShowMobileMenuBar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleRouteClick = () => {
    setShowMobileSubMenu(false);
  };

  const toggleMobileSubMenuVisibility = () => {
    setShowMobileSubMenu(!showMobileSubMenu);
  };

  return (
    <>
      {/* Mobile Menu Bar */}
      <MobileMenuContainer
        className={showMobileMenuBar ? 'mobileMenuVisible' : ''}
        onClick={toggleMobileSubMenuVisibility}
      >
        <MobileMenuFlexbox>
          <MobileMenuHeading>
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
          </MobileMenuHeading>
          <MobileMenuIcon src={downArrowIcon} alt="down arrow" />
        </MobileMenuFlexbox>
      </MobileMenuContainer>
      {/* Mobile Sub Menu */}
      {showMobileSubMenu && (
        <MobileMenuSubmenu>
          <SubmenuHeader>
            <SubmenuHeaderFlexbox>
              <SubmenuHeaderHeading>{verbiage.menu.title_open}</SubmenuHeaderHeading>
              <SubmenuHeaderIcon
                src={closeMenuIcon}
                alt="close menu icon"
                onClick={toggleMobileSubMenuVisibility}
              />
            </SubmenuHeaderFlexbox>
          </SubmenuHeader>
          <SubmenuContent>
            {pageRoutes.map(section => {
              const { sectionName, sectionPages } = section;
              return (
                <MobileSubMenuSection key={sectionName}>
                  <SubmenuInnerSeparator />
                  <MobileSubMenuHeading>{sectionName}</MobileSubMenuHeading>
                  {sectionPages.map(page => {
                    const { pageName, pageUrl } = page;
                    return (
                      <StyledScrollLink
                        onClick={() => handleRouteClick()}
                        activeClass="activeLink"
                        to={pageUrl}
                        alt={pageName}
                        spy
                        smooth
                        duration={500}
                        key={pageName}
                        style={{ textDecoration: 'none' }}
                      >
                        <MobileSubMenuSubheading>{pageName}</MobileSubMenuSubheading>
                      </StyledScrollLink>
                    );
                  })}
                </MobileSubMenuSection>
              );
            })}
          </SubmenuContent>
        </MobileMenuSubmenu>
      )}
    </>
  );
};

SiloComparisonMobileMenu.defaultProps = {
  pageRoutes: [],
};

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
};

export default SiloComparisonMobileMenu;
