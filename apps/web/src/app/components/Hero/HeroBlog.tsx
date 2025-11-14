import React from 'react'
import clsx from 'clsx'
import Label from '@/components/Label'
import Pinion from '@/components/Pinion'
import Media from '@/components/Media'

export interface HeroBlogProps {
  label?: string
  profileImage?: {
    altText?: string
    asset: {
      _ref: string
      _type: string
    }
  }
  profileImageAlt?: string
  authorName?: string
  authorTitle?: string
  biography?: string
}

const HeroBlog = ({ 
  label, 
  profileImage, 
  profileImageAlt, 
  authorName, 
  authorTitle, 
  biography 
}: HeroBlogProps) => {
  return (
    <div className="relative overflow-hidden flex flex-row items-center justify-center pt-8 md:pt-12 pb-0 bg-gray-900">
      <Pinion
        classNames={{
          inner: 'flex flex-col items-center gap-3 md:gap-4 !mb-0',
          root: 'text-center text-white !my-0 !mb-0',
        }}
        component="hero"
      >
        {label && (
          <Label
            className={clsx('type-overline-xs text-gray-500 uppercase text-center')}
            content={label}
          />
        )}

        {profileImage && (
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
            <Media
              media={{
                condition: 'image',
                image: profileImage,
              }}
              sizes="80px"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {authorName && (
          <h1 className={clsx(
            'text-center font-bold',
            'type-h3 sm:type-h2 md:type-h1',
            'text-white'
          )}>
            {authorName}
          </h1>
        )}

        {authorTitle && (
          <h2 className={clsx(
            'text-center font-medium',
            'type-body-lg md:type-h4',
            'text-white'
          )}>
            {authorTitle}
          </h2>
        )}

        {biography && (
          <div className="text-center mx-auto">
            <p className="type-body-lg text-white mb-3">
              {biography}
            </p>
          </div>
        )}
      </Pinion>
    </div>
  )
}

export default HeroBlog
