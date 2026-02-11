'use client'

import type { Taxon } from '@/types'
import React from 'react'
import clsx from 'clsx'
import Link from '@/components/Link'
import Pinion from '@/components/Pinion'
import Text from '@/components/Text'
import { Mobile, Laptop, LaptopFilled, MobileFilled } from '../TemplatePreview/TemplatePreviewIcons'
import { motion as m } from 'motion/react'
import { useDeviceView } from '../Layout/Layout'

export interface HeroInspirationProps {
  breadcrumbs?: {
    items: Array<{
      label: string
      url?: string
    }>
  }
  heading?: string
  deviceIcons?: boolean
  ctaButton?: {
    label: string
    url: string
  }
}

const toggleNav = [
  { label: 'Desktop', Icon: Laptop, IconFilled: LaptopFilled, value: false },
  { label: 'Mobile', Icon: Mobile, IconFilled: MobileFilled, value: true },
]

const HeroInspiration = ({
  breadcrumbs,
  heading,
  deviceIcons = true,
  ctaButton,
}: HeroInspirationProps) => {
  const { isMobile, setIsMobile } = useDeviceView()

  return (
    <Pinion component="hero" className="theme-dark">
    {/* Breadcrumbs */}
    {breadcrumbs && breadcrumbs.items && (
      <nav className="mb-4" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {breadcrumbs.items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-body/60" aria-hidden="true">
                  {'>'}
                </span>
              )}
              {item.url ? (
                <Link
                  condition="internal"
                  url={item.url}
                  className="text-body/80 hover:text-body transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-body">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )}

    {/* Title and CTA Section */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <div className="flex-1">
        <h1 className="type-title-t7 sm:type-title-t6 md:type-title-t5 text-body mb-3">
          {heading || 'Template Title'}
        </h1>
        
        {/* Device Toggle Icons */}
        {deviceIcons && (
          <div className="flex items-center gap-1">
            {toggleNav.map(({ label, Icon, IconFilled, value }) => {
              const isActive = isMobile === value
              return (
                <button
                  key={label}
                  onClick={() => setIsMobile(value)}
                  type="button"
                  className="relative z-10 flex items-center justify-center rounded-md text-body p-1 cursor-pointer hover:text-body transition-colors"
                  aria-label={label}
                >
                  {isActive && (
                    <m.div
                      layoutId="activeBackground"
                      className="absolute inset-0 z-0 rounded-md bg-body/20"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className={clsx(
                    'relative z-10 flex items-center justify-center transition-all duration-300 w-5 h-5',
                    !isActive && 'opacity-60 hover:opacity-100'
                  )}>
                    <span className="w-4 h-4 flex items-center justify-center overflow-visible">
                      <span className="scale-150">
                        {isActive ? <IconFilled /> : <Icon />}
                      </span>
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* CTA Button */}
      {ctaButton && (
        <Link
          condition="internal"
          hasIcon={false}
          linkStyle="button-solid"
          url={ctaButton.url}
        >
          {ctaButton.label}
        </Link>
      )}
    </div>
  </Pinion>
  )
}

export default HeroInspiration

