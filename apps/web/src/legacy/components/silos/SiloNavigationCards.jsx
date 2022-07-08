import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// assets
import rightArrowIcon from '../../assets/images/global/arrow_right.svg';

const CardSectionHeading = styled.h2`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 80%;
  @media (max-width: 768px) {
    margin-top: 35px;
    margin-top: 35px;
    width: 100%;
    font-size: 20px;
    letter-spacing: -0.07px;
    line-height: 24px;
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
`;

const Flexbox = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;

const CardTextContainer = styled.div``;

const CardSupertitle = styled.div`
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  opacity: 0.5;
  color: #000000;
  font-family: 'Space Mono';
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const CardTitle = styled.div`
  font-family: Apercu Pro;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #0f0c09;
  margin-bottom: 8px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }

  @media (min-width: 993px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
  }
`;

const ArrowRight = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  width: 20px;
  height: 10px;
`;

const Card = styled.div`
  max-width: 825px;
  background-color: #ffffff !important;
  margin-bottom: 12px;
  box-shadow: 0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15);
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 6px 12px 0 rgba(15, 12, 9, 0.3), 0 12px 24px 0 rgba(15, 12, 9, 0.15);
  }

  &:hover ${CardTitle} {
    color: #603eff;
  }

  &:hover ${ArrowRight} {
    filter: invert(33%) sepia(92%) saturate(6067%) hue-rotate(247deg) brightness(101%)
      contrast(102%);
  }
`;

const SiloNavigationCards = ({ pageRoutes, onlyShowNextPage, showSpecificPage }) => {
  const [activeRoute, setActiveRoute] = useState();

  useEffect(() => {
    // note: handling the trailing slash only necessary in dev environment
    const currentRoute = window.location.pathname.endsWith('/')
      ? window.location.pathname.slice(0, -1)
      : window.location.pathname;
    setActiveRoute(currentRoute);
  });

  if (onlyShowNextPage) {
    const allPagesArray = pageRoutes.flatMap(x => x.sectionPages);

    const getNextPageIndex = activeRoute => {
      const currentPageIndex = allPagesArray.findIndex(x => x.pageUrl === activeRoute);
      return currentPageIndex === allPagesArray.length - 1 ? 0 : currentPageIndex + 1;
    };

    const nextPageIndex = getNextPageIndex(activeRoute);
    const nextPageData = allPagesArray[nextPageIndex];
    const { pageUrl, pageTitle, pageSupertitle } = nextPageData;

    return (
      <>
        <CardSectionHeading>
          {nextPageIndex === 0 ? 'Review:' : 'Continue reading:'}
        </CardSectionHeading>
        <Card>
          <StyledLink to={pageUrl}>
            <Flexbox>
              <CardTextContainer>
                <CardSupertitle>{pageSupertitle}</CardSupertitle>
                <CardTitle>{pageTitle}</CardTitle>
              </CardTextContainer>
              <ArrowRight src={rightArrowIcon} alt="right arrow" />
            </Flexbox>
          </StyledLink>
        </Card>
      </>
    );
  } else if (showSpecificPage || showSpecificPage === 0) {
    const allPagesArray = pageRoutes.flatMap(x => x.sectionPages);

    const pageData = allPagesArray[showSpecificPage];
    const { pageUrl, pageTitle, pageSupertitle } = pageData;
    return (
      <Card>
        <StyledLink to={pageUrl}>
          <Flexbox>
            <CardTextContainer>
              <CardSupertitle>{pageSupertitle}</CardSupertitle>
              <CardTitle>{pageTitle}</CardTitle>
            </CardTextContainer>
            <ArrowRight src={rightArrowIcon} alt="right arrow" />
          </Flexbox>
        </StyledLink>
      </Card>
    );
  } else {
    return (
      <>
        {pageRoutes.map((section, index) => {
          const { sectionCardTitle, sectionPages } = section;
          return (
            <div key={index} style={{ display: index === 0 ? 'none' : 'block' }}>
              <CardSectionHeading>{sectionCardTitle}</CardSectionHeading>
              {sectionPages.map((page, index) => {
                const { pageUrl, pageTitle, pageSupertitle } = page;
                return (
                  <Card key={index}>
                    <StyledLink to={pageUrl}>
                      <Flexbox>
                        <CardTextContainer>
                          <CardSupertitle>{pageSupertitle}</CardSupertitle>
                          <CardTitle>{pageTitle}</CardTitle>
                        </CardTextContainer>
                        <ArrowRight src={rightArrowIcon} alt="right arrow" />
                      </Flexbox>
                    </StyledLink>
                  </Card>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
};

SiloNavigationCards.defaultProps = {
  onlyShowNextPage: false,
  showSpecificPage: null,
};

export default SiloNavigationCards;
