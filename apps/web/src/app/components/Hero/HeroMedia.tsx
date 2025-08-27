import type { MediaType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Media, { hasMedia } from '@/components/Media'

export interface HeroMediaProps {
  className?: string
  classNames?: {
    media?: string
    root?: string
  }
  media: MediaType
  overflow?: boolean
}

const HeroMedia = ({
  className,
  classNames,
  media,
  overflow,
}: HeroMediaProps) => {
  if (!hasMedia(media)) return null
  return (
    <div
      className={clsx(
        'relative w-full max-w-cols6',
        overflow && 'aspect-1',
        className,
        classNames?.root
      )}
    >
      <Media
        className={clsx(
          overflow &&
            'absolute left-0 top-0 bottom-0 [&_img]:h-full [&_img]:overflow-visible',
          classNames?.media
        )}
        media={media}
        priority
        sizes="(max-width: 900px) 100vw, 50vw"
      />
    </div>
  )
}

export default HeroMedia
