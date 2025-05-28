import type { PriceType } from '@/components/Price'
import type { ContentType, LinkType, SanityImageProps } from '@/types';
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components//Heading'
import Link, { hasLink } from '@/components//Link'
import Image from '@/components/Image'
import Price from '@/components/Price'
import Text from '@/components/Text'
import Pill from '../Pill'
import AddOnCardsPriceLabel from './AddOnCardsPriceLabel'
import AddOnCardsText from './AddOnCardsText'

interface AddOnProps {
  _key: string
  content: ContentType
  icon: SanityImageProps
  image: SanityImageProps
  links: LinkType[]
  prices: PriceType[]
  pricesLabel: string
  title: string
}
 
interface AddOnCardsProps {
  cards: AddOnProps[]
  children: React.ReactNode
  className?: string
  classNames?: {
    root?: string
  }
  columnCount: "2" | "3" | "4" 
  content: ContentType
  pillContent: string
}

const AddOnCards = ({ cards, className, classNames = {root: ''}, content, pillContent }: AddOnCardsProps) => {
  const columnCount = cards?.length >= 4 && "4" || cards?.length === 3 && "3" || "2"

    return (
    <div className={clsx('text-light flex flex-col items-center gap-7', className, classNames.root)}>
      <div>
        <div className='text-center'>
          {
            pillContent && <Pill className='mb-3 py-1 px-3' classNames={{label: '!type-overline-xs'}} content={pillContent}/>
          }
        </div>
        {content && <Text content={content}/>}
      </div>
      <div className={
        clsx(
          'grid mx-auto w-full grid-cols-1 gap-3 nav-break:gap-8',
          'nav-break:bg-surface-neutral-opacity nav-break:p-5 nav-break:rounded-lg',
          columnCount === "2" && 'nav-break:grid-cols-2 max-w-cols8',
          columnCount === "3" && 'nav-break:grid-cols-3',
          columnCount === "4" && 'nav-break:grid-cols-4'
        )
      }>
        {cards.map(({_key, content, icon, links, prices, pricesLabel, title}, i) => {
          const [link] = links || []
          const isLast = i === cards.length - 1

          return (
            <div className="flex flex-col justify-between relative max-nav-break:p-3 max-nav-break:bg-surface-neutral-opacity max-nav-break:rounded-lg max-nav-break:max-w-cols6 max-nav-break:mx-auto" key={_key}>
              {
                !isLast &&            
                  <div 
                    className={clsx(
                      'hidden nav-break:block absolute top-0 bottom-0 -right-4 w-px bg-gradient-to-b from-transparent via-surface-neutral-light/20 to-transparent',
                    )}
                  />
              }
              <div className='w-full'>
                {icon && <div className='size-5 relative mb-2'>
                  <Image
                    image={icon}
                  />
                </div>}
                {title && <Heading as='h4' className='type-h2 mb-1' content={title}/>}
                {content && <div className='mb-2 type-body-xs nav-break:min-h-[3.75rem]'>
                  <Text as='p' content={content}/>
                </div>}
              </div>
              <div className='w-full'>
              {
                !!prices?.length && 
                  <>
                    <div className='mb-2'><AddOnCardsPriceLabel label={pricesLabel} /></div>
                    <div className='mb-1'>
                      <Price
                        classNames={{
                          currency: 'type-caption-xs',
                          period: 'type-caption-xs ',
                          price: 'type-stat-md mr-1',
                          symbol: 'type-stat-md',
                        }} 
                        period='/mo' 
                        prices={prices}
                      />
                    </div>
                    <div className='mb-4'>
                      <AddOnCardsText className='type-caption-xs' prices={prices} />
                    </div>
                  </>
                }
                {
                  hasLink(link) && 
                    <Link className="w-full" {...link}/>
                }
              </div>
            </div>
            )
          }
        )}  
      </div>
    </div>
  )
}
 
export default AddOnCards