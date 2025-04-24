'use client'

import type { MediaWithTextType } from './MediaWithText';
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import { create } from 'zustand'
import MediaWithText from './MediaWithText'
interface MediaWithTextStickyProps
  extends Omit<React.ComponentProps<'div'>, 'className' | 'content'> {
  align?: 'left' | 'right'
  className?: ClassValue
  classNames?: {
    item?: ClassValue
    root?: ClassValue
  }
  items:MediaWithTextType[]
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