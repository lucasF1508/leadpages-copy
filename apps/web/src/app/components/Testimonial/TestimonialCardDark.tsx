import React from 'react'
import clsx from 'clsx'
import Image from '@/components/Image'
import { SanityImageProps } from '@/types'
import type { TestimonialCardProps } from './TestimonialCard'

const TestimonialCardDark = ({ title, authorTitle, testimonial: body, image }: TestimonialCardProps) => {
  return (
    <div className={clsx('flex flex-col gap-2 text-white')}>
      {/* Imagen arriba */}
      {image && (
        <div className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto'>
          <div className='w-full h-full rounded-lg overflow-hidden'>
            <Image image={image} />
          </div>
        </div>
      )}
      
      {/* Texto del testimonial */}
      <div className='flex flex-col gap-2'>
        <div className='type-body-sm sm:type-body-md md:type-body-lg text-center'>
          <p className='text-white'>
            {body}
          </p>
        </div>
        
        {/* Nombre y título abajo */}
        <div className='flex flex-col gap-1 text-center'>
          {title && (
            <h5 className='type-overline-sm sm:type-overline-md text-white font-medium'>
              {title}
            </h5>
          )}
          {authorTitle && (
            <h6 className='type-overline-xs sm:type-overline-sm text-white/70'>
              {authorTitle}
            </h6>
          )}
        </div>
      </div>
    </div>
  )
}

export default TestimonialCardDark

