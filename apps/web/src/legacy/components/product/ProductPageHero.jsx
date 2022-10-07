import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { GATSBY_IMAGE } from '../../constants/types';
// images
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  margin-top: -60px;
  padding-top: 108px;
  position: relative;
  background-color: #f7f7f7;
`;

const HeaderContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
  z-index: 2;
`;

const FlexRow = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
`;

const FlexRowLeft = styled(FlexRowItem)`
  justify-content: space-between;
  text-align: left;
  @media (max-width: 575px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40.6666%;
    flex: 0 0 40.6666%;
    max-width: 40.6666%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }
`;
const HeaderImgLeft = styled.div`
  width: 100%;
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  align-self: flex-end;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
    text-align: left;
  }
`;

const SmallHeading = styled.div`
  font-family: 'Space Mono';
  opacity: 0.5;
  color: #000000;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
`;

const LeftHeading = styled.div`
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

const LeftSubHeading = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const LeftCTA = styled.div`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
  margin-bottom: 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const SVGContainer = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  width: 100%;
  @media (min-width: 992px) and (max-width: 1439px) {
    width: 90%;
  }
  @media (min-width: 1440px) {
    width: 70%;
  }
  /* max-width: 667px;
  max-height: 583px; */
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const OutboundLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
const ChildPageHeader = ({
  bgColor,
  bgImage,
  bgImageAltText,
  smallHeading,
  headingText,
  subheadingText,
  outboundCTA,
  link,
  linkText,
  showCTA,
  CTAtext,
  showLB,
  dataleadboxpopup,
  dataleadboxdomain,
  image,
  imageAltText,
}) => (
  <OuterContainer style={{ backgroundColor: bgColor }}>
    <SVGContainer src={bgImage} alt={bgImageAltText} />
    <HeaderContainer>
      <FlexRow>
        <FlexRowLeft>
          <SmallHeading>{smallHeading}</SmallHeading>
          <LeftHeading>
            <h1>{headingText}</h1>
          </LeftHeading>
          <LeftSubHeading>{subheadingText}</LeftSubHeading>
          {outboundCTA === 'true' && (
            <OutboundLink href={link} alt={linkText} rel="noopener nofollow" target="_blank">
              <LeftCTA>
                {CTAtext}
                <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
              </LeftCTA>
            </OutboundLink>
          )}
          {!!showCTA && (
            <StyledLink to={link} alt={linkText}>
              <LeftCTA>
                {CTAtext}
                <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
              </LeftCTA>
            </StyledLink>
          )}
          {!!showLB && (
            <OutboundLink
              href=""
              alt={linkText}
              data-leadbox-popup={dataleadboxpopup}
              data-leadbox-domain={dataleadboxdomain}
            >
              <LeftCTA>
                {CTAtext}
                <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
              </LeftCTA>
            </OutboundLink>
          )}
        </FlexRowLeft>
        <FlexRowRight>
          <HeaderImgLeft>
            <GatsbyImage image={image} alt={imageAltText} />
          </HeaderImgLeft>
        </FlexRowRight>
      </FlexRow>
    </HeaderContainer>
  </OuterContainer>
);

ChildPageHeader.defaultProps = {
  bgColor: '#f7f7f7',
  bgImage: '',
  bgImageAltText: '',
  smallHeading: '',
  headingText: '',
  subheadingText: '',
  outboundCTA: false,
  link: '',
  linkText: '',
  showCTA: false,
  CTAtext: '',
  showLB: false,
  dataleadboxpopup: '',
  dataleadboxdomain: '',
};

ChildPageHeader.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.node,
  bgImageAltText: PropTypes.string,
  smallHeading: PropTypes.string,
  headingText: PropTypes.string,
  subheadingText: PropTypes.string,
  outboundCTA: PropTypes.bool,
  link: PropTypes.string,
  linkText: PropTypes.string,
  showCTA: PropTypes.bool,
  CTAtext: PropTypes.string,
  showLB: PropTypes.bool,
  dataleadboxpopup: PropTypes.string,
  dataleadboxdomain: PropTypes.string,
  image: GATSBY_IMAGE.isRequired,
  imageAltText: PropTypes.string.isRequired,
};

export default ChildPageHeader;
