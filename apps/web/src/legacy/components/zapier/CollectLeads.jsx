import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: relative;
  background-color: #f7f7f7;
`;

const LPUContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4rem;
  padding-bottom: 12rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-top: 4rem;
    padding-bottom: 10rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    padding-top: 10rem;
    padding-bottom: 6rem;
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const Headline = styled.div`
  font-family: 'Value Serif';
  font-size: 2.5rem;
  letter-spacing: -0.03125rem;
  line-height: 3rem;
  text-align: center;
  margin-bottom: 6rem;
  color: #0f0c09;

  @media (max-width: 767px) {
    margin-bottom: 3rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-left: auto;
  margin-right: auto;
  align-self: flex-start;
`;

const FlexRow3 = styled(FlexRowItem)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  max-width: 23.3333%;
  margin-bottom: 0;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const FlexRow3Container = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  min-height: 158px;
`;

const SVGIcon = styled.img`
  max-width: 158px;
  max-height: 158px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

const ImageIcon = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  max-width: 158px;
  max-height: 158px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

const FlexRow3Heading = styled.div`
  font-family: 'Apercu Pro';
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
  color: #0f0c09;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
  }

  @media (min-width: 993px) {
    font-size: 22px;
    line-height: 36px;
    letter-spacing: 0px;
  }
`;

const FlexRow3Copy = styled.div`
  font-family: 'Apercu Pro';
  text-align: center;
  margin-bottom: 1.25rem;
  color: #575452;

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

const Character = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 10px;
  color: #bfbebd;
  font-size: 80px;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CollectLeads = () => {
  const images = useStaticQuery(graphql`
    query CollectLeadsQuery {
      LeadpagesIcon: file(
        relativePath: { eq: "assets/images/integrations/Leadpages-Leadpages-Zapier@2x.jpg" }
      ) {
        ...fixed
      }
      ZapierIcon: file(relativePath: { eq: "assets/images/integrations/zapierlogo_50px@2x.png" }) {
        ...fixed
      }
      IntegrationsIcon: file(
        relativePath: { eq: "assets/images/integrations/Infinite-Integrations@2x.jpg" }
      ) {
        ...fixed
      }
    }
  `);
  return (
    <OuterContainer>
      <LPUContainer>
        <Headline>Collect leads + connect to powerful workflows</Headline>
        <FlexRow>
          <FlexRow3>
            <FlexRow3Container>
              <ImageIcon image={getImage(images.LeadpagesIcon)} alt="Leadpage Icon" />
              <FlexRow3Heading>Leadpages</FlexRow3Heading>
              <FlexRow3Copy>
                Easily build stunning webpages and campaigns to capture leads and convert customers.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <Character>+</Character>
          <FlexRow3>
            <FlexRow3Container>
              <ImageIcon image={getImage(images.ZapierIcon)} alt="Zapier Icon" />
              <FlexRow3Heading>Zapier</FlexRow3Heading>
              <FlexRow3Copy>
                Instantly move info between your web apps and trigger automatic actions.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <Character>=</Character>
          <FlexRow3>
            <FlexRow3Container>
              <ImageIcon
                image={getImage(images.IntegrationsIcon)}
                alt="Leadpages Integrations Icons"
              />
              <FlexRow3Heading>Infinite Integrations</FlexRow3Heading>
              <FlexRow3Copy>
                Send leads to your favorite web apps—and get endless lead nurture possibilities.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
        </FlexRow>
      </LPUContainer>
    </OuterContainer>
  );
};

export default CollectLeads;
