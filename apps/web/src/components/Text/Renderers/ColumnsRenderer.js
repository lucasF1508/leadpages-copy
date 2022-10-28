import React from 'react'
import TwoColumnTextBlock from '@legacy/components/layout/TwoColumnTextBlock'
import { styled } from '@design'

const $ColumnContainer = styled('div', {
  box: { property: 'mt', multiplier: 0.4 },
  ta: 'left',

  '&:first-child': {
    mt: 0,
  },
})

const ColumnsRenderer = ({ node: { items } = {} }) => (
  <$ColumnContainer>
    <TwoColumnTextBlock textBlockArray={items} />
  </$ColumnContainer>
)

export default ColumnsRenderer
