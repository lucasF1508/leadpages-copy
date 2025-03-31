import React from 'react'
import clsx from 'clsx'
import { create } from 'zustand'
import Image from '../Image'
import NavColumnCarouselForeground from './NavColumnCarouselForeground'
import { SanityImageProps } from '@/types'

interface NavColumnCarouselProps {
  rows: any
  templateBackgroundImage: SanityImageProps
}

interface NavColumnCarouselStore {
  clearTimeoutId: () => void
  imageData: SanityImageProps | null
  isTimerActive: boolean
  setIsTimerActive: (isTimerActive: boolean) => void
  setTimeoutId: (id: number | NodeJS.Timeout) => void
  timeoutId: number | null | NodeJS.Timeout
  updateImageData: (imageData: SanityImageProps) => void
}

export const useCarouselStore = create<NavColumnCarouselStore>((set) => ({
  clearTimeoutId: () => set({ timeoutId: null }),
  imageData: null,
  isTimerActive: true,
  setIsTimerActive: (isTimerActive: boolean) => set({ isTimerActive }),
  setTimeoutId: (id: number | NodeJS.Timeout) => set({ timeoutId: id }),
  timeoutId: null,
  updateImageData: (imageData: any) => set({ imageData }),
}))

const NavColumnCarousel = ({
  rows,
  templateBackgroundImage
}: NavColumnCarouselProps) => {
  const slides = rows.reduce((acc: any, row: any) => {
    const filteredItems = row.items.filter((item: any) => item.templateImage)
    return acc.concat(filteredItems)
  }, [])

  return (
      <div className={clsx('hidden md:flex justify-center content-end w-full max-w-cols4 bg-grey-50 rounded-md overflow-hidden relative backdrop-blur-md')}>
        <div className='absolute inset-0'>
          <Image image={templateBackgroundImage} />
        </div>
        <NavColumnCarouselForeground 
          slides={slides} 
          templateCarouselIdleImages={rows[0].items}  
        />
      </div>
    )}

export default NavColumnCarousel
