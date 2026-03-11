'use client'

import type { LinkProps, SanityImageProps } from '@types'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import Link, { hasLink } from '@/components/Link'
import useEventListener from '@/hooks/useEventListener'
import useImageRatio from '@/hooks/useImageRatio'

export type LogoWithLink = {
  link: LinkProps
} & SanityImageProps

export interface MarqueeProps {
  duration?: number
  images: LogoWithLink[]
  logos?: LogoWithLink[]
  maxHeight?: number
  static?: boolean
  type: 'image' | 'logo'
  visibility?: 'visible' | 'invisible'
}

const MarqueeRow = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ duration = 15, images, maxHeight, static: isStatic, type }, ref) => {
    const selectors: string[] = []
    const styles = images
      .map((image) => {
        const { dimension } = useImageRatio(
          image,
          maxHeight || image?.maxHeight || 32
        )
        const selector = `marquee-image-${image?._key}`
        selectors.push(selector)

        return `
        .${selector} { width: calc(${dimension} * 0.66); }
        @media (min-width: 640px) {
          .${selector} { width: ${dimension}; }
        }
      `
      })
      .join('\n')
    return (
      <div
        className={clsx(
          'flex flex-row flex-nowrap items-center',
          isStatic ? 'w-full justify-between' : 'justify-start animate-[scroll-left_300ms_linear_infinite]'
        )}
        ref={ref}
        style={!isStatic ? { animationDuration: `${duration}s` } : undefined}
      >
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {images.map((image, index) => (
          <div
            className={clsx(
              'flex-[0_0_auto]',
              selectors[index],
              !isStatic && (type === 'logo' ? 'ml-6 sm:ml-9' : 'ml-3 sm:ml-2')
            )}
            key={image?._key}
          >
            {hasLink(image?.link) ? (
              <Link {...image?.link} className="w-full block">
                <Image
                  className={clsx('h-full w-full')}
                  hasPlaceholder={type === 'logo' ? false : undefined}
                  image={image}
                />
              </Link>
            ) : (
              <Image
                className={clsx('h-full w-full')}
                hasPlaceholder={type === 'logo' ? false : undefined}
                image={image}
              />
            )}
          </div>
        ))}
      </div>
    )
  }
)

const MOBILE_MAX_WIDTH = 767

const Marquee = ({
  duration: _duration,
  images: _images,
  logos,
  maxHeight,
  static: isStatic,
  type,
  visibility = 'visible',
}: MarqueeProps) => {
  if (visibility === 'invisible') return null
  const images = _images || logos
  if (!images?.length) return null

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
    const onChange = () => setIsMobile(mq.matches)
    setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  /** En mobile siempre marquee en movimiento aunque esté seleccionado estático */
  const effectiveStatic = isStatic && !isMobile

  const duration = _duration || images.length * 5
  const ref = useRef<HTMLDivElement>(null)
  const [number, setNumber] = useState(2)

  const getCloneCount = () => {
    if (!ref.current) return 0

    const box = ref.current.getBoundingClientRect()
    return Math.ceil(window.innerWidth / box.width)
  }

  useEffect(() => {
    if (!effectiveStatic) setNumber(getCloneCount())
  }, [effectiveStatic])

  useEventListener('resize', () => {
    if (effectiveStatic) return
    const cloneCount = getCloneCount()

    if (cloneCount !== number) {
      setNumber(cloneCount)
    }
  })

  const rowProps = {
    duration,
    images,
    maxHeight,
    static: effectiveStatic,
    type,
  }

  return (
    <div
      className={clsx(
        'flex flex-row flex-nowrap items-center self-start',
        effectiveStatic ? 'w-full' : clsx('justify-start sm:-ml-9', type === 'logo' ? '-ml-6 sm:-ml-9' : '-ml-3 sm:-ml-4')
      )}
      key={effectiveStatic ? 'static' : number}
    >
      {effectiveStatic ? (
        <MarqueeRow {...rowProps} ref={ref} />
      ) : (
        <>
          <MarqueeRow {...rowProps} ref={ref} />
          {[...Array(number)].map((i, index) => (
            <MarqueeRow {...rowProps} key={`clone-${index + 1}`} />
          ))}
        </>
      )}
    </div>
  )
}

export default Marquee
