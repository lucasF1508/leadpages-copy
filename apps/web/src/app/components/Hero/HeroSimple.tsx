import type { LinkType, MediaType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Label from '@/components/Label'
import { Links, hasLinks } from '@/components/Link'
import Pinion from '@/components/Pinion'
import Text from '@/components/Text'
import Media, { hasMedia } from '../Media'

export interface HeroSimpleProps {
  content: string
  label: string
  links: LinkType[]
  media: MediaType
  pill: string
}

const Hero = ({ content, label, links, media, pill }: HeroSimpleProps) => (
  <div className='relative overflow-hidden'>
    <Pinion component="hero">
      {(label || pill) && (
        <div className="flex flex-col sm:flex-row gap-2 mb-2 items-start sm:items-center">
          {label && (
            <Label
              className={clsx('type-overline-xxs')}
              content={label}
            
            />
          )}
          {pill && (
            <div className="inline-flex py-0.5 rounded-lg bg-gradient-purple-invert px-1.5">
              <Label
                className={clsx('type-overline-xxs text-light pt-[0.125rem]')}
                content={pill}
              />
            </div>
          )}
        </div>
      )}
      {content && (
        <div className='mb-4 max-w-cols10'>
          <Text
            as="div"
            className='[&>p]:mt-2 [&>h1]:mb-2'
            content={content}
          />
        </div>
      )}
      {hasLinks(links) && (
        <Links
          className={clsx('mt-2 gap-2 sm:gap-3 flex flex-col sm:flex-row max-w-cols6')} 
          links={links}
        />
      )}
      {hasMedia(media) && (
        <div className='mt-6 -mb-10 relative w-full h-[31.25rem]'>
          <Media
            className={clsx('w-full object-cover')}
            fill
            media={media}
            priority
          />
        </div>
      )}
    </Pinion>
  </div>
)

export default Hero
      
