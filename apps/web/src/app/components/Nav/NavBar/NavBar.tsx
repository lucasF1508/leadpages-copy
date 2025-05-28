'use client'

import React, {useEffect, useRef} from 'react'
import clsx from 'clsx'
import {
  Item as NavBarPrimitiveItem,
  List as NavBarPrimitiveList,
  Root as NavBarPrimitiveRoot,
} from '@radix-ui/react-navigation-menu'
import { motion as m } from 'motion/react'
import { usePathname } from 'next/navigation'
import useStickyHeader from '@/hooks/useStickyHeader'
import { navStore } from '@/stores/navStore'
import NavBarViewport from '../NavBar/NavBarViewport'
import Link from '@/components/Link'
import { LinkProps } from '@/types'
import NavDrawerTrigger from '@/components/Nav/NavDrawer/NavDrawerTrigger'
import NavDrawer from '@/components/Nav/NavDrawer'
import evalBreakpoint from '@/lib/utils/evalBreakpoint'
import isEmpty from 'lodash/isEmpty'
import { useShallow } from 'zustand/react/shallow'
import NavLogo from '@/components/Nav/NavLogo'
import { NavItemUnderline } from './NavBarMenu'

interface NavBarProps {
  children?: React.ReactNode
  navigation: any
}

const hideNavOnScrollDown = [
  'pricing',
  'templates',
  'website-templates',
  'blog',
  'landing-pages-guide',
  'conversion-optimization-guide',
  'lead-generation-guide',
]

const NavBar = ({ children, navigation }: NavBarProps) => {
  const asPath = usePathname()
  const navRef = useRef<HTMLDivElement>(null)

  const { buttons } = navigation || {}  

  const { dropdownSlug, hideNav, isNavActive, setDropdownSlug, setNavActive, isSticky = false } = navStore(
    useShallow((state) => ({ 
      dropdownSlug: state.dropdownSlug,
      hideNav: state.hideNav,
      isNavActive: state.isNavActive,
      setDropdownSlug: state.setDropdownSlug,
      setNavActive: state.setNavActive,
      setIsSticky: state.setIsSticky,
      isSticky: state.isSticky,
    })),
  )

  const { showHeader, stickyMotionProps } = useStickyHeader({
    offsetTop: 10,
  })

  const shouldHide = asPath
    ?.split('/')
    ?.some((path) => hideNavOnScrollDown.includes(path))

  const isTransparent = !isSticky && !isNavActive
  const squareCorners = false

  const handleValueChange = (value: string) => {
    setDropdownSlug(value)
  }

  const handlePointerEnter = () => {
    const isDesktop = evalBreakpoint('>nav-break')
    if (isDesktop) {
      setNavActive(true)
    }
  }

  const handlePointerLeave = () => {
    const isDesktop = evalBreakpoint('>nav-break')
    if (isDesktop) {
      setNavActive(false)
    }
  }

  useEffect(() => {
    setDropdownSlug('')
    setNavActive(false)
  }, [asPath])

  return (
    <m.div
      animate={{
        y:
          shouldHide && (hideNav || !showHeader)
            ? 'calc((var(--header-height) + 1.25rem) * -1)'
            : 0,
      }}
      className={
        clsx(
          'z-nav sticky top-0 p-[0.625rem] group/nav',
          !isEmpty(dropdownSlug) && 'scroll-lock'
        )}
      transition={stickyMotionProps.transition}
    >
      <div
        className={clsx(
          'text-body mx-auto flex max-w-screen-xl items-center rounded-md transition-all border max-nav-break:bg-surface-neutral-dark/90 group-hover/nav:max-nav-break:bg-surface-neutral-dark',
          isTransparent
            ? 'bg-transparent shadow-none border-transparent'
            : 'bg-surface-neutral-dark nav-break:bg-surface-neutral-dark/90 shadow-md border-border-muted backdrop-blur-xl',
          isNavActive && 'max-nav-break:rounded-b-none max-nav-break:bg-surface-neutral-dark',
          squareCorners && 'rounded-b-none'
        )}
        ref={navRef}
      >
        <NavBarPrimitiveRoot
          className="relative w-screen"
          onValueChange={handleValueChange}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          value={dropdownSlug}
        >
          <NavBarPrimitiveList 
            className="min-h-header-height md:min-h-header-height.md flex justify-between list-none items-center py-1.5 pr-1.5 pl-[1.875rem] gap-3" 
            onBlur={handlePointerLeave}
            onFocus={handlePointerEnter}
          >
            <NavBarPrimitiveItem>
              <Link 
                url="/" 
                condition='internal' 
                linkStyle="none" 
              >
                <NavLogo />
              </Link>
            </NavBarPrimitiveItem>
            <div className='max-nav-break:hidden flex items-center gap-3 self-stretch'>{children}</div>
            <div className="ml-auto hidden items-center justify-center gap-3 sm:flex self-stretch mr-1.5">
              {buttons?.map(({ _key, url, ...rest }: LinkProps & {_key: string}, i: number) => {
                const isPricing =
                  asPath?.includes('pricing') && url === '/pricing'
                const buttonStyle = isTransparent ? 'button-outline' : 'button-solid'

                return isPricing ? (
                  null
                ) : (
                  <div className="gap-1.5 whitespace-nowrap group/trigger h-full flex justify-center flex-col relative" key={_key}>
                    <Link url={url} {...rest} linkStyle={i === 0 ? 'text' : buttonStyle}/>
                    {i !== buttons.length - 1 && <NavItemUnderline />}
                  </div>
                )
              })}
            </div>
            <div className='cursor-pointer nav-break:hidden'>
              <NavDrawerTrigger />
            </div>
            {/* TODO: Add simplified header feature, not relevant for homepage [initial implimentation] */}
          </NavBarPrimitiveList>
          <NavDrawer navigation={navigation} />
          <NavBarViewport />
        </NavBarPrimitiveRoot>
      </div>
    </m.div>
  )
}

export default NavBar
