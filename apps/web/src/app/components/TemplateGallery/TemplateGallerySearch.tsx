import type { TemplateActionCreators, TemplateState } from '@/types'
import React from 'react'
import clsx from 'clsx'
import Icon from 'icons/Icon'
import { cancelStroke } from 'icons/all/cancel-stroke'
import { searchStroke } from 'icons/all/search-stroke'
import { AnimatePresence, motion } from 'motion/react'

interface TemplateGallerySearchProps {
  actions: TemplateActionCreators
  className?: string
  state: TemplateState
}

const TemplateGallerySearch = ({
  actions,
  className,
  state,
}: TemplateGallerySearchProps) => {
  const { searchInputRef, ui } = state
  const hasSearchValue = !!searchInputRef.current?.value
  const filterLabel = ui?.selectedTaxon?.label

  return (
    <div
      className={clsx(
        'flex flex-row gap-2 items-center justify-start',
        className
      )}
    >
      <div className="relative flex justify-start bg-body-muted/10 rounded-md w-full 740:max-w-[--card-size]">
        <Icon
          {...searchStroke}
          className="absolute top-1/2 left-2 -mt-1 z-content text-body-muted/50 w-2 h-2"
        />
        <input
          className={clsx(
            '[background-color:transparent]',
            'transition-all duration-200 ease-in-out md:w-full',
            'flex-[0_1_auto] type-body-sm block h-5 lg:h-7 rounded-md border-none p-2.5 py-0 text-obsidian-900 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-button-surface-solid-ring',
            'placeholder:!text-body-muted/50',
            'pl-5'
          )}
          disabled={!ui?.hasLoaded}
          id="search"
          name="search"
          onChange={actions.onUpdateSearchInput}
          placeholder="Search"
          ref={searchInputRef}
        />
        <AnimatePresence>
          {hasSearchValue && (
            <motion.button
              animate={{ scale: 1 }}
              className="absolute w-2 h-full top-0 right-2 flex justify-center items-center"
              exit={{ scale: 0 }}
              initial={{ origin: 0.5, scale: 0 }}
              onClick={actions.onClearSearchInput}
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
      {filterLabel && (
        <div className="flex flex-row items-center justify-between gap-2 text-body-muted">
          <p className="text-body">
            Showing <strong>{filterLabel}</strong> templates
          </p>
          <button
            className="link-inline"
            onClick={actions.onClearFilters}
            type="button"
          >
            <strong>Clear</strong>
          </button>
        </div>
      )}
    </div>
  )
}

export default TemplateGallerySearch
