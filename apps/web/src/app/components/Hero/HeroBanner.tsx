import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Label from '@/components/Label'
import Pinion from '@/components/Pinion'

export interface HeroBannerProps {
  heading: string
  label: string
  subheading?: string
}

const Hero = ({ heading, label, subheading }: HeroBannerProps) => (
  <div className="relative overflow-hidden bg-gradient-to-r from-purple-300 to-purple-600 flex flex-row items-center justify-center min-h-[18.625rem] md:min-h-[30rem]">
    <Pinion
      classNames={{
        inner: 'flex flex-col gap-2 md:gap-3',
        root: 'text-center !my-0',
      }}
      component="hero"
    >
      {label && (
        <Label
          className={clsx('type-h6 sm:type-h4 md:type-h3')}
          content={label}
        />
      )}
      {heading && (
        <Heading
          as="h1"
          className={clsx(
            'type-title-t7 sm:type-title-t6 md:type-title-t3 max-w-cols6 md:max-w-cols8 mx-auto'
          )}
          heading={heading}
        />
      )}
      {subheading && (
        <Heading
          as="h2"
          className={clsx('type-body-lg max-w-cols6 md:max-w-cols8 mx-auto')}
          heading={subheading}
        />
      )}
    </Pinion>
  </div>
)

export default Hero
