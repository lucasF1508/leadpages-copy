'use client'

import type { TestimonialCardProps } from './TestimonialCard';
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import { LinkIcon } from '@/components/Link'
import useCarousel from '@/hooks/useCarousel'
import TestimonialCard from './TestimonialCard'
import TestimonialCardDark from './TestimonialCardDark'
import TestimonialCardLight from './TestimonialCardLight'

interface TestimonialProps {
  heading?: string
  subheading?: string
  testimonials: TestimonialCardProps[]
  variant?: 'dark' | 'default' | 'light'
}
 
const Testimonial = ({ heading, subheading, testimonials, variant = 'default' }: TestimonialProps) => {
  // Si es variante dark o light, usar el nuevo diseño
  if (variant === 'dark' || variant === 'light') {
    // En mobile: cada testimonial es un slide, en desktop: 2 por slide
    const slidesCount = Math.ceil((testimonials?.length || 0) / 2)
    
    // Carousel para mobile (1 por slide)
    const mobileCarousel = useCarousel({ loop: false })
    const mobileActive = mobileCarousel.indices?.active || 0
    
    // Carousel para desktop (2 por slide)
    const desktopCarousel = useCarousel({ loop: false })
    const desktopActive = desktopCarousel.indices?.active || 0
    
    // Agrupar testimonials en pares para desktop (2 por slide)
    const testimonialPairs: TestimonialCardProps[][] = []
    for (let i = 0; i < (testimonials?.length || 0); i += 2) {
      testimonialPairs.push(testimonials.slice(i, i + 2))
    }
    
    // Para mobile: crear slides individuales
    const mobileSlides: TestimonialCardProps[][] = (testimonials || []).map(t => [t])
    const mobileSlidesCount = mobileSlides.length

    const isDark = variant === 'dark'
    const CardComponent = isDark ? TestimonialCardDark : TestimonialCardLight

    return (
      <div 
        className={clsx(
          'flex flex-col gap-3 sm:gap-4 md:gap-5 py-4 sm:py-5 md:py-6 relative w-full',
          isDark ? 'bg-[#1A1A1A]' : 'bg-white'
        )}
        style={isDark ? { 
          background: '#1A1A1A !important',
          backgroundColor: '#1A1A1A !important',
          backgroundImage: 'none !important',
        } : undefined}
      >
        {/* Overlay para eliminar cualquier gradiente */}
        {isDark && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: '#1A1A1A',
              backgroundColor: '#1A1A1A',
              backgroundImage: 'none',
              zIndex: 0,
            }}
          />
        )}
        {heading && (
          <div className='text-center relative z-10 px-4 sm:px-6 md:px-8 mb-2 sm:mb-3'>
            <Heading 
              className={clsx(
                'type-title-t5 sm:type-title-t4 md:type-title-t3',
                isDark ? 'text-white' : 'text-dark'
              )} 
              heading={heading}
            />
          </div>
        )}
        
        {/* Mobile: 1 por slide */}
        <div className='overflow-hidden relative z-10 w-full md:hidden' ref={mobileCarousel.ref}>
          <div className='flex'>
            {mobileSlides.map((slide, slideIndex) => (
              <div
                className={clsx(
                  'flex-[0_0_100%] flex justify-center px-4 min-w-0 w-full',
                  'transition-opacity duration-300'
                )}
                key={slideIndex}
              >
                {slide.map((testimonial, i) => (
                  <div className='w-full max-w-md' key={testimonial?._id || i}>
                    <CardComponent {...testimonial} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Desktop: 2 por slide */}
        <div className='overflow-hidden relative z-10 w-full hidden md:block' ref={desktopCarousel.ref}>
          <div className='flex'>
            {testimonialPairs.map((pair, slideIndex) => (
              <div
                className={clsx(
                  'flex-[0_0_100%] flex gap-4 md:gap-6 px-6 md:px-8 lg:px-12 xl:px-16 min-w-0 w-full',
                  'transition-opacity duration-300'
                )}
                key={slideIndex}
              >
                {pair.map((testimonial, i) => (
                  <div className='flex-1 min-w-0' key={testimonial?._id || i}>
                    <CardComponent {...testimonial} />
                  </div>
                ))}
                {/* Si solo hay 1 testimonial en el último par, agregar espacio */}
                {pair.length === 1 && <div className='flex-1' />}
              </div>
            ))}
          </div>
        </div>

        {/* Paginación con dots - Mobile */}
        {mobileSlidesCount > 1 && (
          <div className='flex justify-center gap-1.5 mt-3 relative z-10 md:hidden'>
            {Array.from({ length: mobileSlidesCount }).map((_, index) => (
              <button
                aria-label={`Go to slide ${index + 1}`}
                className={clsx(
                  'w-1.5 h-1.5 rounded-full transition-all duration-300',
                  index === mobileActive 
                    ? 'bg-purple-500' 
                    : isDark 
                      ? 'bg-white/30 hover:bg-white/50'
                      : 'bg-dark/30 hover:bg-dark/50'
                )}
                key={index}
                onClick={() => mobileCarousel.api?.scrollTo(index)}
              />
            ))}
          </div>
        )}
        
        {/* Paginación con dots - Desktop */}
        {slidesCount > 1 && (
          <div className='hidden md:flex justify-center gap-2 mt-3 relative z-10'>
            {Array.from({ length: slidesCount }).map((_, index) => (
              <button
                aria-label={`Go to slide ${index + 1}`}
                className={clsx(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === desktopActive 
                    ? 'bg-purple-500' 
                    : isDark 
                      ? 'bg-white/30 hover:bg-white/50'
                      : 'bg-dark/30 hover:bg-dark/50'
                )}
                key={index}
                onClick={() => desktopCarousel.api?.scrollTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Variante default (comportamiento original)
  const defaultCarousel = useCarousel({
    loop: false,
  })

  const defaultActive = defaultCarousel.indices?.active || 0

  return (
    <div className='flex flex-col gap-5 sm:gap-7 md:gap-8'>
      <div className='flex flex-col gap-4 nav-break:flex-row justify-between'>
        {(heading || subheading) && (
          <div className='flex flex-col gap-2 max-md:max-w-[33.25rem] text-light'>
            {heading && <Heading heading={heading} />}
            {subheading && <Heading className='type-body-sm sm:type-size-body-lg' heading={subheading}/>}
          </div>
        )}
        {testimonials?.length > 1 && (        
          <div className='nav-break:self-end'>          
            <div className='flex gap-2 sm:gap-3 md:gap-4'>
              <div className='link-button-secondary border-none w-6 h-6 rotate-180 cursor-pointer' onClick={defaultCarousel.scrollPrev}>
                <LinkIcon/>
              </div>
              <div className='link-button-secondary border-none w-6 h-6 cursor-pointer' onClick={defaultCarousel.scrollNext}>
                <LinkIcon/>
              </div>
            </div>
          </div>
        )}
      </div>
      <div ref={defaultCarousel.ref}>
        <div className='flex gap-4'>
          {testimonials?.map((testimonial, i) => (
            <div 
              className={clsx(
                'flex-[0_0_100%] transition-opacity duration-300', 
                i !== defaultActive && 'opacity-50'
              )} 
              key={testimonial?._id}
            >
              <TestimonialCard
                {...(testimonial || {})} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
 
export default Testimonial