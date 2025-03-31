'use client'

import React from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'motion/react'

interface NavOverlayProps {
  isNavActive: boolean
}
const NavOverlay = ({ isNavActive }: NavOverlayProps) => (
  <AnimatePresence>
    {isNavActive && (
      <motion.div
        animate={{ opacity: 1 }}
        className={clsx(
          'z-header-background fixed inset-0 bg-black/5 backdrop-blur-sm'
        )}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
      />
    )}
  </AnimatePresence>
)

export default NavOverlay
