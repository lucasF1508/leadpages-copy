import type { CategoryType } from '@/types'
import React from 'react'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { scrollToHash } from '@/hooks/useScrollToHash'

export interface IntegrationSidebarProps {
  activeIndex: number
  categories: CategoryType[]
  className?: string
}

const IntegrationSidebar = ({
  activeIndex,
  categories,
  className,
}: IntegrationSidebarProps) => {
  const handleClick = ({ e, hash }: { e: React.MouseEvent; hash?: string }) => {
    e.preventDefault()
    if (!hash) return

    scrollToHash({
      hash,
      offset: 120,
    })
  }

  if (!categories?.length) return null

  return (
    <aside
      className={clsx(
        'sticky flex flex-col items-start justify-start relative z-content bg-surface-muted rounded-md sm:rounded-lg border-border-primary border py-3 transition-[top] duration-200 ease-linear',
        'top-[calc(var(--header-height)+3rem)] max-h-[calc(100dvh-var(--header-height)-4rem)] overflow-y-auto scrollbar-hide',
        className
      )}
    >
      <h3 className="type-h6 lg:type-h5 mb-1 px-2 lg:px-3 py-1">Sort by</h3>
      <ul className="w-full">
        {categories.map(({ slug, title }, index) => (
          <li key={title}>
            <button
              className="type-body-xs lg:type-body-sm px-2 lg:px-3 py-0.5 lg:py-1 relative w-full text-left"
              onClick={(e) => handleClick({ e, hash: slug?.current })}
              type="button"
            >
              {title}
              {activeIndex === index && (
                <motion.span
                  animate={{ scaleX: 1 }}
                  aria-hidden="true"
                  className={clsx(
                    'absolute z-above-content pointer-events-none left-0 h-2.5 lg:h-3 w-0.5 from-purple-600 to-purple-300 bg-gradient-to-t top-1/2 mt-[-0.625rem] lg:mt-[-0.75rem]'
                  )}
                  exit={{ scaleX: 0 }}
                  initial={{ originX: 0, scaleX: 0 }}
                  key="highlight"
                  layout
                  layoutId="highlight"
                />
              )}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default IntegrationSidebar
