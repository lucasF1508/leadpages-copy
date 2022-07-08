import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import leftbkgSVG from '../../assets/images/shapes/wedge-sand-curve.svg';
import rightbkgSVG from '../../assets/images/shapes/arch-stepright-rose.svg';
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  position: relative;
`;

const ResourcesContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 3rem;
  padding-top: 3rem;
  @media (min-width: 576px) {
    padding-left: 6rem;
    padding-top: 6rem;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FlexCopyContainer = styled(FlexRow)`
  flex-wrap: wrap;
  @media (min-width: 576px) {
    flex-wrap: nowrap;
  }
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

const FlexRowItem6 = styled(FlexRowItem)`
  justify-content: space-between;
  text-align: left;
  margin-right: 1%;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 98%;
  flex: 0 0 98%;
  max-width: 98%;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 47%;
    flex: 0 0 47%;
    max-width: 47%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 47%;
    flex: 0 0 47%;
    max-width: 47%;
  }
`;

const FlexRowItem6Heading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1.25rem;
`;

const FlexRowItem6Copy = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 1.25rem;
`;

const FlexRowItem6CTA = styled.div`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 1rem;
`;

const FlexRowLeft = styled(FlexRowItem)`
  justify-content: space-between;
  text-align: left;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 90%;
  flex: 0 0 90%;
  max-width: 90%;
  margin-bottom: 2rem;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70%;
    flex: 0 0 70%;
    max-width: 70%;
    margin-bottom: 3rem;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 45.6666%;
    flex: 0 0 45.6666%;
    max-width: 45.6666%;
    margin-bottom: 3rem;
  }
`;
const HeaderImgLeft = styled.div`
  width: 100%;
  position: relative;
`;

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  align-self: flex-end;
  margin-left: auto;
  padding: 0;
  @media (min-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    å-webkit-box-flex: 0;
    -ms-flex: 0 0 49%;
    flex: 0 0 49%;
    max-width: 49%;
  }
`;

const LeftHeading = styled.div`
  font-family: 'Value Serif';
  font-size: 1.875rem;
  letter-spacing: -0.03125rem;
  line-height: 2.25rem;
  color: #0f0c09;
  margin-bottom: 4rem;
  max-width: 375px;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
  }
`;

const SVGLeftContainer = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  margin-bottom: -3rem;
  margin-left: -3rem;
  @media (max-width: 992px) {
    display: none;
  }
`;

const SVGRightContainer = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const OutboundLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

const Resources = () => (
  <StaticQuery
    query={graphql`
      query ResourcesQuery {
        imageOne: file(relativePath: { eq: "assets/images/totems/staci-support-totem-chat.png" }) {
          ...constrained
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <SVGLeftContainer src={leftbkgSVG} alt="background svg" />
        <SVGRightContainer src={rightbkgSVG} alt="background svg" />
        <ResourcesContainer>
          <FlexRow>
            <FlexRowLeft>
              <LeftHeading>
                Get the support & resources that will help you go the distance
              </LeftHeading>
              <FlexCopyContainer>
                <FlexRowItem6>
                  <FlexRowItem6Heading>Tech Support</FlexRowItem6Heading>
                  <FlexRowItem6Copy>
                    Have a question? Hit a snag? Get the help you need, when you need it.
                  </FlexRowItem6Copy>
                  <OutboundLink
                    href="https://support.leadpages.com/hc/en-us"
                    alt="alt link"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FlexRowItem6CTA>
                      Visit the Help Center&nbsp;
                      <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                    </FlexRowItem6CTA>
                  </OutboundLink>
                </FlexRowItem6>
                <FlexRowItem6>
                  <FlexRowItem6Heading>Webinars + Coaching</FlexRowItem6Heading>
                  <FlexRowItem6Copy>
                    Level-up your skills with virtual workshops, coaching, and free resources.
                  </FlexRowItem6Copy>
                  <OutboundLink
                    href="https://www.leadpages.com/marketing-resources"
                    alt="alt link"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FlexRowItem6CTA>
                      Discover Marketing Resources&nbsp;
                      <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                    </FlexRowItem6CTA>
                  </OutboundLink>
                </FlexRowItem6>
              </FlexCopyContainer>
              <FlexCopyContainer>
                <FlexRowItem6>
                  <FlexRowItem6Heading>Online Community</FlexRowItem6Heading>
                  <FlexRowItem6Copy>
                    Connect with thousands of small business owners just like you.
                  </FlexRowItem6Copy>
                  <OutboundLink
                    href="https://facebook.com/groups/leadpages"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FlexRowItem6CTA>
                      Join the Facebook Community&nbsp;
                      <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                    </FlexRowItem6CTA>
                  </OutboundLink>
                </FlexRowItem6>
                <FlexRowItem6>
                  <FlexRowItem6Heading>Certified Professionals</FlexRowItem6Heading>
                  <FlexRowItem6Copy>
                    Partner with a Leadpages certified professional to do the work for you.
                  </FlexRowItem6Copy>
                  <OutboundLink
                    href="https://www.convertedu.com/certified/"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FlexRowItem6CTA>
                      Hire a Pro&nbsp;
                      <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                    </FlexRowItem6CTA>
                  </OutboundLink>
                </FlexRowItem6>
              </FlexCopyContainer>
            </FlexRowLeft>
            <FlexRowRight>
              <HeaderImgLeft>
                <GatsbyImage image={getImage(data.imageOne)} alt="Hire a Leadpages pro" />
              </HeaderImgLeft>
            </FlexRowRight>
          </FlexRow>
        </ResourcesContainer>
      </OuterContainer>
    )}
  />
);

export default Resources;
