import React from 'react'
import clsx from 'clsx'
import { ContentType, LinkProps, SanityImageProps } from '@/types'
import { hasLinks, Links } from '@/components/Link'
import Text from '@/components/Text'
import { hasImage } from '@/components/Media'
import Image from '@/components/Image'
import { UpRightIcon } from '../Icons/UpRightIcon'
 
interface ResourceCardProps {
  image: SanityImageProps
  heading: string
  link: LinkProps
  links: LinkProps[]
  title: string
  content: ContentType
}

const ResourceCard = ({ image, heading, link, links: _links, title, content }: ResourceCardProps) => {
  const links = _links || [link]

  return <div className={clsx('bg-surface-neutral-medium/30 theme-light:bg-surface-opacity-dark-900 rounded-lg px-3 py-4 sm:px-7 text-light flex flex-col nav-break:flex-row justify-between gap-4 nav-break:gap-8 items-end')}>
    <div className='w-full nav-break:max-w-[32.5rem] flex flex-col gap-13 justify-between'>
      {heading && 
        (<div className='flex items-center gap-2 justify-between'>
          <Text content={heading} className='type-overline-xxs'/>
          <div className='nav-break:hidden'>
            <UpRightIcon />
          </div>
        </div>)
      }
      <div className='flex flex-col gap-4'>
        {
          title && 
            <Text 
              as='div' 
              content={title} 
              className='type-h1' 
            />
        }
        {content &&
          <Text content={content} className='type-body-lg'/>
        }
        {hasLinks(links) &&        
          <div>
            <Links 
              links={links} 
              classNames={{
                link: 'theme-light:text-light max-w-none'
              }} 
              linkStyle='button-outline'
            />  
          </div>
        }
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
}
 
export default ResourceCard