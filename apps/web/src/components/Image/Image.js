import React, { useState, useEffect } from 'react'
import NextImage from 'next/legacy/image'
import useImageParserLegacy from '@hooks/useImageParser'
import useImageParser from '@/hooks/useImageParser'
import { m as motion, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { styled } from '@design'

const $Figure = styled(motion.figure, {
  position: 'relative',
  w: '100%',

  img: {
    objectFit: 'cover',
    objectPosition: 'center center',
  },

  variants: {
    type: {
      fluid: {
        position: 'absolute',
        left: '0',
        top: '0',
        h: '100%',
      },
      static: {
        '&::before': {
          d: 'block',
          content: `''`,
          w: '100%',
        },
      },
    },
    shape: {
      round: {
        br: '$round',
        o: 'hidden',
      },
    },
  },
})

const Image = ({
  className,
  image = {},
  type = 'static',
  shape = '',
  layout = 'fill',
  css: orgCss = {},
  priority,
  condition,
  hasPlaceholder = true,
  objectFit,
  objectPosition,
  sizes,
  lazyBoundary = '1000px',
  alt: orgAlt,
  isLegacy = true,
  ...props
}) => {
  const parsedImage = isLegacy ? useImageParserLegacy(image) : useImageParser(image)
  const { url, width, height, placeholderType, lqip, alt, title, mimeType } =
    parsedImage

  if (!url) return null

  const css = {
    ...(type === 'static' && width && height && width > 0 && height > 0
      ? {
          '&::before': {
            pb: `${(height / width) * 100}%`,
          },
        }
      : {}),
    ...orgCss,
  }

  const [isLoaded, setIsLoaded] = useState(false)
  const hasLoaded = useMotionValue(false)
  const hasBeenInView = useMotionValue(false)
  const [ref, inView, entry] = useInView({
    threshold: 0,
  })

  // This will only trigger if the image is not in cache
  const handleLoad = (e) => {
    if (e.target.srcset) {
      hasLoaded.set(true)
    }
  }

  useEffect(() => {
    if (!entry) return

    if (!hasLoaded.get()) {
      const img = entry.target.querySelector('img')
      if (img) {
        hasLoaded.set(img.complete)
      }
    }

    if (inView && !hasBeenInView.get()) {
      hasBeenInView.set(true)
    }

    if (inView && hasLoaded.get() && !isLoaded) {
      setIsLoaded(true)
    }

    const unsubscribeHasLoaded = hasLoaded.onChange((hasLoadedValue) => {
      if (hasLoadedValue && (hasBeenInView.get() || inView)) {
        setIsLoaded(true)
      }
    })

    // eslint-disable-next-line consistent-return
    return () => unsubscribeHasLoaded()
  }, [inView])

  return (
    <$Figure
      ref={ref}
      className={className}
      width={width}
      height={height}
      type={type}
      shape={shape}
      css={css}
      {...props}
    >
      <NextImage
        onLoad={handleLoad}
        src={url}
        layout={layout}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        alt={orgAlt || alt || url}
        title={orgAlt || title}
        placeholder={hasPlaceholder ? placeholderType : undefined}
        blurDataURL={hasPlaceholder ? lqip : undefined}
        objectFit={objectFit}
        objectPosition={objectPosition}
        sizes={sizes}
        unoptimized={mimeType === 'image/svg+xml'}
        lazyBoundary={lazyBoundary}
      />
    </$Figure>
  )
}

export default Image
