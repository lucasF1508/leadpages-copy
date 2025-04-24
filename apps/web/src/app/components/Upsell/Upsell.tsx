import React from 'react'
import clsx from 'clsx'
import Label from '@/components/Label'
import Text from '@/components/Text'
import Heading from '@/components/Heading'
import Link from '@/components/Link'
import { ContentType } from '@/types'
import UpsellDropdown, { OptionType } from './UpsellDropdown'
 
interface UpsellProps {
  pill: string
  content: ContentType
}

const feature = {
  title: 'Lead Enrichment',
  description: 'Gain instant access to valuable lead insights for more intelligent marketing and sales strategies.',
  tiers: [
    {
      title: 'Enriched Leads', value: '40'
    }
  ],
  price: {
    units: 15,
    currency: 'USD',
    symbol: "$"
  },
  link: 'Add Lead Enrichment',
  disclaimer: "See terms. Enrich more leads at any time from your account. Learn more."
}

const options: OptionType[] = [
  { value: 100, label: '100' },
  { value: 1000, label: '1000' },
  { value: 'enterprise', label: 'Enterprise' }
]

const Upsell = ({ content, pill }: UpsellProps) => {
  return (
    <div className={clsx('flex flex-col gap-4 md:flex-row justify-between')}>
      <div className='flex flex-col gap-3 max-w-cols6'>
        <div>
          <div className="type-overline-xs bg-surface-neutral-medium/30 rounded-lg py-1 px-3 inline">
            <Label content={pill} className="bg-gradient-purple text-transparent bg-clip-text"/>
          </div>
        </div>
        <Text content={content} />
      </div>
      <div className='max-w-cols4 w-full max-md:self-center shrink-0'>
        <div className='rounded-lg p-xl md:p-3xl overflow-hidden bg-surface-neutral-medium/30 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Heading className='type-h2' heading={feature.title} />
            <Text className='type-body-xs ' content={feature.description} />
            <div>
              <UpsellDropdown 
                title={"Enriched Leads"}
                options={options}
              />
            </div>
          </div>
          <div>
            <span className='type-stat-lg'>{feature.price.symbol}</span>
            <span className='type-stat-lg'>{feature.price.units}</span>
            <span className='type-caption-xs ml-1'>{feature.price.currency}</span>
            <span className='type-caption-xs'>{" "}/month</span>
          </div>
          <Link href="#" linkStyle='button-outline' hasIcon={true} className='w-full'>
            {feature.link}
          </Link>
          <Text
            className='type-body-xs text-body-neutral-body'
          >
            {feature.disclaimer}
          </Text>
        </div>
      </div>
    </div>
  )
}
 
export default Upsell