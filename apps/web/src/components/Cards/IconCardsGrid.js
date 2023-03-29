import React from 'react'
import { styled } from '@design'
// components
import CardIcon from './CardIcon'

const GridContainer = styled('div', {
  m: 'auto',

  '@media (min-width: 1400px)': {
    mw: '1200px',
  },

  variants: {
    asCards: {
      true: {
        '@media (min-width: 1400px)': {
          mw: '1140px',
        },
      },
    },
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

  defaultVariants: {
    align: false,
  },
})

const IconCardsGrid = ({ items, itemsPerRow, align, asCards }) => (
  <GridContainer asCards={asCards}>
    <CardContainer align={align}>
      {items.map((item, index) => (
        <CardIcon
          key={index}
          {...item}
          itemsPerRow={itemsPerRow}
          align={align}
          asCards={asCards}
        />
      ))}
    </CardContainer>
  </GridContainer>
)

export default IconCardsGrid
