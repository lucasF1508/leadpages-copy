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
  variant?: 'default' | 'dark' | 'light'
}

const Card = ({
  backgroundImage,
  className,
  classNames,
  content,
  contentSize = 'large',
  icon,
  spacer = true,
  variant = 'default',
}: CardProps) => {
  const isDark = variant === 'dark'
  const isLight = variant === 'light'

  return (
    <div
      className={clsx(
        'relative rounded-xl overflow-hidden border',
        isDark && 'border-white/10 bg-[#1A1A1A]',
        isLight && 'border-border-muted bg-white',
        !isDark && !isLight && 'border-border-muted',
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
          contentSize === 'large' ? 'flex-col items-center text-center' : 'flex-row gap-3'
        )}
      >
        {hasImage(icon) && (
          <div
            className={clsx(
              'shrink-0 flex items-center justify-center mb-4',
              contentSize === 'large' && 'w-10 h-10',
              classNames?.iconContainer
            )}
          >
            <Image className={clsx('w-6 h-6', classNames?.icon)} image={icon} />
          </div>
        )}
        {!!content?.length && (
          <Text
            blockStyles={{
              h3: {
                className: 'type-h3 md:type-h2 font-bold mb-3',
                tag: 'h3',
              },
              normal: {
                className: 'type-body-sm md:type-body-md leading-relaxed',
                tag: 'p',
              },
            }}
            className={clsx(
              '*:!my-0 flex-col flex gap-2 w-full',
              contentSize === 'large' && 'items-center text-center',
              isDark && '[&_p]:text-white/80 [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white',
              isLight && '[&_p]:text-dark/80 [&_h3]:text-dark [&_h4]:text-dark [&_h5]:text-dark [&_h6]:text-dark',
              !isDark && !isLight && '[&_p]:text-body-muted',
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
}

export default Card
