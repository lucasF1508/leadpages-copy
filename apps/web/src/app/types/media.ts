import type { SanityImageProps, StaticImageData } from './image'

export type MediaCondition = 'image' | 'lottie' | 'none' | 'video'
export type ImageType = SanityImageProps | StaticImageData | string

export interface MediaType {
  condition?: MediaCondition
  image?: ImageType
  ratio?: string
}
