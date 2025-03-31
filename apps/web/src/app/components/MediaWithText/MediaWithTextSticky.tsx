'use client'

import type { ContentType,  MediaType } from '@types'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import { create } from 'zustand'
import Media, {hasMedia} from '@/components/Media'
import Text from '@/components/Text'

type MediaWithTextStickyItemType = {
  _key: string
  className?: ClassValue
  content?: ContentType
  media: MediaType
  pillContent?: string
}
interface MediaWithTextStickyProps
  extends Omit<React.ComponentProps<'div'>, 'className' | 'content'> {
  align?: 'left' | 'right'
  className?: ClassValue
  classNames?: {
    item?: ClassValue
    root?: ClassValue
  }
  items:MediaWithTextStickyItemType[]
}

interface MediaWithTextStore {
  activeItem: string
  itemProgress: {[x: string]: number}
  setActiveItem: (index: string) => void
  setItemProgress: (index: string, progress: number) => void
}

export const useMediaWithTextStore = create<MediaWithTextStore>((set) => ({
  activeItem: '',
  itemProgress: {},
  setActiveItem: (index: string) => set({ activeItem: index }),
  setItemProgress: (_key: string, progress: number) => set((state) => ({ itemProgress: { ...state.itemProgress, [_key]: progress } })),
}))

const MediaWithText = ({
  content,
  media,
  pillContent,
}: MediaWithTextStickyItemType) => <div
      className='flex flex-col md:flex-row md:flex-nowrap gap-y-7 gap-x-4 items-center justify-center xs:px-3 md:px-0 max-w-[30rem] md:max-w-none mx-auto h-full w-full'
    >
      {hasMedia(media) &&
        <div
          className='flex-[1_1_auto] w-auto md:w-full ml-0 -mr-6 md:mr-0 md:max-w-cols7 text-green-300'
        >
          <Media 
            media={media} 
            priority 
          /> 
        </div>
      }
      <div
        className='flex flex-[1_1_auto] w-full md:max-w-cols4 lg:max-w-cols5'
      >
        <div>
          {pillContent && (
            <div className='inline-block mb-2 rounded-lg bg-gradient-dark-purple type-overline-xxs py-[0.25rem] px-1.5 text-light'>
              {pillContent}
            </div>
          )}
          {content && (
            <Text
              as="div"
              content={content}
            />
          )}
        </div>
      </div>
    </div>

const MediaWithTextSticky = ({
  className,
  classNames,
  items,
}: MediaWithTextStickyProps) => (
      <div className={clsx('flex flex-col gap-12 relative', className, classNames?.root)}>
        {
          items.map(({_key, ...item}) => (
            <MediaWithText 
              _key={_key}
              key={_key}
              {...item} 
            />  
          ))
        }
      </div>
    )

export default MediaWithTextSticky