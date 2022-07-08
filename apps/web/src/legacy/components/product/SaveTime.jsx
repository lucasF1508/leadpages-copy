import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';

const STContainer = styled.div`
  padding-top: 6rem;
  padding-right: 6rem;
  padding-left: 6rem;
  background-color: #f7f7f7;
  @media (min-width: 576px) {
    padding-top: 10rem;
  }
`;

const FlexRow = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
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
`;

const FlexRowLeft = styled(FlexRowItem)`
  text-align: left;
  align-self: center;

  @media (max-width: 900px) {
    padding-bottom: 3rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    padding-bottom: 10rem;
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40.6666%;
    flex: 0 0 40.6666%;
    max-width: 40.6666%;
  }
`;
const HeaderImgLeft = styled.div`
  width: 100%;
`;

const LeftContainer = styled.div``;

const FlexRowRight = styled(FlexRowItem)`
  align-self: flex-end;
  @media (max-width: 900px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 49%;
    flex: 0 0 49%;
    max-width: 49%;
  }
`;

const LeftMiniHeading = styled.div`
  opacity: 0.5;
  color: #000000;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  font-family: 'Space Mono';
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const LeftHeading = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.1px;
  color: #0f0c09;
  margin-bottom: 2rem;
`;

const LeftSubHeading = styled.div`
  color: #575452;
  font-family: 'Apercu Pro';
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 2rem;
`;

const LeftCTA = styled.div`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const SimpleSetup = () => (
  <StaticQuery
    query={graphql`
      query SaveTimeQuery {
        imageOne: file(
          relativePath: {
            eq: "assets/images/integrations/leadpages-integrations-product-550px@2x.png"
          }
        ) {
          ...constrained
        }
      }
    `}
    render={data => (
      <STContainer>
        <FlexRow>
          <FlexRowLeft>
            <LeftContainer>
              <LeftMiniHeading>Send Your Leads to the Apps You Love</LeftMiniHeading>
              <LeftHeading>Save time with Leadpages integrations</LeftHeading>
              <LeftSubHeading>
                Become a true marketing pro when you use our seamless integrations that connect your
                lead generation tools and marketing automation platforms. Create landing pages that
                capture email addresses inside segmented lists, and nurture your new leads with
                email marketing that works for you like a 24/7 sales team.
              </LeftSubHeading>
              <StyledLink to="/integrations">
                <LeftCTA>
                  Explore all Leadpages integrations&nbsp;
                  <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                </LeftCTA>
              </StyledLink>
            </LeftContainer>
          </FlexRowLeft>
          <FlexRowRight>
            <HeaderImgLeft>
              <GatsbyImage
                image={getImage(data.imageOne)}
                alt="Explore all Leadpages integrations"
              />
            </HeaderImgLeft>
          </FlexRowRight>
        </FlexRow>
      </STContainer>
    )}
  />
);

export default SimpleSetup;
