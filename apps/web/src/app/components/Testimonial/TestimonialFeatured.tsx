'use client'

import type { TestimonialCardProps } from './TestimonialCard';
import type { PortableTextBlock } from '@types'
import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import { LinkIcon } from '@/components/Link'
import useCarousel from '@/hooks/useCarousel'
import TestimonialCard from './TestimonialCard'

interface TestimonialFeaturedProps {
  heading?: string | PortableTextBlock[]
  subheading?: string | PortableTextBlock[]
  testimonials: TestimonialCardProps[]
}
 
const TestimonialFeatured = ({ heading, subheading, testimonials }: TestimonialFeaturedProps) => {
  // Show 3 testimonials with one featured (wider) card that can be clicked to change
  const showFeaturedGrid = testimonials?.length >= 3
  
  // Early return if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null
  }
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  // Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Set initial mobile state
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768)
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Auto-rotate testimonials every 5 seconds (only on desktop featured grid)
  useEffect(() => {
    if (!showFeaturedGrid || isPaused || isMobile) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.min(testimonials.length, 3))
    }, 5000) // Change every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [showFeaturedGrid, isPaused, testimonials.length, isMobile])
  
  // Only use carousel if less than 3 testimonials (desktop) or always on mobile
  const {indices, ref, scrollNext, scrollPrev} = useCarousel({
    active: testimonials?.length > 1 && (!showFeaturedGrid || isMobile)
  })

  const {active = 0} = indices || {}

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
    setIsPaused(true)
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000)
  }
  
  // Mobile navigation functions
  const goPrev = () => {
    if (isMobile && showFeaturedGrid) {
      setActiveIndex((prev) => (prev - 1 + Math.min(testimonials.length, 3)) % Math.min(testimonials.length, 3))
    } else {
      scrollPrev()
    }
  }
  
  const goNext = () => {
    if (isMobile && showFeaturedGrid) {
      setActiveIndex((prev) => (prev + 1) % Math.min(testimonials.length, 3))
    } else {
      scrollNext()
    }
  }
  
  // Show arrows on mobile or when using carousel (less than 3 testimonials)
  const showArrows = testimonials?.length > 1 && (isMobile || !showFeaturedGrid)

  return (
    <div className='flex flex-col gap-5 sm:gap-7 md:gap-8'>
      <div className='flex flex-col gap-4 nav-break:flex-row justify-between'>
        {(heading || subheading) && (
          <div className='flex flex-col gap-2 max-md:max-w-[33.25rem] text-light'>
            {heading && (
              typeof heading === 'string' 
                ? <Heading heading={heading} />
                : <Heading content={heading} />
            )}
            {subheading && (
              typeof subheading === 'string'
                ? <Heading className='type-body-sm sm:type-size-body-lg' heading={subheading} />
                : <Heading className='type-body-sm sm:type-size-body-lg' content={subheading} />
            )}
          </div>
        )}
        {/* Navigation arrows - hidden on desktop featured grid, shown on mobile or carousel */}
        {showArrows && !isMobile && (        
          <div className='nav-break:self-end'>          
            <div className='flex gap-2 sm:gap-3 md:gap-4'>
              <div className='link-button-secondary border-none w-6 h-6 rotate-180 cursor-pointer' onClick={scrollPrev}>
                <LinkIcon/>
              </div>
              <div className='link-button-secondary border-none w-6 h-6 cursor-pointer' onClick={scrollNext}>
                <LinkIcon/>
              </div>
            </div>
          </div>
        )}
      </div>
      {showFeaturedGrid && !isMobile ? (
        // Featured grid layout: show 3 testimonials, one wider/featured, others clickable (desktop only)
        <div className='flex gap-4 items-stretch relative'>
          {testimonials?.slice(0, 3).map((testimonial, i) => {
            if (!testimonial || !testimonial._id) {
              return null
            }
            const isActive = i === activeIndex
            return (
              <div
                key={testimonial._id}
                onClick={() => handleCardClick(i)}
                onMouseEnter={() => {
                  setActiveIndex(i)
                  setIsPaused(true)
                }}
                onMouseLeave={() => setIsPaused(false)}
                className={clsx(
                  'flex-shrink-0 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer self-stretch relative',
                  isActive 
                    ? 'flex-[1_1_54%] md:flex-[1_1_52%] z-10' // Selected
                    : 'flex-[1_1_23%] md:flex-[1_1_24%] opacity-75 hover:opacity-100 transition-opacity duration-500 z-0' // Unselected: a bit wider
                )}
              >
                <div className={clsx(
                  'h-full w-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]',
                  isActive && 'ring-2 ring-purple-400/60 rounded-xl shadow-lg'
                )}>
                  <TestimonialCard
                    {...testimonial}
                    isActive={isActive}
                  />
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        // Carousel layout: for mobile or 1-2 testimonials
        <div className={clsx(
          'relative overflow-hidden w-full'
        )} ref={isMobile ? null : ref}>
          <div 
            className={clsx(
              'flex transition-transform duration-300 ease-in-out',
              isMobile && showFeaturedGrid ? 'gap-0' : 'gap-4'
            )}
            style={isMobile && showFeaturedGrid ? {
              transform: `translateX(-${activeIndex * (100 / Math.min(testimonials.length, 3))}%)`,
              width: `${Math.min(testimonials.length, 3) * 100}%`
            } : undefined}
          >
            {(isMobile && showFeaturedGrid 
              ? testimonials?.slice(0, 3) 
              : testimonials
            )?.map((testimonial, i) => {
              if (!testimonial || !testimonial._id) {
                return null
              }
              
              const testimonialCount = isMobile && showFeaturedGrid 
                ? Math.min(testimonials.length, 3) 
                : testimonials.length
              
              return (
                <div 
                  className={clsx(
                    'min-w-0',
                    !isMobile && 'transition-opacity duration-300',
                    !isMobile && i !== active && 'opacity-50'
                  )}
                  style={isMobile && showFeaturedGrid ? {
                    flex: `0 0 ${100 / testimonialCount}%`,
                    width: `${100 / testimonialCount}%`
                  } : {
                    flex: '0 0 100%'
                  }}
                  key={testimonial._id}
                >
                  <TestimonialCard
                    {...testimonial} 
                  />
                </div>
              )
            })}
          </div>
          
          {/* Mobile arrows - similar to CarroselWithArrows */}
          {showArrows && isMobile && (
            <>
              <button
                aria-label="Previous"
                className={clsx(
                  'absolute left-2 top-1/2 -translate-y-1/2 z-20',
                  'inline-flex h-5 w-5 items-center justify-center rounded-md',
                  'text-base',
                  'bg-white/10 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/20',
                  'text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
                )}
                onClick={goPrev}
                type="button"
              >
                <span aria-hidden>←</span>
              </button>

              <button
                aria-label="Next"
                className={clsx(
                  'absolute right-2 top-1/2 -translate-y-1/2 z-20',
                  'inline-flex h-5 w-5 items-center justify-center rounded-md',
                  'text-base',
                  'bg-white/10 ring-1 ring-white/10 hover:bg-white/20 hover:ring-white/20',
                  'text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
                )}
                onClick={goNext}
                type="button"
              >
                <span aria-hidden>→</span>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}
 
export default TestimonialFeatured
