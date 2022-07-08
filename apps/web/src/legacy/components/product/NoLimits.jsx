import React from 'react';
import styled from 'styled-components';
// images
import rightbkgSVG from '../../assets/images/shapes/bounce-tan.svg';

const NLContainer = styled.div`
  position: relative;
`;

const FlexBoxContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
    padding-top: 3rem;
  }
  @media (min-width: 992px) {
    padding-right: 12rem;
    padding-left: 12rem;
  }
`;

const NLHeadline = styled.div`
  font-family: 'Apercu Pro';
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 2rem;
  margin-bottom: 2rem;
  color: #0f0c09;
  @media (max-width: 576px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const NLCaption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4rem;
  color: #575452;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-decoration: none;
  width: 100%;
  padding-left: 1%;
  padding-right: 1%;
  margin-left: auto;
  margin-right: auto;
`;

const FlexRow3 = styled(FlexRowItem)`
  display: flex;
  justify-content: space-between;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31.3333%;
    flex: 0 0 31.3333%;
    max-width: 31.3333%;
    margin-bottom: 0;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 31.3333%;
    flex: 0 0 31.3333%;
    max-width: 31.3333%;
    margin-bottom: 0;
  }
`;

const FlexRow3Container = styled.div`
  margin-right: 2rem;
`;

const FlexRow6Container = styled.div`
  padding-left: 1%;
  padding-right: 1%;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 49%;
    flex: 0 0 49%;
    max-width: 49%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 60%;
    flex: 0 0 60%;
    max-width: 60%;
  }
`;

const FlexRow3Heading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1.25rem;
  color: #0f0c09;
`;

const FlexRow3Copy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 2rem;
  color: #575452;
`;

const SVGRightContainer = styled.img`
  position: absolute;
  right: 0;
  z-index: -1;
  @media (max-width: 576px) {
    display: none;
  }
`;

function NoLimits() {
  return (
    <NLContainer>
      <SVGRightContainer src={rightbkgSVG} alt="background svg" />
      <FlexBoxContainer>
        <FlexRow>
          <FlexRow6Container>
            <NLHeadline>Because you don’t believe in limits, neither do we</NLHeadline>
            <NLCaption>
              Leadpages is the only platform that doesn’t limit your growth or charge you more for
              your success. We want to partner with you on your small business journey, which means
              cheering you on—not capping your capabilities.
            </NLCaption>
          </FlexRow6Container>
        </FlexRow>
        <FlexRow>
          <FlexRow3>
            <FlexRow3Container>
              <FlexRow3Heading>Unlimited traffic & page views</FlexRow3Heading>
              <FlexRow3Copy>
                The sky’s the limit when it comes to page views and web traffic.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <FlexRow3Heading>Unlimited lead generation</FlexRow3Heading>
              <FlexRow3Copy>
                Collect as many leads, opt-ins, and subscribers as you can.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <FlexRow3Heading>Unlimited publishing</FlexRow3Heading>
              <FlexRow3Copy>
                Publish as many pages, pop-ups, and alert bars as you like&mdash;anywhere on the
                web.
              </FlexRow3Copy>
            </FlexRow3Container>
          </FlexRow3>
        </FlexRow>
      </FlexBoxContainer>
    </NLContainer>
  );
}

export default NoLimits;
