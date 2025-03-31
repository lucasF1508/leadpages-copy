'use client'

import type { SanityImageProps } from '@types'
import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import useEventListener from '@/hooks/useEventListener'
import useImageRatio from '@/hooks/useImageRatio'

export interface MarqueeProps {
  duration?: number
  logos: SanityImageProps[]
}

const MarqueeRow = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ duration = 15, logos }, ref) => {
    const styles = logos
      .map((logo) => {
        const { dimension } = useImageRatio(logo, logo?.maxHeight || 32)
        const selector = `marquee-logo-${logo?._key}`

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
          'flex flex-row flex-nowrap items-center justify-start',
          'animate-[scroll-left_300ms_linear_infinite]'
        )}
        ref={ref}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {logos.map((logo) => (
          <div
            className={clsx(
              'ml-6 flex-[0_0_auto] sm:ml-9',
              `marquee-logo-${logo?._key}`
            )}
            key={logo?._key}
          >
            <Image
              className={clsx('h-full w-full')}
              hasPlaceholder={false}
              image={logo}
            />
          </div>
        ))}
      </div>
    )
  }
)

const Marquee = ({ duration: _duration, logos }: MarqueeProps) => {
  if (!logos) return null

  const duration = _duration || logos.length * 5
  const ref = useRef<HTMLDivElement>(null)
  const [number, setNumber] = useState(2)

  const getCloneCount = () => {
    if (!ref.current) return 0

    const box = ref.current.getBoundingClientRect()
    return Math.ceil(window.innerWidth / box.width)
  }

  useEffect(() => {
    setNumber(getCloneCount())
  }, [])

  useEventListener('resize', () => {
    const cloneCount = getCloneCount()

    if (cloneCount !== number) {
      setNumber(cloneCount)
    }
  })

  return (
    <div
      className={clsx(
        '-ml-6 flex flex-row flex-nowrap items-center justify-start self-start sm:-ml-9'
      )}
      key={number}
    >
      <MarqueeRow duration={duration} logos={logos} ref={ref} />
      {[...Array(number)].map((i, index) => (
        <MarqueeRow
          duration={duration}
          key={`clone-${index + 1}`}
          logos={logos}
        />
      ))}
    </div>
  )
}

export default Marquee
