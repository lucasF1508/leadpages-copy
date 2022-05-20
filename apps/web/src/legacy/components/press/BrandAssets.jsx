import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: relative;
  background-color: #603eff;
  text-align: center;
`;

const LPUContainer = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4rem;
  padding-bottom: 6rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-top: 4rem;
    padding-bottom: 6rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const Headline = styled.div`
  width: 100%;
  font-family: 'Value Serif';
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.07px;
  color: #ffffff;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.07px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
  }
  @media (min-width: 993px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
  }
`;

const Caption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #ffffff;
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

const Button = styled.button`
  height: 48px;
  padding-left: 2%;
  padding-right: 2%;
  color: #ffffff;
  background: transparent;
  border: 3px solid rgba(255, 255, 255, 0.7);
  border-radius: 24px;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  min-width: 200px;
  &:hover {
    background-color: #ffffff;
    color: #603eff;
    cursor: pointer;
    border: 3px solid #ffffff;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const FlexRow = styled.div`
  min-width: 120%;
  margin-left: -10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const OutboundLink = styled.a`
  margin: 2%;
  cursor: pointer;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  margin: 2%;
  cursor: pointer;
  text-decoration: none;
`;

const BrandAssets = () => {
  return (
    <OuterContainer>
      <LPUContainer>
        <Headline>Leadpages Brand Assets</Headline>
        <Caption>
          Here’s all the beauty of our brand boxed up neatly and ready for download.
        </Caption>
        <FlexRow>
          <OutboundLink
            href="https://www.dropbox.com/sh/bopv26efyxrvq2l/AADZ4y0MeChxUWFbpkuMTlmVa?dl=1"
            alt="Download Brand Assets"
          >
            <Button>Download Brand Assets</Button>
          </OutboundLink>
          <StyledLink to="/brand" alt="Get Our Brand Guide">
            <Button>Get Our Brand Guide</Button>
          </StyledLink>
        </FlexRow>
      </LPUContainer>
    </OuterContainer>
  );
};

export default BrandAssets;
