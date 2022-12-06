import React, { useState, useEffect } from 'react'
import NextImage from 'next/image'
import useImageParser from '@hooks/useImageParser'
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
  lazyBoundary = '501px',
  alt: orgAlt,
  ...props
}) => {
  const parsedImage = useImageParser(image)
  const { url, width, height, placeholderType, lqip, alt, title } = parsedImage

  if (!url) return null

  const css = {
    ...(type === 'static'
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
      hasLoaded.set(entry.target.querySelector('img').complete)
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
        alt={orgAlt || alt || url}
        title={orgAlt || title}
        placeholder={hasPlaceholder ? placeholderType : undefined}
        blurDataURL={hasPlaceholder ? lqip : undefined}
        objectFit={objectFit}
        objectPosition={objectPosition}
        sizes={sizes}
        lazyBoundary={lazyBoundary}
      />
    </$Figure>
  )
}

export default Image
