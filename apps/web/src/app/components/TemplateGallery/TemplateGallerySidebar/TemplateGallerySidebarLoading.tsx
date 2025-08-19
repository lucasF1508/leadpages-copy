import React from 'react'
import clsx from 'clsx'
import { FaChevronDown as DownIcon } from '@react-icons/all-files/fa/FaChevronDown'
import SkeletonLoader from '@/components/SkeletonLoader'
import useStickyHeader from '@/hooks/useStickyHeader'

const TemplateGallerySidebarLoading = ({ className = '' }) => {
  const { isSticky, showHeader } = useStickyHeader()

  return (
    <div
      className={clsx(
        'sticky flex flex-col items-start justify-start relative z-content bg-surface-muted rounded-lg border-border-primary border py-4 transition-[top] duration-200 ease-linear',
        className,
        'overflow-y-auto scrollbar-hide',
        isSticky && showHeader
          ? 'top-[calc(var(--header-height)+3rem)] max-h-[calc(100dvh-var(--header-height)-4rem)]'
          : 'top-6 max-h-[calc(100dvh-4rem)]'
      )}
    >
      <div className="mb-3 w-full">
        <h3 className="type-h5 min-h-5 px-4 flex items-center justify-start">
          <SkeletonLoader className="type-h4 !w-3/4" />
        </h3>
        <div className="relative px-3 w-full">
          {Array.from({ length: 4 }).map((_, num) => (
            <span
              className="w-full px-1 type-body-xs min-h-5 flex items-center justify-start rounded-sm"
              key={num}
            >
              <SkeletonLoader className="type-h5 !w-1/2" />
            </span>
          ))}
        </div>
      </div>

      <div className="px-4">
        <hr className="border-button-border-secondary" />
      </div>
      <div className="w-full">
        {Array.from({ length: 5 }).map((_, num) => (
          <React.Fragment key={num}>
            {num === 0 && (
              <div className="px-4">
                <hr className="border-button-border-secondary" />
              </div>
            )}
            <span className="block w-full px-3 relative w-full group py-1.5">
              <div className="w-full flex items-center justify-between px-1 min-h-5 rounded-sm transition-colors">
                <SkeletonLoader className="type-h4 !w-1/2" />
                <div className="text-button-border-secondary transition-transform duration-200 group-data-[state=open]:-rotate-180">
                  <DownIcon className="w-1.5" />
                </div>
              </div>
            </span>
            <div className="px-4">
              <hr className="border-button-border-secondary" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default TemplateGallerySidebarLoading
