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
  align-items: flex-end;
  background-color: #0b236d;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1400px;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const TextFlexItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 23%;
  margin: 6rem 10rem 6rem 4.2rem;

  @media (max-width: 769px) {
    margin: 3rem 5.2rem 3rem 3rem;
  }

  @media (max-width: 425px) {
    margin: 3rem 1.8rem 2.25rem 1.8rem;
  }
`;

const Headline = styled.h2`
  font-family: Value Serif;
  font-size: 30px;
  line-height: 36px;
  color: #ffffff;
  margin-bottom: 1.4rem;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 1.4rem;
`;

const ChecklistItem = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-left: 2rem;
  padding-bottom: 0.7rem;
`;

const ImageFlexItem = styled.div`
  flex: 0 0 70%;
  margin-top: 7.2rem;
  position: relative;

  @media (max-width: 769px) {
    position: static;
    order: 2;
    margin: 0 0.5rem;
    min-height: 0;
  }

  @media (min-width: 426px) and (max-width: 769px) {
    flex: 0 0 60%;
    margin: 9px 5.2rem 0 3rem;
  }
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  min-height: 300px;

  position: absolute !important;
  bottom: 0px;
  left: 0px;

  @media (max-width: 769px) {
    position: relative !important;
    min-height: 0;
  }
`;

const SVG = styled.img`
  filter: brightness(100);
  position: absolute;
  top: 3px;
`;

const CheckboxContainer = styled.div`
  position: relative;
`;

const StyledLink = styled.a`
  margin-top: 1.5rem;
`;

const Button = styled.button`
  width: 256px;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #603eff;
  background-color: #603eff;
  color: #ffffff;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0 1rem;

  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }

  @media (max-width: 425px) {
    max-width: 100%;
  }
`;

const IntegrationsPromoSection = ({
  image,
  imageAlt,
  headline,
  description,
  checklist,
  buttonText,
  link,
  linkAlt,
}) => {
  return (
    <OuterContainer>
      <InnerContainer>
        <ImageFlexItem>
          <Image image={image} alt={imageAlt} />
        </ImageFlexItem>
        <TextFlexItem>
          <Headline>{headline}</Headline>
          {description && <Description>{description}</Description>}
          {checklist.map(info => (
            <CheckboxContainer>
              <SVG src={checkSVG} alt="check mark" />
              <ChecklistItem>{info}</ChecklistItem>
            </CheckboxContainer>
          ))}
          <StyledLink to={link} alt={linkAlt}>
            <Button>{buttonText}</Button>
          </StyledLink>
        </TextFlexItem>
      </InnerContainer>
    </OuterContainer>
  );
};

IntegrationsPromoSection.defaultProps = {
  checklist: null,
  description: null,
};

IntegrationsPromoSection.propTypes = {
  image: GATSBY_IMAGE.isRequired,
  imageAlt: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string,
  checklist: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkAlt: PropTypes.string.isRequired,
};

export default IntegrationsPromoSection;
