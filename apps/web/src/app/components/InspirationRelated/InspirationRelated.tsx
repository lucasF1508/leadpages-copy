'use client'

import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from '@/components/Image'
import Pinion from '@/components/Pinion'
import templateGalleryStore from '@/stores/templateGalleryStore'
import { TemplateKind } from '@/types/template-constants'

export interface InspirationRelatedProps {
  templates?: Array<{
    _id: string
    title: string
    slug: {
      current: string
    }
    kind: TemplateKind
    thumbnailUrlWebp?: string
  }>
  kind?: TemplateKind
  className?: string
}

const InspirationRelated = ({
  templates = [],
  kind,
  className,
}: InspirationRelatedProps) => {
  if (!templates || templates.length === 0) return null

  const getTemplateUrl = templateGalleryStore.getState().getTemplateUrl

  return (
    <Pinion
      component="inspirationRelated"
      className={clsx('theme-dark', className)}
    >
      <div className="max-w-none">
        <h2 className="type-h3 text-body mb-6">More templates you'll love</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {templates.map((template) => {
            if (!template.slug?.current) return null

            const url = getTemplateUrl({
              kind: template.kind || kind,
              slug: template.slug.current,
              template,
            })

            return (
              <Link
                key={template._id}
                href={url}
                className="group flex flex-col gap-2"
              >
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-body/10 border border-body/20 group-hover:border-body/40 transition-colors">
                  {template.thumbnailUrlWebp && (
                    <Image
                      className="w-full h-full object-cover"
                      fill
                      image={template.thumbnailUrlWebp}
                      alt={template.title || 'Template preview'}
                      sizes="(min-width: 1024px) 16.66vw, (min-width: 768px) 25vw, (min-width: 640px) 33.33vw, 50vw"
                    />
                  )}
                </div>
                <h3 className="type-body-sm text-body/80 group-hover:text-body transition-colors line-clamp-2">
                  {template.title}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </Pinion>
  )
}

export default InspirationRelated



