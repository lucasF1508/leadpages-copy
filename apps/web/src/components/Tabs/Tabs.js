import React from 'react'
import mediaQueries from '@design/tokens/mediaQueries'
import useMediaQuery from '@hooks/useMediaQuery'
import TabsRotator from './TabsRotator'
import TabsReveal from './TabsReveal'
import TabsRotatorAlt from './TabsRotatorAlt'
import TabsRevealAlt from './TabsRevealAlt'

const Tabs = (props) => {
  const isDesktop = useMediaQuery(mediaQueries['>769'])
  const { alternateLayout } = props

  if (alternateLayout) {
    return isDesktop ? (
      <TabsRevealAlt {...props} />
    ) : (
      <TabsRotatorAlt {...props} />
    )
  }

  return isDesktop ? <TabsReveal {...props} /> : <TabsRotator {...props} />
}

export default Tabs
