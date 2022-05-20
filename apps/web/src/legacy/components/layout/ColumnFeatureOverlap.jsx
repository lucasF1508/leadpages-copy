import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { GATSBY_IMAGE } from '../../constants/types';

const OuterContainer = styled.div`
  position: relative;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 577px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 768px) {
    display: block;
  }
`;

const ColumnSection = styled.div`
  position: relative;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 48%;
  flex: 0 0 48%;
  width: 100%;
  min-height: 1px;
  max-width: 48%;
  text-decoration: none;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextSection = styled(ColumnSection)`
  z-index: 4;
  align-self: center;
  margin-left: -10%;
  padding: 5%;
  background: #fff;
  @media (max-width: 768px) {
    margin-left: -5%;
  }
`;

const Title = styled.div`
  font-family: 'Value Serif';
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  margin-bottom: 1.25rem;
  color: #0f0c09;
  @media (max-width: 844px) {
    padding-top: 20px;
  }
`;

const MainText = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 1.25rem;
  color: #575452;
`;

const Supertitle = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  margin-bottom: 1.25rem;
  color: #0b236d;
  background: #8fefef;
  text-transform: uppercase;
  text-align: center;
  border-radius: 3px;
  display: inline-block;
  padding: 4px 8px;
  @media (max-width: 844px) {
    margin-top: 30px;
  }
`;

const TextContainer = styled.div`
  z-index: 2;
  position: relative;
  background: #fff;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #603eff;
  cursor: pointer;
  z-index: 4;
`;

const OutboundLink = styled.a`
  text-decoration: none;
  color: #603eff;
  cursor: pointer;
  z-index: 4;
`;

const Button = styled.button`
  width: 222px;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #603eff;
  background-color: #603eff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }
  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }
`;

const ColumnFeatureOverlap = ({
  image,
  imageAlt,
  title,
  text,
  supertitle,
  link,
  outboundLink,
  linkAlt,
  buttonText,
}) => (
  <OuterContainer>
    <InnerContainer>
      <ColumnSection>
        <GatsbyImage image={image} alt={imageAlt} />
      </ColumnSection>
      <TextSection>
        <TextContainer>
          {supertitle && <Supertitle>{supertitle}</Supertitle>}
          <Title>{title}</Title>
          <MainText>{text}</MainText>
          {link && (
            <StyledLink to={link} alt={linkAlt}>
              <Button>{buttonText}</Button>
            </StyledLink>
          )}
          {outboundLink && (
            <OutboundLink href={outboundLink} alt={linkAlt}>
              <Button>{buttonText}</Button>
            </OutboundLink>
          )}
        </TextContainer>
      </TextSection>
    </InnerContainer>
  </OuterContainer>
);

ColumnFeatureOverlap.defaultProps = {
  supertitle: '',
  link: '',
  outboundLink: '',
  linkAlt: '',
};

ColumnFeatureOverlap.propTypes = {
  image: GATSBY_IMAGE.isRequired,
  imageAlt: PropTypes.string.isRequired,
  supertitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  outboundLink: PropTypes.string,
  linkAlt: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default ColumnFeatureOverlap;
