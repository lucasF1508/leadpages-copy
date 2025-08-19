import React from 'react'
import clsx from 'clsx'
import Link from '@/components/Link'
import { TemplateKind } from '@/types/template-constants'

const types = [
  {
    label: 'Landing Pages',
    type: TemplateKind.Leadpage,
    url: '/templates',
  },
  {
    label: 'Websites',
    type: TemplateKind.Site,
    url: '/website-templates',
  },
]

interface TemplateGalleryToggleProps {
  className?: string
  kind: TemplateKind
}

const TemplateGalleryToggle = ({
  className,
  kind,
}: TemplateGalleryToggleProps) => (
  <div className={clsx(className)}>
    <div
      className={clsx(
        'w-auto relative z-content inline-flex justify-start lg:gap-1 flex-row px-0.5 py-0.5 lg:px-1.5 lg:py-1 border-border-primary border rounded-pill bg-surface-muted relative',
        className
      )}
    >
      {types.map(({ label, type, url }) => {
        const isActive = kind === type

        return (
          <Link
            className={clsx(
              'relative z-above-content type-body-xxs lg:type-body-xs h-4 lg:h-5 flex flex-row items-center justify-center px-1.5 transition-color text-body rounded-pill hover:bg-brand-fuchsia/20 transition-colors',
              isActive && '!text-white !bg-brand-secondary  '
            )}
            condition="internal"
            hasIcon={false}
            key={label}
            linkStyle="none"
            url={url}
          >
            {label}
          </Link>
        )
      })}
    </div>
  </div>
)

export default TemplateGalleryToggle
