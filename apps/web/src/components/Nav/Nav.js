import React, { useEffect } from 'react'
import { darkTheme, keyframes, styled } from '@design'
import {
  Item as NavBarPrimitiveItem,
  Link as NavBarPrimitiveLink,
  List as NavBarPrimitiveList,
  Root as NavBarPrimitiveRoot,
  Viewport as NavBarPrimitiveViewport,
} from '@radix-ui/react-navigation-menu'
import { AnimatePresence, m } from 'framer-motion'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import NavLogo from '@/components/Nav/NavLogo'
import { navStore } from '@/stores/navStore'
import useEventListener from '@hooks/useEventListener'
import useMediaQuery from '@hooks/useMediaQuery'
import scrollLock from '@hooks/useScrollLock'
import useStickyHeader from '@hooks/useStickyHeader'
import Link from '@components/Link'
import NavBarMenu from '@components/Nav/NavBar/NavBarMenu'
import NavDrawer, { NavDrawerTrigger } from '@components/Nav/NavDrawer'
import { navStore as useLegacyNavStore } from '@components/Nav/NavStore'

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
  z: '$header',
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
  '> div': {
    height: '100%',
    
    '> div': {
      position: 'absolute',
      width: '9.5rem',
      top: 0,
      bottom: 0,
      left: 0,
      d: 'flex',
      jc: 'center',

      'svg *': {
        fill: 'currentColor',
      }
    },
  },

  variants: {
    lightLogo: {
      true: {
        '> div': {
          '> div': {
            color: '$white',
          },
        },
      },
      false: {
        '> div': {
          '> div': {
            color: '$text',
          },
        },
      },
    },
  },
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
  maxWidth: '9.125rem',
  position: 'relative',
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

export const navOffset = 82

const hideNavOnScrollDown = [
  'pricing',
  'templates',
  'website-templates',
  'blog',
  'landing-pages-guide',
  'conversion-optimization-guide',
  'lead-generation-guide',
  'product',
]

const NavBar = ({
  navigation,
  darkHero,
  simplifiedHeader = false,
  isPricingMenu = false,
  isStartPageHeader = false,
  isPreviewPage = false,
}) => {
  const { menu, buttons } = navigation || {}
  const { isNavOpen, dropdownSlug, setDropdownSlug, setNavOpen, hideNav } =
    useLegacyNavStore()
  const setIsSticky = navStore((state) => state.setIsSticky)
    
  const { isSticky, showHeader, stickyMotionProps } = useStickyHeader({
    offsetTop: 10,
  })
  const { asPath } = useRouter()

  const isTransparent = !isSticky && !isNavOpen
  const isDesktopNav = useMediaQuery('(min-width: 960px)')

  const shouldHide = asPath
    .split('/')
    .some((path) => hideNavOnScrollDown.includes(path))

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

  useEffect(() => {
    setIsSticky(isSticky)
  }, [isSticky])

  if (isPreviewPage) return null

  return (
    <>
      <AnimatePresence>
        {isNavOpen && (
          <$NavBarOverlay
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <$NavBar
        animate={{
          y: shouldHide && (hideNav || !showHeader) ? navOffset * -1 : 0,
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
                <$NavBarLink 
                  css={{
                    display: 'block',
                    height: '100%',
                    transitionProperty: 'width',
                    minWidth: isSticky ? '2rem' : '9.5rem',
                    '> div': {
                      transitionDuration: isSticky ? '0.4s': '0.3s',
                      transitionDelay: isSticky ? '0.5s' : '0s',                      
                      width: isSticky ? '2rem' : '9.5rem',
                    }
                  }} 
                  href="/" 
                  legacyBehavior
                  lightLogo={darkHero && !isSticky && !isNavOpen}
                >
                  <NavLogo darkHero={darkHero} />
                </$NavBarLink>
              </$NavBarLogo>
              {!isPricingMenu && !isStartPageHeader && !simplifiedHeader && (
                <NavBarMenu
                  currentDropdown={dropdownSlug}
                  isTransparent={darkHero && !isSticky && !isNavOpen}
                  menu={menu}
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
                      <$NavBarButton 
                        css={{
                          mr: asPath.includes('pricing') && '$3',
                        }} 
                        key={_key}
                      >
                        <Link
                          css={{
                            color: linkStyle === 'text' && '$textAlt',
                            px: linkStyle !== 'text' && '$3',
                          }}
                          linkStyle={!!linkStyle ? linkStyle === 'button' ? 'ghost' : linkStyle : 'ghost'}
                          url={url}
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
                  isDark={darkHero && !isSticky && !isNavOpen && darkHero}
                  isNavOpen={isNavOpen}
                  setNavOpen={setNavOpen}
                />
              )}
            </$NavBarList>

            <$ViewportPosition>
              <$NavBarViewport />
            </$ViewportPosition>

            <NavDrawer buttons={buttons} isNavOpen={isNavOpen} menu={menu} />
          </$NavBarRoot>
        </$NavBarContents>
      </$NavBar>
    </>
  )
}

export default NavBar
