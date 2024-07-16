import { styled, keyframes } from '@design'
import {
  Trigger as NavBarPrimitiveTrigger,
  Content as NavBarPrimitiveContent,
  Item as NavBarPrimitiveItem,
} from '@radix-ui/react-navigation-menu'
import Link from '@components/Link'
import { FaCaretDown as Icon } from '@react-icons/all-files/fa/FaCaretDown'
import { hasDropdown } from '@components/Nav/utils'
import NavColumnFeatured from '@components/Nav/NavColumnFeatured'
import NavRow from '@components/Nav/NavRow'
import NavColumnColumnCarousel from '@components/Nav/NavColumnCarousel'

const enterFromRight = keyframes({
  from: { transform: 'translateX(12.5rem)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-12.5rem)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(12.5rem)', opacity: 0 },
})

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-12.5rem)', opacity: 0 },
})

const $NavBarTrigger = styled(NavBarPrimitiveTrigger, {
  all: 'unset',
  display: 'flex',
  ai: 'center',
  jc: 'center',
  gap: '$0_5',
  cursor: 'pointer',

  variants: {
    isDark: {
      true: {
        color: '$white',
      },
    },
  },
})

const $NavBarContentRows = styled('div', {
  flex: 1,

  '@>navigationDesktopAlt': {
    margin: '$2_5',
  },
})

const $NavBarContent = styled(NavBarPrimitiveContent, {
  p: '1.875rem',
  position: 'absolute',
  top: 0,
  left: 0,
  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  boxSizing: 'border-box',
  w: '100%',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight },
})

const $NavBarContentInner = styled('ul', {
  m: 0,
  listStyle: 'none',
  d: 'flex',
  flexDirection: 'column',
  gap: '$3',

  variants: {
    layout: {
      primary: {
        '@media only screen and (min-width: 600px)': {
          width: '100%',
        },
      },
      templates: {
        '@media only screen and (min-width: 600px)': {
          width: '100%',
        },
      },
    },
    featuredColumnPosition: {
      left: {
        '@>navigationDesktopAlt': {
          flexDirection: 'row-reverse',
        },
      },
      right: {
        '@>navigationDesktopAlt': {
          flexDirection: 'row',
        },
      },
    },
    isTemplateRow: {
      true: {
        '@>993': {
          flexDirection: 'row-reverse',
        },
      },
    },
  },
  defaultVariants: {
    layout: 'primary',
  },
})

const $Indicator = styled('div', {
  position: 'absolute',
  w: '100%',
  backgroundColor: '$primary',
  h: 3,
  bottom: '-$1_5',
  transition: 'transform $snappy',
  transform: 'scaleX(0)',
})

const $NavBarItem = styled(NavBarPrimitiveItem, {
  d: 'none',
  transition: 'all 0.2s ease-in-out',
  typeSizes: 'base',
  lh: '$l',
  fontWeight: '$normal',
  position: 'relative',
  color: '$textAlt',

  '@>m': {
    display: 'flex',
  },

  '&:hover': {
    [$Indicator]: {
      transform: 'scaleX(1)',
    },
  },

  variants: {
    currentDropdown: {
      true: {
        color: '$primary',
      },
    },
  },
})

const $Icon = styled(Icon, {
  w: '$space$1_5',
  h: '$space$1_5',
  transition: 'all 0.2s ease-in-out',

  variants: {
    currentDropdown: {
      true: {
        transform: 'scale(-1, -1)',
      },
    },
  },
})

const NavBarMenu = ({
  menu,
  currentDropdown: _currentDropdown,
  isTransparent,
}) => (
  <>
    {menu?.map(
      (
        {
          _key,
          link,
          rows: _rows,
          templateRows,
          dropdownType,
          menuColumnFeatured,
          templateBackgroundImage,
          templateCarouselIdleImages,
        },
        index
      ) => {
        const rows = _rows || templateRows
        const { items, position = 'right' } = menuColumnFeatured || {}
        const { label } = link || {}
        const currentDropdown = _currentDropdown === `trigger-${index}`

        if (hasDropdown({ link, rows })) {
          return (
            <$NavBarItem
              value={`trigger-${index}`}
              key={_key}
              currentDropdown={currentDropdown}
            >
              <$Indicator />
              <$NavBarTrigger isDark={isTransparent}>
                {label}
                <$Icon currentDropdown={currentDropdown} />
              </$NavBarTrigger>

              <$NavBarContent>
                <$NavBarContentInner
                  isTemplateRow={dropdownType === 'templates'}
                  layout={dropdownType}
                  className={dropdownType}
                  featuredColumnPosition={
                    dropdownType === 'templates' ? 'left' : position
                  }
                >
                  <$NavBarContentRows>
                    {rows.map(({ _key: __key, ...rest }) => (
                      <NavRow
                        isTemplateRow={dropdownType === 'templates'}
                        key={__key}
                        {...rest}
                      />
                    ))}
                  </$NavBarContentRows>
                  {items && <NavColumnFeatured items={items} />}
                  {dropdownType === 'templates' && (
                    <NavColumnColumnCarousel
                      rows={rows}
                      templateBackgroundImage={templateBackgroundImage}
                      templateCarouselIdleImages={templateCarouselIdleImages}
                    />
                  )}
                </$NavBarContentInner>
              </$NavBarContent>
            </$NavBarItem>
          )
        }

        return (
          <$NavBarItem key={_key} value={'no-dropdown'}>
            <$Indicator />
            <$NavBarTrigger isDark={isTransparent}>
              <Link {...link} />
            </$NavBarTrigger>
          </$NavBarItem>
        )
      }
    )}
  </>
)

export default NavBarMenu
