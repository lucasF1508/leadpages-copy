import type { LinkType, MediaType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Label from '@/components/Label'
import { Links, hasLinks } from '@/components/Link'
import Pinion from '@/components/Pinion'
import Text from '@/components/Text'
import HeroGradient from './HeroGradient/HeroGradientMedia'
import HeroMedia from './HeroMedia'

export interface HeroWithMediaProps {
  content: string
  label: string
  links: LinkType[]
  media: MediaType
  overflowMedia?: boolean
  pill: string
}

const Hero = ({
  content,
  label,
  links,
  media,
  overflowMedia = false,
  pill,
}: HeroWithMediaProps) => (
  <div className="relative box-[mt*-2] box-[pt*2] pb-5 -mb-5">
    <div className="absolute pointer-events-none h-[200dvh] overflow-hidden top-1/2 left-0 w-full -translate-y-1/2">
      <HeroGradient className="absolute top-1/2 bottom-0 md:-translate-y-[calc(40%)] right-0 translate-x-1/4 max-h-[66rem]" />
    </div>
    <Pinion component="hero">
      <div className="flex flex-col items-center justify-between nav-break:flex-row gap-4">
        <div
          className={clsx(
            'relative flex w-full flex-col flex-nowrap items-center justify-center text-center nav-break:items-start nav-break:justify-start nav-break:text-left gap-2 max-w-cols5 grow-0'
          )}
        >
          <div className="flex flex-row gap-2 items-center">
            {label && (
              <Label className={clsx('type-overline-xxs')} content={label} />
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
          {content && (
            <Text as="div" className={clsx('max-w-full')} content={content} />
          )}
          {hasLinks(links) && (
            <Links className={clsx('mt-2 space-x-2')} links={links} />
          )}
        </div>
        <HeroMedia
          classNames={{ media: '[&_img]:object-left-top' }}
          media={media}
          overflow={overflowMedia}
        />
      </div>
    </Pinion>
  </div>
)

export default Hero
