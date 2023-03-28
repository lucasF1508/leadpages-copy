import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Link from '@components/Link'
// Assets
import rightArrowIcon from '@legacy/assets/images/global/arrow_right.svg'
import leftArrowIcon from '@legacy/assets/images/global/arrow_left.svg'
import Pinion from '@components/Pinion'

const CardSectionHeading = styled('h2', {
  pb: '$3',
  borderBottom: '$base',
})

const $CardsPreviousNext = styled(Pinion, {
  px: 'unset',

  [`${CardSectionHeading}`]: {
    type: 'h4',
  },
})

const CardsContainer = styled('div', {
  display: 'flex',
  jc: 'space-between',
  gap: '$3',
  flexDirection: 'column',

  '@>510': {
    flexDirection: 'row',
  },
})

const StyledLink = styled(Link, {
  color: 'rgba(15, 12, 9, 0.5)',

  [`
    &:hover,
    &.active
  `]: {
    color: '$primary',
  },
})

const Flexbox = styled('div', {
  padding: '$2',
  display: 'flex',
  alignItems: 'center',
})

const CardTextContainer = styled('div', {
  flex: 1,
  px: '$2',
})

const CardSupertitle = styled('div', {
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  opacity: 0.5,
  color: '$black',
  fontFamily: 'Space Mono',
  textTransform: 'uppercase',
  mb: '$0_5',
})

const CardTitle = styled('div', {
  type: 'cardPreviousNext',
  color: '$text',
  marginBottom: '8px',
})

const ArrowRight = styled('img', {
  width: '20px',
  height: '10px',
})

const ArrowLeft = styled('img', {
  width: '20px',
  height: '10px',
})

const Card = styled('div', {
  display: 'flex',
  jc: 'center',
  ff: 'column',
  backgroundColor: '$white !important',
  boxShadow:
    '0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15)',
  width: '100%',
  maxWidth: '825px',

  '@>510': {
    maxWidth: '$cols3',
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

  [`${StyledLink}`]: {
    display: 'block',
  },
})

const CardsPreviousNext = ({ heading, previous, next }) => (
  <$CardsPreviousNext>
    <CardSectionHeading>{heading}</CardSectionHeading>
    <CardsContainer>
      <Card>
        <StyledLink {...previous?.link}>
          <Flexbox>
            <ArrowLeft src={leftArrowIcon.src} alt="left arrow" />
            <CardTextContainer>
              <CardSupertitle>{previous?.heading}</CardSupertitle>
              <CardTitle>{previous?.link?.label}</CardTitle>
            </CardTextContainer>
          </Flexbox>
        </StyledLink>
      </Card>
      <Card>
        <StyledLink {...next?.link}>
          <Flexbox>
            <CardTextContainer>
              <CardSupertitle>{next?.heading}</CardSupertitle>
              <CardTitle>{next?.link?.label}</CardTitle>
            </CardTextContainer>
            <ArrowRight src={rightArrowIcon.src} alt="right arrow" />
          </Flexbox>
        </StyledLink>
      </Card>
    </CardsContainer>
  </$CardsPreviousNext>
)

CardsPreviousNext.propTypes = {
  heading: PropTypes.string.isRequired,
  backToUrl: PropTypes.string.isRequired,
  backToTitle: PropTypes.string.isRequired,
  backToSuperTitle: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
  nextTitle: PropTypes.string.isRequired,
  nextSuperTitle: PropTypes.string.isRequired,
}

export default CardsPreviousNext
