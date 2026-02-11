'use client'

import type { Taxon } from '@/types'
import React, { useState } from 'react'
import clsx from 'clsx'
import Icon from 'icons/Icon'
import { webValidationStroke } from 'icons/all/web-validation-stroke'
import Image from '@/components/Image'
import Label from '@/components/Label'
import Link from '@/components/Link'
import Pinion from '@/components/Pinion'
import Text from '@/components/Text'

export interface HeroTemplateProps {
  category?: Taxon
  content: string
  heading?: string
  image: {
    aspectRatio: number
    src: string
  }
  label?: string
  links: {
    demo: {
      label: string
      url: string
    }
  }
}

const HeroTemplate = ({
  category,
  content,
  heading,
  image,
  label,
  links,
}: HeroTemplateProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Pinion component="hero">
      <span className="inline-flex py-[0.25rem] rounded-lg bg-surface-neutral-medium px-1.5 mb-3 md:mb-4">
        <Label
          className={clsx(
            '!text-[0.625rem] type-overline-xxs text-light pt-[0.125rem]'
          )}
          content={label}
        />
      </span>
      <div className="flex flex-col items-start justify-start sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between gap-3">
        <div className="flex flex-col gap-2 md:gap-3">
          <span className="type-h5">{category?.label}</span>
          <h1 className="type-title-t7 sm:type-title-t6 md:type-title-t5">
            {heading}
          </h1>
          <Text
            as="div"
            blockStyles={{
              normal: { className: 'type-h4 md:type-h2', tag: 'h2' },
            }}
            className="max-w-cols7"
            content={content}
          />
        </div>
        <Link
          condition="internal"
          hasIcon
          linkStyle="button-secondary"
          url={links.demo.url}
        >
          {links.demo.label}
          <Icon {...webValidationStroke} className="z-content w-2.5 h-2.5" />
        </Link>
      </div>
      <div className="w-full max-w-cols5 my-4 gradient-white-opacity" />
      <div className="relative w-full pt-8 px-8 rounded-lg overflow-hidden bg-body/10 border-2 border-body from-white to-[#DDDDDD] bg-gradient-to-b">
        <div className="relative w-full aspect-[19/20] overflow-hidden rounded-t-md">
          {/* Placeholder animado */}
          <div
            className={clsx(
              'absolute inset-0 transition-opacity duration-500',
              imageLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            )}
          >
            {/* Fondo base con gradiente vibrante */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-gray-200 to-zinc-200" />
            
            {/* Barras de skeleton animadas */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 gap-4">
              <div className="space-y-3">
                <div className="h-8 bg-slate-300/60 rounded-lg w-3/4 animate-pulse" />
                <div className="h-6 bg-slate-300/50 rounded-lg w-1/2 animate-pulse" style={{ animationDelay: '0.1s' }} />
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-slate-300/50 rounded-lg w-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                <div className="h-4 bg-slate-300/50 rounded-lg w-5/6 animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="h-4 bg-slate-300/50 rounded-lg w-4/6 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <div className="h-32 bg-slate-300/60 rounded-xl animate-pulse" style={{ animationDelay: '0.15s' }} />
            </div>

            {/* Shimmer animado más pronunciado */}
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]">
              <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12" />
            </div>

            {/* Patrón de grid */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern height="60" id="grid" patternUnits="userSpaceOnUse" width="60" x="0" y="0">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#94a3b8" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect fill="url(#grid)" height="100%" width="100%" />
              </svg>
            </div>

            {/* Formas geométricas más visibles */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-br from-blue-200/50 to-purple-200/50 blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-indigo-200/50 to-pink-200/50 blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
            
            {/* Icono central de carga */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-slate-300 border-t-slate-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen real */}
          <Image
            className={clsx(
              'w-full h-auto object-top transition-opacity duration-500',
              imageLoaded ? 'opacity-100' : 'opacity-0'
            )}
            fill
            image={image?.src}
            onLoad={() => setImageLoaded(true)}
            sizes="(min-width: 1084px) 1084px, 100vw"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes shimmerReverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes shimmerVertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.7;
          }
        }
      `}</style>
    </Pinion>
  )
}

export default HeroTemplate