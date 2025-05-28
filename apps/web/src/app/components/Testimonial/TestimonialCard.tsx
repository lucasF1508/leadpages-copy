import React from 'react'
import clsx from 'clsx'
import Stars from '@/components/Stars'
import Image from '@/components/Image'
import { SanityImageProps } from '@/types'
 
export interface TestimonialCardProps {
  title: string
  authorTitle: string
  testimonial: string
  image: SanityImageProps
  rating: number
  _id: string
}

const TestimonialCard = ({ title, authorTitle, testimonial: body, image, rating }: TestimonialCardProps) => {
  return (
      <div className={clsx('flex flex-col gap-9 px-3 py-4 sm:p-7 bg-surface-neutral-opacity rounded-xl')}>
        <div className='flex flex-col gap-4'>
          {rating && <div className='max-w-[8.5rem]'><Stars rating={rating} /></div>}
          <div className='relative type-quote-xs sm:type-quote-md md:type-quote-lg'>
            <span className='absolute left-0 top-0 -translate-x-full text-purple-100'>"</span>
            <article className={
              clsx(
                'bg-brand bg-clip-text text-transparent bg-gradient-purple'
              )
            }>
              {body}"
            </article>
          </div>
          <div className='flex gap-4 items-center'>
            {image &&            
              <div className='w-7 sm:w-9 shrink-0'>
                <Image image={image} />
              </div>
            }
            <div className='flex flex-col gap-0.5 sm:gap-1'>
              {title && <h5 className='type-overline-xs'>{title}</h5>}
              {authorTitle && <h6 className='type-overline-xxs'>{authorTitle}</h6>}
            </div>
          </div>
        </div>
      </div>
  )
}

export default TestimonialCard