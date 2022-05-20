import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const STContainer = styled.div`
  padding-top: 6rem;
  padding-right: 6rem;
  padding-left: 6rem;
  padding-bottom: 6rem;
  background-color: #603eff;
  @media (min-width: 576px) {
    padding-top: 10rem;
  }
  @media (max-width: 768px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const FlexRow = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
`;

const FlexRowLeft = styled(FlexRowItem)`
  text-align: left;
  align-self: center;

  @media (max-width: 900px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40.6666%;
    flex: 0 0 40.6666%;
    max-width: 40.6666%;
  }
`;
const HeaderImgLeft = styled.div`
  width: 100%;
`;

const LeftContainer = styled.div``;

const FlexRowRight = styled(FlexRowItem)`
  align-self: center;
  @media (max-width: 900px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 49%;
    flex: 0 0 49%;
    max-width: 49%;
  }
`;

const LeftHeading = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.1px;
  color: #fff;
  margin-bottom: 2rem;
`;

const LeftSubHeading = styled.div`
  color: #fff;
  font-family: 'Apercu Pro';
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 2rem;
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  max-height: 84px;
  max-width: 160px;
  margin: 3%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 27%;
  flex: 0 0 27%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PublishingOptionsGrid = () => (
  <StaticQuery
    query={graphql`
      query PublishingOptionsGridQuery {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/website-builder/publishing-option_1-and-1-Ionos_160px@2x.jpg"
          }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/website-builder/publishing-option_Go-daddy_160px@2x.jpg"
          }
        ) {
          ...constrained
        }
        imageThree: file(
          relativePath: {
            eq: "assets/images/product/website-builder/publishing-option_Google-Domains_160px@2x.jpg"
          }
        ) {
          ...constrained
        }
        imageFour: file(
          relativePath: {
            eq: "assets/images/product/website-builder/publishing-option_Domain-com_160px@2x.jpg"
          }
        ) {
          ...constrained
        }
        imageFive: file(
          relativePath: {
            eq: "assets/images/product/website-builder/publishing-option_Leadpages-domain_160px@2x.jpg"
          }
        ) {
          ...constrained
        }
        imageSix: file(
          relativePath: {
            eq: "assets/images/product/website-builder/publishing-option_bluehost_160px@2x.jpg"
          }
        ) {
          ...constrained
        }
        imageSeven: file(
          relativePath: {
            eq: "assets/images/product/website-builder/publishing-option_DNS-made-easy_160px@2x.jpg"
          }
        ) {
          ...constrained
        }
        imageEight: file(
          relativePath: {
            eq: "assets/images/product/website-builder/publishing-option_namecheap_160px@2x.jpg"
          }
        ) {
          ...constrained
        }
        imageNine: file(
          relativePath: {
            eq: "assets/images/product/website-builder/publishing-option_Host-gator_160px@2x.jpg"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <STContainer>
        <FlexRow>
          <FlexRowLeft>
            <LeftContainer>
              <LeftHeading>Flexible publishing options to fit your needs</LeftHeading>
              <LeftSubHeading>
                Publish your site to your free Leadpages domain (hosted on our servers) or connect a
                third-party domain of your choice. All annual Leadpages subscriptions also include a
                voucher for free domain registration for one year, so you can get online faster than
                ever before.
              </LeftSubHeading>
            </LeftContainer>
          </FlexRowLeft>
          <FlexRowRight>
            <HeaderImgLeft>
              <FlexContainer>
                <Image image={getImage(data.imageOne)} alt="ionos logo" />
                <Image image={getImage(data.imageTwo)} alt="godaddy logo" />
                <Image image={getImage(data.imageThree)} alt="google domains logo" />
                <Image image={getImage(data.imageFour)} alt="domain.com logo" />
                <Image image={getImage(data.imageFive)} alt="leadpages logo" />
                <Image image={getImage(data.imageSix)} alt="bluehost logo" />
                <Image image={getImage(data.imageSeven)} alt="dns made easy logo" />
                <Image image={getImage(data.imageEight)} alt="namecheap logo" />
                <Image image={getImage(data.imageNine)} alt="hostgator logo" />
              </FlexContainer>
            </HeaderImgLeft>
          </FlexRowRight>
        </FlexRow>
      </STContainer>
    )}
  />
);

export default PublishingOptionsGrid;
