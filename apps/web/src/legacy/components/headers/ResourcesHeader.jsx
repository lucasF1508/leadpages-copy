import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants';

const OuterContainer = styled.div`
  position: relative;
  background: #f7f7f7;
`;

const LPUContainer = styled.div`
  max-width: 1140px;
  margin-top: -${HEADER_HEIGHT}px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 3rem;
  padding-right: 1rem;
  padding-left: 1rem;
  @media (min-width: 577px) {
    padding-top: 10rem;
    padding-bottom: 85px;
    padding-right: 6rem;
    padding-left: 6rem;
  }
`;

const LPUHeadline = styled.div`
  font-family: 'Value Serif';
  font-size: 2.5rem;
  letter-spacing: -0.03125rem;
  line-height: 2.5rem;
  text-align: center;
  margin: auto;
  margin-bottom: 36px;
  color: #0f0c09;
  width: 50%;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 576px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    letter-spacing: 0;
    width: 90%;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const FlexRowItem = styled.div`
  min-height: 1px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 5%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 576px) {
    padding-bottom: 5%;
  }
`;

const FlexRow3Heading = styled.div`
  font-family: 'Apercu Pro';
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
  align-self: center;
  color: #0f0c09;
  @media (min-width: 577px) {
    margin-bottom: 26px;
  }
  @media (max-width: 576px) {
    margin-left: 16px;
  }
`;

const FlexRow3 = styled(FlexRowItem)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  background-color: #fff;
  align-self: stretch;
  cursor: pointer;
  box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08);
  }
  @media (max-width: 576px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 38.3333%;
    flex: 0 0 38.3333%;
    max-width: 38.3333%;
  }
  @media (min-width: 769px) and (max-width: 991px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 23.3333%;
    flex: 0 0 23.3333%;
    max-width: 23.3333%;
  }

  @media (min-width: 992px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 23.3333%;
    flex: 0 0 23.3333%;
    max-width: 23.3333%;
  }

  &:hover ${FlexRow3Heading} {
    color: #603eff;
  }
`;

const FlexRow3Container = styled.div`
  text-align: center;
`;

const IconContainer = styled(GatsbyImage)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 48px;
  max-height: 48px;
  @media (min-width: 577px) {
    margin-bottom: 26px;
  }
`;

const FlexRow3Copy = styled.div`
  font-family: 'Apercu Pro';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 48px;
  color: #575452;
  display: none;
  @media (min-width: 577px) {
    display: block;
  }
`;

const Title = styled.div`
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  text-transform: uppercase;
  opacity: 0.5;
  color: #000000;
  margin-bottom: 18px;
  text-align: center;
`;

const Caption = styled.div`
  font-family: 'Apercu Pro';
  font-size: 22px;
  line-height: 32px;
  margin: auto;
  margin-bottom: 36px;
  color: #575452;
  width: 70%;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 95%;
  }
`;

const Button = styled.button`
  width: 209px;
  height: 48px;
  border-radius: 48px;
  margin-bottom: 48px;
  border: 3px solid #603eff;
  background-color: #603eff;
  color: #ffffff;
  font-family: 'Apercu Pro';
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 340px) {
    width: 240px;
    font-size: 16px;
    align-self: center;
  }

  &:hover {
    background-color: #4d32cc;
    border: 3px solid #4d32cc;
  }
`;

const OutboundLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const ScrollToLink = styled(ScrollLink)`
  text-decoration: none;
  cursor: pointer;
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const MobileFlexbox = styled.div`
  @media (max-width: 576px) {
    display: flex;
  }
`;

const ResourcesHeader = () => {
  const images = useStaticQuery(graphql`
    query ResourcesHeaderQuery {
      webinarsThumbnail: file(
        relativePath: { eq: "assets/images/icons/featureicons/rose_monitor-award.png" }
      ) {
        ...fixed
      }
      downloadsThumbnail: file(
        relativePath: { eq: "assets/images/icons/featureicons/lilac_split-download.png" }
      ) {
        ...fixed
      }
      blogThumbnail: file(
        relativePath: { eq: "assets/images/icons/featureicons/coral_megaphone.png" }
      ) {
        ...fixed
      }
      podcastThumbnail: file(
        relativePath: { eq: "assets/images/icons/featureicons/forest_mic.png" }
      ) {
        ...fixed
      }
      guidesThumbnail: file(
        relativePath: { eq: "assets/images/icons/featureicons/cyan_page.png" }
      ) {
        ...fixed
      }
      techsupportThumbnail: file(
        relativePath: { eq: "assets/images/icons/featureicons/camel_lifesaver.png" }
      ) {
        ...fixed
      }
    }
  `);

  const cardArray = [
    {
      title: 'Webinars',
      text: 'Take each and every stage of your business growth further with expert training.',
      scrollLink: 'webinars',
      imageSrc: getImage(images.webinarsThumbnail),
      imageAltText: 'webinars',
    },
    {
      title: 'Downloads',
      text: 'Get the guides, checklists, and worksheets you need to market like a pro.',
      scrollLink: 'downloads',
      imageSrc: getImage(images.downloadsThumbnail),
      imageAltText: 'downloads',
    },
    {
      title: 'Blog',
      text: 'Stay up-to-date on marketing trends with articles that will teach and inspire.',
      outboundLink: 'https://www.leadpages.com/blog',
      linkAltText: 'Leadpages Blog',
      imageSrc: getImage(images.blogThumbnail),
      imageAltText: 'blog',
    },
    {
      title: 'Podcast',
      text: 'Hear from real-world entrepreneurs who share their most valuable lessons.',
      outboundLink: '/podcast',
      linkAltText: 'podcast',
      imageSrc: getImage(images.podcastThumbnail),
      imageAltText: 'podcast',
    },
    {
      title: 'Guides',
      text: 'Master the essentials of conversion marketing with our in-depth guides.',
      scrollLink: 'guides',
      imageSrc: getImage(images.guidesThumbnail),
      imageAltText: 'guides',
    },
    {
      title: 'Tech Support',
      text: 'World-class customer support is never more than a click away.',
      outboundLink: 'https://support.leadpages.com/hc/en-us',
      linkAltText: 'Leadpages Knowledge Base',
      imageSrc: getImage(images.techsupportThumbnail),
      imageAltText: 'tech support',
    },
  ];
  return (
    <OuterContainer>
      <LPUContainer>
        <TextContainer>
          <Title>Leadpages Resources</Title>
          <LPUHeadline>Free Marketing Resources to Help You Grow Your Business</LPUHeadline>
          <Caption>
            Explore our ever-expanding library of digital marketing resources, eBooks, webinars,
            guides, tech support, and inspiration.
          </Caption>
          <OutboundLink
            href=""
            alt="Leadpages Support"
            data-leadbox-popup="jxqYWsUFomzQwR2ZRBTedY"
            data-leadbox-domain="lps.leadpages.net"
          >
            <Button>Get Updates</Button>
          </OutboundLink>
        </TextContainer>
        <FlexRow>
          {cardArray.map((card, index) => {
            const {
              title,
              text,
              scrollLink,
              internalLink,
              outboundLink,
              linkAltText,
              imageSrc,
              imageAltText,
            } = card;
            return (
              <FlexRow3 key={index}>
                {scrollLink && (
                  <ScrollToLink to={scrollLink} spy smooth duration={500}>
                    <FlexRow3Container>
                      <MobileFlexbox>
                        <IconContainer image={imageSrc} alt={imageAltText} />
                        <FlexRow3Heading>{title}</FlexRow3Heading>
                      </MobileFlexbox>
                      <FlexRow3Copy>{text}</FlexRow3Copy>
                    </FlexRow3Container>
                  </ScrollToLink>
                )}
                {outboundLink && (
                  <FlexRow3Container>
                    <OutboundLink href={outboundLink} alt={linkAltText}>
                      <MobileFlexbox>
                        <IconContainer image={imageSrc} alt={imageAltText} />
                        <FlexRow3Heading>{title}</FlexRow3Heading>
                      </MobileFlexbox>
                      <FlexRow3Copy>{text}</FlexRow3Copy>
                    </OutboundLink>
                  </FlexRow3Container>
                )}
                {internalLink && (
                  <FlexRow3Container>
                    <StyledLink to={internalLink} alt={linkAltText}>
                      <MobileFlexbox>
                        <IconContainer image={imageSrc} alt={imageAltText} />
                        <FlexRow3Heading>{title}</FlexRow3Heading>
                      </MobileFlexbox>
                      <FlexRow3Copy>{text}</FlexRow3Copy>
                    </StyledLink>
                  </FlexRow3Container>
                )}
              </FlexRow3>
            );
          })}
        </FlexRow>
      </LPUContainer>
    </OuterContainer>
  );
};

export default ResourcesHeader;
