'use client'

import type { Taxon } from '@/types'
import React, { useState, useCallback } from 'react'
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
  templateCode?: string | null
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
  templateCode,
}: HeroInspirationProps) => {
  const { isMobile, setIsMobile } = useDeviceView()
  const [copied, setCopied] = useState(false)

  const handleCopyTemplate = useCallback(async () => {
    try {
      const textToCopy = templateCode?.trim()
        ? templateCode
        : (typeof window !== 'undefined' ? window.location.href : '')
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }, [templateCode])

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

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3">
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
        {copied ? (
          <span
            role="status"
            aria-live="polite"
            className="link link-button-solid-copied pointer-events-none inline-flex items-center justify-center"
          >
            Template copied
          </span>
        ) : (
          <button
            type="button"
            onClick={handleCopyTemplate}
            className="link link-button-solid"
            aria-label="Copy template link"
          >
            Copy Template
          </button>
        )}
      </div>
    </div>
  </Pinion>
  )
}

export default HeroInspiration

