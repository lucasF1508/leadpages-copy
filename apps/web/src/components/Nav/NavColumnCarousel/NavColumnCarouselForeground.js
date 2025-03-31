import { useEffect, useState } from 'react'
import { styled } from '@design'
import { AnimatePresence, m } from 'framer-motion'
import Image from '@components/Image'
import { useCarouselStore } from './NavColumnCarousel'

const $Slider = styled('div', {
  position: 'relative',
  d: 'flex',
  ff: 'row wrap',
  jc: 'center',
  ai: 'flex-end',
  pointerEvents: 'none',
})

const $Slides = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  ai: 'stretch',
  w: '100%',

  '@>l': {
    gap: '$3',
  },
})

const $Slide = styled(m.div, {
  position: 'relative',
  f: '0 0 auto',
  w: '100%',
  d: 'flex',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'flex-end',
})

const $Image = styled('div', {
  position: 'relative',
  w: '100%',
  maxWidth: '18.125rem',
  maxHeight: '26.625rem',
  borderTopLeftRadius: '0.25rem',
  borderTopRightRadius: '0.25rem',
  overflow: 'hidden',
})

const shapeImageData = (imageData) => {
  const _data = imageData.map((data) => ({ templateImage: { ...data } }))
  return _data
}

const NavColumnCarouselForeground = ({
  slides,
  templateCarouselIdleImages,
}) => {
  const idleStartIndex = slides.length
  const [currentSlide, setCurrentSlide] = useState(idleStartIndex)
  const isTimerActive = useCarouselStore((state) => state.isTimerActive)
  const setIsTimerActive = useCarouselStore((state) => state.setIsTimerActive)
  const imageData = useCarouselStore((state) => state.imageData)

  const idleImages = shapeImageData(templateCarouselIdleImages)
  const combinedSlides = [...slides, ...idleImages]

  const handleUpdate = (_imageData) => {
    if (_imageData) {
      const {
        asset: { _id },
      } = _imageData
      const index = slides.findIndex(
        (element) => element.templateImage.asset._id === _id
      )
      setCurrentSlide(index)
      setIsTimerActive(false)
    }
  }

  useEffect(() => {
    handleUpdate(imageData)
  }, [imageData])

  useEffect(() => {
    let intervalId
    if (isTimerActive) {
      setCurrentSlide(idleStartIndex)
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          const nextSlide = (prevSlide + 1) % combinedSlides.length
          const index = nextSlide <= idleStartIndex ? idleStartIndex : nextSlide
          return index
        })
      }, 3000)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [slides.length, isTimerActive])

  return (
    <$Slider>
      <$Slides>
        <AnimatePresence initial={false} mode={'popLayout'}>
          {combinedSlides.map(
            ({ templateImage, _key }, i) =>
              currentSlide === i && (
                <$Slide
                  animate={
                    isTimerActive
                      ? {
                          opacity: 1,
                          x: 0,
                          y: 0,
                        }
                      : {
                          opacity: 1,
                          scaleX: 1,
                          scaleY: 1,
                          y: 0,
                        }
                  }
                  exit={
                    isTimerActive
                      ? { opacity: 0, x: 100, y: 100 }
                      : {
                          opacity: 0,
                          scaleX: 0.95,
                          scaleY: 0.95,
                          y: 10,
                        }
                  }
                  initial={
                    isTimerActive
                      ? { opacity: 0, x: -100, y: 100 }
                      : { opacity: 0, scaleX: 0.95, scaleY: 0.95, y: 10 }
                  }
                  key={`${_key}-${i}`}
                  transition={{ duration: 0.4 }}
                >
                  <$Image>
                    <Image image={templateImage} sizes="300px" />
                  </$Image>
                </$Slide>
              )
          )}
        </AnimatePresence>
      </$Slides>
    </$Slider>
  )
}

export default NavColumnCarouselForeground
