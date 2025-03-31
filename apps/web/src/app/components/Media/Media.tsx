'use client'

import type { ImageProps } from '@/components/Image'
import type { LottieProps } from '@/components/Lottie'
import type { VideoProps } from '@/components/Video'
import type { MediaType, NextImageProps } from '@types'
import type { ClassValue } from 'clsx'
import type { LoadableComponent } from 'next/dynamic'
import React, { memo } from 'react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Text from '@/components/Text'
import { removeProps } from '@/lib/utils/removeProps'

export interface MediaProps
  extends Pick<NextImageProps, 'fill' | 'priority'>,
    Omit<React.ComponentProps<'figure'>, 'className'> {
  className?: ClassValue
  classNames?: {
    media?: ClassValue
    root?: ClassValue
  }
  media: MediaType
}

type ElementTypes = {
  [key: string]: LoadableComponent<ImageProps | LottieProps | VideoProps>
}

const Elements: ElementTypes = {
  image: dynamic(() => import('@/components/Image')),
  lottie: dynamic(() => import('@/components/Lottie')),
  video: dynamic(() => import('@/components/Video')),
}

const lottieProps = [
  'advancedConfig',
  'autoplay',
  'loop',
  'lottie',
  'offset',
  'playOnScroll',
  'speed',
  'startInView',
  'yoyo',
]

const Media = ({
  className,
  classNames,
  fill = false,
  media: _media,
  priority,
  ...props
}: MediaProps) => {
  const { caption, condition, image, ratio, ...media } = _media || {}

  if (!condition || condition === 'none') return null

  const elementProps = {
    className: classNames?.media,
    fill,
    image,
    priority,
    // There is probably a better way to do this but it requires a bigger refactor
    ...(!['lottie', 'video'].includes(condition) ? removeProps(media, lottieProps) : media),
  }

  const Element = Elements[condition]

  if (!Element) {
    console.error(`Media.tsx:47. Element "${condition}" not found.`)
    return null
  }

  return (
    <figure
      className={clsx(
        'flex w-full items-center justify-center',
        className,
        classNames?.root
      )}
      {...props}
    >
      <Element
        {...elementProps}
        style={ratio ? { aspectRatio: ratio.replace(':', ' / ') } : undefined}
      />
      {caption && (
        <figcaption className="left-1/2 top-full flex -translate-x-1/2 flex-col items-center justify-start md:absolute">
          <Text className={clsx('type-caption')} content={caption} />
        </figcaption>
      )}
    </figure>
  )
}

export default memo(Media)
