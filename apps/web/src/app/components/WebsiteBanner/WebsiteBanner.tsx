'use client'

import React from 'react'
import clsx from 'clsx'
import type { LinkType } from '@types'
import Link from '@/components/Link'

export interface WebsiteBannerProps {
  enabled?: boolean
  text?: string
  link?: LinkType[]
}

const WebsiteBanner = ({ enabled, text, link }: WebsiteBannerProps) => {
  if (!enabled || !text) {
    return null
  }

  const bannerLink = link?.[0]

  return (
    <div className="w-full bg-purple-100 border-b border-purple-200">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-center gap-2 py-1.5 text-center">
          <span className="type-body-sm text-purple-900">
            {text}
            {bannerLink && (
              <>
                {' '}
                <Link
                  {...bannerLink}
                  linkStyle="text"
                  hasIcon={false}
                  className="inline-flex items-center gap-1 font-medium text-purple-700 hover:text-purple-800 transition-colors"
                >
                  {bannerLink.label || 'Check it out'}
                  <span className="inline-block">→</span>
                </Link>
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default WebsiteBanner

