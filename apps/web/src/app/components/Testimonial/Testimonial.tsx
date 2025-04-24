'use client'

import type { TestimonialCardProps } from './TestimonialCard';
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import { LinkIcon } from '@/components/Link'
import useCarousel from '@/hooks/useCarousel'
import TestimonialCard from './TestimonialCard'

interface TestimonialProps {
  heading?: string
  subheading?: string
  testimonials: TestimonialCardProps[]
}
 
const Testimonial = ({ heading, subheading, testimonials }: TestimonialProps) => {
  const {indices, ref, scrollNext, scrollPrev} = useCarousel({
    active: testimonials?.length > 1
  })

  const {active = 0} = indices || {}

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
      <div ref={ref}>
        <div className='flex gap-4'>
          {testimonials?.map((testimonial, i) => (
            <div 
              className={clsx(
                'flex-[0_0_100%] transition-opacity duration-300', 
                i !== active && 'opacity-50')
              } 
              key={testimonial._id}
            >
              <TestimonialCard
                {...testimonial} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
 
export default Testimonial