import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { GATSBY_IMAGE } from '../../constants/types';

const OuterContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const FlexRow = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const InnerContainer = styled(FlexRow)`
  flex-wrap: wrap;
  padding-right: 3rem;
  padding-left: 3rem;
  flex-direction: ${props => (props.flexReverse ? 'row-reverse' : 'row')};
  @media (min-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const FlexRowItem6 = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
  justify-content: space-between;
  text-align: left;
  margin-right: 1%;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const TextContainer = styled(FlexRowItem6)`
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const HeadingContainer = styled(FlexRowItem6)`
  margin-top: 4rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const CopyContainer = styled(FlexRowItem6)`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const ImageContainer = styled(FlexRowItem6)`
  align-self: flex-end;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const FlexRowItem6Heading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1.25rem;
  color: #0f0c09;
`;

const FlexRowItem6Copy = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 3rem;
`;

const Heading = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.1px;
  color: #0f0c09;
  margin-bottom: 2rem;
  text-align: left;
  @media (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
    text-align: center;
  }
`;

const TransformCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const BackgroundImageContainer = styled.img`
  position: absolute;
  right: ${props => (props.flexReverse ? '' : 0)};
  left: ${props => (props.flexReverse ? 0 : '')};
  bottom: 0;
  z-index: -1;
  overflow-x: hidden;
  height: 90%;
  @media (max-width: 991px) {
    max-height: 55%;
  }
  @media (max-width: 480px) {
    display: none;
  }
  &.leftoffset {
    left: ${props => props.bgImageOffsetLeft};
  }
  &.rightoffset {
    right: ${props => props.bgImageOffsetRight};
  }
`;

const FlexSectionTwoColumnFeatures = ({
  flexReverse,
  bgImage,
  bgImageAlt,
  bgImageOffsetLeft,
  bgImageOffsetRight,
  mainHeading,
  mainCaption,
  feature1Heading,
  feature1Caption,
  feature2Heading,
  feature2Caption,
  feature3Heading,
  feature3Caption,
  image,
  imageAlt,
}) => (
  <OuterContainer>
    <BackgroundImageContainer
      src={bgImage}
      alt={bgImageAlt}
      bgImageOffsetLeft={bgImageOffsetLeft}
      bgImageOffsetRight={bgImageOffsetRight}
      className={`${flexReverse && bgImageOffsetLeft ? 'leftoffset' : ''} ${
        !flexReverse && bgImageOffsetRight ? 'rightoffset' : ''
      }`}
    />
    <InnerContainer flexReverse={flexReverse}>
      <TextContainer>
        <HeadingContainer>
          <Heading>{mainHeading}</Heading>
          <TransformCopy>{mainCaption}</TransformCopy>
        </HeadingContainer>
        <CopyContainer>
          <FlexRowItem6>
            <FlexRowItem6Heading>{feature1Heading}</FlexRowItem6Heading>
            <FlexRowItem6Copy>{feature1Caption}</FlexRowItem6Copy>
          </FlexRowItem6>
          <FlexRowItem6>
            <FlexRowItem6Heading>{feature2Heading}</FlexRowItem6Heading>
            <FlexRowItem6Copy>{feature2Caption}</FlexRowItem6Copy>
          </FlexRowItem6>
          <FlexRowItem6>
            <FlexRowItem6Heading>{feature3Heading}</FlexRowItem6Heading>
            <FlexRowItem6Copy>{feature3Caption}</FlexRowItem6Copy>
          </FlexRowItem6>
        </CopyContainer>
      </TextContainer>
      <ImageContainer>
        <GatsbyImage image={image} alt={imageAlt} />
      </ImageContainer>
    </InnerContainer>
  </OuterContainer>
);

FlexSectionTwoColumnFeatures.propTypes = {
  flexReverse: PropTypes.bool,
  bgImage: PropTypes.node.isRequired,
  bgImageAlt: PropTypes.string.isRequired,
  bgImageOffsetLeft: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  bgImageOffsetRight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  mainHeading: PropTypes.string.isRequired,
  mainCaption: PropTypes.string.isRequired,
  feature1Heading: PropTypes.string.isRequired,
  feature1Caption: PropTypes.string.isRequired,
  feature2Heading: PropTypes.string,
  feature2Caption: PropTypes.string,
  feature3Heading: PropTypes.string,
  feature3Caption: PropTypes.string,
  image: GATSBY_IMAGE.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

FlexSectionTwoColumnFeatures.defaultProps = {
  flexReverse: false,
  bgImageOffsetLeft: false,
  bgImageOffsetRight: false,
  feature2Heading: '',
  feature2Caption: '',
  feature3Heading: '',
  feature3Caption: '',
};

export default FlexSectionTwoColumnFeatures;
