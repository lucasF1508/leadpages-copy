import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// images
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  position: relative;
`;

const LPUContainer = styled.div`
  max-width: 1140px;
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

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  margin-left: auto;
  margin-right: auto;
`;

const FlexRow3 = styled(FlexRowItem)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 4rem;
  }

  @media (min-width: 769px) {
    margin-bottom: 0rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 27.3333%;
    flex: 0 0 27.3333%;
    max-width: 27.3333%;
  }
`;

const FlexRow3Container = styled.div`
  text-align: left;
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const CTA = styled.div`
  color: #603eff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 30px;
  text-align: left;
  font-weight: 500;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const OutboundLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Title = styled.div`
  font-family: 'Apercu Pro';
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  margin-bottom: 1.25rem;
  color: #0f0c09;
`;

const Copy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 2rem;
  color: #575452;
  @media (max-width: 992px) {
    margin-bottom: 1rem;
  }
`;

const ThreeColumn = () => {
  return (
    <OuterContainer>
      <LPUContainer>
        <FlexRow>
          <FlexRow3>
            <FlexRow3Container>
              <Title>Leadpages plans</Title>
              <Copy>Helping small businesses grow big.</Copy>
              <StyledLink to="/pricing">
                <CTA>
                  Leadpages pricing&nbsp;
                  <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                </CTA>
              </StyledLink>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <Title>Tech Support</Title>
              <Copy>Get in touch with our customer success team.</Copy>
              <StyledLink to="/contact" data-gtm="contact-us-link">
                <CTA>
                  Leadpages Support &nbsp;
                  <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                </CTA>
              </StyledLink>
            </FlexRow3Container>
          </FlexRow3>
          <FlexRow3>
            <FlexRow3Container>
              <Title>Blog</Title>
              <Copy>Tips, advice, and announcements.</Copy>
              <OutboundLink
                href="https://www.leadpages.com/blog/"
                alt="Leadpages blog"
                rel="noopener"
              >
                <CTA>
                  Visit Our Blog&nbsp;
                  <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
                </CTA>
              </OutboundLink>
            </FlexRow3Container>
          </FlexRow3>
        </FlexRow>
      </LPUContainer>
    </OuterContainer>
  );
};

export default ThreeColumn;
