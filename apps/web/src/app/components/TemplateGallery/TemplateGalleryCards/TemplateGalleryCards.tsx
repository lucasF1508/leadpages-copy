import { UiTemplate } from '@/types'
import React from 'react'
import clsx from 'clsx'
import { useShallow } from 'zustand/react/shallow'
import Image from '@/components/Image'
import Link from '@/components/Link'
import templateGalleryStore from '@/stores/templateGalleryStore'

export interface TemplateGalleryCardsProps {
  className?: string
  infiniteRef?: React.RefObject<HTMLDivElement>
  templates: UiTemplate[]
}

const TemplateGalleryCards = ({
  className,
  infiniteRef,
  templates,
}: TemplateGalleryCardsProps) => {
  const getTemplateUrl = templateGalleryStore(
    useShallow((state) => state.getTemplateUrl)
  )

  return (
    <div
      className={clsx(
        'flex flex-wrap gap-y-4 gap-x-2 relative z-content w-full',
        className
      )}
      ref={infiniteRef}
    >
      {templates.map(({ kind, template, _meta, ui }) => {
        const url = getTemplateUrl({ kind, template })
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
