import type { MediaType } from '@types'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

const _Media = dynamic(() => import('@/components/Media'))

const Media = ({
  classNames,
  value: media,
}: {
  classNames?: {
    media?: ClassValue
    root?: ClassValue
    wrapper?: ClassValue
  }
  value: MediaType
}) => (
  <div className={clsx('relative mb-5 last:mb-0', classNames?.wrapper)}>
    <_Media classNames={classNames} media={media} />
  </div>
)

export default Media
