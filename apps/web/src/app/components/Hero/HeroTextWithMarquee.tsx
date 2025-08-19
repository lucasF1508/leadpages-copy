import type { MarqueeProps } from '@/components/Marquee'
import type { ContentType, LinkType } from '@types'
import React from 'react'
import clsx from 'clsx'
import { Links, hasLinks } from '@/components/Link'
import Marquee from '@/components/Marquee'
import Pinion from '@/components/Pinion'
import Text from '@/components/Text'

export interface HeroTextWithMarqueeProps {
  content?: string
  heading?: ContentType
  label?: string
  links?: LinkType[]
  marquee?: MarqueeProps
}

const HeroTextWithMarquee = ({
  content,
  heading,
  label,
  links,
  marquee,
}: HeroTextWithMarqueeProps) => (
  <>
    <Pinion component="hero">
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
          <p className={clsx('type-xs md:type-body-lg text-center')}>
            {content}
          </p>
        )}
        {hasLinks(links) && <Links links={links} />}
      </div>
    </Pinion>
    {marquee && (
      <div className="overflow-hidden">
        <Marquee {...marquee} maxHeight={64} />
      </div>
    )}
  </>
)

export default HeroTextWithMarquee
