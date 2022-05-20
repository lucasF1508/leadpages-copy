import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

// Images
import bkgSVG from '../../assets/images/shapes/wavy-lines-hourglass-gray.svg';
import ArrowRightPurple from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  position: relative;
  margin-top: -60px;
  padding-top: 60px;
  background-color: #f7f7f7;
  z-index: -1;
`;

const HeaderContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-right: 3rem;
  padding-left: 3rem;
  text-align: center;
  padding-bottom: 6rem;
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }

  &.left-align {
    text-align: left;
  }
`;
const Supertitle = styled.div`
  font-family: 'Space Mono';
  opacity: 0.5;
  color: #000000;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
`;

const Title = styled.div`
  margin-top: 1rem;
  font-family: 'Value Serif';
  font-size: 2.5rem;
  letter-spacing: -0.03125rem;
  line-height: 3rem;
  color: #0f0c09;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const SVGContainer = styled.img`
  position: absolute;
  right: 0;
  overflow-x: hidden;
  bottom: -30px;
  width: 100%;
  z-index: -1;
  @media (max-width: 490px) {
    display: none;
  }
  @media (min-width: 491px) and (max-width: 767px) {
    bottom: -40px;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    bottom: -30px;
    width: 70%;
  }

  @media (min-width: 1031px) and (max-width: 1299px) {
    bottom: -50px;
    width: 70%;
  }
  @media (min-width: 1300px) {
    bottom: -80px;
    width: 70%;
  }
`;

const RightArrow = styled.img`
  width: 16px;
  height: 11px;
  display: inline;
  filter: opacity(40%);
  margin: 0 1rem 0 1rem;
`;

const BreadCrumbsContainer = styled.div`
  font-weight: 500;
  line-height: 24px;
  color: #0f0c09;
`;

const ParentPage = styled.span`
  font-weight: 500;
  line-height: 24px;
  color: #0f0c09;
  filter: opacity(40%);
  &:hover {
    color: #603eff;
    filter: opacity(1);
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

const SiloHeader = ({ title, supertitle, breadcrumbs }) => {
  return (
    <OuterContainer>
      <SVGContainer src={bkgSVG} alt="background svg" />
      <HeaderContainer className={breadcrumbs ? 'left-align' : null}>
        {breadcrumbs && (
          <BreadCrumbsContainer>
            <StyledLink to={breadcrumbs.parentPageLink}>
              <ParentPage>{breadcrumbs.parentPageName}</ParentPage>
            </StyledLink>
            <RightArrow src={ArrowRightPurple} alt="Grey right arrow" />
            {breadcrumbs.currentPageName}
          </BreadCrumbsContainer>
        )}
        {supertitle && <Supertitle>{supertitle}</Supertitle>}
        <Title>{title}</Title>
      </HeaderContainer>
    </OuterContainer>
  );
};

SiloHeader.defaultProps = {
  breadcrumbs: null,
  supertitle: null,
};
SiloHeader.propTypes = {
  breadcrumbs: PropTypes.shape({
    currentPageName: PropTypes.string.isRequired,
    parentPageName: PropTypes.string.isRequired,
    parentPageLink: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  supertitle: PropTypes.string,
};

export default SiloHeader;
