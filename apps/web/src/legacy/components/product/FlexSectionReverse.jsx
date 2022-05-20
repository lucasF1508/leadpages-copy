import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { GATSBY_IMAGE } from '../../constants/types';

const OuterContainer = styled.div`
  position: relative;
  margin-top: 6rem;
  margin-bottom: 11rem;
  @media (max-width: 576px) {
    margin-bottom: 4.5rem;
    margin-top: 2rem;
  }
  @media (min-width: 577px) and (max-width: 991px) {
    margin-bottom: 8.5rem;
    margin-top: 2rem;
  }

  @media (min-width: 992px) {
    margin-bottom: 11rem;
  }
`;

const MainContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  position: relative;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const OuterFlexContainer = styled(FlexRow)`
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;

const ReverseInnerFlexContainer = styled(FlexRow)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 0;
  flex-direction: row-reverse;
  @media (max-width: 991px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

const FlexRowItem6 = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  padding-left: 1%;
  padding-right: 1%;
  justify-content: space-between;
  text-align: left;
  margin-right: 1%;
`;

const TextContainer = styled(FlexRowItem6)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 576px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
  @media (min-width: 577px) and (max-width: 991px) {
    max-width: 66%;
    margin-bottom: 4rem;
  }

  @media (min-width: 992px) {
    margin-top: auto;
    margin-bottom: auto;
    max-width: 40%;
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 34%;
    flex: 0 0 34%;
    width: 34%;
  }
`;

const ReverseImageContainer = styled(FlexRowItem6)`
  position: relative;
  @media (max-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 577px) and (max-width: 991px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66%;
    flex: 0 0 66%;
    max-width: 66%;
    margin-right: auto;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 64%;
    flex: 0 0 64%;
    max-width: 630px;
    width: 64%;
  }
`;

const Title = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  opacity: 0.5;
  color: #000000;
  margin-bottom: 26px;
`;

const Headline = styled.div`
  font-family: 'Apercu Pro';
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #0f0c09;
  margin-bottom: 16px;
`;

const Caption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #575452;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    margin-bottom: 16px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    margin-bottom: 16px;
  }

  @media (min-width: 993px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
    margin-bottom: 24px;
  }
`;

const SVGContainer = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 50%;
  max-width: 800px;
  overflow-x: hidden;
  margin-left: -25vw;
`;

const FlexSectionReverse = ({
  bgImage,
  bgImageAlt,
  title,
  headline,
  caption,
  image,
  imageAlt,
  children,
}) => (
  <OuterContainer>
    <SVGContainer src={bgImage} alt={bgImageAlt} />
    <MainContainer>
      <OuterFlexContainer>
        <ReverseInnerFlexContainer>
          <TextContainer>
            <Title>{title}</Title>
            <Headline>{headline}</Headline>
            <Caption>{caption}</Caption>
          </TextContainer>
          <ReverseImageContainer>
            {image && <GatsbyImage image={image} alt={imageAlt} />}
            {children}
          </ReverseImageContainer>
        </ReverseInnerFlexContainer>
      </OuterFlexContainer>
    </MainContainer>
  </OuterContainer>
);

FlexSectionReverse.defaultProps = {
  bgImage: '',
  bgImageAlt: '',
  title: '',
  headline: '',
  caption: '',
  imageAlt: '',
  children: '',
};

FlexSectionReverse.propTypes = {
  bgImage: PropTypes.node,
  bgImageAlt: PropTypes.string,
  title: PropTypes.string,
  headline: PropTypes.string,
  caption: PropTypes.string,
  image: GATSBY_IMAGE.isRequired,
  imageAlt: PropTypes.string,
  children: PropTypes.node,
};

export default FlexSectionReverse;
