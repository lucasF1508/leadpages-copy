import React from 'react'
import clsx from 'clsx'
import SkeletonLoader from '@/components/SkeletonLoader'
import LandingPageLoading from '@/components/Svgs/LandingPageLoading'
import SiteLoading from '@/components/Svgs/SiteLoading'
import { TemplateKind } from '@/types/template-constants'

const TemplateGalleryCardsLoading = ({
  className,
  kind = TemplateKind.Leadpage,
}: {
  className?: string
  kind?: TemplateKind
}) => {
  const { Placeholder, className: placeholderClassName } = {
    [TemplateKind.Leadpage]: {
      Placeholder: LandingPageLoading,
      className: 'aspect-[4/5]',
    },
    [TemplateKind.Site]: {
      Placeholder: SiteLoading,
      className: 'aspect-[3/4]',
    },
  }[kind]

  return (
    <div
      className={clsx(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-1.5 gap-y-6 relative z-content w-full',
        className
      )}
    >
      {Array.from({ length: 8 }).map((_, num) => {
        const animationDelay = `${(num % 4) * 0.15}s`
        return (
          <div
            className="flex flex-col gap-2.5"
            key={num}
          >
            <div
              className={clsx(
                'relative w-full rounded-[0.625rem] bg-[#111018] overflow-hidden border-2 border-white',
                placeholderClassName
              )}
            >
              <Placeholder
                className="w-full animate-pulse"
                style={{
                  animationDelay,
                }}
              />
            </div>
            <SkeletonLoader
              className="type-h4 !w-3/4"
              style={{
                animationDelay,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default TemplateGalleryCardsLoading
