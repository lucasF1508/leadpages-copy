'use client'

import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import { SanityImageProps } from '@/types'

export interface FeatureItem {
  _key: string
  icon?: SanityImageProps
  title: string
  description: string
}

export interface FeatureScrollProps {
  heading: string
  subheading?: string
  features: FeatureItem[]
  laptopImage: SanityImageProps
  variant?: 'dark' | 'light'
}

const FeatureCard = ({
  feature,
  isDark,
}: {
  feature: FeatureItem
  isDark: boolean
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-4 p-6 rounded-lg border transition-all',
        isDark
          ? 'bg-[#2A2A2A] border-white/10 hover:border-white/20'
          : 'bg-white border-dark/10 hover:border-dark/20'
      )}
    >
      {feature.icon && (
        <div className="w-12 h-12 flex-shrink-0">
          <Image image={feature.icon} />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h3
          className={clsx(
            'type-h4 font-semibold',
            isDark ? 'text-white' : 'text-dark'
          )}
        >
          {feature.title}
        </h3>
        <p
          className={clsx(
            'type-body-sm',
            isDark ? 'text-white/70' : 'text-dark/70'
          )}
        >
          {feature.description}
        </p>
      </div>
    </div>
  )
}

const FeatureScroll = ({
  heading,
  subheading,
  features,
  laptopImage,
  variant = 'dark',
}: FeatureScrollProps) => {
  const isDark = variant === 'dark'

  if (!features?.length || !laptopImage) return null

  return (
    <div
      className={clsx(
        'py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative',
        isDark ? 'bg-[#1A1A1A]' : 'bg-white'
      )}
      style={isDark ? { 
        backgroundColor: '#1A1A1A !important',
        backgroundImage: 'none !important',
        background: '#1A1A1A !important',
      } : undefined}
    >
      {/* Overlay para eliminar cualquier gradiente */}
      {isDark && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: '#1A1A1A',
            backgroundImage: 'none',
            background: '#1A1A1A',
            zIndex: 0,
          }}
        />
      )}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <Heading
            heading={heading}
            className={clsx(
              'type-title-t5 sm:type-title-t4 md:type-title-t3 mb-3 sm:mb-4',
              isDark ? 'text-white' : 'text-dark'
            )}
          />
          {subheading && (
            <p
              className={clsx(
                'type-body-sm sm:type-body-md md:type-body-lg lg:type-body-xl max-w-3xl mx-auto px-2',
                isDark ? 'text-white/80' : 'text-dark/80'
              )}
            >
              {subheading}
            </p>
          )}
        </div>

        {/* Main Content: 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column: Feature Cards */}
          <div className="flex-1 w-full lg:max-w-md space-y-6">
            {features.map((feature) => (
              <FeatureCard key={feature._key} feature={feature} isDark={isDark} />
            ))}
          </div>

          {/* Right Column: Laptop Image */}
          <div className="flex-1 w-full lg:max-w-2xl">
            <div
              className={clsx(
                'relative rounded-lg overflow-hidden',
                isDark ? 'bg-[#2A2A2A]' : 'bg-gray-100'
              )}
            >
              <Image image={laptopImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureScroll

