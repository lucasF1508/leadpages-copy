import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Link from 'next/link'
// Assets
import rightArrowIcon from '@legacy/assets/images/global/arrow_right.svg'
import leftArrowIcon from '@legacy/assets/images/global/arrow_left.svg'

const CardSectionHeading = styled('h2', {
  fontFamily: 'Value Serif',
  fontSize: '30px',
  letterSpacing: '-0.1px',
  lineHeight: '36px',
  color: '$text',
  my: '60px',
  width: '80%',

  '@media (max-width: 768px)': {
    my: '35px',
    width: '100%',
    fontSize: '20px',
    letterSpacing: '-0.07px',
    lineHeight: '24px',
  },
})

const CardsContainer = styled('div', {
  display: 'flex',

  '@media (max-width: 425px)': {
    flexDirection: 'column',
  },
})

const StyledLink = styled('a', {
  color: 'rgba(15, 12, 9, 0.5)',

  [`
    &:hover,
    &.active
  `]: {
    color: '$primary',
  },
})

const Flexbox = styled('div', {
  padding: '1.75rem 1.8rem 1.2rem 2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const CardTextContainer = styled('div', {})

const CardSupertitle = styled('div', {
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  opacity: 0.5,
  color: '$black',
  fontFamily: 'Space Mono',
  textTransform: 'uppercase',
  marginBottom: '1rem',
})

const CardTitle = styled('div', {
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
  width: '20px',
  height: '10px',
  margin: 'auto 0 auto 2rem',
})

const ArrowLeft = styled('img', {
  width: '20px',
  height: '10px',
  margin: '2.7rem 2.25rem auto 0',
})

const Card = styled('div', {
  maxWidth: '825px',
  backgroundColor: '$white !important',
  marginBottom: '12px',
  boxShadow:
    '0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15)',
  width: '250px',
  marginRight: '1.4rem',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  '&:hover': {
    cursor: 'pointer',
    boxShadow: `0 6px 12px 0 rgba(15, 12, 9, 0.3),
      0 12px 24px 0 rgba(15, 12, 9, 0.15)`,
  },

  [`&:hover ${CardTitle}`]: {
    color: '$primary',
  },

  [`&:hover ${ArrowRight}, ${ArrowLeft}`]: {
    filter: `invert(33%) sepia(92%) saturate(6067%) hue-rotate(247deg)
      brightness(101%) contrast(102%)`,
  },
})

const SiloBackAndForthNavCards = ({
  heading,
  backToUrl,
  backToTitle,
  backToSuperTitle,
  nextUrl,
  nextTitle,
  nextSuperTitle,
}) => (
  <>
    <CardSectionHeading>{heading}</CardSectionHeading>
    <CardsContainer>
      <Card>
        <Link href={backToUrl} passHref>
          <StyledLink>
            <Flexbox>
              <ArrowLeft src={leftArrowIcon.src} alt="left arrow" />
              <CardTextContainer>
                <CardSupertitle>{backToSuperTitle}</CardSupertitle>
                <CardTitle>{backToTitle}</CardTitle>
              </CardTextContainer>
            </Flexbox>
          </StyledLink>
        </Link>
      </Card>
      <Card>
        <Link href={nextUrl} passHref>
          <StyledLink>
            <Flexbox>
              <CardTextContainer>
                <CardSupertitle>{nextSuperTitle}</CardSupertitle>
                <CardTitle>{nextTitle}</CardTitle>
              </CardTextContainer>
              <ArrowRight src={rightArrowIcon.src} alt="right arrow" />
            </Flexbox>
          </StyledLink>
        </Link>
      </Card>
    </CardsContainer>
  </>
)

SiloBackAndForthNavCards.propTypes = {
  heading: PropTypes.string.isRequired,
  backToUrl: PropTypes.string.isRequired,
  backToTitle: PropTypes.string.isRequired,
  backToSuperTitle: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
  nextTitle: PropTypes.string.isRequired,
  nextSuperTitle: PropTypes.string.isRequired,
}

export default SiloBackAndForthNavCards
