import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import Image from '@components/Image'
import { styled } from '@design'
import { HEADER_HEIGHT } from '@legacy/constants'
//images
import webinarsThumbnail from '@legacy/assets/images/icons/featureicons/rose_monitor-award.png'
import downloadsThumbnail from '@legacy/assets/images/icons/featureicons/lilac_split-download.png'
import blogThumbnail from '@legacy/assets/images/icons/featureicons/coral_megaphone.png'
import podcastThumbnail from '@legacy/assets/images/icons/featureicons/forest_mic.png'
import guidesThumbnail from '@legacy/assets/images/icons/featureicons/cyan_page.png'
import techsupportThumbnail from '@legacy/assets/images/icons/featureicons/camel_lifesaver.png'

const OuterContainer = styled('div', {
  position: 'relative',
  background: '$grayAlt',
})

const LPUContainer = styled('div', {
  maxWidth: '1140px',
  marginTop: `-${HEADER_HEIGHT}px`,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '6rem',
  paddingBottom: '3rem',
  paddingRight: '1rem',
  paddingLeft: '1rem',

  '@>s': {
    paddingTop: '10rem',
    paddingBottom: '85px',
    paddingRight: '6rem',
    paddingLeft: '6rem',
  },
})

const LPUHeadline = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '2.5rem',
  textAlign: 'center',
  margin: 'auto',
  marginBottom: '36px',
  color: '$text',
  width: '50%',

  '@media (max-width: 900px)': {
    width: '80%',
  },

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
    width: '90%',
  },
})

const FlexRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginBottom: '24px',
})

const FlexRowItem = styled('div', {
  minHeight: '1px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  width: '100%',
  paddingLeft: '3%',
  paddingRight: '3%',
  paddingTop: '5%',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@<s': {
    paddingBottom: '5%',
  },
})

const FlexRow3Heading = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: 500,
  textAlign: 'center',
  alignSelf: 'center',
  color: '$text',

  '@>s': {
    marginBottom: '26px',
  },

  '@<s': {
    marginLeft: '16px',
  },
})

const FlexRow3 = styled(FlexRowItem, {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '24px',
  backgroundColor: '$white',
  alignSelf: 'stretch',
  cursor: 'pointer',
  boxShadow:
    '0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08)',
  transition: 'all 0.3s ease',

  '&:hover': {
    boxShadow: `0 4px 8px 0 rgba(15, 12, 9, 0.04),
      0 10px 20px 0 rgba(15, 12, 9, 0.08)`,
  },

  '@<s': {
    marginBottom: '1rem',
  },

  '@media (min-width: 577px) and (max-width: 768px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 38.3333%',
    flex: '0 0 38.3333%',
    maxWidth: '38.3333%',
  },

  '@media (min-width: 769px) and (max-width: 991px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 23.3333%',
    flex: '0 0 23.3333%',
    maxWidth: '23.3333%',
  },

  '@media (min-width: 992px)': {
    WebkitBoxFlex: 0,
    MsFlex: '0 0 23.3333%',
    flex: '0 0 23.3333%',
    maxWidth: '23.3333%',
  },

  [`&:hover ${FlexRow3Heading}`]: {
    color: '$primary',
  },
})

const FlexRow3Container = styled('div', {
  textAlign: 'center',
})

const IconContainer = styled(Image, {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '48px',
  height: '48px',

  '@>s': {
    marginBottom: '26px',
  },
})

const FlexRow3Copy = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center',
  marginBottom: '48px',
  color: '$textAlt',
  display: 'none',

  '@>s': {
    display: 'block',
  },
})

const Title = styled('div', {
  fontFamily: 'Space Mono',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
  opacity: 0.5,
  color: '$black',
  marginBottom: '18px',
  textAlign: 'center',
})

const Caption = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '22px',
  lineHeight: '32px',
  margin: 'auto',
  marginBottom: '36px',
  color: '$textAlt',
  width: '70%',

  '@media (max-width: 900px)': {
    width: '90%',
  },

  '@<s': {
    width: '95%',
  },
})

const Button = styled('button', {
  width: '209px',
  height: '48px',
  borderRadius: '48px',
  marginBottom: '48px',
  border: '3px solid $colors$primary',
  backgroundColor: '$primary',
  color: '$white',
  fontFamily: 'Apercu Pro',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '28px',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  fontWeight: 'bold',

  '@<xs': {
    width: '240px',
    fontSize: '16px',
    alignSelf: 'center',
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
    border: '3px solid $colors$indigoDark',
  },
})

const OutboundLink = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
})

const StyledLink = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',
})

const ScrollToLink = styled(ScrollLink, {
  textDecoration: 'none',
  cursor: 'pointer',
})

const TextContainer = styled('div', {
  width: '100%',
  textAlign: 'center',
})

const MobileFlexbox = styled('div', {
  '@<s': {
    display: 'flex',
  },
})

const ResourcesHeader = () => {
  const cardArray = [
    {
      title: 'Webinars',
      text: 'Take each and every stage of your business growth further with expert training.',
      scrollLink: 'webinars',
      image: webinarsThumbnail,
      imageAltText: 'webinars',
    },
    {
      title: 'Downloads',
      text: 'Get the guides, checklists, and worksheets you need to market like a pro.',
      scrollLink: 'downloads',
      image: downloadsThumbnail,
      imageAltText: 'downloads',
    },
    {
      title: 'Blog',
      text: 'Stay up-to-date on marketing trends with articles that will teach and inspire.',
      outboundLink: 'https://www.leadpages.com/blog',
      linkAltText: 'Leadpages Blog',
      image: blogThumbnail,
      imageAltText: 'blog',
    },
    {
      title: 'Podcast',
      text: 'Hear from real-world entrepreneurs who share their most valuable lessons.',
      outboundLink: '/podcast',
      linkAltText: 'podcast',
      image: podcastThumbnail,
      imageAltText: 'podcast',
    },
    {
      title: 'Guides',
      text: 'Master the essentials of conversion marketing with our in-depth guides.',
      scrollLink: 'guides',
      image: guidesThumbnail,
      imageAltText: 'guides',
    },
    {
      title: 'Tech Support',
      text: 'World-class customer support is never more than a click away.',
      outboundLink: 'https://support.leadpages.com/hc/en-us',
      linkAltText: 'Leadpages Knowledge Base',
      image: techsupportThumbnail,
      imageAltText: 'tech support',
    },
  ]
  return (
    <OuterContainer>
      <LPUContainer>
        <TextContainer>
          <Title>Leadpages Resources</Title>
          <LPUHeadline>
            Free Marketing Resources to Help You Grow Your Business
          </LPUHeadline>
          <Caption>
            Explore our ever-expanding library of digital marketing resources,
            eBooks, webinars, guides, tech support, and inspiration.
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
              image,
              imageAltText,
            } = card
            return (
              <FlexRow3 key={index}>
                {scrollLink && (
                  <ScrollToLink to={scrollLink} spy smooth duration={500}>
                    <FlexRow3Container>
                      <MobileFlexbox>
                        <IconContainer image={image} alt={imageAltText} />
                        <FlexRow3Heading>{title}</FlexRow3Heading>
                      </MobileFlexbox>
                      <FlexRow3Copy>{text}</FlexRow3Copy>
                    </FlexRow3Container>
                  </ScrollToLink>
                )}
                {outboundLink && (
                  <FlexRow3Container>
                    <OutboundLink
                      href={outboundLink}
                      alt={linkAltText}
                      legacyBehavior
                    >
                      <MobileFlexbox>
                        <IconContainer image={image} alt={imageAltText} />
                        <FlexRow3Heading>{title}</FlexRow3Heading>
                      </MobileFlexbox>
                      <FlexRow3Copy>{text}</FlexRow3Copy>
                    </OutboundLink>
                  </FlexRow3Container>
                )}
                {internalLink && (
                  <FlexRow3Container>
                    <StyledLink href={internalLink} legacyBehavior>
                      <a aria-label={linkAltText}>
                        <MobileFlexbox>
                          <IconContainer image={image} alt={imageAltText} />
                          <FlexRow3Heading>{title}</FlexRow3Heading>
                        </MobileFlexbox>
                        <FlexRow3Copy>{text}</FlexRow3Copy>
                      </a>
                    </StyledLink>
                  </FlexRow3Container>
                )}
              </FlexRow3>
            )
          })}
        </FlexRow>
      </LPUContainer>
    </OuterContainer>
  )
}

export default ResourcesHeader
