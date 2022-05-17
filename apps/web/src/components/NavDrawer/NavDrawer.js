import React, { useEffect, useState } from 'react'
import scrollLock from '@hooks/useScrollLock'
import { useRouter } from 'next/router'
import { styled } from '@design'
import { m } from 'framer-motion'
import Flex from '@components/Flex'
import {
  $Accordion,
  $AccordionHeader,
  $AccordionItem,
  $AccordionTrigger,
  $AccordionContent,
  $AccordionIcon,
} from '@components/Accordion'
import { NavBarColumn, NavBarColumnFeatured } from '@components/NavBar'
import { NavDrawerInner, NavDrawerLink } from '../NavDrawer'

const $NavDrawer = styled(m.div, {
  position: 'fixed',
  top: 0,
  right: 0,
  w: '100%',
  height: 'stretch',
  z: '$nav',
  o: 'hidden',
  bc: '$background',

  '&::before': {
    position: 'fixed',
    top: 0,
    left: 0,
    z: '$overlay',
    content: '',
    d: 'block',
    w: '100%',
    h: '$headerHeight$s',
    bc: '$background',
    boxShadow: '0 1px 0 0 $colors$border',
  },

  '@>navigationDesktop': {
    d: 'none',
  },
})

const NavDrawer = ({ isNavOpen, setNavOpen, menu }) => {
  if (!menu) return null

  const router = useRouter()
  const [drawerHeight, setDrawerHeight] = useState('100vh')

  useEffect(() => {
    const windowHeight = `${window.innerHeight}px`
    if (isNavOpen && windowHeight !== drawerHeight) {
      setDrawerHeight(windowHeight)
    }

    scrollLock(isNavOpen)
  }, [isNavOpen])

  useEffect(() => {
    if (isNavOpen) {
      setNavOpen(!isNavOpen)
    }
  }, [router.asPath])

  return (
    <$NavDrawer
      initial="hidden"
      animate={isNavOpen ? 'visible' : 'hidden'}
      transition={{ duration: 0.2 }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
          pointerEvents: 'all',
        },
        hidden: {
          opacity: 0,
          scale: 1.025,
          pointerEvents: 'none',
        },
      }}
      style={{ height: drawerHeight }}
    >
      <NavDrawerInner isNavOpen={isNavOpen}>
        {menu && (
          <$Accordion
            css={{
              pt: '$headerHeight$s',
              w: '100%',
              c: '$text',
              overflow: 'scroll',
            }}
            type="single"
            collapsible="true"
          >
            {menu.map(({ _key, link, columns }) => {
              if (columns?.length > 0) {
                return (
                  <$AccordionItem
                    key={_key}
                    value={_key}
                    data-columns={columns.length}
                    isNav
                  >
                    <$AccordionHeader isNav>
                      <$AccordionTrigger isNav>
                        {link?.label}
                        <$AccordionIcon />
                      </$AccordionTrigger>
                    </$AccordionHeader>
                    <$AccordionContent isNav>
                      <Flex
                        css={{
                          d: 'flex',
                          ff: 'column',
                          jc: 'flex-start',
                          ai: 'flex-start',
                          gap: '$4',
                          py: '$2',
                        }}
                      >
                        {columns.map((column) => {
                          if (column?._type === 'featuredColumn') {
                            return (
                              <NavBarColumnFeatured
                                {...column}
                                key={column?._key}
                                isMobile
                                isMultiColumns={columns.length > 1}
                              />
                            )
                          }

                          return (
                            <NavBarColumn
                              {...column}
                              key={column?._key}
                              isMobile
                              isMultiColumns={columns.length > 1}
                            />
                          )
                        })}
                      </Flex>
                    </$AccordionContent>
                  </$AccordionItem>
                )
              }

              return (
                <NavDrawerLink
                  key={_key}
                  css={{ fontWeight: '$medium', c: '$text' }}
                  {...link}
                />
              )
            })}
          </$Accordion>
        )}
      </NavDrawerInner>
    </$NavDrawer>
  )
}

export default NavDrawer
