import React from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import Image from 'next/image'
// components
import IconCardsGrid from './IconCardsGrid'

const SectionContainer = styled('div', {
  position: 'relative',
  p: '0 3rem',

  '@media (min-width: 577px)': {
    p: '0 6rem',
  },
})

const SectionLink = styled('div', {
  fontFamily: 'Apercu Pro',
  fontSize: '18px',
  lineHeight: '32px',
  ta: 'center',
  color: '$textAlt',
  mb: '4rem',
  pt: '3rem',
})

const StyledLink = styled('a', {
  d: 'inline',
  c: '$primary',
  pb: '3px',
  bb: '2px solid $colors$purpleLight',

  '&:hover': {
    bb: '2px solid $colors$primary',
  },
})

const FeatureIconsGrid = ({
  features,
  itemsPerRow,
  showSectionLink,
  backgroundColor,
}) => (
  <SectionContainer css={backgroundColor ? { backgroundColor } : {}}>
    <IconCardsGrid items={features} itemsPerRow={itemsPerRow} />
    {showSectionLink && (
      <SectionLink>
        Visit Leadpages{' '}
        <NextLink href="/product/feature-index" passHref>
          <StyledLink>feature index</StyledLink>
        </NextLink>{' '}
        for the full story.
      </SectionLink>
    )}
  </SectionContainer>
)

FeatureIconsGrid.defaultProps = {
  itemsPerRow: 4,
  showSectionLink: true,
  backgroundColor: 'transparent',
}

FeatureIconsGrid.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.shape({
        src: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
      }).isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.shape({
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        altText: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  itemsPerRow: PropTypes.number,
  showSectionLink: PropTypes.bool,
  backgroundColor: PropTypes.string,
}

export default FeatureIconsGrid
