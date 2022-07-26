import React from 'react'
import Image from '@components/Image'
import Link from 'next/link'
import { styled } from '@design'
// images
import businessWireLogo from '../../assets/images/press/business-wire-logo-image_485px@2x.jpg'
import techMNLogo from '../../assets/images/press/techmn_lockup_rgb_black-300x300.png'
import entrepreneurLogo from '../../assets/images/press/entrepreneur-logo_200px@2x.png'
import minneinnoLogo from '../../assets/images/press/minneinno-logo_485px@2x.jpg'
import starTribuneLogo from '../../assets/images/press/star-tribune-logo_200px@2x.png'
import techCrunchLogo from '../../assets/images/press/techcrunch-201px@2x.png'
import techDotMNLogo from '../../assets/images/press/techDotMNLogo_1200px.jpg'
import wallStreetJournalLogo from '../../assets/images/press/wsj_pro_logo-175px@2x.png'
import incMagazineLogoSVG from '../../assets/images/press/Inc-Magazine-Logo-82px.svg'
import rightArrowPurple from '../../assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  bc: '$grayAlt',
})

const InnerContainer = styled('div', {
  mw: '1140px',
  mx: 'auto',
  pt: '6rem',
  pb: '3rem',
  px: '2.5%',
  ta: 'center',

  '@media (min-width: 769px)': {
    px: '6rem',
    py: '10rem',
  },
})

const HeadingContainer = styled('div', {
  position: 'relative',
  mw: '710px',
  w: '60%',
  mx: 'auto',
  ta: 'center',
  mb: '4rem',
})

const Title = styled('div', {
  opacity: 0.5,
  c: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  fontFamily: `'Space Mono'`,
  tt: 'uppercase',
  mb: '2rem',
})

const Headline = styled('div', {
  fontFamily: `'Value Serif'`,
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: '-0.07px',
  c: '$text',
  mb: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '-0.07px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },

  '@media (min-width: 993px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },
})

const Caption = styled('div', {
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0px',
  c: '$textAlt',
  mb: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },

  '@media (min-width: 993px)': {
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0px',
  },
})

const CTA = styled('div', {
  c: '$primary',
  fontSize: '16px',
  lineHeight: '30px',
  fontWeight: 500,
  cursor: 'pointer',
})

const ArrowRightPurple = styled('img', {
  d: 'inline-block',
  w: '20px',
  h: '10px',
})

const HighlightedArticleContainer = styled('div', {
  d: 'flex',
  jc: 'space-between',
  flexWrap: 'wrap',
})

const HighlightedArticle_TextContainer = styled('div', {
  position: 'relative',
  pt: '1rem',
  px: '2rem',
  pb: '3rem',
  ta: 'left',
  mt: '-2rem',
  z: '$aboveContent',
  bc: '$white',
  ml: '3rem',

  '@<s': {
    ml: 0,
    p: '10%',
  },

  '@media (min-width: 577px) and (max-width: 870px)': {
    ml: 0,
    p: '5%',
  },
})

const HighlightedArticle_Heading = styled('div', {
  c: '$text',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  mb: '1rem',
})

const HighlightedArticle_Body = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  c: '$textAlt',
  mb: '1rem',
})

const HighlightedArticle_ReadMore = styled('span', {
  fontSize: '16px',
  lineHeight: '24px',
  mb: '1rem',
  c: '$textAlt',
  pb: '3px',
  bb: '3px solid $colors$primary',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:hover': {
    c: '$primary',
    bb: '3px solid $colors$indigoDark',
  },
})

const HighlightedArticle = styled('div', {
  position: 'relative',
  bc: '$white',
  f: '0 0 45%',
  w: '45%',
  minWidth: '300px',
  mx: 'auto',
  mb: '5%',
  cursor: 'pointer',
  bs: '0 0 2px 0 rgba(15, 12, 9, 0.1), 0 1px 4px 0 rgba(15, 12, 9, 0.1)',

  '@media (max-width: 870px)': {
    f: '0 0 100%',
    w: '100%',
  },

  '&:hover': {
    bs: '0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15)',
  },

  [`&:hover ${HighlightedArticle_Heading}`]: {
    c: '$primary',
  },

  [`&:hover ${HighlightedArticle_ReadMore}`]: {
    c: '$primary',
    bb: '3px solid $colors$indigoDark',
  },
})

const HighlightedArticle_Image = styled(Image, {})

const Article_TextContainer = styled('div', {
  position: 'relative',
  ta: 'left',
  z: '$aboveContent',
  bc: '$white',
  px: '3%',

  '@<s': {
    p: '10%',
  },

  '@media (min-width: 577px) and (max-width: 870px)': {
    p: '5%',
  },

  '@media (min-width: 871px)': {
    f: '0 0 60%',
    w: '60%',
  },
})

const Article_Heading = styled('div', {
  c: '$text',
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '28px',
  mb: '1rem',
})

const Article_Body = styled('div', {
  fontSize: '16px',
  lineHeight: '24px',
  c: '$textAlt',
  mb: '1rem',
})

const Article_ReadMore = styled('span', {
  fontSize: '16px',
  lineHeight: '24px',
  mb: '1rem',
  c: '$textAlt',
  pb: '3px',
  bb: '3px solid $colors$primary',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  '&:hover': {
    color: '$primary',
    bb: '3px solid $colors$indigoDark',
  },
})

const ArticleContainer = styled('div', {
  position: 'relative',
  bc: '$white',
  w: '95%',
  mx: 'auto',
  mb: '5%',
  bs: '0 0 2px 0 rgba(15, 12, 9, 0.1), 0 1px 4px 0 rgba(15, 12, 9, 0.1)',
  cursor: 'pointer',

  '@media (min-width: 871px)': {
    py: '3%',
  },

  '@media (max-width: 870px)': {
    w: '100%',
  },

  '&:hover': {
    bs: '0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15)',
  },

  [`&:hover ${Article_Heading}`]: {
    c: '$primary',
  },

  [`&:hover ${Article_ReadMore}`]: {
    c: '$primary',
    bb: '3px solid $colors$indigoDark',
  },
})

const Article_ImageContainer = styled('div', {
  w: '30%',
  f: '0 0 30%',
  pl: '3%',
  ta: 'center',

  '@media (max-width: 870px)': {
    w: '100%',
    pl: 0,
    pt: '5%',
  },
})

const Article_ImageSVG = styled(Image, {
  position: 'relative',
  left: 0,
  d: 'inline-block',
  w: '60%',
  mw: '200px',
  pr: '4px',

  '@media (max-width: 870px)': {
    w: '30%',
  },
})

const Article_Image = styled(Image, {
  d: 'inline-block',
  w: '85%',
  mw: '200px',
  pr: '4px',

  '@media (max-width: 870px)': {
    w: '60%',
  },
})

const Article_OutboundLink = styled('a', {
  d: 'flex',

  '@media (max-width: 870px)': {
    d: 'block',
  },
})

const PressArticles = () => {
  const highlightedArticleArray = [
    {
      heading: 'Leadpages announces new CEO with experience at Solera, Oracle',
      body: 'Minneapolis-based tech firm Leadpages has appointed Jeanette Dorazio as its CEO, it announced Wednesday.',
      link: 'https://www.bizjournals.com/twincities/inno/stories/news/2020/09/02/leadpages-announces-ceo-jeanette-dorazio.html',
      linkAltText:
        'Minne Inno - LeadPages announces new CEO with experience at Solera, Oracle',
      image: minneinnoLogo,
      imageAltText: 'Minne Inno logo',
    },
    {
      heading:
        'Leadpages Acquired By Redbrick, a Leading Canadian Portfolio of Digital Companies',
      body: 'Leadpages enters a new phase of focused growth as it joins Redbrick – a parent organization to a portfolio of digital operating companies.',
      link: 'https://www.businesswire.com/news/home/20200302005029/en/Leadpages-Acquired-Redbrick-Leading-Canadian-Portfolio-Digital',
      linkAltText:
        'Business Wire - Leadpages acquired by Redbrick, a leading Canadian Portfolio of Digital Companies',
      image: businessWireLogo,
      imageAltText: 'Business Wire logo',
    },
  ]

  const standardArticleArray = [
    {
      heading: 'Leadpages Announces New North Loop HQ',
      body: 'Leadpages, the no-code website and landing page builder, today announces its relocation to new headquarters in the heart of downtown Minneapolis. Effective July 1, 2021, Leadpages will operate out of its new home in the historic Colonial Warehouse building...',
      link: 'https://tech.mn/news/2021/06/01/leadpages-announces-new-northloop-hq',
      linkAltText:
        'Tech MN - Leadpages Establishes New Downtown Minneapolis Headquarters',
      image: techMNLogo,
      imageAltText: 'Tech MN logo',
    },
    {
      heading:
        'Leadpages taps Jeanette Dorazio, a veteran software industry executive, as new CEO',
      body: 'Leadpages taps Jeanette Dorazio, a veteran software industry executive, as chief executive this week, completing a Leadership transition that began when it was sold in March.',
      link: 'https://www.startribune.com/leadpages-taps-dorazio-a-software-veteran-as-new-ceo/572321022/',
      linkAltText:
        'Star Tribune - Leadpages taps Jeanette Dorazio, a veteran software industry executive, as new CEO',
      image: starTribuneLogo,
      imageAltText: 'Star Tribune logo',
    },
    {
      heading:
        'Leadpages Among the 10 Fastest-Growing New or Redesigned Apps in 2018',
      body: 'Business app platform, Zapier, has announced that Leadpages is among the fastest-growing new or recently redesigned apps of 2018.',
      link: 'https://www.entrepreneur.com/article/316977',
      linkAltText:
        'Entrepreneur - Leadpages Among the 10 Fastest-Growing New or Redesigned Apps in 2018',
      image: entrepreneurLogo,
      imageAltText: 'Entrepreneur logo',
    },
    {
      heading: 'Former Amazon Exec Steve Brain Joins Leadpages + Drip as CTO',
      body: 'Steve Brain will become the new Chief Technology Officer (CTO), joining the executive leadership team that oversees both Leadpages and Drip.',
      link: 'https://tech.mn/news/2018/04/05/drip-leadpages-name-former-amazon-steve-brain-exec-as-cto-plots-salt-lake-city-office/',
      linkAltText:
        'Tech MN - Former Amazon Exec Steve Brain Joins Leadpages + Drip as CTO',
      image: techDotMNLogo,
      imageAltText: 'Tech MN logo',
    },
    {
      heading:
        'Turning a Page: Leadpages co-founder Collins taps his own CEO successor',
      body: 'The new chief executive of Leadpages is John Tedesco, a veteran of the Twin Cities tech scene who formerly served as the company’s chief operating officer for two years.',
      link: 'http://www.startribune.com/turning-a-page-leadpages-co-founder-collins-taps-his-own-ceo-successor/436855113/',
      linkAltText:
        'Star Tribune - Leadpages co-founder Collins taps his own CEO successor',
      image: starTribuneLogo,
      imageAltText: 'Star Tribune logo',
    },
    {
      heading:
        '1,884 Startup Founders Say This 1 Thing Is More Important Than Making Money',
      body: 'A new survey of 1,884 company founders conducted by marketing automation firm Drip, a subsidiary of Leadpages delves into why entrepreneurs do what they do.',
      link: 'https://www.inc.com/glenn-leibowitz/1884-startup-founders-say-this-1-thing-is-more-important-than-making-money.html',
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
      linkAltText:
        'Wall Street Journal - Leadpages Buys Email Marketing Startup Drip',
      image: wallStreetJournalLogo,
      imageAltText: 'Wall Street Journal logo',
    },
    {
      heading: 'Leadpages Announces $27M in Series B Funding',
      body: 'Leadpages announced it has raised a $27 million Series B round, led by Drive Capital with participation from Foundry Group and Arthur Ventures.',
      link: 'https://techcrunch.com/2015/06/17/leadpages-announces-27m-in-series-b-funding/',
      linkAltText: 'Tech Crunch - Leadpages Announces $27M in Series B Funding',
      image: techCrunchLogo,
      imageAltText: 'Tech Crunch logo',
    },
    {
      heading:
        'Leadpages Raises $5M from Foundry Group for Landing Page Service',
      body: 'Leadpages, a Minneapolis company started less than a year ago, has received a $5 million Series A investment from the Foundry Group.',
      link: 'https://techcrunch.com/2013/09/26/leadpages-raises-5m-from-foundry-group-for-landing-page-service-powered-by-data-analytics-engine/',
      linkAltText:
        'Tech Crunch - Leadpages Raises $5M from Foundry Group for Landing Page Service',
      image: techCrunchLogo,
      imageAltText: 'Tech Crunch logo',
    },
  ]

  return (
    <OuterContainer>
      <InnerContainer>
        <HeadingContainer>
          <Title>Press Articles</Title>
          <Headline>Leadpages in the news</Headline>
          <Caption>
            Leadpages loves sharing the inspiring stories of our customers and
            how we innovate on their behalf. If you’re a member of the media and
            want to get in touch with the Leadpages team, don’t hesitate to
            reach out.
          </Caption>
          <Link href="/contact">
            <a>
              <CTA>
                Get in Touch&nbsp;
                <ArrowRightPurple
                  src={rightArrowPurple.src}
                  alt="purple right arrow"
                />
              </CTA>
            </a>
          </Link>
        </HeadingContainer>
        <HighlightedArticleContainer>
          {highlightedArticleArray.map(
            (
              { heading, body, link, linkAltText, image, imageAltText },
              index
            ) => (
              <HighlightedArticle key={index}>
                <a
                  href={link}
                  aria-label={linkAltText}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <HighlightedArticle_Image image={image} alt={imageAltText} />
                  <HighlightedArticle_TextContainer>
                    <HighlightedArticle_Heading>
                      {heading}
                    </HighlightedArticle_Heading>
                    <HighlightedArticle_Body>{body}</HighlightedArticle_Body>
                    <HighlightedArticle_Body>
                      <HighlightedArticle_ReadMore>
                        Read More
                      </HighlightedArticle_ReadMore>
                    </HighlightedArticle_Body>
                  </HighlightedArticle_TextContainer>
                </a>
              </HighlightedArticle>
            )
          )}
        </HighlightedArticleContainer>
        {standardArticleArray.map(
          (
            {
              heading,
              body,
              link,
              linkAltText,
              image,
              imageAltText,
              imageType,
            },
            index
          ) => (
            <ArticleContainer key={index}>
              <Article_OutboundLink
                href={link}
                aria-label={linkAltText}
                rel="noreferrer noopener"
                target="_blank"
              >
                {imageType === 'svg' ? (
                  <Article_ImageContainer>
                    <Article_ImageSVG image={image} alt={imageAltText} />
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
          )
        )}
      </InnerContainer>
    </OuterContainer>
  )
}

export default PressArticles
