import React from 'react'
import Label from '@/components/Label'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import { Feature, Plan } from './PricingCards'
import PricingCardCompareAt from './PricingCardCompareAt'
import Price from '@/components/Price'
import PricingCardsFeature from './PricingCardsFeature'
import PricingCardLink from './PricingLink'

const PricingCard = ({ card }: {card: Plan}) => {
  const { 
    description, 
    features, 
    featuresText, 
    isFeatured, 
    pillContent, 
    prices, 
    title 
  } = card || {}
  
  return (
    <article
      className={
        clsx(
          'w-full rounded-lg p-3 sm:p-5 nav-break:p-3 lg:p-5 flex flex-col gap-4 text-neutral-light max-nav-break:flex-[1_1_100%]',
          'min-w-[17rem] sm:min-w-cols4 min-[420px]:min-w-[19.375rem] nav-break:min-w-0',
          isFeatured ? 'theme-light bg-surface' : 'bg-surface-neutral-opacity'
        )}
    >
      <div className="flex flex-col gap-2">
        <div className='flex items-center justify-between'>
          {title && <Heading className='type-h2' content={title} />}
          {isFeatured && pillContent && (
              <div className="inline-flex rounded-sm bg-gradient-purple px-1 py-0.5">
                <Label
                  className={clsx('type-overline-xxs text-light pt-[0.125rem] !tracking-wide')}
                  content={pillContent}
                />
              </div>
            )}
        </div>
        {description && <p className='type-body-xs'>{description}</p>}
        {prices?.length &&            
          <div>
            <Price 
              period='/month'
              className='type-caption-xs' 
              classNames={{
                price: 'type-stat-lg mr-1',
                symbol: 'type-stat-lg',
                period: 'ml-0.5'
              }} 
              prices={prices}
            /> 
          </div>
        }
        <PricingCardCompareAt
          prices={prices}
        />
      </div>
      <PricingCardLink
        isFeatured={isFeatured}
        prices={prices}
      />
      <div>
        {featuresText && <Heading as='h6' className="type-h6 mb-2" content={featuresText} />}
        <ul className="flex flex-col gap-2 text-body-neutral-body">
          {features.map(({_key, ...feature}: Feature & {_key: string}) => 
            <PricingCardsFeature {...feature} key={_key}/>
          )}
        </ul>
      </div>
    </article>
  )
}

export default PricingCard