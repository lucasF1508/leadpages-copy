import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Link from 'next/link'
// Images
import ArrowRightPurple from '@legacy/assets/images/global/arrow_right_purple.svg'
import leadpagesLogoSVG from '@legacy/assets/images/global/leadpages-wordmark_white.svg'

const CardImageItem = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  backgroundColor: '#0a236d',
  height: '180px',
})

const TextContentItem = styled('div', {
  padding: '2.25rem 2.18rem 2.4rem 2.25rem',
})

const CompetitorSVG = styled('img', {
  width: '50%',
  maxHeight: '41px',
  position: 'absolute',
  right: '50%',
  top: '50%',
  transform: 'translate(50%, -50%)',
  transition: '0.5s',
})

const LeadpagesSVG = styled('img', {
  maxHeight: '26px',
  maxWidth: '60%',
})

const CardTitle = styled('div', {
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '24px',
  color: '$text',
  marginBottom: '1.8rem',
})

const CardDescription = styled('div', {
  lineHeight: '24px',
  fontWeight: 500,
  color: '$textAlt',
  marginBottom: '2.3rem',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})

const CardLinkItem = styled('div', {})

const StyledLink = styled('a', {
  fontWeight: 500,
  lineHeight: '24px',
  color: '$primary',
})

const StyledBottomText = styled('span', {
  paddingBottom: '0.5rem',
})

const ArrowSVG = styled('img', {
  height: '11px',
  width: '12px',
  marginLeft: '12px',
})

const VersusText = styled('span', {
  fontWeight: 500,
  fontSize: '13.9px',
  lineHeight: '17px',
  textAlign: 'center',
  color: '#c3c2c1',
  margin: '0 1.2rem 0 1.2rem',
})

const VersusContainer = styled('div', {
  position: 'absolute',
  left: '-175px',
  transition: '0.5s',
  display: 'flex',
  alignItems: 'center',
})

const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '350px',
  backgroundColor: '$white',
  mx: '1rem',
  marginBottom: '2.2rem',
  transition: 'all 0.3s ease',

  boxShadow:
    '0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08)',

  '&:hover': {
    boxShadow: `0 4px 8px 0 rgba(15, 12, 9, 0.04),
      0 10px 20px 0 rgba(15, 12, 9, 0.08)`,
  },

  [`& ${CardTitle}, ${StyledBottomText}`]: {
    transition: 'all 0.3s ease',
  },

  [`&:hover ${CardTitle}`]: {
    color: '$primary',
  },

  [`&:hover ${StyledBottomText}`]: {
    borderBottom: 'solid 3px $colors$primary',
  },

  [`&:hover ${CompetitorSVG}`]: {
    right: '2rem',
    maxHeight: '26px',
    maxWidth: '30%',
    transform: 'translate(0, -50%)',
  },

  [`&:hover ${VersusContainer}`]: {
    left: '2.25rem',
    WebkitBackfaceVisibility: 'hidden',
    WebkitTransform: 'translateZ(0) scale(1, 1)',
  },

  [`&:hover ${CardImageItem}`]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const ComparisonCards = ({
  image,
  imageAlt,
  title,
  description,
  link,
  linkAlt,
}) => (
  <CardContainer>
    <Link href={link} passHref legacyBehavior>
      <StyledLink aria-label={linkAlt}>
        <CardImageItem>
          <VersusContainer>
            <LeadpagesSVG src={leadpagesLogoSVG.src} alt="Leadpages logo" />
            <VersusText>vs.</VersusText>
          </VersusContainer>
          <CompetitorSVG src={image.src} alt={imageAlt} />
        </CardImageItem>
        <TextContentItem>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardLinkItem>
            <StyledBottomText>Read Comparison</StyledBottomText>
            <ArrowSVG src={ArrowRightPurple.src} alt="right arrow" />
          </CardLinkItem>
        </TextContentItem>
      </StyledLink>
    </Link>
  </CardContainer>
)

ComparisonCards.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkAlt: PropTypes.string.isRequired,
}

export default ComparisonCards
