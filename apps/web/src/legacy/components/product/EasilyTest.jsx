import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import skillbkgSVG from '../../assets/images/shapes/semicircle-sand.svg';

const ETContainer = styled.div``;

const CopyContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
  text-align: center;
  @media (min-width: 576px) {
    padding-right: 6rem;
    padding-left: 6rem;
    padding-top: 10rem;
  }
`;

const ETTitle = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  opacity: 0.5;
  color: #000000;
  margin-bottom: 2rem;
`;

const ETHeadline = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  margin-bottom: 2rem;
  padding-left: 15%;
  padding-right: 15%;
`;

const ETCaption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 1.25rem;
  padding-left: 15%;
  padding-right: 15%;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const FrontImage = styled(GatsbyImage)`
  width: 80%;
  max-width: 1055px;
  margin-left: auto;
  margin-right: auto;
`;

const BGImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`;

const EasilyTest = () => (
  <StaticQuery
    query={graphql`
      query EasilyTestQuery {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/AB-testing_a-b-testLandingPages-1055px@2x.png"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <ETContainer>
        <CopyContainer>
          <ETTitle>Unlimited A/B Split Testing</ETTitle>
          <ETHeadline>
            Easily test your pages to find out what works best for your audience (and do more of
            it!)
          </ETHeadline>
          <ETCaption>
            Optimize your pages for conversions by running A/B split tests on any landing page.
          </ETCaption>
        </CopyContainer>
        <ImgContainer>
          <BGImage src={skillbkgSVG} alt="background svg" />
          <FrontImage image={getImage(data.imageOne)} alt="Unlimited A/B Split Testing" />
        </ImgContainer>
      </ETContainer>
    )}
  />
);

export default EasilyTest;
