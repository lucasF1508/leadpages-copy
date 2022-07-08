import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// images
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';

const CAContainer = styled.div`
  background: #f7f7f7;
  padding-top: 4.5rem;
  padding-right: 3rem;
  padding-left: 3rem;
  @media (min-width: 576px) {
    padding-top: 6rem;
    padding-right: 3rem;
    padding-left: 3rem;
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
  justify-content: space-between;
  text-align: left;
  padding-bottom: 3rem;
  @media (max-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding-bottom: 2rem;
  }
  @media (min-width: 577px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 40.6666%;
    flex: 0 0 40.6666%;
    max-width: 40.6666%;
  }

  @media (min-width: 992px) {
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

const FlexRowRight = styled(FlexRowItem)`
  text-align: left;
  align-self: flex-end;
  @media (max-width: 576px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
  @media (min-width: 577px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 49%;
    flex: 0 0 49%;
    max-width: 49%;
  }

  @media (min-width: 992px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 49%;
    flex: 0 0 49%;
    max-width: 49%;
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

const LeftCTA = styled.div`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ConnectAccount = () => (
  <StaticQuery
    query={graphql`
      query ConnectAccountQuery {
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
      <CAContainer>
        <FlexRow>
          <FlexRowLeft>
            <LeftHeading>Connect your account to the tools you love</LeftHeading>
            <LeftSubHeading>
              Automatically send your leads to email subscriber lists, update your CRM contacts,
              register users for webinars, and more—with code-free integrations to more than 1000+
              apps and tools. After all, technology should work for you—not the other way around.
            </LeftSubHeading>
            <StyledLink to="/integrations">
              <LeftCTA>
                Explore all Leadpages integrations
                <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
              </LeftCTA>
            </StyledLink>
          </FlexRowLeft>
          <FlexRowRight>
            <HeaderImgLeft>
              <GatsbyImage image={getImage(data.imageOne)} alt="leadpages integrations" />
            </HeaderImgLeft>
          </FlexRowRight>
        </FlexRow>
      </CAContainer>
    )}
  />
);

export default ConnectAccount;
