import React from 'react';
import styled from 'styled-components';
// images
import bkgSVG from '../../assets/images/shapes/wavy-lines-hourglass-gray.svg';

const OuterContainer = styled.div`
  position: relative;
  margin-top: -60px;
  padding-top: 60px;
  background-color: #f7f7f7;
  z-index: -2;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const FlexRow = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  @media (max-width: 576px) {
    display: block;
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
  justify-content: space-between;
  text-align: left;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 60%;
    flex: 0 0 60%;
    max-width: 60%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const SmallHeading = styled.div`
  font-family: 'Space Mono';
  opacity: 0.5;
  color: #000000;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
`;

const LeftHeading = styled.div`
  margin-top: 1rem;
  font-family: 'Value Serif';
  font-size: 2.5rem;
  letter-spacing: -0.03125rem;
  line-height: 3rem;
  color: #0f0c09;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const SVGContainer = styled.img`
  position: absolute;
  top: -20%;
  right: 0;
  overflow: hidden;
  bottom: 0;
  z-index: -1;
  height: 130%;
`;

const PressHeader = () => {
  return (
    <OuterContainer>
      <SVGContainer src={bkgSVG} alt="background svg" />
      <HeaderContainer>
        <FlexRow>
          <FlexRowLeft>
            <h1>
              <SmallHeading>Leadpages Press & Media</SmallHeading>
            </h1>
            <LeftHeading>The latest news, updates and resources on Leadpages</LeftHeading>
          </FlexRowLeft>
        </FlexRow>
      </HeaderContainer>
    </OuterContainer>
  );
};

export default PressHeader;
