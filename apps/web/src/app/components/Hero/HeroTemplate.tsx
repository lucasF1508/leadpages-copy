import type { Taxon } from '@/types'
import React from 'react'
import clsx from 'clsx'
import Icon from 'icons/Icon'
import { webValidationStroke } from 'icons/all/web-validation-stroke'
import Image from '@/components/Image'
import Label from '@/components/Label'
import Link from '@/components/Link'
import Pinion from '@/components/Pinion'
import Text from '@/components/Text'

export interface HeroTemplateProps {
  category?: Taxon
  content: string
  heading?: string
  image: {
    aspectRatio: number
    src: string
  }
  label?: string
  links: {
    demo: {
      label: string
      url: string
    }
  }
}

const HeroTemplate = ({
  category,
  content,
  heading,
  image,
  label,
  links,
}: HeroTemplateProps) => (
  <Pinion component="hero">
    <span className="inline-flex py-[0.25rem] rounded-lg bg-surface-neutral-medium px-1.5 mb-3 md:mb-4">
      <Label
        className={clsx(
          '!text-[0.625rem] type-overline-xxs text-light pt-[0.125rem]'
        )}
        content={label}
      />
    </span>
    <div className="flex flex-col items-start justify-start sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between gap-3">
      <div className="flex flex-col gap-2 md:gap-3">
        <span className="type-h5">{category?.label}</span>
        <h1 className="type-title-t7 sm:type-title-t6 md:type-title-t5">
          {heading}
        </h1>
        <Text
          as="div"
          blockStyles={{
            normal: { className: 'type-h4 md:type-h2', tag: 'h2' },
          }}
          className="max-w-cols7"
          content={content}
        />
      </div>
      <Link
        condition="internal"
        hasIcon
        linkStyle="button-secondary"
        url={links.demo.url}
      >
        {links.demo.label}
        <Icon {...webValidationStroke} className="z-content w-2.5 h-2.5" />
      </Link>
    </div>
    <div className="w-full max-w-cols5 my-4 gradient-white-opacity" />

    <div className="relative w-full pt-8 px-8 rounded-lg overflow-hidden bg-body/10 border-2 border-body from-white to-[#DDDDDD] bg-gradient-to-b">
      <div className="relative w-full aspect-[19/20] overflow-hidden rounded-t-md">
        <Image
          className="w-full h-auto object-top"
          fill
          image={image?.src}
          sizes="(min-width: 1084px) 1084px, 100vw"
        />
      </div>
    </div>
  </Pinion>
)

export default HeroTemplate
