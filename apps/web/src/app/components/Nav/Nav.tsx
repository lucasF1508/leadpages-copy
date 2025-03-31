'use client'

import React from 'react'
import Bar from '@/components/Nav/NavBar/NavBar'
import Menu from '@/components/Nav/NavBar/NavBarMenu'
import Overlay from '@/components/Nav/NavOverlay'
import { useNavStore } from '@/state/navStore'

const Nav = ({ navigation }: { navigation: any }) => {
  const { isNavActive } = useNavStore()
  const { menu } = navigation || {}
  return (
    <>
      <Overlay isNavActive={isNavActive} />
      <Bar navigation={navigation}>{menu && <Menu menu={menu} />}</Bar>
    </>
  )
}

export default Nav
