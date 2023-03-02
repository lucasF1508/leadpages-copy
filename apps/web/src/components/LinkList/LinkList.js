import React from 'react'
import { styled } from '@design'
// images
import bgSVG from '@legacy/assets/images/shapes/wavy-lines-mirror-gray.svg'
import rightArrowSVG from '@legacy/assets/images/global/arrow_right.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$grayAlt',
})

const InnerContainer = styled('div', {
  maxWidth: '1140px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '6rem',
  paddingBottom: '6rem',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    paddingTop: '9rem',
    paddingBottom: '9rem',
  },

  '@media (min-width: 993px)': {
    paddingTop: '11rem',
    paddingBottom: '11rem',
  },
})

const TextContainer = styled('div', {
  position: 'relative',
  zIndex: 2,
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media (max-width: 768px)': {
    width: '80%',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    width: '80%',
  },

  '@media (min-width: 993px)': {
    width: '60%',
  },
})

const BGImage = styled('img', {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  zIndex: 1,
  height: '100%',
  width: '100%',

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

const TitleContainer = styled('div', {
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '2rem',
  width: '100%',
  height: '100%',

  '@media (max-width: 576px)': {
    marginBottom: 0,
  },
})

const Title = styled('div', {
  fontFamily: 'Value Serif',
  fontSize: '24px',
  lineHeight: '30px',
  letterSpacing: '-0.08px',
  color: '$text',
  marginBottom: '2rem',

  '@media (max-width: 768px)': {
    fontSize: '24px',
    lineHeight: '30px',
    letterSpacing: '-0.08px',
  },

  '@media (min-width: 769px) and (max-width: 992px)': {
    fontSize: '30px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },

  '@media (min-width: 993px)': {
    fontSize: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.5px',
  },
})

const JobPosition = styled('div', {
  fontFamily: 'Apercu Pro',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0px',
  color: '$text',
  marginBottom: '8px',
  textAlign: 'left',

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

const ArrowRight = styled('img', {
  marginTop: 'auto',
  marginBottom: 'auto',
  width: '20px',
  height: '10px',
})

const Card = styled('div', {
  maxWidth: '825px',
  backgroundColor: '$white',
  marginBottom: '12px',
  boxShadow:
    '0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08)',
  transition: '0.3s ease',
  zIndex: 1,

  '&:hover': {
    cursor: 'pointer',
    boxShadow:
      '0 4px 8px 0 rgba(15, 12, 9, 0.04), 0 10px 20px 0 rgba(15, 12, 9, 0.08)',
    zIndex: 10,
  },

  [`&:hover ${JobPosition}`]: {
    color: '$primary',
    transition: '0.3s ease',
  },

  [`&:hover ${ArrowRight}`]: {
    WebkitFilter:
      'invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg) brightness(101%) contrast(103%)',
    filter:
      'invert(29%) sepia(83%) saturate(6122%) hue-rotate(247deg) brightness(101%) contrast(103%)',
    transition: '0.3s ease',
  },
})

const JobDepartment = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$textAlt',
  textAlign: 'left',
})

const Flexbox = styled('div', {
  padding: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
})

const JobTextContainer = styled('div', {})

const OutboundLink = styled('a', {
  textDecoration: 'none',

  '&:hover': {
    cursor: 'pointer',
  },
})

const LinkList = ({ heading, links }) => (
  <OuterContainer id="link-list">
    <BGImage src={bgSVG.src} alt="careers page background svg image" />
    <InnerContainer>
      <TextContainer>
        <TitleContainer>
          <Title>{heading}</Title>
        </TitleContainer>
        {links?.length > 0 &&
          links.map(({ _key, title, subtitle, url }) => (
            <OutboundLink
              key={_key}
              href={url}
              alt="job description link"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Card>
                <Flexbox>
                  <JobTextContainer>
                    <JobPosition>{title}</JobPosition>
                    <JobDepartment>{subtitle}</JobDepartment>
                  </JobTextContainer>
                  <ArrowRight src={rightArrowSVG.src} alt="right arrow" />
                </Flexbox>
              </Card>
            </OutboundLink>
          ))}
      </TextContainer>
    </InnerContainer>
  </OuterContainer>
)

export default LinkList
