import React from 'react';
import styled from 'styled-components';
// images
import facebookSVG from '../../assets/images/icons/socialicons/facebook-large-circle-48px.svg';
import instagramSVG from '../../assets/images/icons/socialicons/instagram-large-circle-48px.svg';
import linkedInSVG from '../../assets/images/icons/socialicons/linkedin-large-circle-48px.svg';
import twitterSVG from '../../assets/images/icons/socialicons/twitter-large-circle-48px.svg';

const OuterContainer = styled.div`
  position: relative;
`;

const PFContainer = styled.div`
  max-width: 740px;
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
  }
`;

const PFTitle = styled.div`
  font-family: 'Value Serif';
  font-size: 30px;
  letter-spacing: -0.1px;
  line-height: 36px;
  color: #0f0c09;
  margin-bottom: 2rem;
`;

const PFHeadline = styled.div`
  font-family: 'Apercu Pro';
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #575452;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
  }

  @media (min-width: 993px) {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0px;
  }
  padding-bottom: 3rem;
`;

const SocializeText = styled(PFHeadline)`
  padding-bottom: 1rem;
`;

const IconsContainer = styled.div``;

const SocializeIcon = styled.img`
  height: 48px;
  width: 48px;
  padding: 6px;
`;

const OutboundLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const HardWork = () => {
  return (
    <OuterContainer>
      <PFContainer>
        <PFTitle>Hard Work + Big Heart</PFTitle>
        <PFHeadline>
          We’re a Minneapolis and remote-based tech company that’s changing the way small businesses
          do marketing, lead generation, and conversion rate optimization online. With a growing
          team that works closely together, we move fast and enjoy what we do.
        </PFHeadline>
        <SocializeText>Socialize with us</SocializeText>
        <IconsContainer>
          <OutboundLink
            href="https://www.facebook.com/Leadpages"
            alt="alt link"
            rel="noreferrer noopener"
          >
            <SocializeIcon src={facebookSVG} alt="Facebook SVG Image" />
          </OutboundLink>
          <OutboundLink
            href="https://www.instagram.com/leadpages/"
            alt="alt link"
            rel="noreferrer noopener"
          >
            <SocializeIcon src={instagramSVG} alt="Instagram SVG Image" />
          </OutboundLink>
          <OutboundLink
            href="https://www.linkedin.com/company/leadpages"
            alt="alt link"
            rel="noreferrer noopener"
          >
            <SocializeIcon src={linkedInSVG} alt="LinkedIn SVG Image" />
          </OutboundLink>
          <OutboundLink
            href="https://www.twitter.com/Leadpages"
            alt="alt link"
            rel="noreferrer noopener"
          >
            <SocializeIcon src={twitterSVG} alt="Twitter SVG Image" />
          </OutboundLink>
        </IconsContainer>
      </PFContainer>
    </OuterContainer>
  );
};

export default HardWork;
