import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: relative;
  background-color: #603eff;
  text-align: center;
`;

const LPUContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 4rem;
  padding-bottom: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-top: 4rem;
    padding-bottom: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media (min-width: 992px) {
    padding-top: 4rem;
    padding-bottom: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
  }
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: block;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FlexItem = styled.div`
  text-align: center;
  padding-left: 1%;
  padding-right: 1%;
  -ms-flex: 0 0 18%;
  flex: 0 0 18%;
  max-width: 18%;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 3rem;
  }
`;

const Headline = styled.div`
  font-family: 'Value Serif';
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.5px;
  color: #fff;
  margin-bottom: 1rem;
`;

const Caption = styled.div`
  color: #fff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
  margin-bottom: 3rem;
`;

const Stats = () => {
  return (
    <OuterContainer>
      <LPUContainer>
        <Flexbox>
          <FlexItem>
            <Headline>400k+</Headline>
            <Caption>Marketers Educated</Caption>
          </FlexItem>
          <FlexItem>
            <Headline>50+</Headline>
            <Caption>Employees</Caption>
          </FlexItem>
          <FlexItem>
            <Headline>$38m</Headline>
            <Caption>VC Money Raised</Caption>
          </FlexItem>
          <FlexItem>
            <Headline>1BN+</Headline>
            <Caption>Customer Page Views Daily</Caption>
          </FlexItem>
          <FlexItem>
            <Headline>150+</Headline>
            <Caption>Landing Page Templates</Caption>
          </FlexItem>
        </Flexbox>
      </LPUContainer>
    </OuterContainer>
  );
};

export default Stats;
