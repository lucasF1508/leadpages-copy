import React from 'react'
import mediaQueries from '@design/tokens/mediaQueries'
import useMediaQuery from '@hooks/useMediaQuery'
import TabsRotator from './TabsRotator'
import TabsReveal from './TabsReveal'

const Tabs = (props) => {
  const isDesktop = useMediaQuery(mediaQueries['>lp_3'])

  return isDesktop ? <TabsReveal {...props} /> : <TabsRotator {...props} />
}

export default Tabs
