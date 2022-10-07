import React, { useState, useEffect } from 'react'
import { m as motion } from 'framer-motion'
import { styled } from '@design'
import useCarousel from '@hooks/useCarousel'
import { SliderNav, SliderPagination } from '../Slider'

export const $Slider = styled('div', {
  position: 'relative',
  d: 'flex',
  ff: 'row wrap',
  jc: 'flex-start',
  ai: 'flex-end',
})

export const $Slides = styled(motion.div, {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'stretch',
  w: '100%',
  cursor: 'grab',

  '&:active': {
    cursor: 'grabbing',
  },
})

export const $Slide = styled('div', {
  position: 'relative',
  f: '0 0 auto',
  w: '100%',
  ml: '$3',

  '&:first-child': {
    ml: 0,
  },
})

const Slider = ({
  slides: slidesOrg,
  css: cssOrg = {},
  children,
  config = {},
  pagination = false,
  navigation = true,
  ...props
}) => {
  if (!slidesOrg?.length && !children) return null
  const slides = slidesOrg || children
  const { slides: slidesCss, slide: slideCss, ...css } = cssOrg
  const [isDraggable, setDraggable] = useState(true)

  const { ref, api, height, scrollNext, scrollPrev, canScroll, indices } =
    useCarousel({
      draggable: isDraggable,
      speed: 10,
      loop: false,
      align: 'start',
      autoHeight: true,
      inViewThreshold: 1,
      ...config,
    })

  useEffect(() => {
    if (!canScroll) {
      return undefined
    }
    if (canScroll?.allInView && isDraggable) {
      setDraggable(false)
    } else if (!canScroll?.allInView && !isDraggable) {
      setDraggable(true)
    }

    return undefined
  }, [canScroll])

  return (
    <$Slider ref={ref} css={css} {...props}>
      <$Slides
        animate={{
          height,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        css={slidesCss}
      >
        {!!slides?.length &&
          slides.map((slide) => (
            <$Slide key={slide?.key || slide?.props?._key} css={slideCss}>
              {slide}
            </$Slide>
          ))}
      </$Slides>
      {pagination && (
        <SliderPagination
          api={api}
          slides={slides}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
          canScroll={canScroll}
          indices={indices}
        />
      )}
      {navigation && (
        <SliderNav
          api={api}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
          canScroll={canScroll}
        />
      )}
    </$Slider>
  )
}

export default Slider
