import React from 'react'
import Nav from '@/components/Nav'
import WebsiteBanner from '@/components/WebsiteBanner'

export interface HeaderProps {
  navigation?: Record<string, unknown> | null
  websiteBanner?: Record<string, unknown> | null
}

const Header = ({ navigation, websiteBanner }: HeaderProps) => (
  <>
    <Nav navigation={navigation} />
    <WebsiteBanner {...(websiteBanner || {})} />
  </>
)

export default Header
