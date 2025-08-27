'use client'
import React from 'react'
import clsx from 'clsx'
import Icon from 'icons/Icon'
import { cancelStroke } from 'icons/all/cancel-stroke'
import { searchStroke } from 'icons/all/search-stroke'
import { AnimatePresence, motion } from 'motion/react'

export interface IntegrationSidebarSearchProps {
  className?: string
  searchTerm: string
  setSearchTerm: (term: string) => void
}

const IntegrationSidebarSearch = ({
  className,
  searchTerm,
  setSearchTerm,
}: IntegrationSidebarSearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const clearSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSearchTerm('')
  }

  return (
    <div
      className={clsx(
        'flex flex-row gap-2 items-center justify-start',
        className
      )}
    >
      <div className="relative flex justify-start bg-body-muted/10 rounded-md w-full sm:max-w-[--card-size]">
        <Icon
          {...searchStroke}
          className="absolute top-1/2 left-2 -mt-1 z-content text-body-muted/50 w-2 h-2"
        />
        <input
          className={clsx(
            '[background-color:transparent]',
            'transition-all duration-200 ease-in-out md:w-full',
            '!ring-brand-lime flex-[0_1_auto] type-body-sm block h-5 lg:h-7 rounded-md border-none p-2.5 py-0 text-obsidian-900 w-full',
            'placeholder:!text-body-muted/50',
            'pl-5'
          )}
          id="search"
          name="search"
          onChange={handleChange}
          placeholder="Search"
          value={searchTerm}
        />
        <AnimatePresence>
          {!!searchTerm && (
            <motion.button
              animate={{ scale: 1 }}
              className="absolute w-2 h-full top-0 right-2 flex justify-center items-center"
              exit={{ scale: 0 }}
              initial={{ origin: 0.5, scale: 0 }}
              onClick={clearSearch}
              type="button"
            >
              <Icon
                {...cancelStroke}
                className="z-content text-body- w-2 h-2"
              />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default IntegrationSidebarSearch
