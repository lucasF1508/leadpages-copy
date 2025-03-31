import type {ContentType, ImageType, LinkType} from '@types'
import type { ClassValue } from 'clsx';
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import Text from '@/components/Text'
import Links from '../Links'

export interface CTAProps {
  backgroundImage?: ImageType
  className?: ClassValue
  classNames?: {
    heading?: ClassValue
    inner?: ClassValue
    root?: ClassValue
  },
  content: ContentType
  desktopOrientation?: 'horizontal' | 'vertical'
  heading: string
  links: LinkType[]
  mobileAlignment?: 'center' | 'left'
}

const CTA = ({ backgroundImage, className, classNames, content, desktopOrientation = 'vertical', heading, links, mobileAlignment = 'center' }:CTAProps) => (
    <div className={clsx('relative box-py box-[mt*-1]', className, classNames?.root)}>
      <div className={
          clsx(
            'bg-opacity-light-100/10 rounded-xl overflow-hidden border-border-muted relative backdrop-blur-lg pt-7 md:pb-7 px-3 sm:px-6', 
            classNames?.inner
          )}
        >
        <Heading className={
          clsx(
            'type-title-t7 sm:type-title-t5 md:type-title-t4 mb-3', 
            mobileAlignment === 'center' && 'text-center mx-auto max-w-[10.294em]', 
            desktopOrientation === 'horizontal' && 'md:ml-0 md:max-w-[10.294em] md:text-left',
            desktopOrientation === 'vertical' && 'max-w-cols8',
            classNames?.heading
          )} 
          heading={heading}
        />
        <div 
          className={
            clsx(
              'type-body-lg max-w-[23rem] relative z-content',
              mobileAlignment === 'center' && 'mx-auto text-center', 
              desktopOrientation === 'horizontal' && 'md:max-w-[34rem] md:text-left md:w-[65%] nav-break:w-[calc(50%-1rem)] md:ml-0',
              desktopOrientation === 'vertical' && 'md:max-w-cols8',
            )}
          >
          <Text className='text-body-muted' content={content}/>
          <div className={clsx('mt-[2.75rem]', desktopOrientation === 'vertical' && 'flex justify-center')}>
            <Links links={links}/>
          </div>
        </div>
        <div 
          className={clsx(
            '-mx-3 w-auto relative  bottom-0 right-0 z-base',
            'sm:-mx-6 max-md:max-h-[25rem]',
            'lg:w-full',
            desktopOrientation === 'horizontal' && 'md:mx-0 md:absolute md:translate-y-[26%] md:translate-x-[40%] nav-break:translate-x-[40%] md:w-[85%]',
            desktopOrientation === 'vertical' && 'md:max-h-[16rem] md:scale-125 md:translate-x-1/4'
          )}
        >
          <div className='aspect-[416/290] md:hidden' />
          <Image className={clsx(
            'max-w-[50rem] top-3 w-[150%]',
            'max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2',
            'md:w-full md:max-w-none'
          )} image={backgroundImage}/>
        </div>
      </div>
      <div className="z-under bg-[radial-gradient(ellipse_at_center,_#372A6E_0%,_rgba(0,0,0,0)_75%)] absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2  aspect-[1/1] h-[75%]" />
    </div>
  )

export default CTA