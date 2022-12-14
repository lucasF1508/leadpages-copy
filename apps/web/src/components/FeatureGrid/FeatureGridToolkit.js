import React from 'react'
import { styled } from '@design'
// components
import CardToolkit from '@components/Cards/CardToolkit'

const SectionContainer = styled('div', {
  backgroundColor: '$grayAlt',
  position: 'relative',
  padding: '0rem 3rem',
  paddingBottom: '3rem',

  '@media (min-width: 577px)': {
    paddingRight: '3rem',
    paddingLeft: '3rem',
  },
})

const GridContainer = styled('div', {
  display: 'flex',
  marginBottom: '1rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

const FeatureGridToolkit = ({ items }) => (
  <SectionContainer>
    <GridContainer>
      {items.map(({ _key, ...item }) => (
        <CardToolkit key={_key} {...item} />
      ))}
    </GridContainer>
  </SectionContainer>
)
export default FeatureGridToolkit
