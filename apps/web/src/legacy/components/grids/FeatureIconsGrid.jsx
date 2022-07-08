import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { GATSBY_IMAGE } from '../../constants/types'
import styled from 'styled-components'
// components
import IconCardsGrid from './IconCardsGrid'

const SectionContainer = styled.div`
  background-color: ${(props) => props.backgroundColor};
  position: relative;
  padding: 0 3rem;
  @media (min-width: 577px) {
    padding: 0 6rem;
  }
`

const SectionLink = styled.div`
  font-family: Apercu Pro;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  color: #575452;
  margin-bottom: 4rem;
  padding-top: 3rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #603eff;
  padding-bottom: 3px;
  border-bottom: 2px solid rgb(209, 198, 249);
  &:hover {
    border-bottom: 2px solid #603eff;
  }
`

const FeatureIconsGrid = (props) => {
  const { features, itemsPerRow, showSectionLink, backgroundColor } = props
  return (
    <SectionContainer backgroundColor={backgroundColor}>
      <IconCardsGrid items={features} itemsPerRow={itemsPerRow} />
      {showSectionLink && (
        <SectionLink>
          Visit Leadpages{' '}
          <StyledLink href="/product/feature-index">feature index</StyledLink>{' '}
          for the full story.
        </SectionLink>
      )}
    </SectionContainer>
  )
}

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
      icon: GATSBY_IMAGE.isRequired,
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
