import { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const readSlideHeights = (emblaApi) => {
  const container = window.getComputedStyle(emblaApi.containerNode())
  return emblaApi.slideNodes().map((slideNode) => {
    const slideInner = slideNode.querySelector('*')

    const height = [
      window.getComputedStyle(slideInner).getPropertyValue('height'),
      container.getPropertyValue('padding-top'),
      container.getPropertyValue('padding-bottom'),
    ].reduce((total, value) => parseInt(total, 10) + parseInt(value, 10))

    return `${height}px`
  })
}

export const adaptContainerToSlide = (emblaApi, slideHeights, setHeight) => {
  const currentSlideHeight = slideHeights[emblaApi.selectedScrollSnap()]
  setHeight(currentSlideHeight)
}

export const enabledAutoHeight = (emblaApi, setHeight) => {
  let slideHeights = []
  const storeSlideHeights = () => {
    slideHeights = readSlideHeights(emblaApi)
  }
  const setContainerHeight = () =>
    adaptContainerToSlide(emblaApi, slideHeights, setHeight)

  emblaApi
    .on('init', storeSlideHeights)
    .on('init', setContainerHeight)
    .on('resize', storeSlideHeights)
    .on('resize', setContainerHeight)
    .on('select', setContainerHeight)
}

const useCarousel = (args = { loop: false }) => {
  const { autoplay, delay = 3500 } = args
  const [emblaRef, emblaApi] = useEmblaCarousel(
    args,
    autoplay && [Autoplay({ delay })]
  )
  const [height, setHeight] = useState('auto')
  const [canScroll, setCanScroll] = useState(null)
  const [indices, setIndices] = useState({
    prev: null,
    active: null,
  })

  const updateIndices = useCallback(() => {
    if (emblaApi) {
      setIndices({
        prev: emblaApi?.previousScrollSnap(),
        active: emblaApi?.selectedScrollSnap(),
      })
    }
  }, [emblaApi?.selectedScrollSnap()])

  const updateCanScroll = useCallback(() => {
    if (emblaApi) {
      setCanScroll({
        next: emblaApi?.canScrollNext(),
        prev: emblaApi?.canScrollPrev(),
        slidesInView: emblaApi?.slidesInView(),
        scrollProgress: emblaApi?.scrollProgress(),
      })
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
      updateCanScroll()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      updateCanScroll()
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      emblaApi
        .on('init', updateCanScroll)
        .on('resize', updateCanScroll)
        .on('select', updateCanScroll)
        .on('init', updateIndices)
        .on('resize', updateIndices)
        .on('select', updateIndices)

      Object.keys(args).forEach((key) => {
        const value = args[key]
        if (!value) return
        switch (key) {
          case 'autoHeight':
            enabledAutoHeight(emblaApi, setHeight)
            break
          case 'fade':
            if (value) {
              emblaApi.dangerouslyGetEngine().translate.toggleActive(false)
            }
            break
          default:
            break
        }
      })
    }

    return () => {
      if (emblaApi) {
        emblaApi.destroy()
      }
    }
  }, [emblaApi])

  return {
    ref: emblaRef,
    api: emblaApi,
    height,
    setHeight,
    scrollNext,
    scrollPrev,
    canScroll,
    indices,
  }
}

export default useCarousel
