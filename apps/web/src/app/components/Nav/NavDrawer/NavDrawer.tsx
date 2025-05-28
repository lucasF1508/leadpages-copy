import React from 'react'
import { AnimatePresence, motion as m } from 'motion/react'
import { navStore } from '@/stores/navStore'
import NavDrawerMenu from './NavDrawerMenu'
 
interface NavDrawerProps {
  navigation: any
}

const NavDrawer = ({navigation}: NavDrawerProps) => {
  const isNavActive = navStore((state) => state.isNavActive)

  return (
    <AnimatePresence mode="wait">
      {isNavActive && (
        <m.div 
          animate={{ scaleY: 1, transition: { delay: 0.2 } }}
          className='bg-surface-neutral-dark absolute h-[calc(100dvh-var(--header-height)-2rem)] top-full -left-px -right-px origin-top rounded-b-lg border border-border-muted nav-break:hidden'
          exit={{ scaleY: 0, transition: { duration: 0.075 } }}
          initial={{ scaleY: 0 }}
          transition={{
            ease: 'easeOut',
          }}
        >
          <div className='flex flex-col overflow-scroll h-full'>
            <NavDrawerMenu navigation={navigation}/>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
 
export default NavDrawer