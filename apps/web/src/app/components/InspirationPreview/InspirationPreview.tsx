'use client'

import React from 'react'
import clsx from 'clsx'
import Pinion from '@/components/Pinion'
import { useDeviceView } from '../Layout/Layout'

export interface InspirationPreviewProps {
  className?: string
  previewUrl?: string
}

const InspirationPreview = ({
  className,
  previewUrl,
}: InspirationPreviewProps) => {
  const { isMobile } = useDeviceView()

  // If no previewUrl, don't render anything
  if (!previewUrl) {
    return null
  }

  // Check if previewUrl is a valid URL
  const isValidUrl = previewUrl && 
    (previewUrl.startsWith('http://') || previewUrl.startsWith('https://'))

  // If not a valid URL, show a placeholder instead of the iframe
  if (!isValidUrl) {
    return (
      <Pinion
        className={clsx('theme-dark', className)}
        component="inspirationPreview"
      >
        <div className={clsx(
          'relative w-full rounded-lg overflow-hidden border border-body/20 bg-body/5 transition-all duration-300',
          isMobile ? 'max-w-[375px] mx-auto' : 'max-w-full'
        )}>
          {/* Browser Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-body/10 border-b border-body/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#eab308' }} />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Placeholder instead of iframe */}
          <div className="relative w-full bg-body/5 flex items-center justify-center overflow-hidden">
            <div
              className={clsx(
                'transition-all duration-300 ease-in-out w-full overflow-hidden flex items-center justify-center',
                isMobile 
                  ? 'aspect-[9/16]' 
                  : 'aspect-[16/9]'
              )}
            >
              <div className="text-center text-body/60 p-8">
                <p className="type-body-lg">Template preview unavailable</p>
                <p className="type-body-sm mt-2">This template does not have a preview available in the API</p>
              </div>
            </div>
          </div>
        </div>
      </Pinion>
    )
  }

  return (
    <Pinion
      className={clsx('theme-dark', className)}
      component="inspirationPreview"
    >
      <div className={clsx(
        'relative w-full rounded-lg overflow-hidden border border-body/20 bg-body/5 transition-all duration-300',
        isMobile ? 'max-w-[375px] mx-auto' : 'max-w-full'
      )}>
        {/* Browser Window Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-body/10 border-b border-body/20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#eab308' }} />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
        </div>

        {/* Preview Iframe */}
        <div className="relative w-full bg-white overflow-hidden p-0 m-0">
          <iframe
            allowFullScreen
            className="w-full h-full border-0 p-0 m-0 block"
            style={{
              aspectRatio: isMobile ? '9/16' : '16/9',
            }}
            src={previewUrl}
            title="Template preview"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            onError={(e) => {
              // If iframe fails, hide it
              const target = e.target as HTMLIFrameElement
              if (target?.parentElement) {
                target.parentElement.style.display = 'none'
              }
            }}
          />
        </div>
      </div>
    </Pinion>
  )
}

export default InspirationPreview

