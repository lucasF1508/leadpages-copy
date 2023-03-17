import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@design'
// components
import CardIcon from './CardIcon'

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
  o: 'hidden',

  variants: {
    align: {
      true: { jc: 'flex-start', '@>769': { jc: 'center' } },
      false: { jc: 'center' },
    },
  },
})

const IconCardsGrid = ({ items, itemsPerRow, align }) => (
  <GridContainer>
    <CardContainer align={align}>
      {items.map((item, index) => (
        <CardIcon
          key={index}
          {...item}
          itemsPerRow={itemsPerRow}
          align={align}
        />
      ))}
    </CardContainer>
  </GridContainer>
)

IconCardsGrid.defaultProps = {
  itemsPerRow: 4,
}

IconCardsGrid.propTypes = {
  items: PropTypes.arrayOf(CardIcon).isRequired,
  itemsPerRow: PropTypes.number,
}

export default IconCardsGrid
