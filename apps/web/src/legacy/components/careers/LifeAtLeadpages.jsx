import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { GATSBY_IMAGE } from '../../constants/types';

const OuterContainer = styled.div`
  position: relative;
  background-color: #f7f7f7;
  padding-top: 6rem;
  overflow: hidden;
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
  @media (max-width: 768px) {
    display: block;
    padding-bottom: 3rem;
  }
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
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 769px) {
    margin-bottom: 2rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
  }
`;
const HeaderImgLeft = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileImage = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 2rem;
  }
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  align-self: flex-end;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 769px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
    text-align: left;
  }
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

const LeftParagraph1 = styled.div`
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

const LeftParagraph2 = styled(LeftParagraph1)``;

const SVGContainer = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  max-height: 100%;
  @media (max-width: 1260px) {
    width: 50%;
    max-height: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ChildPageHeader = ({
  bgImage,
  bgImageAltText,
  headingText,
  subheadingText1,
  image,
  imageAltText,
  subheadingText2,
}) => (
  <OuterContainer>
    <SVGContainer src={bgImage} alt={bgImageAltText} />
    <HeaderContainer>
      <FlexRow>
        <FlexRowLeft>
          <LeftHeading>{headingText}</LeftHeading>
          <LeftParagraph1>{subheadingText1}</LeftParagraph1>
          <MobileImage>
            <GatsbyImage image={image} alt={imageAltText} />
          </MobileImage>
          <LeftParagraph2>{subheadingText2}</LeftParagraph2>
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
  bgImage: '',
  bgImageAltText: '',
  headingText: '',
  subheadingText1: '',
  imageAltText: '',
  subheadingText2: '',
};

ChildPageHeader.propTypes = {
  bgImage: PropTypes.node,
  bgImageAltText: PropTypes.string,
  headingText: PropTypes.string,
  subheadingText1: PropTypes.string,
  image: GATSBY_IMAGE.isRequired,
  imageAltText: PropTypes.string,
  subheadingText2: PropTypes.string,
};

export default ChildPageHeader;
