import React from 'react'
import { styled } from '@design'

const $SliderPagination = styled('div', {
  position: 'relative',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  z: '$aboveContent',
  w: '100%',
  mt: '$5',
  gap: '$1',
})

const $SliderPaginationButton = styled('button', {
  position: 'relative',
  d: 'block',
  my: '-$2',
  h: '$space$2',
  width: '$space$5',
  flex: '0 0 auto',
  cursor: 'pointer',
  appearance: 'none',

  '&::before': {
    position: 'absolute',
    top: '50%',
    left: 0,
    w: '100%',
    h: '2px',
    mt: '-1px',
    d: 'block',
    content: '',
    bc: '$grey5',
    transition: 'background-color $base',
  },

  '&:hover::before': {
    bc: '$primary',
  },

  variants: {
    isActive: {
      true: {
        '&::before': {
          bc: '$primary',
        },
      },
    },
  },
})

export default function AnimatedCardsSliderPagination({
  slides = [],
  scrollPrev,
  scrollNext,
  canScroll,
  api,
  indices,
  ...props
}) {
  if (slides.length < 2) return null

  const handleClick = (event, index) => {
    event.preventDefault()
    api.scrollTo(index)
  }

  return (
    <$SliderPagination {...props}>
      {slides.map((slide, index) => {
        const isActive =
          indices?.active === index || (indices?.active === null && index === 0)
        return (
          <$SliderPaginationButton
            isActive={isActive}
            key={`button-${index}`}
            onClick={(event) => handleClick(event, index)}
          />
        )
      })}
    </$SliderPagination>
  )
}
