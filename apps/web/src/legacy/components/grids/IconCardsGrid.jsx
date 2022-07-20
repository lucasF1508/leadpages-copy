import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@design'
// components
import IconCard from '../cards/IconCard'

const GridContainer = styled('div', {
  m: 'auto',

  '@media (min-width: 1400px)': {
    mw: '1200px',
  },
})

const CardContainer = styled('div', {
  m: 'auto',
  d: 'flex',
  ff: 'row wrap',
  jc: 'center',
  o: 'hidden',
})

const IconCardsGrid = ({ items, itemsPerRow }) => (
  <GridContainer>
    <CardContainer>
      {items.map((item, index) => (
        <IconCard key={index} {...item} itemsPerRow={itemsPerRow} />
      ))}
    </CardContainer>
  </GridContainer>
)

IconCardsGrid.defaultProps = {
  itemsPerRow: 4,
}

IconCardsGrid.propTypes = {
  items: PropTypes.arrayOf(IconCard).isRequired,
  itemsPerRow: PropTypes.number,
}

export default IconCardsGrid
