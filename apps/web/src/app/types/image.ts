import type { Image as SanityImageDefaultProps } from '@sanity/types'
import type { ImageProps as NextImageProps, StaticImageData } from 'next/image'

export interface SanityImageProps extends SanityImageDefaultProps {
  _key?: string
  altText?: string
  blurDataURL?: string
  lqip?: string
  maxHeight?: number
  src?: string
  url?: string
}

export type { NextImageProps, SanityImageDefaultProps, StaticImageData }
