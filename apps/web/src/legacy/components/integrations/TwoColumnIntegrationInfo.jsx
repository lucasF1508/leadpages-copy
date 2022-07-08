import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
// Image
import checkSVG from '../../assets/images/global/check_in-circle.svg';
import { GATSBY_IMAGE } from '../../constants/types';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6.4rem 6rem 7rem 6rem;

  width: 100%;
  max-width: 1140px;
  @media (max-width: 1023px) {
    margin-right: 3rem;
    margin-left: 3rem;
  }
  @media (max-width: 768px) {
    margin: 5.8rem 1.2rem 4rem 2.7rem;
  }
  @media (max-width: 425px) {
    display: block;
    margin: 2.75rem 1.8rem 3.8rem 1.8rem;
  }
`;

const TextFlexItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 8.3rem;
  @media (max-width: 769px) {
    flex: 0 0 45%;
    margin-right: 3.7rem;
  }
  @media (max-width: 425px) {
    margin-right: 0;
    margin-bottom: 3.3rem;
  }
`;

const Headline = styled.h2`
  font-family: Value Serif;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 0.9rem;
  @media (max-width: 425px) {
    margin-bottom: 2.4rem;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #575452;
`;

const ImageFlexItem = styled.div`
  flex: 0 0 55%;
  @media (max-width: 769px) {
    flex: 0 0 45%;
  }
`;

const Image = styled(GatsbyImage)`
  width: 100%;
`;

const SVG = styled.img`
  position: absolute;
  top: 3px;
`;

const CheckboxContainer = styled.div`
  position: relative;
`;

const CheckboxItem = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  padding-left: 2rem;
  padding-bottom: 0.7rem;
`;

const TwoColumnIntegrationInfo = ({ headline, description, image, imageAlt, checkboxInfo }) => {
  return (
    <OuterContainer>
      <FlexContainer>
        <TextFlexItem>
          <Headline>{headline}</Headline>
          {checkboxInfo ? (
            <>
              {checkboxInfo.map(info => (
                <CheckboxContainer key={info}>
                  <SVG src={checkSVG} alt="check mark" />
                  <CheckboxItem>{info}</CheckboxItem>
                </CheckboxContainer>
              ))}
            </>
          ) : (
            <Description>{description}</Description>
          )}
        </TextFlexItem>
        <ImageFlexItem>
          <Image image={image} alt={imageAlt} />
        </ImageFlexItem>
      </FlexContainer>
    </OuterContainer>
  );
};

TwoColumnIntegrationInfo.defaultProps = {
  checkboxInfo: null,
  description: null,
};

TwoColumnIntegrationInfo.propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: GATSBY_IMAGE.isRequired,
  imageAlt: PropTypes.string.isRequired,
  checkboxInfo: PropTypes.arrayOf(PropTypes.string),
};

export default TwoColumnIntegrationInfo;
