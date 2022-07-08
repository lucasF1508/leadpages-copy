import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: relative;
  padding-top: 6rem;
  padding-bottom: 6rem;
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
    -ms-flex: 0 0 70%;
    flex: 0 0 70%;
    max-width: 70%;
  }
`;

const HeadingContainer = styled(FlexRowItem6)`
  margin-top: 4rem;
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

const CopyContainer = styled(FlexRowItem6)`
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
    -ms-flex: 0 0 30%;
    flex: 0 0 30%;
    max-width: 30%;
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
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  @media (max-width: 991px) {
    display: none;
  }
`;

const BackgroundImage = styled(GatsbyImage)`
  margin-right: 0;
  margin-left: auto;
  overflow-x: hidden;
  width: 30%;
  max-width: 30%;
`;

const ZapierEmbed = styled.div`
  margin-bottom: 6rem;
`;

const LeadsLeadYou = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://zapier.com/zapbook/embed/widget.js?services=leadpages&container=true&html_id=zap-container&limit=3';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const images = useStaticQuery(graphql`
    query LeadsLeadYouQuery {
      backgroundImage: file(
        relativePath: { eq: "assets/images/totems/where-will-leads-636px@2x.png" }
      ) {
        ...constrained
      }
    }
  `);

  return (
    <OuterContainer>
      <BackgroundContainer>
        <BackgroundImage image={getImage(images.backgroundImage)} alt="a background image" />
      </BackgroundContainer>
      <InnerContainer>
        <TextContainer>
          <HeadingContainer>
            <Heading>Where will your leads lead you?</Heading>
            <TransformCopy>
              With Leadpages’ Zapier integration, whenever your landing page receives a form
              submission, Zapier shuttles that data to any app you choose. Use one of these popular
              zaps and make manual entry a thing of the past.
            </TransformCopy>
          </HeadingContainer>
          <ZapierEmbed id="zap-container" />
          <CopyContainer />
        </TextContainer>
        <ImageContainer />
      </InnerContainer>
    </OuterContainer>
  );
};

export default LeadsLeadYou;
