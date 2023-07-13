import React from 'react'
import { styled } from '@design'
import { FiChevronLeft as ArrowLeft } from '@react-icons/all-files/fi/FiChevronLeft'
import { FiChevronRight as ArrowRight } from '@react-icons/all-files/fi/FiChevronRight'

const $SliderNav = styled('div', {
  position: 'relative',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  gap: '$2',
  z: '$aboveContent',
  w: '100%',
  mt: '$7',
})

const $SliderNavButton = styled('button', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  c: '$border',
  cursor: 'pointer',
  appearance: 'none',
  opacity: 1,
  transform: 'opacity $base',
  background: '$white',
  br: '$round',
  h: '2.5rem',
  w: '2.5rem',

  '& svg': {
    stroke: '$primary',
    w: '$space$3',
    h: '$space$3',
  },

  '&:hover': {
    color: '$brand',
  },

  variants: {
    canScroll: {
      false: {
        opacity: 0.6,
      },
    },
  },
})

export default function AnimatedCardsSliderNav({
  scrollPrev,
  scrollNext,
  canScroll,
  numSlides,
  activeIndex,
  ...props
}) {
  return (
    <$SliderNav {...props}>
      <$SliderNavButton
        type="button"
        onClick={scrollPrev}
        canScroll={activeIndex > 0}
        aria-label="Previous Slide"
      >
        <ArrowLeft />
      </$SliderNavButton>
      <$SliderNavButton
        type="button"
        onClick={scrollNext}
        aria-label="Next Slide"
        canScroll={activeIndex < numSlides - 1}
      >
        <ArrowRight />
      </$SliderNavButton>
    </$SliderNav>
  )
}
