import type { ContentType, ImageType } from '@types'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import { defaultLargeBlockStyles } from '@/components/PortableText'
import Text from '@/components/Text'
import { hasImage } from '../Media'

export interface CardProps {
  _id?: string
  _key?: string
  backgroundImage?: ImageType
  className?: ClassValue
  classNames?: {
    content?: ClassValue
    contentGroup?: ClassValue
    icon?: ClassValue
    iconContainer?: ClassValue
    root?: ClassValue
    spacer?: ClassValue
  }
  content?: ContentType
  contentSize?: 'large' | 'small'
  icon?: ImageType
  spacer?: boolean
}

const Card = ({
  backgroundImage,
  className,
  classNames,
  content,
  contentSize = 'large',
  icon,
  spacer = true,
}: CardProps) => (
  <div
    className={clsx(
      'relative rounded-xl overflow-hidden border border-border-muted',
      className,
      classNames?.root
    )}
  >
    {backgroundImage && (
      <Image className="absolute inset-0 z-base" fill image={backgroundImage} />
    )}
    <div
      className={clsx(
        'relative z-content p-4',
        contentSize === 'large' && 'md:p-6',
        classNames?.contentGroup
      )}
    >
      <div
        className={clsx(
          'flex',
          contentSize === 'large' ? 'flex-col' : 'flex-row gap-3'
        )}
      >
        {hasImage(icon) && (
          <div
            className={clsx(
              'shrink-0 flex items-center justify-center mb-2',
              contentSize === 'large' && 'w-8 h-8',
              classNames?.iconContainer
            )}
          >
            <Image className={clsx('w-5 h-5', classNames?.icon)} image={icon} />
          </div>
        )}
        {!!content?.length && (
          <Text
            blockStyles={defaultLargeBlockStyles}
            className={clsx(
              '*:!my-0 flex-col flex gap-2 [&_p]:text-body-muted',
              classNames?.content
            )}
            content={content}
          />
        )}
      </div>
      {spacer && (
        <div className={clsx('aspect-[5/2] w-full', classNames?.spacer)} />
      )}
    </div>
  </div>
)

export default Card
