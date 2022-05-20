import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
// image
import incMagazineLogoSVG from '../../assets/images/press/Inc-Magazine-Logo-82px.svg';
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg';

const OuterContainer = styled.div`
  position: relative;
  background-color: #f7f7f7;
`;

const InnerContainer = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6rem;
  padding-bottom: 3rem;
  padding-right: 2.5%;
  padding-left: 2.5%;
  text-align: center;
  @media (min-width: 769px) {
    padding-right: 6rem;
    padding-left: 6rem;
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
`;

const HeadingContainer = styled.div`
  position: relative;
  max-width: 710px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.div`
  opacity: 0.5;
  color: #000000;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 18px;
  font-family: 'Space Mono';
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Headline = styled.div`
  font-family: 'Value Serif';
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.07px;
  color: #0f0c09;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.07px;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
  }
  @media (min-width: 993px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -0.1px;
  }
`;

const Caption = styled.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #575452;
  margin-bottom: 2rem;
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const CTA = styled.div`
  color: #603eff;
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
  cursor: pointer;
`;

const ArrowRightPurple = styled.img`
  width: 20px;
  height: 10px;
`;

const HighlightedArticleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const HighlightedArticle_TextContainer = styled.div`
  position: relative;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
  text-align: left;
  margin-top: -2rem;
  z-index: 2;
  background: #fff;
  margin-left: 3rem;
  @media (max-width: 576px) {
    margin-left: 0;
    padding: 10%;
  }
  @media (min-width: 577px) and (max-width: 870px) {
    margin-left: 0;
    padding: 5%;
  }
`;

const HighlightedArticle_Heading = styled.div`
  color: #0f0c09;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 1rem;
`;

const HighlightedArticle_Body = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 1rem;
`;

const HighlightedArticle_ReadMore = styled.span`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 1rem;
  color: #575452;
  padding-bottom: 3px;
  border-bottom: 3px solid #603eff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #603eff;
    border-bottom: 3px solid #4d32cc;
  }
`;

const HighlightedArticle = styled.div`
  position: relative;
  background: #fff;
  -ms-flex: 0 0 45%;
  flex: 0 0 45%;
  width: 45%;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  cursor: pointer;
  box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.1), 0 1px 4px 0 rgba(15, 12, 9, 0.1);
  @media (max-width: 870px) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    width: 100%;
  }
  &:hover {
    box-shadow: 0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15);
  }
  &:hover ${HighlightedArticle_Heading} {
    color: #603eff;
  }
  &:hover ${HighlightedArticle_ReadMore} {
    color: #603eff;
    border-bottom: 3px solid #4d32cc;
  }
`;

const HighlightedArticle_Image = styled(GatsbyImage)`
  width: 100%;
`;

const HighlightedArticle_OutboundLink = styled.a`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const Article_TextContainer = styled.div`
  position: relative;
  text-align: left;
  z-index: 2;
  background: #fff;
  padding-left: 3%;
  padding-right: 3%;
  @media (max-width: 576px) {
    padding: 10%;
  }
  @media (min-width: 577px) and (max-width: 870px) {
    padding: 5%;
  }
  @media (min-width: 871px) {
    -ms-flex: 0 0 60%;
    flex: 0 0 60%;
    width: 60%;
  }
`;

const Article_Heading = styled.div`
  color: #0f0c09;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-bottom: 1rem;
`;

const Article_Body = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #575452;
  margin-bottom: 1rem;
`;

const Article_ReadMore = styled.span`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 1rem;
  color: #575452;
  padding-bottom: 3px;
  border-bottom: 3px solid #603eff;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #603eff;
    border-bottom: 3px solid #4d32cc;
  }
`;

const ArticleContainer = styled.div`
  position: relative;
  background: #fff;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
  box-shadow: 0 0 2px 0 rgba(15, 12, 9, 0.1), 0 1px 4px 0 rgba(15, 12, 9, 0.1);
  cursor: pointer;
  @media (min-width: 871px) {
    padding-top: 3%;
    padding-bottom: 3%;
  }
  @media (max-width: 870px) {
    width: 100%;
  }
  &:hover {
    box-shadow: 0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15);
  }
  &:hover ${Article_Heading} {
    color: #603eff;
  }
  &:hover ${Article_ReadMore} {
    color: #603eff;
    border-bottom: 3px solid #4d32cc;
  }
`;

const Article_ImageContainer = styled.div`
  width: 30%;
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  padding-left: 3%;
  text-align: center;
  @media (max-width: 870px) {
    width: 100%;
    padding-left: 0;
    padding-top: 5%;
  }
`;

const Article_ImageSVG = styled.img`
  position: relative;
  left: 0;
  display: inline-block;
  width: 60%;
  max-width: 200px;
  padding-right: 4px;
  @media (max-width: 870px) {
    width: 30%;
  }
`;

const Article_Image = styled(GatsbyImage)`
  display: inline-block;
  width: 85%;
  max-width: 200px;
  padding-right: 4px;
  @media (max-width: 870px) {
    width: 60%;
  }
`;

const Article_OutboundLink = styled.a`
  text-decoration: none;
  display: flex;
  @media (max-width: 870px) {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
`;

const PressArticles = () => {
  const images = useStaticQuery(graphql`
    query PressArticlesQuery {
      businessWireLogo: file(
        relativePath: { eq: "assets/images/press/business-wire-logo-image_485px@2x.jpg" }
      ) {
        ...constrained
      }
      techMNLogo: file(
        relativePath: { eq: "assets/images/press/techmn_lockup_rgb_black-300x300.png" }
      ) {
        ...constrained
      }
      entrepreneurLogo: file(
        relativePath: { eq: "assets/images/press/entrepreneur-logo_200px@2x.png" }
      ) {
        ...constrained
      }
      minneinnoLogo: file(relativePath: { eq: "assets/images/press/minneinno-logo_485px@2x.jpg" }) {
        ...constrained
      }
      starTribuneLogo: file(
        relativePath: { eq: "assets/images/press/star-tribune-logo_200px@2x.png" }
      ) {
        ...constrained
      }
      techCrunchLogo: file(relativePath: { eq: "assets/images/press/techcrunch-201px@2x.png" }) {
        ...constrained
      }
      techDotMNLogo: file(relativePath: { eq: "assets/images/press/techDotMNLogo_1200px.jpg" }) {
        ...constrained
      }
      wallStreetJournalLogo: file(
        relativePath: { eq: "assets/images/press/wsj_pro_logo-175px@2x.png" }
      ) {
        ...constrained
      }
    }
  `);
  const highlightedArticleArray = [
    {
      heading: 'Leadpages announces new CEO with experience at Solera, Oracle',
      body:
        'Minneapolis-based tech firm Leadpages has appointed Jeanette Dorazio as its CEO, it announced Wednesday.',
      link:
        'https://www.bizjournals.com/twincities/inno/stories/news/2020/09/02/leadpages-announces-ceo-jeanette-dorazio.html',
      linkAltText: 'Minne Inno - LeadPages announces new CEO with experience at Solera, Oracle',
      image: getImage(images.minneinnoLogo),
      imageAltText: 'Minne Inno logo',
    },
    {
      heading: 'Leadpages Acquired By Redbrick, a Leading Canadian Portfolio of Digital Companies',
      body:
        'Leadpages enters a new phase of focused growth as it joins Redbrick – a parent organization to a portfolio of digital operating companies.',
      link:
        'https://www.businesswire.com/news/home/20200302005029/en/Leadpages-Acquired-Redbrick-Leading-Canadian-Portfolio-Digital',
      linkAltText:
        'Business Wire - Leadpages acquired by Redbrick, a leading Canadian Portfolio of Digital Companies',
      image: getImage(images.businessWireLogo),
      imageAltText: 'Business Wire logo',
    },
  ];
  const standardArticleArray = [
    {
      heading: 'Leadpages Announces New North Loop HQ',
      body:
        'Leadpages, the no-code website and landing page builder, today announces its relocation to new headquarters in the heart of downtown Minneapolis. Effective July 1, 2021, Leadpages will operate out of its new home in the historic Colonial Warehouse building...',
      link: 'https://tech.mn/news/2021/06/01/leadpages-announces-new-northloop-hq',
      linkAltText: 'Tech MN - Leadpages Establishes New Downtown Minneapolis Headquarters',
      image: getImage(images.techMNLogo),
      imageAltText: 'Tech MN logo',
    },
    {
      heading: 'Leadpages taps Jeanette Dorazio, a veteran software industry executive, as new CEO',
      body:
        'Leadpages taps Jeanette Dorazio, a veteran software industry executive, as chief executive this week, completing a Leadership transition that began when it was sold in March.',
      link:
        'https://www.startribune.com/leadpages-taps-dorazio-a-software-veteran-as-new-ceo/572321022/',
      linkAltText:
        'Star Tribune - Leadpages taps Jeanette Dorazio, a veteran software industry executive, as new CEO',
      image: getImage(images.starTribuneLogo),
      imageAltText: 'Star Tribune logo',
    },
    {
      heading: 'Leadpages Among the 10 Fastest-Growing New or Redesigned Apps in 2018',
      body:
        'Business app platform, Zapier, has announced that Leadpages is among the fastest-growing new or recently redesigned apps of 2018.',
      link: 'https://www.entrepreneur.com/article/316977',
      linkAltText:
        'Entrepreneur - Leadpages Among the 10 Fastest-Growing New or Redesigned Apps in 2018',
      image: getImage(images.entrepreneurLogo),
      imageAltText: 'Entrepreneur logo',
    },
    {
      heading: 'Former Amazon Exec Steve Brain Joins Leadpages + Drip as CTO',
      body:
        'Steve Brain will become the new Chief Technology Officer (CTO), joining the executive leadership team that oversees both Leadpages and Drip.',
      link:
        'https://tech.mn/news/2018/04/05/drip-leadpages-name-former-amazon-steve-brain-exec-as-cto-plots-salt-lake-city-office/',
      linkAltText: 'Tech MN - Former Amazon Exec Steve Brain Joins Leadpages + Drip as CTO',
      image: getImage(images.techDotMNLogo),
      imageAltText: 'Tech MN logo',
    },
    {
      heading: 'Turning a Page: Leadpages co-founder Collins taps his own CEO successor',
      body:
        'The new chief executive of Leadpages is John Tedesco, a veteran of the Twin Cities tech scene who formerly served as the company’s chief operating officer for two years.',
      link:
        'http://www.startribune.com/turning-a-page-leadpages-co-founder-collins-taps-his-own-ceo-successor/436855113/',
      linkAltText: 'Star Tribune - Leadpages co-founder Collins taps his own CEO successor',
      image: getImage(images.starTribuneLogo),
      imageAltText: 'Star Tribune logo',
    },
    {
      heading: '1,884 Startup Founders Say This 1 Thing Is More Important Than Making Money',
      body:
        'A new survey of 1,884 company founders conducted by marketing automation firm Drip, a subsidiary of Leadpages delves into why entrepreneurs do what they do.',
      link:
        'https://www.inc.com/glenn-leibowitz/1884-startup-founders-say-this-1-thing-is-more-important-than-making-money.html',
      linkAltText:
        'Inc Magazine - ,884 Startup Founders Say This 1 Thing Is More Important Than Making Money',
      imageType: 'svg',
      image: incMagazineLogoSVG,
      imageAltText: 'Inc Magazine logo',
    },
    {
      heading: 'Leadpages Buys Email Marketing Startup Drip',
      body: 'Leadpages has acquired Drip, an email marketing automation software company.',
      link: 'https://www.wsj.com/articles/leadpages-buys-email-marketing-startup-drip-1468384664',
      linkAltText: 'Wall Street Journal - Leadpages Buys Email Marketing Startup Drip',
      image: getImage(images.wallStreetJournalLogo),
      imageAltText: 'Wall Street Journal logo',
    },
    {
      heading: 'Leadpages Announces $27M in Series B Funding',
      body:
        'Leadpages announced it has raised a $27 million Series B round, led by Drive Capital with participation from Foundry Group and Arthur Ventures.',
      link: 'https://techcrunch.com/2015/06/17/leadpages-announces-27m-in-series-b-funding/',
      linkAltText: 'Tech Crunch - Leadpages Announces $27M in Series B Funding',
      image: getImage(images.techCrunchLogo),
      imageAltText: 'Tech Crunch logo',
    },
    {
      heading: 'Leadpages Raises $5M from Foundry Group for Landing Page Service',
      body:
        'Leadpages, a Minneapolis company started less than a year ago, has received a $5 million Series A investment from the Foundry Group.',
      link:
        'https://techcrunch.com/2013/09/26/leadpages-raises-5m-from-foundry-group-for-landing-page-service-powered-by-data-analytics-engine/',
      linkAltText: 'Tech Crunch - Leadpages Raises $5M from Foundry Group for Landing Page Service',
      image: getImage(images.techCrunchLogo),
      imageAltText: 'Tech Crunch logo',
    },
  ];
  return (
    <OuterContainer>
      <InnerContainer>
        <HeadingContainer>
          <Title>PressArticles</Title>
          <Headline>Leadpages in the news</Headline>
          <Caption>
            Leadpages loves sharing the inspiring stories of our customers and how we innovate on
            their behalf. If you’re a member of the media and want to get in touch with the
            Leadpages team, don’t hesitate to reach out.
          </Caption>
          <StyledLink to="/contact" data-gtm="contact-us-link">
            <CTA>
              Get in Touch&nbsp;
              <ArrowRightPurple src={rightArrowPurple} alt="purple right arrow" />
            </CTA>
          </StyledLink>
        </HeadingContainer>
        <HighlightedArticleContainer>
          {highlightedArticleArray.map((article, index) => {
            const { heading, body, link, linkAltText, image, imageAltText } = article;
            return (
              <HighlightedArticle key={index}>
                <HighlightedArticle_OutboundLink
                  href={link}
                  alt={linkAltText}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <HighlightedArticle_Image image={image} alt={imageAltText} />
                  <HighlightedArticle_TextContainer>
                    <HighlightedArticle_Heading>{heading}</HighlightedArticle_Heading>
                    <HighlightedArticle_Body>{body}</HighlightedArticle_Body>
                    <HighlightedArticle_Body>
                      <HighlightedArticle_ReadMore>Read More</HighlightedArticle_ReadMore>
                    </HighlightedArticle_Body>
                  </HighlightedArticle_TextContainer>
                </HighlightedArticle_OutboundLink>
              </HighlightedArticle>
            );
          })}
        </HighlightedArticleContainer>
        {standardArticleArray.map((article, index) => {
          const { heading, body, link, linkAltText, image, imageAltText, imageType } = article;
          return (
            <ArticleContainer key={index}>
              <Article_OutboundLink
                href={link}
                alt={linkAltText}
                rel="noreferrer noopener"
                target="_blank"
              >
                {imageType === 'svg' ? (
                  <Article_ImageContainer>
                    <Article_ImageSVG src={image} alt={imageAltText} />
                  </Article_ImageContainer>
                ) : (
                  <Article_ImageContainer>
                    <Article_Image image={image} alt={imageAltText} />
                  </Article_ImageContainer>
                )}
                <Article_TextContainer>
                  <Article_Heading>{heading}</Article_Heading>
                  <Article_Body>{body}</Article_Body>
                  <Article_Body>
                    <Article_ReadMore>Read More</Article_ReadMore>
                  </Article_Body>
                </Article_TextContainer>
              </Article_OutboundLink>
            </ArticleContainer>
          );
        })}
      </InnerContainer>
    </OuterContainer>
  );
};

export default PressArticles;
