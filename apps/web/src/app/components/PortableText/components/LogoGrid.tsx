'use client'

import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import Link from '@/components/Link'
import Image from '@/components/Image'

interface LogoItem {
  _key?: string
  image?: {
    _type?: string
    asset?: any
    [key: string]: any
  }
  url?: string
}

interface LogoGridProps {
  className?: ClassValue
  value?: {
    logos?: LogoItem[]
    [key: string]: any
  }
}

const LogoGrid = ({ className, value }: LogoGridProps) => {
  const { logos } = value || {}

  if (!logos || !logos.length) return null

  return (
    <div
      className={clsx(
        'flex flex-wrap items-center justify-around gap-4 pb-4 my-5 last:mb-0',
        'sm:justify-start',
        className
      )}
    >
      {logos.map((logo, index) => {
        const { url, image, _key } = logo

        if (!image) return null

        const logoKey = _key || `logo-${index}`

        if (url) {
          return (
            <Link
              key={logoKey}
              condition="external"
              url={url}
              target
              className="w-[190px]"
            >
              <Image
                image={{ _type: 'image', asset: { ...image.asset } }}
                className="max-h-36"
              />
            </Link>
          )
        }

        return (
          <div key={logoKey} className="w-[190px]">
            <Image
              image={{ _type: 'image', asset: { ...image.asset } }}
              className="max-h-36 object-contain"
            />
          </div>
        )
      })}
    </div>
  )
}

export default LogoGrid

