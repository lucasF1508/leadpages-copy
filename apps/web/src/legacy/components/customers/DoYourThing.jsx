import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  padding-top: 6rem;
  @media (min-width: 576px) {
    padding-top: 8rem;
  }
  @media (max-width: 768px) {
    margin-bottom: -10rem;
  }
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Heading = styled.div`
  font-family: 'Value Serif';
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.07px;
  color: #fff;
  margin-bottom: 27px;

  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.07px;
    padding-top: 58px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 71px;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
  }

  @media (min-width: 993px) {
    margin-top: 98px;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.5px;
  }
`;

const SubHeading = styled.div`
  color: #fff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 56px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-bottom: 2rem;
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 993px) {
    margin-bottom: 2rem;
    font-size: 18px;
    line-height: 28px;
  }
`;

const MobileImage = styled(GatsbyImage)`
  z-index: -1;
  width: 100%;
  height: 100%;
  @media (min-width: 769px) {
    display: inline-block;
    min-height: 491px;
    max-height: 491px;
    min-width: 450px;
    max-width: 450px;
  }
`;

const Container = styled.div`
  @media (min-width: 769px) {
    height: 350px;
    bottom: 50px;
    position: relative;
  }
`;

const TextContainer = styled.div`
  background: #b27e52;
  position: relative;
  @media (max-width: 768px) {
    bottom: 150px;
  }
  @media (min-width: 769px) and (max-width: 1159px) {
    position: absolute;
    max-width: 61%;
    top: 40px;
    right: 0;
    min-height: 450px;
    max-height: 450px;
  }
  @media (min-width: 1160px) {
    position: absolute;
    max-width: 690px;
    top: 40px;
    right: 0;
    min-height: 450px;
    max-height: 450px;
  }
`;

const DoYourThing = () => {
  const images = useStaticQuery(graphql`
    query DoYourThingQuery {
      image1: file(
        relativePath: {
          eq: "assets/images/customers/jody/you-do-your-thing_leadpages_450px@2x.png"
        }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <OuterContainer>
      <InnerContainer>
        <MobileImage image={getImage(images.image1)} alt="customers do your thing" />
        <TextContainer>
          <Container>
            <Heading>
              You do your thing.
              <br />
              We’ll do the rest.
            </Heading>
            <SubHeading>
              Whatever you do, whatever industry you’re in, country you’re from, or lifestyle you
              lead—Leadpages is designed to transform your passion into a profitable business. As an
              entrepreneur, you need a fast, powerful, optimized platform to convert leads and close
              sales. That’s what we do. So you can get back to doing what you do best.
            </SubHeading>
          </Container>
        </TextContainer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default DoYourThing;
