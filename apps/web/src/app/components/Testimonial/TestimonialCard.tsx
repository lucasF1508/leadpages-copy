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
  badgeImage?: SanityImageProps
  rating: number
  _id: string
  isActive?: boolean
  variant?: 'dark' | 'light'
}

const TestimonialCard = ({ title, authorTitle, testimonial: body, image, badgeImage, rating, isActive = true, variant }: TestimonialCardProps) => {
  const isLight = (variant ?? 'dark') === 'light'

  if (isActive) {
    return (
      <div className={clsx('flex flex-col h-full w-full rounded-xl overflow-hidden', isLight ? 'bg-[#E6FAE6]' : 'bg-surface-neutral-opacity')}>
        {image && (
          <div className='w-full flex-shrink-0 px-3 pt-3 sm:px-4 sm:pt-4'>
            <div
            className='w-full relative rounded-lg overflow-hidden transition-all duration-700'
            style={{
              height: '20rem',        // ⬅️ MÁS alto (clave)
              maxHeight: '19rem',     // evita que se descontrole en desktop grande
            }}
          >
            <Image
              image={image}
              fill
              className='object-cover transition-transform duration-700'
              style={{
                objectPosition: '50% 25%',
              }}
              sizes='(max-width: 768px) 25vw, 50vw'
            />
            {badgeImage && (
              <div className='absolute bottom-3 left-3 z-10 sm:w-16 sm:h-16 rounded-lg overflow-hidden shadow-lg'>
                <Image
                  image={badgeImage}
                  width={130}
                  height={130}
                  className='object-cover'
                />
              </div>
            )}
          </div>
          </div>
        )}
        <div className='flex flex-col gap-3 sm:gap-4 flex-grow min-h-0 px-4 pt-3 pb-5 sm:px-6 sm:pt-5 sm:pb-6'>
          {rating && <div className='max-w-[8.5rem] flex-shrink-0'><Stars rating={rating} variant={isLight ? 'brandPurple' : 'green'} /></div>}
          <div className='relative flex-grow min-h-0 overflow-hidden font-light text-[24px] leading-[32px] tracking-normal'>
            {isLight ? (
              <>
                <span className='absolute left-0 top-0 -translate-x-full text-black'>"</span>
                <article className='line-clamp-8 text-black'>{body}"</article>
              </>
            ) : (
              <>
                <span className='absolute left-0 top-0 -translate-x-full bg-gradient-to-r from-white to-[#E4D1FF] bg-clip-text text-transparent'>"</span>
                <article className='line-clamp-8 bg-gradient-to-r from-white to-[#E4D1FF] bg-clip-text text-transparent'>{body}"</article>
              </>
            )}
          </div>
          <div className='flex flex-col gap-3 flex-shrink-0 pt-6'>
            {title && <p className={clsx('font-heading type-overline-xs font-medium uppercase tracking-[0.16em]', isLight ? 'text-black' : 'text-light/95')}>{title}</p>}
            {authorTitle && <p className={clsx('font-heading type-overline-xxs font-medium uppercase tracking-[0.16em]', isLight ? 'text-black' : 'text-light/95')}>{authorTitle}</p>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col h-full w-full rounded-xl p-2 sm:p-3 gap-2'>
      {image && (
        <div className='flex-1 min-h-[8rem] relative rounded-lg overflow-hidden'>
          <Image image={image} fill className='object-contain object-center' sizes='(max-width: 768px) 33vw, 25vw' />
          {badgeImage && (
            <div className={clsx('absolute bottom-2 left-4 z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden shadow-lg', isLight && 'bg-white')}>
              <Image
                image={badgeImage}
                fill
                className='object-cover'
                sizes='64px'
              />
            </div>
          )}
        </div>
      )}
      {rating && (
        <div className='flex-shrink-0 flex justify-start'>
          <Stars rating={rating} variant={isLight ? 'brandPurple' : 'green'} />
        </div>
      )}
    </div>
  )
}

export default TestimonialCard