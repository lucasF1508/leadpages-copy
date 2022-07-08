import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import bkgSVG from '../../assets/images/shapes/wavy-line-gray_brand.svg';

const Holder = styled.div`
  background-color: #f7f7f7;
  position: relative;
  z-index: -2;
`;

const OuterContainer = styled.div`
  position: relative;
  margin-top: -60px;
  padding-top: 60px;
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
`;

const HeaderContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-right: 6rem;
  padding-left: 6rem;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  @media (max-width: 992px) {
    max-width: 750px;
    padding-left: 3rem;
    padding-right: 3rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
  }
  @media (max-width: 576px) {
    padding-top: 3rem;
    padding-left: 0;
    padding-right: 0;
  }
`;

const Supertitle = styled.h2`
  font-family: 'Space Mono';
  opacity: 0.5;
  color: #000000;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
`;

const Title = styled.h1`
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

const Subtitle = styled.p`
  margin-top: 1rem;
  font-family: 'Apercu Pro';
  font-size: 18px;
  color: #575452;
  line-height: 28px;
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 24px;
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
    margin-top: 20px;
  }
  @media (max-width: 992px) {
    width: 100%;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    margin-top: 30px;
  }
`;

const HeroImage = styled(GatsbyImage)`
  width: 115%;
  max-width: 750px;
  min-width: 500px;
  float: right;
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    max-width: 300px;
  }
`;

const SVGContainer = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  overflow-x: hidden;
  z-index: -1;
  @media (max-width: 992px) {
    right: 10%;
  }
  @media (min-width: 993px) {
    right: 20%;
  }
`;

const BrandPageHeader = () => {
  const images = useStaticQuery(graphql`
    query BrandPageHeaderQuery {
      heroImage: file(relativePath: { eq: "assets/images/totems/hero-totem.png" }) {
        ...constrained
      }
    }
  `);
  return (
    <Holder>
      <OuterContainer>
        <SVGContainer src={bkgSVG} alt="background svg" />
        <InnerContainer>
          <HeaderContainer>
            <Supertitle>Jump on our brand’s bandwagon</Supertitle>
            <Title>The Leadpages Brand</Title>
            <Subtitle>
              Our brand is both our personality and our promise, so consistency is key. Use these
              guidelines whenever you work with our brand assets, logo, content, and trademark.
            </Subtitle>
          </HeaderContainer>
          <ImageContainer>
            <HeroImage image={getImage(images.heroImage)}></HeroImage>
          </ImageContainer>
        </InnerContainer>
      </OuterContainer>
    </Holder>
  );
};

export default BrandPageHeader;
