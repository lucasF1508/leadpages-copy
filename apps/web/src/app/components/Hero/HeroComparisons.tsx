import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Label from '@/components/Label'
import Pinion from '@/components/Pinion'

export interface HeroComparisonsProps {
  content?: string
  label?: string
  subheading?: string
}

const HeroComparisons = ({ content, label, subheading }: HeroComparisonsProps) => (
  <div className="relative overflow-hidden flex flex-row items-center justify-center min-h-[18.625rem] md:min-h-[30rem]">
    <Pinion
      classNames={{
        inner: 'flex flex-col items-center gap-2 md:gap-3',
        root: 'text-center text-white !my-0',
      }}
      component="hero"
    >
      {label && (
        <Label
          className={clsx('type-h6 sm:type-h4 md:type-h3')}
          content={label}
        />
      )}

      {content && (
        <Heading
          as="h1"
        className={clsx(
    'text-center',
    'type-title-t7 sm:type-title-t6 md:type-title-t3',
    'max-w-cols12 mx-auto' 
  )}
          heading={content}
        />
      )}

      {subheading && (
        <Heading
          as="h2"
          className={clsx('type-body-lg max-w-cols6 md:max-w-cols12 mx-auto')}
          heading={subheading}
        />
      )}
    </Pinion>
  </div>
)

export default HeroComparisons
