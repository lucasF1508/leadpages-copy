'use client'

import React from 'react'
import clsx from 'clsx'
import Link from '@/components/Link'

interface TemplateGalleryLegacyBannerProps {
  className?: string
}

const TemplateGalleryLegacyBanner = ({ className }: TemplateGalleryLegacyBannerProps) => (
    <div
      className={clsx(
        'w-full bg-[#29223b] py-2.5 md:py-4',
        className
      )}
    >
      <div className="max-w-[110rem] mx-auto px-4 md:px-8 lg:px-10 xl:px-12">
        {/* Mobile: 2 lines max - Title on top, "View legacy gallery" + button below */}
        <div className="flex flex-col md:hidden items-center gap-1.5">
          <h3 className="text-white text-[16px] font-normal text-center leading-tight">
            Need templates for Classic Builder Templates?
          </h3>
          <div className="flex flex-row items-center justify-center gap-2">
            <span className="text-white/80 text-[13px] font-medium inline-flex h-6 items-center leading-none">
              View legacy gallery
            </span>
            <Link
              ariaLabel="View legacy gallery"
              className="shrink-0 !min-w-0 !px-2.5"
              classNames={{ span: 'sr-only' }}
              condition="internal"
              hasIcon
              label="View legacy gallery"
              linkStyle="button-solid"
              url="/templates"
            />
          </div>
        </div>

        {/* Desktop: Single line with all content */}
        <div className="hidden md:flex flex-row items-center justify-center gap-4">
          <h3 className="text-white text-[22px] lg:text-[24px] font-normal text-left leading-tight whitespace-nowrap">
            Need templates for Classic Builder?
          </h3>
          <span className="inline-flex flex-row items-center gap-2 shrink-0">
            <span className="text-white/80 text-[15px] font-medium inline-flex h-6 items-center leading-none">
              View legacy gallery
            </span>
            <Link
              ariaLabel="View legacy gallery"
              className="shrink-0 !min-w-0 !px-2.5"
              classNames={{ span: 'sr-only' }}
              condition="internal"
              hasIcon
              label="View legacy gallery"
              linkStyle="button-solid"
              url="/templates"
            />
          </span>
        </div>
      </div>
    </div>
  )

export default TemplateGalleryLegacyBanner
