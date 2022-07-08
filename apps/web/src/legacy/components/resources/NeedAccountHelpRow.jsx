import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CAContainer = styled.div`
  max-width: 1140px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background: #f7f7f7;
  @media (max-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

const FlexRow = styled.div`
  max-width: 1140px;
  background: #f7f7f7;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    flex-direction: column-reverse;
  }
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

const FlexRowLeft = styled(FlexRowItem)`
  align-self: flex-end;
  text-align: left;
  padding-right: 1%;
  @media (max-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 577px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 23%;
    flex: 0 0 23%;
    max-width: 23%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 23%;
    flex: 0 0 23%;
    max-width: 23%;
  }
`;
const HeaderImgLeft = styled.div`
  width: 100%;
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: center;
  align-self: center;
  padding-left: 1%;
  padding-right: 1%;
  @media (max-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 577px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 64.6%;
    flex: 0 0 64.6%;
    max-width: 64.6%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 64.6%;
    flex: 0 0 64.6%;
    max-width: 64.6%;
    text-align: left;
  }
`;

const LeftHeading = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  color: #0f0c09;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const LeftSubHeading = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Button = styled.button`
  width: 192px;
  height: 48px;
  border-radius: 48px;
  border: 3px solid #603eff;
  background-color: #603eff;
  color: #ffffff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }

  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }
`;

const SubFlexRow = styled.div`
  @media (min-width: 769px) {
    display: flex;
  }
  @media (max-width: 576px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const SubFlexRowLeft = styled.div`
  margin-top: 66px;
  align-self: center;
  margin-right: 24px;
  text-align: left;
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const SubFlexRowRight = styled.div`
  align-self: center;
  text-align: left;
  @media (max-width: 576px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const NeedAccountHelpRow = () => {
  const images = useStaticQuery(graphql`
    query NeedAccountHelpRowQuery {
      headerImage: file(
        relativePath: { eq: "assets/images/totems/staci-laura_wavy-stairsO2A6183@2x.png" }
      ) {
        ...constrained
      }
    }
  `);
  return (
    <CAContainer>
      <FlexRow>
        <FlexRowLeft>
          <HeaderImgLeft>
            <GatsbyImage image={getImage(images.headerImage)} alt="leadpages integrations" />
          </HeaderImgLeft>
        </FlexRowLeft>
        <FlexRowRight>
          <SubFlexRow>
            <SubFlexRowLeft>
              <LeftHeading>Need some help with your Leadpages account?</LeftHeading>
              <LeftSubHeading>
                Find answers and step-by-step guidance to get the most from your account.
              </LeftSubHeading>
            </SubFlexRowLeft>
            <SubFlexRowRight>
              <StyledLink
                href="https://support.leadpages.com/hc/en-us"
                alt="Leadpages Support"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Button>Visit our Help Center</Button>
              </StyledLink>
            </SubFlexRowRight>
          </SubFlexRow>
        </FlexRowRight>
      </FlexRow>
    </CAContainer>
  );
};

export default NeedAccountHelpRow;
