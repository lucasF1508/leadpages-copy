import type { ImageType } from '@types'
import type { ClassValue } from 'clsx'
import type { ImageProps as NextImageProps } from 'next/image'
import React from 'react'
import clsx from 'clsx'
import NextImage from 'next/image'
import useImageParser from '@/hooks/useImageParser'

export interface ImageProps
  extends Omit<NextImageProps, 'alt' | 'className' | 'src'> {
  alt?: string
  className?: ClassValue
  hasPlaceholder?: boolean
  image?: ImageType
  shape?: 'round' | undefined
}

const Image = ({
  alt: _alt,
  className,
  fill = false,
  hasPlaceholder = true,
  image = {},
  onLoad,
  onLoadingComplete,
  priority,
  shape,
  sizes = '100vw',
  style,
  ...props
}: ImageProps) => {
  if (!image) return null
  const parsedImage = useImageParser(image)
  const { alt, height, hotspot, isSvg, lqip, placeholderType, url, width } =
    parsedImage

  const hotspotStyle = hotspot
    ? { objectPosition: `${hotspot.x * 100}% ${hotspot.y * 100}%` }
    : {}

  if (!url) return null

  return (
    <NextImage
      alt={_alt || alt || url}
      blurDataURL={hasPlaceholder ? lqip : undefined}
      className={clsx(
        'object-cover object-center',
        shape === 'round' && 'overflow-hidden rounded-[100%]',
        className
      )}
      fill={fill}
      height={!fill ? height : undefined}
      loading={priority ? 'eager' : 'lazy'}
      onLoad={onLoad}
      onLoadingComplete={onLoadingComplete}
      placeholder={hasPlaceholder ? placeholderType : undefined}
      priority={priority}
      sizes={sizes}
      src={url}
      style={{
        ...style,
        ...hotspotStyle,
      }}
      unoptimized={isSvg}
      width={!fill ? width : undefined}
      {...props}
    />
  )
}

export default Image
