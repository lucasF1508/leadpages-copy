import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import Link from 'next/link'

// Images
import bkgSVG from '@legacy/assets/images/shapes/wavy-lines-hourglass-gray.svg'
import ArrowRightPurple from '@legacy/assets/images/global/arrow_right_purple.svg'

const OuterContainer = styled('div', {
  position: 'relative',
  marginTop: '-60px',
  paddingTop: '60px',
  backgroundColor: '$grayAlt',
  zIndex: -1,
})

const HeaderContainer = styled('div', {
  maxWidth: '1140px',
  mx: 'auto',
  py: '6rem',
  px: '3rem',
  textAlign: 'center',

  '@>m': {
    px: '6rem',
  },

  '&.left-align': {
    textAlign: 'left',
  },
})
const Supertitle = styled('div', {
  fontFamily: 'Space Mono',
  opacity: 0.5,
  color: '$black',
  fontSize: '12px',
  letterSpacing: '2px',
  lineHeight: '18px',
  textTransform: 'uppercase',
})

const Title = styled('div', {
  marginTop: '1rem',
  fontFamily: 'Value Serif',
  fontSize: '2.5rem',
  letterSpacing: '-0.03125rem',
  lineHeight: '3rem',
  color: '$text',
  marginBottom: '2rem',

  '@<s': {
    fontSize: '1.5rem',
    lineHeight: '1.75rem',
    letterSpacing: 0,
  },
})

const SVGContainer = styled('img', {
  position: 'absolute',
  right: 0,
  overflowX: 'hidden',
  bottom: '-30px',
  width: '100%',
  zIndex: -1,

  '@media (max-width: 490px)': {
    display: 'none',
  },

  '@media (min-width: 491px) and (max-width: 767px)': {
    bottom: '-40px',
  },

  '@media (min-width: 768px) and (max-width: 1030px)': {
    bottom: '-30px',
    width: '70%',
  },

  '@media (min-width: 1031px) and (max-width: 1299px)': {
    bottom: '-50px',
    width: '70%',
  },

  '@media (min-width: 1300px)': {
    bottom: '-80px',
    width: '70%',
  },
})

const RightArrow = styled('img', {
  width: '16px',
  height: '11px',
  display: 'inline',
  opacity: 0.4,
  margin: '0 1rem 0 1rem',
})

const BreadCrumbsContainer = styled('div', {
  fontWeight: 500,
  lineHeight: '24px',
  color: '$text',
})

const ParentPage = styled('span', {
  fontWeight: 500,
  lineHeight: '24px',
  color: '$text',
  opacity: 0.4,

  '&:hover': {
    color: '$primary',
    opacity: 1,
  },
})

const SiloHeader = ({ title, supertitle, breadcrumbs }) => (
  <OuterContainer>
    <SVGContainer src={bkgSVG.src} alt="background svg" />
    <HeaderContainer className={breadcrumbs ? 'left-align' : ''}>
      {breadcrumbs && (
        <BreadCrumbsContainer>
          <Link href={breadcrumbs.parentPageLink}>
            <a>
              <ParentPage>{breadcrumbs.parentPageName}</ParentPage>
            </a>
          </Link>
          <RightArrow src={ArrowRightPurple.src} alt="Grey right arrow" />
          {breadcrumbs.currentPageName}
        </BreadCrumbsContainer>
      )}
      {supertitle && <Supertitle>{supertitle}</Supertitle>}
      <Title>{title}</Title>
    </HeaderContainer>
  </OuterContainer>
)

SiloHeader.defaultProps = {
  breadcrumbs: null,
  supertitle: null,
}
SiloHeader.propTypes = {
  breadcrumbs: PropTypes.shape({
    currentPageName: PropTypes.string.isRequired,
    parentPageName: PropTypes.string.isRequired,
    parentPageLink: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
  supertitle: PropTypes.string,
}

export default SiloHeader
