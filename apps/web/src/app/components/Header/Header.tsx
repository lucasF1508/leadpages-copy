import React from 'react'
import { draftMode } from 'next/headers'
import Nav from '@/components/Nav'
import WebsiteBanner from '@/components/WebsiteBanner'
import { getNavigation } from './getNavigation'
import { getWebsiteBanner } from './getWebsiteBanner'

const Header = async () => {
  const [navigation, websiteBanner] = await Promise.all([
    getNavigation(draftMode().isEnabled),
    getWebsiteBanner(draftMode().isEnabled),
  ])

  return (
    <>
      <Nav navigation={navigation} />
      <WebsiteBanner {...websiteBanner} />
    </>
  )
}

export default Header
