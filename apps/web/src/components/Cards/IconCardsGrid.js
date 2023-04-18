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
      true: { jc: 'flex-start', '@>577': { jc: 'center' } },
      false: { jc: 'center' },
      start: { jc: 'flex-start' },
    },
  },

  defaultVariants: {
    align: false,
  },
})

const IconCardsGrid = ({ items, itemsPerRow, align, asCards }) => {
  const cardAlign = ['start'].includes(align) ? true : align

  return (
    <GridContainer asCards={asCards}>
      <CardContainer align={align}>
        {items.map((item, index) => (
          <CardIcon
            key={index}
            {...item}
            itemsPerRow={itemsPerRow}
            align={cardAlign}
            asCards={asCards}
          />
        ))}
      </CardContainer>
    </GridContainer>
  )
}

export default IconCardsGrid
