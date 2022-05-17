import React, { useState } from 'react'
import { styled, keyframes } from '@design'
import * as Primitives from '@radix-ui/react-dropdown-menu'
import Link from '@components/Link'

const fadeInUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(1.25rem)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const fadeOutDown = keyframes({
  '0%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(1.25rem)' },
})

const $DropdownMenu = styled(Primitives.Root, {})

const $DropdownMenuTrigger = styled(Primitives.Trigger, {})

const $DropdownMenuContent = styled(Primitives.Content, {
  bs: '$m',
  transformOrigin: 'var(--radix-dropdown-menu-content-transform-origin)',

  '&[data-state=open]': {
    animation: `${fadeInUp} 300ms ease-out`,
  },

  '&[data-state=closed]': {
    animation: `${fadeOutDown} 300ms ease-out`,
  },
})

const $DropdownMenuItem = styled(Primitives.Item, {
  py: '$2',
  px: '$4',
  bb: '1px solid $colors$grey5',
  cursor: 'pointer',
  transition: 'color 150ms',

  '&:hover': {
    c: '$primary',
  },

  '&:last-child': {
    bb: 'unset',
  },
})

const DropdownMenu = ({ menu, Trigger, css: orgCss = {}, ...props }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { item: itemCss, ...css } = orgCss

  const openMenu = () => {
    setIsHovered(true)
  }

  const closeMenu = () => {
    setIsHovered(false)
  }

  return (
    <$DropdownMenu modal={false} open={isHovered} {...props}>
      <$DropdownMenuTrigger onMouseEnter={openMenu}>
        {Trigger && <Trigger />}
      </$DropdownMenuTrigger>
      <$DropdownMenuContent
        onInteractOutside={closeMenu}
        onMouseLeave={closeMenu}
        css={css}
      >
        {menu &&
          menu.map(({ _key, ...link }) => (
            <$DropdownMenuItem key={_key} css={itemCss}>
              <Link {...link} css={{ type: 'baseType', w: '100%' }} />
            </$DropdownMenuItem>
          ))}
      </$DropdownMenuContent>
    </$DropdownMenu>
  )
}

export default DropdownMenu
