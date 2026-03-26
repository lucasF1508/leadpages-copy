import React, { useEffect } from 'react'
import clsx from 'clsx'
import Autoplay from 'embla-carousel-autoplay'
import { motion as m } from 'motion/react'
import Link from '@/components/Link'
import Text from '@/components/Text'
import useCarousel from '@/hooks/useCarousel'
import { type MediaWithItemsContainer, useMediaWithItemsStore } from './MediaWithItems'

const MediaWithItemsSlider = ({
  className,
  duration = 10,
  items,
  variant = 'dark',
}: MediaWithItemsContainer) => {
  const isLight = variant === 'light'
  const setActiveIndex = useMediaWithItemsStore((state) => state.setActiveIndex)
  const activeIndex = useMediaWithItemsStore((state) => state.activeIndex)

  const { api, indices, ref } = useCarousel(
    {
      align: 'start',
      autoHeight: false,
      inViewThreshold: 1,
      loop: false,
      wheelGesture: true,
    },
    [
      Autoplay({
        delay: duration * 1000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  )

  useEffect(() => {
    const autoplay = api?.plugins()?.autoplay
    if (!autoplay) return

    api?.on('reInit', () => {
        setActiveIndex(indices?.active || 0)
      })
      .on('select', () => setActiveIndex(api.selectedScrollSnap()))
  }, [JSON.stringify(api)])

  useEffect(() => {
    api?.scrollTo(activeIndex)
  }, [activeIndex])

  return (
    <div
      className={clsx(
        'relative flex flex-row flex-wrap items-end justify-start',
        className
      )}
      ref={ref}
    >
      <m.div
        className={clsx(
          'max-w-tablet-cols7 flex w-full cursor-grab flex-row flex-nowrap items-stretch justify-start gap-2 active:cursor-grabbing'
        )}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {items &&
          items.map(({ _key, content, link, title }, i) => (
            <div
              className={clsx(
                'max-w-tablet-cols7 relative w-full flex-[0_0_auto] overflow-hidden transition-opacity duration-300',
                activeIndex === i ? 'opacity-100' : 'opacity-30'
              )}
              key={_key}
            >
              <div className='h-px w-full bg-gradient-border'/>
                <div
                  className={clsx(
                    'px-xl py-4 relative flex w-full flex-[0_0_auto] flex-col items-start gap-x-3 gap-y-2 transition-colors sm:flex-row'
                  )}
                >
                  <div>
                    <span
                      className="type-body-md sm:type-body-lg font-normal block"
                      style={isLight ? { color: '#1a1a1a' } : undefined}
                    >
                      {title}
                    </span>
                    <Text
                      as="div"
                      className={clsx(
                        'flex flex-col gap-1.5 pt-1.5 [&_*]:!my-0 [&_.list-check]:flex [&_.list-check]:flex-col [&_.list-check]:gap-1.5 type-body-sm'
                        , isLight && '[&_*]:!text-[#1a1a1a]'
                      )}
                      style={isLight ? { color: '#1a1a1a' } : undefined}
                      content={content}
                    />
                    <Link className='mt-2' {...link} />
                  </div>
                </div>
              <div className='h-px w-full bg-gradient-border-light'/>
            </div>
          ))}
      </m.div>
    </div>
  )
}

export default MediaWithItemsSlider
