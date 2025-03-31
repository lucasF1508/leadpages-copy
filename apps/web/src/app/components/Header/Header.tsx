import React from 'react'
import getClient from 'client'
import Nav from '@/components/Nav'

const Header = async () => {
  const client = getClient()
  const navigation = await client.fetch(
    `*[_type == 'navigation' && slug.current == 'primary-navigation'][0]`
  )

  return <Nav navigation={navigation} />
}

export default Header
