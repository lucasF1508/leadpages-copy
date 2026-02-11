'use client'

import React from 'react'
import clsx from 'clsx'

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
          <div className="flex flex-row items-center gap-2">
            <span className="text-white/80 text-[13px] font-medium">
              View legacy gallery
            </span>
            <a
              className={clsx(
                'inline-flex items-center justify-center w-5 h-5 rounded-[8px]',
                'bg-[#ceff66] text-black',
                'hover:bg-[#b8e64a] transition-colors',
                'flex-shrink-0'
              )}
              href="/templates"
            >
              <span aria-hidden="true" className="text-[18px]">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Desktop: Single line with all content */}
        <div className="hidden md:flex flex-row items-center justify-center gap-4">
          <h3 className="text-white text-[22px] lg:text-[24px] font-normal text-left leading-tight whitespace-nowrap">
            Need templates for Classic Builder Templates?
          </h3>
          <span>
            <span className="text-white/80 text-[15px] font-medium mr-2">
              View legacy gallery
            </span>
            <a
              className={clsx(
                'inline-flex items-center justify-center w-6 h-6 rounded-[10px]',
                'bg-[#ceff66] text-black',
                'hover:bg-[#b8e64a] transition-colors',
                'flex-shrink-0'
              )}
              href="/templates"
            >
              <span aria-hidden="true" className="text-[22px]">
                →
              </span>
            </a>
          </span>
        </div>
      </div>
    </div>
  )

export default TemplateGalleryLegacyBanner
