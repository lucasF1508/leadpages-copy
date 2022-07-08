import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

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
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #575452;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }

  @media (min-width: 993px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
  }
`;

const Image = styled(GatsbyImage)`
  margin-left: auto;
  max-width: 70vw;
`;

const OutboundLink = styled.a`
  text-decoration: none;
  color: inherit;
  padding-bottom: 3px;
  border-bottom: 3px solid #603eff;
  &:hover {
    color: #603eff;
    border-bottom: 3px solid #4d32cc;
  }
`;

const SpeakingInquiries = () => (
  <StaticQuery
    query={graphql`
      query SpeakingInquiriesQuery {
        imageOne: file(
          relativePath: { eq: "assets/images/totems/leadpages_speaking_inquiries-686px@2x.jpg" }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <InnerContainer>
          <TextContainer>
            <Heading>Speaking inquiries</Heading>
            <TransformCopy>
              Interested in collaborating with a Leadpages expert on your upcoming podcast, webinar,
              workshop, or live event? We’d love to hear what you have in mind.
            </TransformCopy>
            <TransformCopy>
              Simply&nbsp;
              <OutboundLink
                href="mailto:support@leadpages.com"
                alt="alt link"
                rel="noreferrer noopener"
                target="_blank"
              >
                send us an email
              </OutboundLink>
              &nbsp; with all the details and someone from our team will be in touch.
            </TransformCopy>
          </TextContainer>
          <ImageContainer>
            <Image image={getImage(data.imageOne)} alt="leadpages speaking inquiries" />
          </ImageContainer>
        </InnerContainer>
      </OuterContainer>
    )}
  />
);

export default SpeakingInquiries;
