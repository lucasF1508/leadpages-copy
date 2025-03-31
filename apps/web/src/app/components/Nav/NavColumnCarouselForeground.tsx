import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion as m } from "motion/react"
import Image from '../Image'
import { useCarouselStore } from './NavColumnCarousel'
 
interface NavColumnCarouselForegroundProps {
  slides: any
  templateCarouselIdleImages: any
}

const NavColumnCarouselForeground = ({
  slides,
  templateCarouselIdleImages,
}: NavColumnCarouselForegroundProps) => {
  const idleStartIndex = slides.length - 1
  const [currentSlide, setCurrentSlide] = useState(idleStartIndex)
  const isTimerActive = useCarouselStore((state) => state.isTimerActive)
  const setIsTimerActive = useCarouselStore((state) => state.setIsTimerActive)
  const imageData = useCarouselStore((state) => state.imageData)

  const combinedSlides = [...slides, ...templateCarouselIdleImages]

  const handleUpdate = (_imageData: any) => {
    if (_imageData) {
      const {
        asset: { _ref },
      } = _imageData
      const index = slides.findIndex(
        (element: any) => element.templateImage.asset._ref === _ref
      )
      setCurrentSlide(index)
      setIsTimerActive(false)
    }
  }

  useEffect(() => {
    handleUpdate(imageData)
  }, [imageData])

  useEffect(() => {
    let intervalId: any
    if (isTimerActive) {
      setCurrentSlide(idleStartIndex)
      intervalId = setInterval(() => {
        setCurrentSlide((prevSlide: any) => {
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
  <div className={clsx('z-10 self-end')}>
    <div className="max-w-[18.125rem]">
      <AnimatePresence initial={false} mode='popLayout'>
        {combinedSlides.map(({_key, templateImage}, i) => i === currentSlide  && 
          <m.div
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
            <div className={clsx('max-h-[26.625rem] rounded-tl-md rounded-tr-md overflow-hidden')}>
              <Image image={templateImage} />
            </div>
          </m.div>
        )}
        </AnimatePresence>
    </div>
  </div>
  )
}
 
export default NavColumnCarouselForeground