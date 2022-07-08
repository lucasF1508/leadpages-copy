import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
// images
import bkgSVG from '../../assets/images/shapes/circle-lavender_compare.svg';

const OuterContainer = styled.div`
  position: relative;
  margin-top: -60px;
  padding-top: 60px;
  background-color: #0a236d;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 3;
  position: relative;
  @media (min-width: 1441px) {
    justify-content: center;
  }
`;

const HeaderContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-right: 3rem;
  padding-left: 3rem;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40%;
  flex: 0 0 40%;
  @media (max-width: 992px) {
    max-width: 750px;
    padding-left: 3rem;
    padding-right: 3rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    text-align: center;
  }
  @media (max-width: 576px) {
    padding-top: 3rem;
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: 1141px) {
    max-width: 525px;
    margin-right: 2%;
  }
`;

const Title = styled.h1`
  margin-top: 1rem;
  font-family: 'Value Serif';
  font-size: 3.5rem;
  letter-spacing: -0.03125rem;
  line-height: 3rem;
  color: white;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    font-size: 30px;
    line-height: 34px;
    letter-spacing: 0;
    text-align: center;
  }
`;

const Subtitle = styled.p`
  margin-top: 1rem;
  font-family: 'Apercu Pro';
  font-size: 18px;
  color: white;
  line-height: 28px;
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
`;

const ScrollingLink = styled(ScrollLink)`
  cursor: pointer;
  text-decoration: none;
`;

const Button = styled.button`
  width: 206px;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #603eff;
  background-color: #603eff;
  color: #ffffff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 2rem;
  @media (max-width: 576px) {
    width: 80%;
    font-size: 16px;
    align-self: center;
  }
  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }
`;

const ImageContainer = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 45%;
  flex: 0 0 45%;
  margin-top: 100px;
  @media (max-width: 992px) {
    width: 100%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    margin-top: 10px;
    display: flex;
  }
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const HeroImage = styled(GatsbyImage)`
  width: 115%;
  max-width: 450px;
  @media (max-width: 992px) {
    width: 50%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 576px) {
    min-width: 300px;
  }
`;

const SVGContainer = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  overflow-x: hidden;
  z-index: 0;
  @media (min-width: 993px) {
    right: 20%;
  }
  @media (max-width: 992px) {
    right: 10%;
  }
`;

const ComparePlansHeader = ({ deviceSize, scrollTarget }) => {
  const images = useStaticQuery(graphql`
    query ComparePlansHeaderQuery {
      desktopHeroImage: file(
        relativePath: { eq: "assets/images/heros/compareplans-hero_desktop_1780px@2x.png" }
      ) {
        ...constrained
      }
      mobileHeroImage: file(
        relativePath: { eq: "assets/images/heros/compareplans-hero_mobile_1112px@2x.png" }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <OuterContainer>
      <SVGContainer src={bkgSVG} alt="background svg" />
      <InnerContainer>
        <HeaderContainer>
          <Title>Get Online & Grow</Title>
          <Subtitle>
            Easily create your website and landing pages with the only platform engineered by
            marketing nerds.
          </Subtitle>
          <ScrollingLink
            to={scrollTarget}
            smooth
            duration={500}
            offset={-15}
            alt="Start Your Free Trial"
          >
            <Button>Start Your Free Trial</Button>
          </ScrollingLink>
        </HeaderContainer>
        <ImageContainer>
          <HeroImage
            image={
              deviceSize === 'mobile'
                ? getImage(images.mobileHeroImage)
                : getImage(images.desktopHeroImage)
            }
          ></HeroImage>
        </ImageContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default ComparePlansHeader;
