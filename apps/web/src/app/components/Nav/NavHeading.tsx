import React, { useState } from 'react'
import clsx from 'clsx'
import { motion as m } from 'motion/react'
import Link from '@/components/Link'
import { navStore } from '@/stores/navStore'

interface NavHeadingProps {
  data: any
  isMobile?: boolean
}

const NavHeading = ({ data }: NavHeadingProps) => {
  const { heading, links } = data || {}
  const link = links?.length > 0 && links[0]
  const [isHovered, setIsHovered] = useState(false)
  const setNavActive = navStore((state) => state.setNavActive)

  if (!heading && !link) return null

  return (
    <div
      className={clsx(
        'flex w-full items-center justify-between border-border-primary min-h-[2.25rem] nav-break:border-b pt-1.5 nav-break:pt-0'
      )}
    >
      <h3 className="cursor-default type-overline-xs">{heading}</h3>
      {link && (
        <div
          className="hover:text-button-text-secondary relative cursor-pointer self-stretch items-center hidden nav-break:flex flex-nowrap"
          onClick={() => setNavActive(false)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {link && <Link {...link} className="type-body-xs flex items-center gap-1" classNames={{icon: 'w-2 h-2'}}/>}
          <m.div
            animate={{ scaleX: isHovered ? 1 : 0 }}
            className="bg-button-surface-solid absolute left-0 bottom-0 h-[0.125rem] w-full origin-left"
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      )}
    </div>
  )
}

export default NavHeading
