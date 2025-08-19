import type { TemplateActionCreators } from '@/types'
import React from 'react'
import clsx from 'clsx'

interface TemplateGalleryNoResultsProps {
  actions: TemplateActionCreators
  className?: string
}

const TemplateGalleryNoResults = ({
  actions,
  className,
}: TemplateGalleryNoResultsProps) => {
  const resetSearchAndFilters = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    actions.onClearFilters()
    actions.onClearSearchInput()
  }

  return (
    <div
      className={clsx(
        'text-center py-5 flex flex-col gap-y-2 items-center justify-start',
        className
      )}
    >
      <h2 className="type-h1">No results</h2>
      <p className="type-body">
        Try adjusting your search and filters to find what you&apos;re looking
        for.
      </p>
      <button
        className="link-button-outline"
        onClick={resetSearchAndFilters}
        type="button"
      >
        Clear Search & Filters
      </button>
    </div>
  )
}

export default TemplateGalleryNoResults
