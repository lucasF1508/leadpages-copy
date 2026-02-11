'use client'

import React, { useState } from 'react'

export type TemplateFilterType = 'all' | 'sections' | 'templates'

export interface TemplateSwitchProps {
  activeFilter?: TemplateFilterType
  className?: string
  onFilterChange?: (filter: TemplateFilterType) => void
}

const TemplateSwitch = ({
  activeFilter: controlledFilter,
  className = '',
  onFilterChange,
}: TemplateSwitchProps) => {
  const [internalFilter, setInternalFilter] =
    useState<TemplateFilterType>('all')

  // Use controlled filter if provided, otherwise use internal state
  const activeFilter = controlledFilter ?? internalFilter

  const handleFilterChange = (filter: TemplateFilterType) => {
    if (!controlledFilter) {
      setInternalFilter(filter)
    }
    onFilterChange?.(filter)
  }

  const filters: { label: string; value: TemplateFilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Templates', value: 'templates' },
    { label: 'Sections', value: 'sections' },
  ]

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="w-[560px] max-w-full inline-flex items-center gap-1 rounded-2xl bg-[#1C1A24] p-1 shadow-[0_14px_40px_rgba(0,0,0,0.55)] overflow-hidden">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value
          return (
            <button
              className={`flex-1 min-w-0 whitespace-nowrap px-5 py-2 rounded-2xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#7E4AFF] text-white shadow-[0_10px_30px_rgba(126,74,255,0.5)]'
                  : 'text-gray-300 hover:text-white hover:bg-[#242131]'
              }`}
              key={filter.value}
              onClick={() => handleFilterChange(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TemplateSwitch

