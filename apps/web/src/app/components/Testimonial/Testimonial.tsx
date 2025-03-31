import React from 'react'
import clsx from 'clsx'
import Stars from '@/components/Stars'
import Image from '@/components/Image'
import { SanityImageProps } from '@/types'
import Heading from '@/components/Heading'
 
interface TestimonialProps {
  testimonial: {
    title: string
    authorTitle: string
    testimonial: string
    image: SanityImageProps
    rating: number
  }
  heading?: string
  subheading?: string
}

const Testimonial = ({ testimonial, heading, subheading }: TestimonialProps) => {
  const {title, authorTitle, testimonial: body, image, rating} = testimonial

  return (
    <div className='flex flex-col gap-5 sm:gap-7 md:gap-8'>
      <div className='flex flex-col gap-2 max-md:max-w-[33.25rem]'>
        {heading && <Heading heading={heading} />}
        {subheading && <Heading heading={subheading} className='type-body-sm sm:type-size-body-lg'/>}
      </div>
      <div className={clsx('flex flex-col gap-[4.375rem] px-3 py-4 sm:p-7 bg-opacity-light-100/10 rounded-xl')}>
        <div className='flex flex-col gap-4'>
          <div className='max-w-[8.5rem]'><Stars rating={rating} /></div>
          <div className='relative type-quote-xs sm:type-quote-md md:type-quote-lg'>
            <span className='absolute left-0 top-0 -translate-x-full text-purple-100'>"</span>
            <article className={
              clsx(
                'bg-brand bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-white'
              )
            }>
              {body}"
            </article>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='w-7 sm:w-9 shrink-0'>
              <Image image={image} />
            </div>
            <div className='flex flex-col gap-0.5 sm:gap-1'>
              <h5 className='type-overline-xs'>{title}</h5>
              <h6 className='type-overline-xxs'>{authorTitle}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default Testimonial