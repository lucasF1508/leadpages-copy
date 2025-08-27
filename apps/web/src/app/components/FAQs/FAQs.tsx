import React from 'react'
import clsx from 'clsx'
import { PortableTextBlock } from '@/types'
import Label from '@/components/Label'
import Text from '@/components/Text'
import { defaultLargeBlockStyles } from '@/components/PortableText'
import FAQsAccordion, { FAQsAccordionItemProps } from './FAQsAccordion'

interface FAQsProps {
  content: PortableTextBlock[]
  faqs: FAQsAccordionItemProps[]
}

const FAQs = ({ content, faqs }: FAQsProps) => (
  <div className={clsx('flex flex-col md:flex-row gap-4')}>
    <div className="w-full max-w-cols5 flex-[1_1_auto]">
      <div className="mb-3">
        <Label content="faqs" className="type-overline-xs" />
      </div>
      <Text content={content} blockStyles={defaultLargeBlockStyles} />
    </div>
    <div className="w-full md:max-w-cols7 flex-[1_1_auto]">
      <FAQsAccordion items={faqs} />
    </div>
  </div>
)

export default FAQs
