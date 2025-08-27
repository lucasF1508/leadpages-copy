import type { ContentType, LinkType } from '@types'
import React from 'react'
import clsx from 'clsx'
import { Links, hasLinks } from '@/components/Link'
import Pinion from '@/components/Pinion'
import Text from '@/components/Text'

export interface HeroBaseProps {
  className?: string
  content?: string
  heading?: ContentType
  label?: string
  links?: LinkType[]
}

const HeroBase = ({
  className,
  content,
  heading,
  label,
  links,
}: HeroBaseProps) => (
  <Pinion className={className} component="hero">
    <div className="flex flex-col items-center justify-center gap-4 max-w-cols10 mx-auto">
      {label && <p className="type-h5 sm:type-h4 md:type-h2">{label}</p>}
      {heading && (
        <Text
          as="div"
          className={clsx(
            'text-center [&>*]:!my-0 gap-2 md:gap-3 flex-col flex'
          )}
          content={heading}
        />
      )}
      {content && (
        <p className={clsx('type-xs md:type-body-lg text-center')}>{content}</p>
      )}
      {hasLinks(links) && <Links links={links} />}
    </div>
  </Pinion>
)

export default HeroBase
