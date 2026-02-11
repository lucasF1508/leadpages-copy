import { Taxon, UiTemplate } from '@/types'
import React from 'react'
import clsx from 'clsx'
import { useShallow } from 'zustand/react/shallow'
import Image from '@/components/Image'
import Link from '@/components/Link'
import templateGalleryStore from '@/stores/templateGalleryStore'

export interface TemplateGalleryCardsProps {
  className?: string
  infiniteRef?: React.RefObject<HTMLDivElement>
  marketingLayout?: boolean
  taxons?: Taxon[]
  templates: UiTemplate[]
}

const TemplateGalleryCards = ({
  className,
  infiniteRef,
  marketingLayout = false,
  taxons = [],
  templates,
}: TemplateGalleryCardsProps) => {
  const getTemplateUrl = templateGalleryStore(
    useShallow((state) => state.getTemplateUrl)
  )

  if (marketingLayout) {
    return (
      <div
        className={clsx(
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-1.5 gap-y-6 relative z-content w-full',
          className
        )}
        ref={infiniteRef}
      >
        {templates.map(({ kind, template, _meta, ui }) => {
          const url = getTemplateUrl({ kind, template, _meta })
          if (!template || !url) return null

          // Get category label from taxons by matching the value
          const firstCategory = template?.categories?.[0] as { value?: string } | string | undefined
          const categoryValue = typeof firstCategory === 'string' 
            ? firstCategory 
            : firstCategory?.value
          const categoryTaxon = categoryValue 
            ? taxons.find((taxon) => taxon.value === categoryValue)
            : null
          const categoryLabel = categoryTaxon?.label || null

          return (
            <div
              className="flex flex-col gap-2.5"
              key={ui?.guid}
            >
              <Link
                className={clsx(
                  "relative w-full rounded-[0.625rem] bg-[#111018] overflow-hidden group transition-[box-shadow,transform] after:content-[''] after:absolute after:inset-0 after:rounded-[0.625rem] after:border-2 after:border-white after:pointer-events-none",
                  'hover:-translate-y-0.5 hover:shadow-[0_18px_60px_rgba(0,0,0,0.45)] focus:-translate-y-0.5 focus:shadow-[0_18px_60px_rgba(0,0,0,0.45)]',
                  // Wider aspect ratio for page templates
                  kind === 'LeadpageTemplate' && 'aspect-[4/5]',
                  kind === 'SiteTemplate' && 'aspect-[3/4]'
                )}
                condition="internal"
                linkStyle="none"
                url={url}
              >
                {template?.tags?.includes('new') && (
                  <div className="absolute top-0 right-0 bg-[#7E4AFF] text-white text-xs font-semibold px-3 py-1.5 rounded-bl-[0.625rem] z-above-content">
                    New
                  </div>
                )}

                <div className="relative w-full h-full rounded-[0.625rem] overflow-hidden bg-[#111018]">
                  {template?.thumbnailUrlWebp ? (
                    <Image
                      alt={template?.name || 'Template thumbnail'}
                      fill
                      image={typeof template.thumbnailUrlWebp === 'string' 
                        ? template.thumbnailUrlWebp 
                        : template.thumbnailUrlWebp}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized={template.thumbnailUrlWebp?.includes('/api/screenshot-proxy') || template.thumbnailUrlWebp?.startsWith('data:')}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/30">
                      <span className="text-sm">No thumbnail</span>
                    </div>
                  )}
                </div>
              </Link>
              <div className="flex flex-col gap-1">
                {template?.name && (
                  <p className="type-h5 sm:type-h4 md:type-h2 text-white">
                    {template.name}
                  </p>
                )}
                {(() => {
                  const templateHeading = (template as any)?.heading as
                    | string
                    | undefined
                  const templateDescription = (template as any)?.description as
                    | string
                    | undefined
                  const summary = templateHeading || templateDescription

                  if (!summary) return null

                  return (
                  <p className="type-body-xs sm:type-body-sm text-body-disabled">
                    {summary}
                    {categoryLabel ? ` | ${categoryLabel}` : ''}
                  </p>
                  )
                })()}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'flex flex-wrap gap-y-4 gap-x-2 relative z-content w-full',
        className
      )}
      ref={infiniteRef}
    >
      {templates.map(({ kind, template, _meta, ui }) => {
        const url = getTemplateUrl({ kind, template, _meta })
        if (!template || !url) return null

        return (
          <div
            className="w-[--card-size] flex-[0_1_auto] flex flex-col gap-2"
            key={ui?.guid}
          >
            <Link
              className={clsx(
                'relative w-full rounded-[0.5rem] border border-border/10 overflow-hidden group transition-[box-shadow]',
                'hover:shadow-dropdown focus:shadow-dropdown',
                kind === 'LeadpageTemplate' && 'aspect-[3/2]',
                kind === 'SiteTemplate' && 'aspect-[3/4]'
              )}
              condition="internal"
              linkStyle="none"
              url={url}
            >
              {template?.tags?.includes('new') && (
                <div className="absolute top-0 right-0 bg-brand-secondary text-surface text-xxs font-semibold px-1.5 py-0.5 rounded-bl-[0.5rem] z-above-content">
                  New
                </div>
              )}

              <Image
                alt={template?.name}
                fill
                image={template?.thumbnailUrlWebp}
                sizes="300px"
              />

              <div className="absolute inset-0 flex items-center justify-center z-content bg-surface/80 opacity-0 group-focus:opacity-100 group-hover:opacity-100 transition">
                <span className="link-button-solid link-small translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0 transition">
                  View
                </span>
              </div>
            </Link>
            <p className="type-h5">{template?.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default TemplateGalleryCards
