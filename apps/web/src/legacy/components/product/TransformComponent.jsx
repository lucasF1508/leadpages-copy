import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import skillbkgSVG from '../../assets/images/shapes/wedge-forest.svg';
import conversionbkgSVG from '../../assets/images/shapes/rounded-square-lavender.svg';
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';

const TransformContainer = styled.div``;

const TransformHeadline = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #0f0c09;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
    flex-direction: row-reverse;
  }
  @media (min-width: 992px) {
    padding-right: 6rem;
    padding-left: 6rem;
  }
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ConversionOuterContainer = styled(FlexRow)`
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 10rem;
  @media (max-width: 576px) {
    margin-bottom: 6rem;
  }
`;

const ConversionContainer = styled(FlexRow)`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
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

const SkillOuterContainer = styled(FlexRow)`
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-bottom: 6rem;
  @media (max-width: 576px) {
    margin-bottom: 4rem;
  }
`;

const SkillContainer = styled(FlexRow)`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  flex-direction: row;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-right: 3rem;
    padding-left: 3rem;
    flex-direction: row-reverse;
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
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const ConversionTextContainer = styled(FlexRowItem6)`
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

const ConversionHeadingContainer = styled(FlexRowItem6)`
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

const ConversionCopyContainer = styled(FlexRowItem6)`
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

const ConversionImageContainer = styled(FlexRowItem6)`
  align-self: flex-end;
  margin-bottom: 0rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 577px) and (max-width: 993px) {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const SkillTextContainer = styled(FlexRowItem6)`
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

const SkillHeadingContainer = styled(FlexRowItem6)`
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

const SkillCopyContainer = styled(FlexRowItem6)`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const SkillImageContainer = styled(FlexRowItem6)`
  align-self: flex-end;
  position: relative;
  margin-bottom: 0rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 46%;
    flex: 0 0 46%;
    max-width: 46%;
  }
`;

const FlexRowItem6Heading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1rem;
`;

const FlexRowItem6Copy = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1rem;
`;

const LeftHeading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 2rem;
  color: #0f0c09;
  margin-bottom: 1rem;
  @media (max-width: 576px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const TransformCopy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 4rem;
`;

const SVGLeftContainer = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  overflow-x: hidden;
  @media (max-width: 768px) {
    max-width: 60%;
  }
`;

const SVGRightContainer = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow-x: hidden;
  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const CTA = styled.div`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const TransformComponent = () => (
  <StaticQuery
    query={graphql`
      query TransformQuery {
        imageOne: file(
          relativePath: { eq: "assets/images/product/leadmeter/leadmeter-totem_690px@2x.png" }
        ) {
          ...constrained
        }
        imageTwo: file(
          relativePath: {
            eq: "assets/images/product/landing-page-builder/templates-totem_569px@2x.png"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <TransformContainer>
        <TransformHeadline>Transform your web traffic into business growth</TransformHeadline>
        <ConversionOuterContainer>
          <SVGRightContainer
            src={conversionbkgSVG}
            alt="transform your web traffic into business growth"
          />
          <ConversionContainer>
            <ConversionTextContainer>
              <ConversionHeadingContainer>
                <LeftHeading>Access the complete conversion toolkit</LeftHeading>
                <TransformCopy>
                  Only Leadpages products are conversion-optimized from the ground up, so you can
                  rest assured that your marketing has maximum impact.
                </TransformCopy>
              </ConversionHeadingContainer>
              <ConversionCopyContainer>
                <FlexRowItem6>
                  <FlexRowItem6Heading>Real-time guidance</FlexRowItem6Heading>
                  <FlexRowItem6Copy>
                    Experience the only platform that gives you optimization tips in real time, to
                    help predict a page’s performance before you publish.
                  </FlexRowItem6Copy>
                  <StyledLink to="/product/leadmeter">
                    <CTA>
                      Discover Leadmeter &nbsp;
                      <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                    </CTA>
                  </StyledLink>
                </FlexRowItem6>
                <FlexRowItem6>
                  <FlexRowItem6Heading>Simplified analytics</FlexRowItem6Heading>
                  <FlexRowItem6Copy>
                    Quickly check up on your content’s performance with an easy-to-read, real-time
                    data dashboard.
                  </FlexRowItem6Copy>
                </FlexRowItem6>
                <FlexRowItem6>
                  <FlexRowItem6Heading>A/B split testing</FlexRowItem6Heading>
                  <FlexRowItem6Copy>
                    Optimize your landing pages for higher conversions by running unlimited split
                    tests—including A/B tests.
                  </FlexRowItem6Copy>
                </FlexRowItem6>
              </ConversionCopyContainer>
            </ConversionTextContainer>
            <ConversionImageContainer>
              <GatsbyImage image={getImage(data.imageOne)} alt="A/B split testing" />
            </ConversionImageContainer>
          </ConversionContainer>
        </ConversionOuterContainer>
        <SkillOuterContainer>
          <SVGLeftContainer src={skillbkgSVG} alt="background svg" />
          <SkillContainer>
            <SkillTextContainer>
              <SkillHeadingContainer>
                <LeftHeading>
                  No high-tech skill? No problem.
                  <br />
                  Finally, digital marketing you can truly DIY
                </LeftHeading>
                <TransformCopy>
                  Intuitive tools that make it easy to create, publish, and update your content at
                  the drop of a hat. Forget freelancers, delays, and extra expenses—we’re making it
                  easier than you ever thought possible.
                </TransformCopy>
              </SkillHeadingContainer>
              <SkillCopyContainer>
                <FlexRowItem6>
                  <FlexRowItem6Heading>Code-free publishing</FlexRowItem6Heading>
                  <FlexRowItem6Copy>
                    Create and publish professional-quality, mobile-responsive pages in a matter of
                    minutes without touching a speck of code.
                  </FlexRowItem6Copy>
                </FlexRowItem6>
                <FlexRowItem6>
                  <FlexRowItem6Heading>Ready-made templates</FlexRowItem6Heading>
                  <FlexRowItem6Copy>
                    Publish in minutes with professionally-designed templates and drag-and-drop
                    customization.
                  </FlexRowItem6Copy>
                  <StyledLink to="/templates">
                    <CTA>
                      Visit template gallery &nbsp;
                      <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                    </CTA>
                  </StyledLink>
                </FlexRowItem6>
              </SkillCopyContainer>
            </SkillTextContainer>
            <SkillImageContainer>
              <GatsbyImage image={getImage(data.imageTwo)} alt="Ready-made templates" />
            </SkillImageContainer>
          </SkillContainer>
        </SkillOuterContainer>
      </TransformContainer>
    )}
  />
);

export default TransformComponent;
