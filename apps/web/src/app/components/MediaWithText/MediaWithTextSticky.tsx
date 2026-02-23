'use client'

import type { BlockStylesType } from '@/components/PortableText'
import type { MediaWithTextType } from './MediaWithText'
import type { ClassValue } from 'clsx'
import React from 'react'
import clsx from 'clsx'
import { create } from 'zustand'
import MediaWithText from './MediaWithText'

interface MediaWithTextStickyProps
  extends Omit<React.ComponentProps<'div'>, 'className' | 'content'> {
  align?: 'left' | 'right'
  blockStyles?: BlockStylesType
  className?: ClassValue
  classNames?: {
    item?: ClassValue
    root?: ClassValue
  }
  items: MediaWithTextType[]
  linkButtonVariant?: 'default' | 'green' | null
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
  blockStyles,
  className,
  classNames,
  items,
  linkButtonVariant,
}: MediaWithTextStickyProps) => (
      <div className={clsx('flex flex-col gap-12 relative', className, classNames?.root)}>
        {
          items.map(({_key, blockStyles: itemBlockStyles, ...item}) => (
            <MediaWithText
              _key={_key}
              key={_key}
              blockStyles={itemBlockStyles ?? blockStyles}
              linkButtonVariant={linkButtonVariant}
              {...item}
            />
          ))
        }
      </div>
    )

export default MediaWithTextSticky