import React from 'react'
import clsx from 'clsx'
import { LinkType, SanityImageProps } from '@/types'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import Link from '@/components/Link'

interface ResourceCardProps {
  title?: string
  heading?: string
  link?: LinkType
  image?: SanityImageProps
  fullWidth?: boolean
  _key: string
}
 
interface ResourceCardsProps {
  title: string
  heading: string
  links: LinkType[]
  cards: ResourceCardProps[]
}

const CardIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 7L6.5 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M11.5 6.13153C11.5 6.13153 17.1335 5.65664 17.9885 6.51155C18.8434 7.36647 18.3684 13 18.3684 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)


const Card = ({children, fullWidth, index, ...props}: LinkType & {
  children: React.ReactNode
  fullWidth?: boolean
  index?: number
}) => {
  const isEven = index && index % 2 === 0
  const {url} = props 

  if (!url) {
    return (
      <div className={clsx(
        fullWidth && 'sm:col-span-9',
        !fullWidth && !isEven ? 'sm:col-span-4' : 'sm:col-span-5',
       'w-full relative rounded-xl border border-border-muted bg-opacity-light-100/10 p-5 col-span-1')}
       >
        {children}
      </div>
    )
  }

  return (
    <Link url={url} {...props} className={clsx(
        fullWidth ? 'sm:col-span-9 lg:col-span-2' : 'lg:col-span-1',
        !fullWidth && !isEven ? 'sm:col-span-4' : 'sm:col-span-5',
        'w-full relative rounded-xl border border-border-muted bg-opacity-light-100/10 p-3 sm:p-4'
      )}
    >
      {children}
    </Link>
  )
}

const ResourceCards = ({ ...props }: ResourceCardsProps) => {
  const {title, heading, links, cards} = props
  const featuredLink = links[0] || {}

  return (
      <div className={clsx('flex flex-col lg:flex-row gap-3 lg:gap-4')}>
        <div className='lg:w-cols5 flex relative'>
          <Card {...featuredLink} hasIcon={false} linkStyle='none'>
            <div className='flex flex-col justify-between h-full'>
              <div className='flex flex-col justify-between gap-3'>
                <Heading className='type-overline-xxs' heading={heading} />
                <Heading heading={title} as='h3' className='type-title-t7 sm:type-title-t5 lg:type-title-t4' />
              </div>
              <div className='mt-3'>
                <Link {...featuredLink} condition='none' />
              </div>
            </div>
          </Card>
          <div className="z-under bg-[radial-gradient(ellipse_at_center,_#372A6E_0%,_rgba(0,0,0,0)_75%)] absolute left-0 top-0 -translate-x-1/2 aspect-[1/1] h-[75%]" />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-9 lg:grid-cols-2 lg:w-cols7 gap-3 lg:gap-4 flex-[1_1_auto]'>
          {
            cards.map(({_key, title, heading, fullWidth, link, image}, i) => {
              const {hasIcon, url} = link || {}
              if (!url) return null

              return (
                <Card key={_key} fullWidth={fullWidth} url={url} index={i} {...link}>
                  <div className='flex h-full flex-col sm:flex-row gap-4 sm:gap-3'>
                    <div className={clsx('flex flex-col justify-between h-full grow lg:max-w-[19.875rem]')}>
                      <div className='flex gap-2 justify-between items-center'>
                        <Heading className='type-overline-xxs' heading={heading} as='h6' />
                        {hasIcon && <div className='h-3 w-3'><CardIcon /></div>}
                      </div>
                      <Heading heading={title} as='h5' className={clsx('type-h3 pt-4 lg:pt-2', image && fullWidth && 'lg:pt-5' )} />
                    </div>
                    {
                      image && fullWidth && (
                        <div className='flex justify-center shrink grow lg:w-auto'>
                          <Image
                            image={image}
                            className='mx-auto -mb-3 sm:-mb-4 lg:absolute lg:bottom-0 lg:right-0 lg:mb-0 lg:mr-4 w-full max-w-[13rem]'
                          />
                        </div>
                      )
                    }
                  </div>
                </Card>
              )
            })
          }
        </div>
      </div>
  )
}
 
export default ResourceCards