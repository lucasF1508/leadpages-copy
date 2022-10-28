import React from 'react'
import SpacerRow from '@legacy/components/SpacerRow'
import FeatureGrid from './FeatureGrid'

const HomeFeatureGrid = ({ items }) => (
  <>
    <SpacerRow size="small" backgroundColor="$grayAlt" />
    <FeatureGrid
      features={items}
      itemsPerRow={4}
      showSectionLink={false}
      backgroundColor="$grayAlt"
    />
    <SpacerRow size="small" backgroundColor="$grayAlt" />
  </>
)

export default HomeFeatureGrid
