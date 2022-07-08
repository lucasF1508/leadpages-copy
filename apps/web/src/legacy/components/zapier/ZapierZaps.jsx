import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const OuterContainer = styled.div`
  position: relative;
  background-color: #f7f7f7;
`;

const Container = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 3rem;
  padding-right: 3rem;
  padding-left: 3rem;
  text-align: center;
  @media (min-width: 576px) {
    padding-right: 6rem;
    padding-left: 6rem;
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
`;

const InnerContainer = styled.div`
  position: relative;
  z-index: 2;
`;

const Subtitle = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 0.5rem;
`;

const Headline = styled.div`
  font-family: 'Value Serif';
  font-size: 2.5rem;
  letter-spacing: -0.03125rem;
  line-height: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #0f0c09;

  @media (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const Footnote = styled.div`
  font-family: 'Apercu Pro';
  font-size: 12px;
  line-height: 18px;
  color: #575452;
  text-align: center;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  text-align: center;
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
`;

const FlexRowLeft = styled(FlexRowItem)`
  justify-content: space-between;
  text-align: center;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 44%;
    flex: 0 0 44%;
    max-width: 44%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 29%;
    flex: 0 0 29%;
    max-width: 29%;
  }
`;

const LogosContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  height: 48px;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 0;
  }
`;

const FlexRowMiddle = styled(FlexRowItem)`
  text-align: center;
  align-self: center;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 44%;
    flex: 0 0 44%;
    max-width: 44%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 29%;
    flex: 0 0 29%;
    max-width: 29%;
    text-align: center;
  }
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: center;
  align-self: center;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 80%;
    flex: 0 0 80%;
    max-width: 80%;
  }
  @media (min-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 44%;
    flex: 0 0 44%;
    max-width: 44%;
  }
  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 29%;
    flex: 0 0 29%;
    max-width: 29%;
    text-align: center;
  }
`;

const FeaturesContainer = styled.div`
  margin-bottom: 2rem;
`;

const FeatureContainer = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  display: block;
`;

const Feature = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
`;

const SVGIcon = styled.img`
  width: 48px;
  height: 48px;
  display: inline-block;
  vertical-align: middle;
`;

const ImageIcon = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  max-width: 48px;
  max-height: 48px;
  display: inline-block;
  vertical-align: middle;
`;

const Character = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 10px;
  color: #bfbebd;
  font-size: 20px;
`;

const RightArrow = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 10px;
  color: #bfbebd;
  width: 12px;
  height: 12px;
`;

const ZapierZaps = ({
  leadpagesIcon,
  rightArrowIcon,
  hubspotIcon,
  dripIcon,
  sheetsIcon,
  slackIcon,
  demioIcon,
  mailchimpIcon,
}) => (
  <OuterContainer>
    <Container>
      <InnerContainer>
        <Subtitle>Zapier Premium Feature</Subtitle>
        <Headline>Multiply your free time with multi-step Zaps</Headline>
        <Flexbox>
          <FlexRowLeft>
            <LogosContainer>
              <ImageIcon image={leadpagesIcon} alt="Leadpages Icon" />
              <RightArrow src={rightArrowIcon} />
              <ImageIcon image={hubspotIcon} alt="Hubspot Icon" />
              <Character>+</Character>
              <ImageIcon image={dripIcon} alt="Drip Icon" />
            </LogosContainer>
            <FeaturesContainer>
              <FeatureContainer>
                <Feature>
                  Capture leads, update your Hubspot CRM contacts, and engage them with automated
                  Drip emails
                </Feature>
              </FeatureContainer>
            </FeaturesContainer>
          </FlexRowLeft>
          <FlexRowMiddle>
            <LogosContainer>
              <ImageIcon image={leadpagesIcon} alt="Leadpages Icon" />
              <RightArrow src={rightArrowIcon} />
              <ImageIcon image={sheetsIcon} alt="Sheets Icon" />
              <Character>+</Character>
              <ImageIcon image={slackIcon} alt="Slack Icon" />
            </LogosContainer>
            <FeaturesContainer>
              <FeatureContainer>
                <Feature>
                  Record Leadpages form submissions in a Google Sheet and send a Slack notification
                  to your sales team
                </Feature>
              </FeatureContainer>
            </FeaturesContainer>
          </FlexRowMiddle>
          <FlexRowRight>
            <LogosContainer>
              <ImageIcon image={leadpagesIcon} alt="Leadpages Icon" />
              <RightArrow src={rightArrowIcon} />
              <ImageIcon image={demioIcon} alt="Demio Icon" />
              <Character>+</Character>
              <ImageIcon image={mailchimpIcon} alt="Mailchimp Icon" />
            </LogosContainer>
            <FeaturesContainer>
              <FeatureContainer>
                <Feature>
                  Sign-up new leads as Demio webinar registrants and send instant nurture emails
                  with Mailchimp
                </Feature>
              </FeatureContainer>
            </FeaturesContainer>
          </FlexRowRight>
        </Flexbox>
        <Footnote>
          Mutli-step Zaps are a premium feature on Zapier and require a paid Zapier plan starting at
          $20/month.
        </Footnote>
      </InnerContainer>
    </Container>
  </OuterContainer>
);

ZapierZaps.propTypes = {
  demioIcon: PropTypes.object.isRequired,
  dripIcon: PropTypes.object.isRequired,
  hubspotIcon: PropTypes.object.isRequired,
  leadpagesIcon: PropTypes.object.isRequired,
  mailchimpIcon: PropTypes.object.isRequired,
  rightArrowIcon: PropTypes.node.isRequired,
  sheetsIcon: PropTypes.object.isRequired,
  slackIcon: PropTypes.object.isRequired,
};

export default ZapierZaps;
