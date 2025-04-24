import React from 'react'
import { draftMode } from 'next/headers'
import Nav from '@/components/Nav'
import { getNavigation } from './getNavigation'

const Header = async () => {
  const navigation = await getNavigation(draftMode().isEnabled)

  return <Nav navigation={navigation} />
}

export default Header
