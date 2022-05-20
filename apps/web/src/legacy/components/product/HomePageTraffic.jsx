import React from 'react';
import styled from 'styled-components';
// images
import checkSVG from '../../assets/images/global/check_in-circle.svg';
import bgSVG from '../../assets/images/shapes/bounce-line-gray-thick.svg';

const OuterContainer = styled.div`
  position: relative;
  background-color: #f7f7f7;
`;

const HPTContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  padding-right: 3rem;
  padding-left: 3rem;
  text-align: center;
  @media (min-width: 576px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const BGImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HPTTitle = styled.div`
  font-family: 'Apercu Pro';
  font-size: 22px;
  line-height: 32px;
  color: #0f0c09;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const HPTCaption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 1.25rem;
`;

const HPTFlexbox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
`;

const FlexRowLeft = styled(FlexRowItem)`
  justify-content: space-between;
  text-align: left;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33%;
  flex: 0 0 33%;
  max-width: 33%;
  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }
`;
const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  align-self: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33%;
  flex: 0 0 33%;
  max-width: 33%;
  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }
`;

const FeaturesContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const FeatureContainer = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  display: block;
`;

const Feature = styled.div`
  color: #0f0c09;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 2rem;
  display: inline-block;
  padding-left: 32px;
  @media (max-width: 768px) {
    padding-left: 24px;
  }
`;

const FeatureCopy = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
`;

const SVG = styled.img`
  position: absolute;
  top: 3px;
  display: inline-block;
`;

function HomePageTraffic() {
  return (
    <OuterContainer>
      <BGImage src={bgSVG} alt="background svg" />
      <HPTContainer>
        <TextContainer>
          <HPTTitle>Still sending traffic to your home page and hoping for the best?</HPTTitle>
          <HPTCaption>Stop it. Right now.</HPTCaption>
          <HPTFlexbox>
            <FlexRowLeft>
              <FeaturesContainer>
                <FeatureContainer>
                  <SVG src={checkSVG} alt="check mark svg" />
                  <Feature>Make the most of your advertising budget</Feature>
                  <FeatureCopy>
                    Match any ad and every campaign to a relevant landing page that is uniquely
                    designed for a specific target audience. Forget ‘one-size-fits all’ and
                    customize your content for each audience for maximum persuasive impact.
                  </FeatureCopy>
                </FeatureContainer>
              </FeaturesContainer>
            </FlexRowLeft>
            <FlexRowRight>
              <FeaturesContainer>
                <FeatureContainer>
                  <SVG src={checkSVG} alt="check mark svg" />
                  <Feature>Grow your email list 2x faster</Feature>
                  <FeatureCopy>
                    Why use a landing page builder? Small businesses that publish at least 10
                    landing pages are able to grow their email subscriber leads twice as fast.
                    Quickly customize and publish high-converting pages and give your audience an
                    abundance of opt-in opportunities.&nbsp;
                  </FeatureCopy>
                </FeatureContainer>
              </FeaturesContainer>
            </FlexRowRight>
          </HPTFlexbox>
        </TextContainer>
      </HPTContainer>
    </OuterContainer>
  );
}

export default HomePageTraffic;
