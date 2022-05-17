import React from 'react'
import { styled } from '@design'
import { FiArrowLeft as ArrowLeft } from '@react-icons/all-files/fi/FiArrowLeft'
import { FiArrowRight as ArrowRight } from '@react-icons/all-files/fi/FiArrowRight'

export const $SliderNav = styled('div', {
  position: 'relative',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-end',
  gap: '$2',
  z: '$aboveContent',
  w: '100%',
  mt: '$2',
})

export const $SliderNavButton = styled('button', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  c: '$border',
  cursor: 'pointer',
  appearance: 'none',
  opacity: 1,
  transform: 'opacity $base',
  background: '$backgroundContrast',
  br: '$m',
  h: '4.25rem',
  w: '4.25rem',

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

export default function SliderNav({
  scrollPrev,
  scrollNext,
  canScroll,
  ...props
}) {
  return (
    <$SliderNav {...props}>
      <$SliderNavButton
        type="button"
        onClick={scrollPrev}
        canScroll={canScroll?.prev && !canScroll?.allInView}
        aria-label="Previous Slide"
      >
        <ArrowLeft />
      </$SliderNavButton>
      <$SliderNavButton
        type="button"
        onClick={scrollNext}
        aria-label="Next Slide"
        canScroll={canScroll?.next && !canScroll?.allInView}
      >
        <ArrowRight />
      </$SliderNavButton>
    </$SliderNav>
  )
}
