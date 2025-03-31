import React from 'react'
import clsx from 'clsx'
import { Viewport as NavBarPrimitiveViewport } from '@radix-ui/react-navigation-menu'

const NavBarViewport = () => (
  <div
    className={clsx(
      'absolute bottom-0 left-0 flex w-full translate-y-full transform justify-start [perspective:125rem] max-w-[69.25rem] has-[.templates]:max-w-[78.875rem] transition-all duration-200'
    )}
  >
    <NavBarPrimitiveViewport
      className={clsx(
        'shadow-dropdown w-full relative mt-1.5 origin-center overflow-scroll rounded-lg bg-surface-neutral-dark/90',
        'h-[var(--radix-navigation-menu-viewport-height)] max-h-[calc(100vh-var(--header-height)-2.625rem)] min-h-[18.75rem]',
        'data-[state=closed]:animate-[scale-out_200ms_ease] data-[state=open]:animate-[scale-in_200ms_ease]'
      )}
    />
  </div>
)

export default NavBarViewport
