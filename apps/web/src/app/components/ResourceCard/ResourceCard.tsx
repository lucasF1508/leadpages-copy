import React from 'react'
import clsx from 'clsx'
import { LinkProps, SanityImageProps } from '@/types'
import Link from '@/components/Link'
import Text from '@/components/Text'
import { hasImage } from '@/components/Media'
import Image from '@/components/Image'
import { UpRightIcon } from '../Icons/UpRightIcon'
 
interface ResourceCardProps {
  image: SanityImageProps
  heading: string
  link: LinkProps
  title: string
}

const ResourceCard = ({ image, heading, link, title }: ResourceCardProps) => ( 
  <div className={clsx('bg-surface-neutral-medium/30 theme-light:bg-surface-opacity-dark-900 rounded-lg px-3 py-4 sm:px-7 text-light flex flex-col nav-break:flex-row justify-between gap-4 nav-break:gap-8 items-end')}>
    <div className='w-full nav-break:max-w-[32.5rem] flex flex-col gap-13 justify-between'>
      <div className='flex items-center gap-2 justify-between'>
        <Text content={heading} className='type-overline-xxs'/>
        <div className='nav-break:hidden'>
          <UpRightIcon />
        </div>
      </div>
      <div className='text-light flex flex-col gap-4'>
        <Text content={title} className='type-h1'/>
        <div>
          <Link {...link} linkStyle='button-outline' className='theme-light:text-light' />
        </div>
      </div>
    </div>
    {hasImage(image) && (
      <div className='nav-break:w-full h-full nav-break:max-w-[34.875rem] relative -mb-4 -mx-3 sm:-mx-7'>
        <Image 
          image={image}
          className='nav-break:absolute bottom-0 left-0'
        />
      </div>
    )}
  </div>
)
 
export default ResourceCard