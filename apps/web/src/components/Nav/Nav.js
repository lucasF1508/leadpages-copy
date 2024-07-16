import React, { useEffect } from 'react'
import {
  Item as NavBarPrimitiveItem,
  List as NavBarPrimitiveList,
  Root as NavBarPrimitiveRoot,
  Link as NavBarPrimitiveLink,
  Viewport as NavBarPrimitiveViewport,
} from '@radix-ui/react-navigation-menu'
import { styled, keyframes, darkTheme } from '@design'
import Link from '@components/Link'
import scrollLock from '@hooks/useScrollLock'
import { AnimatePresence, m } from 'framer-motion'
import NavBarMenu from '@components/Nav/NavBar/NavBarMenu'
import NavDrawer, { NavDrawerTrigger } from '@components/Nav/NavDrawer'
import { isEmpty } from 'lodash'
import useStickyHeader from '@hooks/useStickyHeader'
import useMediaQuery from '@hooks/useMediaQuery'
import { useNavStore } from '@components/Nav/NavStore'
import useEventListener from '@hooks/useEventListener'
import { useRouter } from 'next/router'
import NavLogo from './NavLogo'

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
})

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
})

const $NavBar = styled(m.div, {
  position: 'sticky',
  top: '0.625rem',
  z: '$flyout',
  mx: '0.625rem',
})

const $NavBarContents = styled('div', {
  d: 'flex',
  ai: 'center',
  maxWidth: '$extended',
  mx: 'auto',
  background: '$white',
  borderRadius: '0.75rem',
  boxShadow: '$nav',
  transition: 'all $snappy',

  variants: {
    isTransparent: {
      true: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
    squareCorners: {
      true: {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
  },
})

const $NavBarRoot = styled(NavBarPrimitiveRoot, {
  position: 'relative',
  d: 'flex',
  jc: 'start',
  w: '100vw',
  flyout: 1,

  '& > div:first-child': {
    w: '100%',
  },
})

const $NavBarList = styled(NavBarPrimitiveList, {
  d: 'flex',
  jc: 'space-between',
  listStyle: 'none',
  margin: 0,
  p: '$1_5',
  minHeight: 'calc($headerHeight$s - $space$3)',

  '@>m': {
    gap: '$4',
  },
})

const $NavBarLink = styled(NavBarPrimitiveLink, {
  all: 'unset',
  d: 'flex',
  ai: 'center',
  jc: 'center',
})

const $NavBarViewport = styled(NavBarPrimitiveViewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  w: '100%',
  backgroundColor: 'white',
  borderRadius: 12,
  overflow: 'scroll',
  boxShadow: '$nav',
  height: 'var(--radix-navigation-menu-viewport-height)',
  maxHeight: 'calc(100vh - $headerHeight$s - 1.875rem)',
  transition: 'width, height, $snappy',
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  '&:has(> * > .primary)': {
    mw: 1154,
  },
  '&:has(> * > .templates)': {
    mw: 1275,
  },
})

const $NavBarLogo = styled(NavBarPrimitiveItem, {
  d: 'flex',
})

const $ViewportPosition = styled('div', {
  position: 'absolute',
  d: 'flex',
  jc: 'start',
  w: '100%',
  bottom: '0',
  transform: 'translateY(100%)',
  left: 0,
  perspective: '125rem',
})

const $NavBarButtons = styled('div', {
  ml: 'auto',
  d: 'none',
  ai: 'center',
  jc: 'center',
  gap: '$3',

  '@>s': {
    d: 'flex',
  },
})

const $Indicator = styled(m.div, {
  position: 'absolute',
  w: '100%',
  backgroundColor: '$primary',
  h: 3,
  bottom: '-$1_5',
  transition: 'transform $snappy',
  transform: 'scaleX(0)',
  transformOrigin: 'left',
})

const $NavBarButton = styled('div', {
  minWidth: 'unset !important',
  fontSize: '$space$2',
  display: 'flex',
  height: '100%',
  position: 'relative',

  '&:hover': {
    [$Indicator]: {
      transform: 'scaleX(1)',
    },
  },
})

const $NavBarOverlay = styled(m.div, {
  position: 'fixed',
  inset: 0,
  zIndex: '$flyout',
  backdropFilter: 'blur(5px)',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

const NavBar = ({
  navigation,
  darkHero,
  simplifiedHeader = false,
  isPricingMenu = false,
  isStartPageHeader = false,
  isPreviewPage = false,
}) => {
  if (isPreviewPage) return null

  const { menu, buttons } = navigation || {}
  const { isNavOpen, dropdownSlug, setDropdownSlug, setNavOpen, hideNav } =
    useNavStore()
  const { isSticky, showHeader, stickyMotionProps } = useStickyHeader({
    offsetTop: 10,
  })
  const { asPath } = useRouter()
  const hideOnScroll = asPath.includes('blog')

  const isTransparent = !isSticky && !isNavOpen
  const isDesktopNav = useMediaQuery('(min-width: 960px)')
  const visibleSidebar = useMediaQuery('(min-width: 1400px)')

  const handleValueChange = (value) => {
    setDropdownSlug(value)
    setNavOpen(!isEmpty(value))
  }

  useEffect(() => {
    scrollLock(isNavOpen)
    if (!isNavOpen && isDesktopNav) {
      setDropdownSlug('')
    }
  }, [isNavOpen])

  useEventListener('resizeEnd', () => {
    if (isDesktopNav) {
      setNavOpen(false)
    }
  })

  return (
    <>
      <AnimatePresence>
        {isNavOpen && (
          <$NavBarOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <$NavBar
        animate={{
          y:
            hideNav || (hideOnScroll && !showHeader && !visibleSidebar)
              ? -90
              : 0,
        }}
        transition={stickyMotionProps?.transition}
      >
        <$NavBarContents
          isTransparent={isTransparent}
          squareCorners={!isDesktopNav && isNavOpen}
        >
          <$NavBarRoot onValueChange={handleValueChange} value={dropdownSlug}>
            <$NavBarList>
              <$NavBarLogo>
                <$NavBarLink href="/">
                  <NavLogo isSticky={isSticky} darkHero={darkHero} />
                </$NavBarLink>
              </$NavBarLogo>
              {!isPricingMenu && !isStartPageHeader && !simplifiedHeader && (
                <NavBarMenu
                  menu={menu}
                  currentDropdown={dropdownSlug}
                  isTransparent={darkHero && !isSticky && !isNavOpen}
                />
              )}
              {!isPricingMenu && buttons && buttons.length > 0 && (
                <$NavBarButtons
                  className={darkHero && !isSticky && !isNavOpen && darkTheme}
                >
                  {buttons.map(({ _key, linkStyle, url, ...rest }) => {
                    const isPricing =
                      asPath.includes('pricing') && url === '/pricing'

                    return isPricing ? (
                      <></>
                    ) : (
                      <$NavBarButton key={_key} linkStyle={linkStyle}>
                        <Link
                          linkStyle={linkStyle}
                          url={url}
                          css={{
                            color: linkStyle === 'text' && '$textAlt',
                            px: linkStyle !== 'text' && '$3',
                          }}
                          {...rest}
                        />
                        {linkStyle === 'text' && <$Indicator />}
                      </$NavBarButton>
                    )
                  })}
                </$NavBarButtons>
              )}
              {!simplifiedHeader && (
                <NavDrawerTrigger
                  isNavOpen={isNavOpen}
                  setNavOpen={setNavOpen}
                  isDark={darkHero && !isSticky && !isNavOpen && darkHero}
                />
              )}
            </$NavBarList>

            <$ViewportPosition>
              <$NavBarViewport />
            </$ViewportPosition>

            <NavDrawer isNavOpen={isNavOpen} menu={menu} buttons={buttons} />
          </$NavBarRoot>
        </$NavBarContents>
      </$NavBar>
    </>
  )
}

export default NavBar
