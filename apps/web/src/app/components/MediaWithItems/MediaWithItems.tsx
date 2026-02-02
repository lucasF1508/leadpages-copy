'use client';

import type {
  ContentType,
  LinkType,
  MediaType,
  PortableTextBlock,
} from '@types'
import type { ClassValue } from 'clsx'
import React, { useEffect } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion as m } from 'motion/react'
import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow'
import AnimateChangeInHeight from '@/components/Framer/AnimateChangeInHeight'
import LinkIcon from '@/components/Link/LinkIcon'
import Media from '@/components/Media'
import Text from '@/components/Text'
import useMediaQuery from '@/hooks/useMediaQuery'
import Accordion from './MediaWithItemsAccordion'
import Slider from './MediaWithItemsSlider'

export interface MediaWithItemsProps
  extends Omit<React.ComponentProps<'div'>, 'className' | 'content'> {
  className?: ClassValue
  classNames?: {
    content?: ClassValue
    contentGroup?: ClassValue
    heading?: ClassValue
    label?: ClassValue
    link?: ClassValue
    media?: ClassValue
    root?: ClassValue
    title?: ClassValue
  }
  content?: ContentType
  contentAlign?: 'left' | 'right'
  duration?: number
  items?: MediaWithItemsType[]
  links?: LinkType[]
  mediaItems?: MediaType[]
  variant?: 'dark' | 'light'
}

export interface MediaWithItemsType {
  _key?: string
  content: PortableTextBlock[]
  duration?: number
  interval?: number
  isActive?: boolean
  link: LinkType
  title: string
  value: string
}

export interface MediaWithItemsContainer {
  className?: ClassValue
  duration?: number
  items: MediaWithItemsType[]
  variant?: 'dark' | 'light'
}

interface MediaWithItemsStore {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export const useMediaWithItemsStore = create<MediaWithItemsStore>((set) => ({
  activeIndex: 0,
  setActiveIndex: (index: number) => set({ activeIndex: index }),
}))

const MediaWithItems = ({
  className,
  classNames,
  content,
  duration = 10,
  items,
  mediaItems,
  title,
  variant = 'dark'
}: MediaWithItemsProps) => {
  const isDesktop = useMediaQuery('(min-width: 900px)')
  const { activeIndex, setActiveIndex } = useMediaWithItemsStore(
    useShallow((state) => ({ 
      activeIndex: state.activeIndex,
      setActiveIndex: state.setActiveIndex
     })),
  )

  const hasSingleMedia = mediaItems?.length === 1
  const media = hasSingleMedia ? mediaItems[0] : mediaItems?.[activeIndex]

  useEffect(() => {
    if (activeIndex !== 0) {
      setActiveIndex(0)
    }
  }, [isDesktop])
  
  const handleSetActiveIndex = (index: number) => {
    if (!mediaItems?.length) return 

    if (index < 0) {
      setActiveIndex(mediaItems?.length - 1)
      return
    }
    if (index < mediaItems.length) {
      setActiveIndex(index)
      return
    } 
    
    setActiveIndex(0)
  }

  const isLight = variant === 'light'

  return (
    <div className={clsx(
      isLight && 'bg-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 md:py-16',
      isLight && 'media-with-items-light'
    )}>
      <div className={clsx(
        'flex flex-col gap-5 sm:gap-7 md:gap-8 md:gap max-md:max-w-[33.5rem] align-center',
        isLight && 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
      )}>
        <div className='flex justify-between md:items-end gap-4 max-md:flex-col'>
          <div className={clsx('max-w-cols8')}>
            {title && 
              <div>
                <Text
                  as="div"
                  className={clsx(
                    'type-title-t7 sm:type-title-t6 md:type-title-t5 !font-normal',
                    isLight && 'text-[#1a1a1a]',
                    classNames?.title
                  )}
                  content={title}
                />
              </div>
            }
            {content && 
              <div className='mt-2'>
                <Text
                  as="div"
                  className={clsx(
                    isLight && 'text-[#1a1a1a]',
                    classNames?.content
                  )}
                  content={content}
                />
              </div>
            }
          </div>
          <div className='flex gap-2 sm:gap-3 md:gap-4'>
            <div className={clsx(
              'link-button-secondary border-none w-6 h-6 rotate-180',
              isLight && 'bg-[#9061EE] hover:bg-[#a67ff3] [&_svg]:text-white'
            )} onClick={() => handleSetActiveIndex(activeIndex - 1)}>
              <LinkIcon/>
            </div>
            <div className={clsx(
              'link-button-secondary border-none w-6 h-6',
              isLight && 'bg-[#9061EE] hover:bg-[#a67ff3] [&_svg]:text-white'
            )} onClick={() => handleSetActiveIndex(activeIndex + 1)}>
              <LinkIcon/>
            </div>
          </div>
        </div>
      <div
        className={clsx(
          'gap-5 md:flex-row-reverse flex flex-col flex-nowrap items-start',
          className,
          classNames?.root
        )}
      >
        <div
          className={clsx(
            'w-full',
            isDesktop && 'max-w-cols7',
            classNames?.media
          )}
        >
          <AnimateChangeInHeight
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <AnimatePresence initial={false} mode="popLayout">
              {media && (
                <m.div
                  animate={{ opacity: 1 }}
                  className={clsx(
                    "max-w-tablet-cols7 md:max-w-none mx-auto w-full relative aspect-1 rounded-lg md:rounded-xl overflow-hidden",
                    isLight && 'bg-white'
                  )}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  key={hasSingleMedia ? 'media' : activeIndex}
                >
                  <Media
                    fill
                    media={media}
                  />
                </m.div>
              )}
            </AnimatePresence>
          </AnimateChangeInHeight>
        </div>
        {!!items?.length &&        
        <div
          className={clsx(
            'w-full',
            isDesktop && 'max-w-cols5',
          )}
        >
          {isDesktop ? (
            <Accordion
              duration={duration}
              items={items}
              variant={variant}
            />
          ) : (
            <Slider
              className="max-w-tablet-cols7 mx-auto"
              duration={duration}
              items={items}
              variant={variant}
            />
          )}
        </div>}
      </div>
    </div>
    </div>
  )
}

export default MediaWithItems
