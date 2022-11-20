import React from 'react'
import TextColumns from '@components/Text/TextColumns'
import { styled } from '@design'

const $ColumnContainer = styled('div', {
  box: { property: 'mt', multiplier: 0.4 },
  ta: 'left',

  '&:first-child': {
    mt: 0,
  },

  variants: {
    itemsPerRow: {},
  },
})

const ColumnsRenderer = ({ node: { items, ...props } = {} }) => (
  <$ColumnContainer>
    <TextColumns {...props} items={items} />
  </$ColumnContainer>
)

export default ColumnsRenderer
