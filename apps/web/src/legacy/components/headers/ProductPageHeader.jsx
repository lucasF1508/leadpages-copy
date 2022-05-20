import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// components
import Wistia_DemoVideo from '../videos/Wistia_DemoVideo';
// images
import backgroundSVG from '../../assets/images/shapes/wavy-line-gray_brand.svg';
import playButtonSVG from '../../assets/images/global/play-button-circle_purple.svg';

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
  padding-right: 3rem;
  padding-left: 3rem;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 37%;
  flex: 0 0 37%;
  @media (max-width: 996px) {
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
  @media (min-width: 1400px) {
    max-width: 500px;
    margin-right: 4%;
  }
`;

const Title = styled.h1`
  margin-top: 1rem;
  font-family: 'Value Serif';
  font-size: 3.5rem;
  letter-spacing: -0.03125rem;
  line-height: 60px;
  color: #0f0c09;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    text-align: center;
  }
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
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 44%;
  flex: 0 0 44%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-right: 2rem;
  @media (max-width: 996px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    justify-content: center;
    padding-right: 0;
  }
`;

const HeroImage = styled(GatsbyImage)`
  width: 100%;
  max-width: 560px;
  min-width: 500px;
  bottom: 0;
  @media (max-width: 996px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    min-width: 300px;
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

const VideoButtonHolder = styled.div`
  max-width: 188px;
  margin-top: 2rem;
  margin-bottom: 4.5rem;
  color: #603eff;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  height: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
  }
  @media (max-width: 340px) {
    align-self: center;
  }
  display: flex;
  align-items: center;
`;

const TextHolder = styled.div`
  display: flex;
  align-items: center;
  color: #603eff;
`;

const VideoButtonSVG1 = styled.img`
  height: 28px;
  width: 28px;
  margin-right: 5px;
`;

const VideoButtonText = styled.span``;

const BrandPageHeader = () => {
  const images = useStaticQuery(graphql`
    query ProductPageHeaderQuery {
      heroImage: file(
        relativePath: { eq: "assets/images/heros/product-hero_lp-tools_560px@2x.png" }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <OuterContainer>
      <SVGContainer src={backgroundSVG} alt="background svg" />
      <InnerContainer>
        <HeaderContainer>
          <Title>All You Need to Get Online and Grow Your Business</Title>
          <Subtitle>
            Easily create digital content that’s engineered by expert marketers to turn clicks into
            customers.
          </Subtitle>

          <Wistia_DemoVideo>
            <VideoButtonHolder>
              <TextHolder>
                <VideoButtonSVG1 src={playButtonSVG} alt="play button icon" />
                <VideoButtonText>&nbsp;Watch a quick demo&nbsp;</VideoButtonText>
              </TextHolder>
            </VideoButtonHolder>
          </Wistia_DemoVideo>
        </HeaderContainer>
        <ImageContainer>
          <HeroImage image={getImage(images.heroImage)}></HeroImage>
        </ImageContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default BrandPageHeader;
