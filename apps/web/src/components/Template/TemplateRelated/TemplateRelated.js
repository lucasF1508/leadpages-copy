import { styled } from '@design'
import useCarousel from '@hooks/useCarousel'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FiChevronLeft as ArrowLeft } from '@react-icons/all-files/fi/FiChevronLeft'
import { FiChevronRight as ArrowRight } from '@react-icons/all-files/fi/FiChevronRight'
import Link from 'next/link'
import { getTemplateUrl } from '@lib/utils/templates'

const $TemplateRelated = styled('div', {
  d: 'flex',
  fd: 'column',
  gap: '$3',
})

const $Slider = styled('div', {
  position: 'relative',
})

const $SliderGradient = styled('div', {
  bottom: 0,
  top: -5,
  position: 'absolute',
  zIndex: '$aboveContent',
  width: '4.125rem',

  variants: {
    side: {
      left: {
        right: '100%',
        background:
          'linear-gradient(90deg, #F9F9F9 67.37%, rgba(249, 249, 249, 0) 100%);',
      },
      right: {
        left: '100%',
        background:
          'linear-gradient(90deg, rgba(249, 249, 249, 0) 0%, #f9f9f9 32.63%);',
      },
    },
  },
})

const $SliderGradientCover = styled('div', {
  bottom: 0,
  top: -5,
  position: 'absolute',
  zIndex: '$aboveContent',
  width: '100vw',

  variants: {
    side: {
      left: {
        right: 'calc(100% + 4.125rem)',
        bc: '$gray',
      },
      right: {
        left: 'calc(100% + 4.125rem)',
        bc: '$gray',
      },
    },
  },
})

const $SliderInner = styled('div', {
  position: 'relative',
  d: 'flex',
  ff: 'row wrap',
  jc: 'center',
  ai: 'flex-end',
})

const $Slides = styled('div', {
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
  f: '0 0 11.75rem',
  w: '100%',
  d: 'flex',
  cursor: 'pointer',
  fd: 'column',
  gap: '$1',

  '@>1025': {
    f: '0 0 23.625rem',
    gap: '$2',
  },
})

const $SlideImage = styled('div', {
  width: '11.75rem',
  height: '7.5rem',
  boxShadow:
    '0px 6px 12px rgba(15, 12, 9, 0.06), 0px 0px 4px rgba(15, 12, 9, 0.10)',
  position: 'relative',

  '@>1025': {
    width: '23.625rem',
    height: '15rem',
  },
})

const $SliderNav = styled('div', {
  d: 'flex',
  jc: 'space-between',
  pb: '$1',

  '@>s': {
    ai: 'center',
  },
})

const $Title = styled('h2', {
  type: 'h3',
  maxWidth: '12.25rem',
  fontWeight: '$bold',
  letterSpacing: '-0.005em',

  '@>s': {
    maxWidth: 'none',
  },
})

const $SlideTitle = styled('h3', {
  typeSizes: 'sm',
  lineHeight: '$l',
  mt: '$1',

  '@>1025': {
    typeSizes: 'base',
  },
})

const $Arrows = styled('div', {
  d: 'flex',
  ai: 'flex-start',
  jc: 'center',
  gap: '$3',
})

const $Arrow = styled('div', {
  cursor: 'pointer',
  background: '$white',
  br: '$round',
  p: '$1_5',
  d: 'flex',
  ai: 'center',
  color: '$primary',
  transition: 'all $duration$fast $easing$base',

  '&:hover': {
    bs: '$navArrow',
  },
})

const $ProgressBar = styled('div', {
  width: '100%',
  height: '$space$1',
  bc: '$lightGray3',
})

const $ProgressIndicator = styled('div', {
  height: '100%',
  bc: '$purple',
})

const TemplateRelated = ({ relatedTemplatesData }) => {
  const { ref, api, scrollNext, scrollPrev } = useCarousel({
    speed: 10,
    loop: false,
    align: 'start',
    inViewThreshold: 1,
    containScroll: 'trimSnaps',
  })

  const [progress, setProgress] = useState(0)
  const [progressOffset, setProgressOffset] = useState(0)
  const progressBarRef = useRef(null)

  const onScroll = useCallback(() => {
    if (!api) return
    const scrollProgress = Math.max(0, Math.min(1, api.scrollProgress()))
    setProgress(scrollProgress)
  }, [api])

  useEffect(() => {
    if (!api) return
    api.on('scroll', onScroll)
    api.on('resize', onScroll)
    onScroll()
  }, [api, onScroll])

  useEffect(() => {
    if (!progressBarRef || !relatedTemplatesData) return

    const value =
      progress * progressBarRef.current.offsetWidth -
      (1 / relatedTemplatesData.length) * progressBarRef.current.offsetWidth

    setProgressOffset(value > 0 ? value : 0)
  }, [progress])

  if (!relatedTemplatesData?.length) return null

  return (
    <$TemplateRelated>
      <$SliderNav>
        <$Title>More templates you’ll love</$Title>
        <$Arrows>
          <$Arrow onClick={scrollPrev}>
            <ArrowLeft />
          </$Arrow>
          <$Arrow onClick={scrollNext}>
            <ArrowRight />
          </$Arrow>
        </$Arrows>
      </$SliderNav>
      <$Slider>
        <$SliderInner ref={ref}>
          <$Slides>
            {relatedTemplatesData.map(
              ({ _id, thumbnailUrlWebp, title, kind, slug }) => {
                if (!slug?.current) return null

                return (
                  <$Slide key={_id}>
                    <Link href={`${getTemplateUrl(kind, slug.current)}`}>
                      <a>
                        <$SlideImage>
                          <Image
                            src={thumbnailUrlWebp}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="top"
                          />
                        </$SlideImage>
                        <$SlideTitle>{title}</$SlideTitle>
                      </a>
                    </Link>
                  </$Slide>
                )
              }
            )}
          </$Slides>
        </$SliderInner>
        <$SliderGradient side="left" />
        <$SliderGradientCover side="left" />
        <$SliderGradient side="right" />
        <$SliderGradientCover side="right" />
      </$Slider>
      <$ProgressBar ref={progressBarRef}>
        <$ProgressIndicator
          css={{
            width: `${(1 / relatedTemplatesData.length) * 100}%`,
            transform: `translateX(${progressOffset}px)`,
          }}
        />
      </$ProgressBar>
    </$TemplateRelated>
  )
}

export default TemplateRelated
