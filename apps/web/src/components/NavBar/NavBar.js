import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { styled } from '@design'
import {
  Root as NavBarPrimitiveRoot,
  List as NavBarPrimitiveList,
  Item as NavBarPrimitiveItem,
  Content as NavBarPrimitiveContent,
} from '@radix-ui/react-navigation-menu'
import {
  enterFromRight,
  enterFromLeft,
  exitToRight,
  exitToLeft,
} from './NavBarAnimations'
import NavBarIndicator from './NavBarIndicator'
import NavBarViewport from './NavBarViewport'
import NavBarTrigger from './NavBarTrigger'
import NavBarLink from './NavBarLink'
import { NavBarColumn, NavBarColumnFeatured } from './NavBarColumn'

const $NavBar = styled(NavBarPrimitiveRoot, {
  z: '$content',
  alignSelf: 'center',
  f: '0 0 auto',

  '@<navigationDesktop': {
    display: 'none',
  },
})

const $NavBarList = styled(NavBarPrimitiveList, {
  position: 'relative',
  d: 'flex',
  ai: 'center',
  jj: 'center',
  listStyle: 'none',
  h: '100%',
  ml: 0,
  gap: '$3',
})

const $NavBarItem = styled(NavBarPrimitiveItem, {
  position: 'relative',
  d: 'flex',
  ff: 'row nowrap',
  ai: 'center',
  h: '100%',
})

const $NavBarDropdown = styled(NavBarPrimitiveContent, {
  position: 'absolute',
  top: 0,
  left: 0,
  w: 'auto',
  bc: '$backgroundContrast',

  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
})

const $NavBarDropdownInner = styled('div', {
  d: 'flex',
  ai: 'stretch',
  jc: 'space-between',
  p: '$4 $4 $5',
  gap: '$4',

  '@media only screen and (min-width: 600px)': {
    w: 'auto',
  },
})

const NavBar = ({ menu, translateViewportInitial = '0px' }) => {
  const { asPath } = useRouter()
  const [translateViewport, setTranslateViewport] = useState(
    translateViewportInitial
  )

  const [dropdownSlug, setDropdownSlug] = useState('')
  const [translateIndicator, setTranslateIndicator] = useState('0px')
  const ref = useRef()

  const resetTranslateViewport = () => {
    if (translateViewport !== translateViewportInitial) {
      setTranslateViewport(translateViewportInitial)
    }
  }

  const updateTranslateViewport = (targetLeft, triggerWidth) => {
    const center = window.innerWidth / 2
    const value = targetLeft - center + triggerWidth / 2

    const translateX = `${value}px`
    if (translateX !== translateViewport) {
      setTranslateViewport(translateX)
    }
  }

  const handleValueChange = (value) => {
    setDropdownSlug(value)

    if (!value) {
      return
    }

    const trigger = ref.current.querySelector(`[id*="trigger-${value}"]`)

    if (!trigger) return

    const { left: navLeft } = ref.current.getBoundingClientRect()
    const { left: triggerLeft, width: triggerWidth } =
      trigger.getBoundingClientRect()

    if (trigger.dataset?.columns === '1') {
      updateTranslateViewport(triggerLeft, triggerWidth)
    } else {
      resetTranslateViewport()
    }

    setTranslateIndicator(`${triggerLeft - navLeft + triggerWidth}px`)
  }

  useEffect(() => {
    if (dropdownSlug) {
      setDropdownSlug(false)
    }
  }, [asPath])

  return (
    <$NavBar ref={ref} onValueChange={handleValueChange} value={dropdownSlug}>
      <$NavBarList>
        {menu.map(({ _key, link, columns = [] }, index) => {
          if (columns && columns.length > 0) {
            return (
              <$NavBarItem key={_key} value={`trigger-${index}`}>
                <NavBarTrigger label={link?.label} columns={columns.length} />
                <$NavBarDropdown>
                  <$NavBarDropdownInner data-columns={columns.length}>
                    {columns.map((column) => {
                      if (column?._type === 'featuredColumn') {
                        return (
                          <NavBarColumnFeatured
                            key={column?._key}
                            {...column}
                          />
                        )
                      }

                      return <NavBarColumn key={column?._key} {...column} />
                    })}
                  </$NavBarDropdownInner>
                </$NavBarDropdown>
              </$NavBarItem>
            )
          }

          return (
            <$NavBarItem key={_key}>
              <NavBarLink {...link} />
            </$NavBarItem>
          )
        })}

        <NavBarIndicator
          translateIndicator={translateIndicator}
          navIsOpen={!!dropdownSlug}
        />
      </$NavBarList>
      <NavBarViewport translateViewport={translateViewport} />
    </$NavBar>
  )
}

export default React.memo(NavBar)
