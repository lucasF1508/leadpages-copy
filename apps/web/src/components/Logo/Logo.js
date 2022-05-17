import React from 'react'
import { styled } from '@design'
import NextLink from 'next/link'
import Image from '@components/Image'
import logo from '@images/logo.svg'

export const $Logo = styled('a', {
  d: 'flex',
  ff: 'row wrap',
  jc: 'flex-start',
  ai: 'center',
  w: '$space$20',
  cursor: 'pointer',
})

const Logo = () => (
  <NextLink href="/" passHref>
    <$Logo>
      <Image image={logo} type="static" />
    </$Logo>
  </NextLink>
)

export default Logo
