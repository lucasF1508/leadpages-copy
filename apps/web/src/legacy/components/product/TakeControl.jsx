import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import TakeControlbkgSVG from '../../assets/images/shapes/wedge-lavender.svg';

const TakeControlOuterContainer = styled.div`
  position: relative;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TakeControlInnerContainer = styled(FlexRow)`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
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

const TakeControlTextContainer = styled(FlexRowItem6)`
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

const TakeControlHeadingContainer = styled(FlexRowItem6)`
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const TakeControlCopyContainer = styled(FlexRowItem6)`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const TakeControlImageContainer = styled(FlexRowItem6)`
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

const FlexRowItem6Heading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1.25rem;
  color: #0f0c09;
`;

const FlexRowItem6Copy = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 3rem;
`;

const TakeControlHeading = styled.div`
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

const SVGContainer = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow-x: hidden;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const TakeControl = () => (
  <StaticQuery
    query={graphql`
      query TakeControlQuery {
        imageOne: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/take-control-diy-foreground.png"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <TakeControlOuterContainer>
        <SVGContainer src={TakeControlbkgSVG} alt="background svg" />
        <TakeControlInnerContainer>
          <TakeControlTextContainer>
            <TakeControlHeadingContainer>
              <TakeControlHeading>
                Take control of your marketing with drag-and-drop landing pages you can easily DIY
              </TakeControlHeading>
              <TransformCopy>
                Forget the time and expense of hiring a web designer&mdash;our landing page creator
                is the only partner you need.
              </TransformCopy>
            </TakeControlHeadingContainer>
            <TakeControlCopyContainer>
              <FlexRowItem6>
                <FlexRowItem6Heading>Code-free drag-and-drop customizations</FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  Quickly and easily craft professional-looking landing pages without the need to
                  hire outside help.
                </FlexRowItem6Copy>
              </FlexRowItem6>
              <FlexRowItem6>
                <FlexRowItem6Heading>
                  Mobile-responsive, high-converting templates
                </FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  Get a head-start with a gallery of more than 200 professionally designed templates
                  that take the guess work out of the creative process.
                </FlexRowItem6Copy>
              </FlexRowItem6>
              <FlexRowItem6>
                <FlexRowItem6Heading>Features & functionality to fit any need</FlexRowItem6Heading>
                <FlexRowItem6Copy>
                  Add a countdown timer, video player, Calendly schedule, OpenTable reservation
                  widget, and more within the Drag & Drop Builder.
                </FlexRowItem6Copy>
              </FlexRowItem6>
            </TakeControlCopyContainer>
          </TakeControlTextContainer>
          <TakeControlImageContainer>
            <GatsbyImage
              image={getImage(data.imageOne)}
              alt="Features & functionality to fit any need"
            />
          </TakeControlImageContainer>
        </TakeControlInnerContainer>
      </TakeControlOuterContainer>
    )}
  />
);

export default TakeControl;
