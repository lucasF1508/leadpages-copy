import { styled } from '@design'
import Link from '@components/Link'
import { hasDropdown } from '@components/Nav/utils'
import { useState } from 'react'
import NavRow from '@components/Nav/NavRow'
import { MdKeyboardArrowDown as DisclosureIcon } from '@react-icons/all-files/md/MdKeyboardArrowDown'
import { m } from 'framer-motion'
import NavColumnFeatured from '../NavColumnFeatured'
import { navStore } from '../NavStore'

const $NavDrawerMenu = styled('div', {
  maxHeight: '100%',
  w: '100%',
  h: '100%',
  d: 'flex',
  flexDirection: 'column',
  jc: 'space-between',
})

const $NavDrawerItemMenu = styled('div', {
  w: '100%',
  boxSizing: 'border-box',
  px: '0.375rem',
  py: '$2',
})

const $NavDrawerItem = styled(m.div, {
  color: '$textAlt',
  cursor: 'pointer',
  typeSizes: 'lg',
  lh: '$l',
  px: '$2',
  d: 'flex',
  flexDirection: 'column',
  flex: 1,
})

const $NavDrawerItemLabel = styled('div', {
  d: 'flex',
  jc: 'space-between',
  ai: 'center',
  position: 'sticky',
  top: 0,
  background: '$white',
  zIndex: '$nav',
  px: '$1',
  py: '0.625rem',
  borderBottom: '1px solid $colors$lightGray3',
})

const $NavDrawerButtons = styled(m.div, {
  d: 'flex',
  jc: 'center',
  flexDirection: 'column',
  gap: '$3',
  p: '$3_5',

  '@>s': {
    d: 'none',
  },
})

const $DisclosureIcon = styled('div', {
  d: 'flex',
  ai: 'center',
  p: '$0_5',
  color: '$textAlt',
  transition: 'transform 0.3s ease',

  variants: {
    isCurrent: {
      true: {
        transform: 'rotate(-180deg)',
      },
    },
  },
})

const $NavDrawerPrimary = styled(m.div, {})

const $NavDrawerLink = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',

  '> a': {
    flex: 1,
  },
})

const navDrawerPrimaryVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  initial: { x: -5, opacity: 0 },
  animate: { opacity: 1, x: 0 },
}

const NavDrawerMenu = ({ menu, buttons }) => {
  const { setNavOpen } = navStore()
  const [current, setCurrent] = useState(null)

  const handleClick = (index) => {
    if (current === index) {
      setCurrent(null)
      return null
    }
    setCurrent(index)
    return null
  }

  return (
    <$NavDrawerMenu>
      <$NavDrawerPrimary
        variants={navDrawerPrimaryVariants}
        initial={'initial'}
        animate={'animate'}
        exit={'initial'}
      >
        {menu?.map(
          (
            { _key, link, rows: _rows, templateRows, menuColumnFeatured },
            index
          ) => {
            const { items } = menuColumnFeatured || {}
            const rows = _rows || templateRows

            if (hasDropdown({ link, rows })) {
              const { label } = link
              return (
                <$NavDrawerItem
                  key={_key}
                  onClick={() => handleClick(index)}
                  variants={itemVariants}
                  transition={{ duration: 0.2 }}
                >
                  <$NavDrawerItemLabel>
                    <div>{label}</div>
                    <$DisclosureIcon isCurrent={current === index}>
                      <DisclosureIcon size="1.5rem" />
                    </$DisclosureIcon>
                  </$NavDrawerItemLabel>
                  {index === current && (
                    <$NavDrawerItemMenu>
                      {rows.map(({ _key: __key, ...rest }) => (
                        <NavRow key={__key} isMobile {...rest} />
                      ))}
                      {items && <NavColumnFeatured items={items} />}
                    </$NavDrawerItemMenu>
                  )}
                </$NavDrawerItem>
              )
            }

            return (
              <$NavDrawerItem
                key={_key}
                variants={itemVariants}
                transition={{ duration: 0.2 }}
                onClick={() => setNavOpen(false)}
              >
                <$NavDrawerItemLabel>
                  <Link {...link} />
                </$NavDrawerItemLabel>
              </$NavDrawerItem>
            )
          }
        )}
      </$NavDrawerPrimary>
      <$NavDrawerButtons
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.2, delay: menu?.length && menu.length * 0.1 }}
      >
        {buttons.map(({ _key, url, ...rest }) => (
          <$NavDrawerLink key={_key} onClick={() => setNavOpen(false)}>
            <Link url={url} {...rest} />
          </$NavDrawerLink>
        ))}
      </$NavDrawerButtons>
    </$NavDrawerMenu>
  )
}

export default NavDrawerMenu
