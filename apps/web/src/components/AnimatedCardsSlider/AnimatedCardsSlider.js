import React, { useState, useEffect } from 'react'
import { AnimatePresence, m as motion } from 'framer-motion'
import { styled } from '@design'
import useCarousel from '@hooks/useCarousel'
import Media from '@components/Media'
import { useInView } from 'react-intersection-observer'
import AnimatedCardsSliderNav from './AnimatedCardsSliderNav'

const $Slider = styled('div', {
  position: 'relative',
  d: 'flex',
  ff: 'row wrap',
  jc: 'center',
  ai: 'flex-end',
})

const $Slides = styled(motion.div, {
  d: 'flex',
  ff: 'row nowrap',
  ai: 'stretch',
  w: '100%',
  gap: '$1_5',

  '@>l': {
    gap: '$3',
  },
})

const $Slide = styled('div', {
  position: 'relative',
  f: '0 0 auto',
  w: '100%',
  d: 'flex',
  cursor: 'pointer',
})

const $AnimatedMedia = styled(motion.div, {
  position: 'relative',
  mw: '46.25rem',
  mx: 'auto',
  mt: '$4_5',

  '@>m': {
    mt: '$7',
  },
})

const AnimatedCardsSlider = ({
  slides: slidesOrg,
  css: cssOrg = {},
  children,
  config = {},
  media,
  activeIndex,
  setActiveIndex,
  delay = 5,
  ...props
}) => {
  if (!slidesOrg?.length && !children) return null
  const slides = slidesOrg || children
  const { slides: slidesCss, slide: slideCss, ...css } = cssOrg
  const [isDraggable, setDraggable] = useState(false)
  const [timeoutId, setTimeoutId] = useState(null)

  const { ref: _ref, inView } = useInView({ threshold: 0.25 })

  const { ref, api, height, scrollNext, scrollPrev, canScroll } = useCarousel({
    speed: 10,
    loop: false,
    align: 'start',
    inViewThreshold: 1,
    containScroll: 'trimSnaps',
    delay: delay * 1000,
    ...config,
  })

  useEffect(() => {
    if (api) {
      api.on('pointerDown', () => api.plugins().autoplay.stop())
      api.on('pointerUp', () => {
        clearTimeout(timeoutId)
        const _activeIndex = api.selectedScrollSnap()
        setActiveIndex(_activeIndex)
      })
      api.on('select', () => {
        const _activeIndex = api.selectedScrollSnap()
        setActiveIndex(_activeIndex)
      })
      return () => {
        if (api) {
          api.destroy()
        }
      }
    }
  }, [api])

  useEffect(() => {
    if (canScroll?.slidesInView.length === slides.length) {
      setDraggable(false)
    }
    if (canScroll?.slidesInView.length < slides.length) {
      setDraggable(true)
    }
  }, [canScroll])

  useEffect(() => {
    clearTimeout(timeoutId)

    if ((activeIndex === undefined || activeIndex === null) && inView) {
      setActiveIndex(0)
    }

    if (!isDraggable && inView) {
      const id = setTimeout(() => {
        const _activeIndex = activeIndex
        setActiveIndex(
          _activeIndex === slides.length - 1 ? 0 : _activeIndex + 1
        )
      }, delay * 1000)
      setTimeoutId(id)
    }
  }, [activeIndex, isDraggable, inView])

  useEffect(() => {
    if (api) {
      api.reInit()
    }
  }, [api, isDraggable])

  const handleClick = (i) => {
    if (!isDraggable) {
      setActiveIndex(i)
    }
  }

  return (
    <>
      <$Slider ref={ref} css={css} {...props}>
        <$Slides
          animate={{
            height,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          css={slidesCss}
          ref={_ref}
        >
          {!!slides?.length &&
            slides.map((slide, i) => (
              <$Slide
                key={slide?.key || slide?.props?._key}
                css={slideCss}
                onClick={() => handleClick(i)}
              >
                {slide}
              </$Slide>
            ))}
        </$Slides>
      </$Slider>
      <AnimatePresence initial={false} exitBeforeEnter>
        {media.map(
          (_media, i) =>
            i === activeIndex && (
              <$AnimatedMedia
                key={`cardMedia-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Media
                  media={{ ..._media, autoplay: true }}
                  css={{ '.lf-player-container': { d: 'flex' } }}
                />
              </$AnimatedMedia>
            )
        )}
      </AnimatePresence>
      {isDraggable && (
        <AnimatedCardsSliderNav
          api={api}
          scrollNext={() => {
            api?.plugins()?.autoplay.stop()
            scrollNext()
          }}
          scrollPrev={() => {
            api?.plugins()?.autoplay.stop()
            scrollPrev()
          }}
          canScroll={canScroll}
          activeIndex={activeIndex}
          numSlides={slides.length}
        />
      )}
    </>
  )
}

export default AnimatedCardsSlider
