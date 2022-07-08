import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
// Components
import SiloCompareImage from './SiloCompareImage';

const SidebarContainer = styled.div`
  @media (max-width: 991px) {
    display: none;
  }
  @media (min-width: 992px) {
    position: absolute;
    top: 6rem;
    padding-right: 2rem;
    margin-left: 2rem;
    min-width: 200px;
    max-width: 200px;
    border-right: 1px solid rgba(15, 12, 9, 0.08);
  }
`;

const SidebarSection = styled.div`
  padding-bottom: 16px;
`;

const SidebarInnerSeparator = styled.hr`
  background-color: #0f0c09;
  opacity: 0.08;
  margin-bottom: 16px;
`;

const SidebarHeading = styled.div`
  font-family: Apercu Pro;
  font-weight: 500;
  color: #0f0c09;
  margin-bottom: 28px;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0px;
  margin-bottom: 24px;
`;

const SidebarSubHeading = styled.div`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(15, 12, 9, 0.5);
  cursor: pointer;
  &:hover {
    color: #603eff;
  }
  &.active {
    color: #603eff;
  }
  &.activeRoute {
    color: #603eff;
    text-decoration: none;
  }
`;

const StyledScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: rgba(15, 12, 9, 0.5);
  cursor: pointer;
  &:hover {
    color: #603eff;
  }
  &.active {
    color: rgba(15, 12, 9, 0.5);
  }
`;

const SiloSidebar = ({ pageRoutes, competitorImage, className, useScrollLink }) => {
  return (
    <SidebarContainer id="silo-sidebar" className={className}>
      {competitorImage && <SiloCompareImage competitorImage={competitorImage} />}
      {pageRoutes.map(section => {
        const { sectionName, sectionPages } = section;
        return (
          <SidebarSection key={sectionName}>
            <SidebarInnerSeparator />
            <SidebarHeading>{sectionName}</SidebarHeading>
            {sectionPages.map(page => {
              const { pageName, pageUrl } = page;
              if (useScrollLink) {
                return (
                  <StyledScrollLink
                    key={pageUrl}
                    to={pageUrl}
                    alt={pageName}
                    spy
                    smooth
                    duration={300}
                    offset={-100}
                  >
                    <SidebarSubHeading>{pageName}</SidebarSubHeading>
                  </StyledScrollLink>
                );
              }
              return (
                <StyledLink
                  key={pageUrl}
                  activeStyle={{ color: '#603eff' }}
                  partiallyActive={false}
                  to={pageUrl}
                  alt={pageName}
                  style={{ textDecoration: 'none' }}
                >
                  <SidebarSubHeading>{pageName}</SidebarSubHeading>
                </StyledLink>
              );
            })}
          </SidebarSection>
        );
      })}
    </SidebarContainer>
  );
};

SiloSidebar.defaultProps = {
  pageRoutes: [],
  competitorImage: null,
  className: '',
  useScrollLink: false,
};

SiloSidebar.propTypes = {
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
  competitorImage: PropTypes.string,
  className: PropTypes.string,
  useScrollLink: PropTypes.bool,
};

export default SiloSidebar;
