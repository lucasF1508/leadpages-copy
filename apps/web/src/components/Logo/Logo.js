import React from 'react'
import { styled } from '@design'
import logo from '@images/logo.svg'
import NextLink from 'next/link'
import Image from '@components/Image'

export const $Logo = styled('a', {
  d: 'flex',
  ff: 'row wrap',
  jc: 'flex-start',
  ai: 'center',
  w: '$space$20',
  cursor: 'pointer',
})

const Logo = () => (
  <NextLink href="/" legacyBehavior passHref>
    <$Logo>
      <Image image={logo} type="static" />
    </$Logo>
  </NextLink>
)

export default Logo
