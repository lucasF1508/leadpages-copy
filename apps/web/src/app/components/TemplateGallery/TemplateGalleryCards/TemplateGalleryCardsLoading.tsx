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
      className: 'aspect-[3/2]',
    },
    [TemplateKind.Site]: {
      Placeholder: SiteLoading,
      className: 'aspect-[3/4]',
    },
  }[kind]

  return (
    <div
      className={clsx(
        'flex flex-wrap gap-y-4 gap-x-2 relative z-content w-full',
        className
      )}
    >
      {Array.from({ length: 12 }).map((_, num) => {
        const animationDelay = `${(num % 3) * 0.25}s`
        return (
          <div
            className="flex-[0_1_calc((100%-2rem)/3)] flex flex-col gap-2"
            key={num}
          >
            <div
              className={clsx(
                'relative w-full rounded-[0.5rem] border border-border/10 overflow-hidden group transition-[box-shadow]',
                placeholderClassName,
                kind === TemplateKind.Leadpage && 'aspect-[3/2]',
                kind === TemplateKind.Site && 'aspect-[3/4]'
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
