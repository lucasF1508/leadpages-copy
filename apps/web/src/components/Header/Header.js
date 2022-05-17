import React, { useState } from 'react'
import { styled } from '@design'
import { m } from 'framer-motion'
import useEventListener from '@hooks/useEventListener'
import useStickyHeader from '@hooks/useStickyHeader'
import NavBar from '@components/NavBar'
import Link from '@components/Link'
import NavDrawer, { NavDrawerTrigger } from '@components/NavDrawer'
import Logo from '@components/Logo'
import Flex from '@components/Flex'
import { HeaderBackground } from '../Header'

const $Header = styled(m.header, {
  h: '$headerHeight$s',
  pt: '$2',
  pb: '$2',
  w: '100%',
  position: 'sticky',
  top: '-$headerHeight$s',
  left: 0,
  z: '$header',
  box: {
    property: 'px',
  },

  '@<s': {
    overflow: 'hidden',
  },
})

const $HeaderInner = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'space-between',
  ai: 'center',
  h: '100%',
  w: '100%',
  mw: '$base',
  ml: 'auto',
  mr: 'auto',
})

const Header = ({ navigation: { menu = [], cta } = {} }) => {
  const { stickyMotionProps } = useStickyHeader()
  const [isNavOpen, setNavOpen] = useState(false)

  const toggleNavDrawer = () => {
    setNavOpen(!isNavOpen)
  }

  const handleClick = (event) => {
    event.preventDefault()
    toggleNavDrawer()
  }

  const handleKeyPress = (event) => {
    if (['Esc', 'Escape'].includes(event.key)) {
      toggleNavDrawer()
    }
  }

  useEventListener('keydown', (event) => {
    if (isNavOpen && event.key === 'Escape') {
      toggleNavDrawer()
    }
  })

  return (
    <>
      <HeaderBackground />
      <$Header {...stickyMotionProps}>
        <$HeaderInner>
          <Flex
            css={{
              jc: 'flex-start',
            }}
          >
            <Logo />
          </Flex>
          <NavBar menu={menu} />
          <Flex
            css={{
              jc: 'flex-end',
            }}
          >
            {cta && <Link {...cta} linkStyle="button" />}
          </Flex>
          <NavDrawerTrigger
            isNavOpen={isNavOpen}
            setNavOpen={setNavOpen}
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
          />
        </$HeaderInner>
      </$Header>
      <NavDrawer menu={menu} isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
    </>
  )
}

export default React.memo(Header)
