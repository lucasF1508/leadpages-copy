import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import backgroundSVG from '../../assets/images/shapes/wedge-sand-step.png';

const OuterContainer = styled.div`
  padding-top: 6rem;
  position: relative;
  background: #fff;
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
`;

const TransformCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const Image = styled(GatsbyImage)`
  margin-left: auto;
  max-width: 70vw;
`;

const SVGContainer = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  width: 50vw;
  max-width: 700px;
  @media (max-width: 768px) {
    width: 70vw;
    max-width: 100vw;
  }
`;

const OurStory = () => (
  <StaticQuery
    query={graphql`
      query OurStoryQuery {
        imageOne: file(relativePath: { eq: "assets/images/totems/our-story_714px@2x.png" }) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <SVGContainer src={backgroundSVG} alt="background svg" />
        <InnerContainer>
          <TextContainer>
            <Heading>Our Story</Heading>
            <TransformCopy>
              Leadpages is a best-in-class digital lead generation platform that enables
              entrepreneurs and small business marketers to get online and grow. We make it possible
              to easily publish web pages, confidently generate leads, and consistently transform
              clicks into customers. From websites and landing pages to alert bars and pop-ups,
              Leadpages helps you get in business and stay in business online.
            </TransformCopy>
            <FlexRowItem6Copy>
              Headquartered in Minneapolis, Minnesota, our company started in 2012 and has grown to
              serve hundreds of thousands of customers around the world.
            </FlexRowItem6Copy>
          </TextContainer>
          <ImageContainer>
            <Image image={getImage(data.imageOne)} alt="press our story" />
          </ImageContainer>
        </InnerContainer>
      </OuterContainer>
    )}
  />
);

export default OurStory;
