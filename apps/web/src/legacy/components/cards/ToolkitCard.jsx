import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Link from 'next/link'
// images
import rightArrowPurple from '@legacy/assets/images/global/arrow_right_purple.svg'

const ImageContainer = styled('img', {
  margin: '18px 1rem',
})

const CardTitle = styled('h3', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '72px',
  fontWeight: 500,
  marginBottom: '1rem',
  color: '$textAlt',
})

const ArrowRightPurple = styled('img', {
  width: '22px',
  height: '15px',
  position: 'absolute',
  right: '20px',
  top: '28px',
  display: 'none',
  pointerEvents: 'none',
})

const ToolkitCardStyle_3Across = styled('a', {
  fontFamily: 'Apercu Pro',
  textAlign: 'left',
  marginBottom: '1rem',
  backgroundColor: '$white',
  height: '72px',
  margin: '1rem',
  boxShadow:
    '0 0 2px 0 rgba(15, 12, 9, 0.04), 0 2px 4px 0 rgba(15, 12, 9, 0.08)',
  flex: '0 0 100%',
  maxWidth: '100%',
  display: 'flex',
  flexWrap: 'none',

  '&:hover': {
    zIndex: 1,
    boxShadow: `0 4px 8px 0 rgba(15, 12, 9, 0.04),
      0 10px 20px 0 rgba(15, 12, 9, 0.08)`,

    [`${ArrowRightPurple}`]: {
      display: 'block',
    },

    [`${CardTitle}`]: {
      color: '$primary',
    },
  },

  '@media (min-width: 576px) and (max-width: 768px)': {
    flex: '0 0 75%',
    maxWidth: '75%',
  },

  '@media (min-width: 769px) and (max-width: 1023px)': {
    flex: '0 0 42%',
    maxWidth: '42%',
  },

  '@media (min-width: 1024px)': {
    marginBottom: 0,
    flex: '0 0 25%',
    maxWidth: '25%',
    textAlign: 'left',
  },
})

const ToolkitCard = ({ title, iconSVG, alt, productId, linkRoute, hide }) => (
  <Link href={linkRoute} passHref>
    <ToolkitCardStyle_3Across
      css={
        hide.indexOf(productId) !== -1
          ? { display: 'none' }
          : { display: 'flex' }
      }
    >
      <ImageContainer src={iconSVG.src} alt={alt} />
      <CardTitle>{title}</CardTitle>
      <ArrowRightPurple src={rightArrowPurple.src} alt="purple right arrow" />
    </ToolkitCardStyle_3Across>
  </Link>
)

ToolkitCard.defaultProps = {
  alt: '',
  hide: '',
}

ToolkitCard.propTypes = {
  productId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkRoute: PropTypes.string.isRequired,
  iconSVG: PropTypes.string.isRequired,
  alt: PropTypes.string,
  hide: PropTypes.string,
}

export default ToolkitCard
