import { LinkType, ImageType } from '@/types'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Label from '@/components/Label'
import Link, { LinkIcon } from '@/components/Link'
import Text from '@/components/Text'

interface CardClickableProp {
  className?: string
  content?: string
  heading?: string
  icon?: ImageType
  label?: string
  link: LinkType
}

const CardClickable = ({
  className,
  content,
  heading,
  label,
  link,
}: CardClickableProp) => (
  <Link
    className={clsx(
      'bg-surface-muted w-full max-w-cols10 mx-auto border border-neutral rounded-lg md:rounded-xl flex items-center justify-center min-h-[7rem] md:min-h-[12.125rem] px-3 sm:px-6 md:px-8 gap-3',
      className
    )}
    {...link}
    hasIcon={false}
    linkStyle="none"
  >
    <div className="w-full max-w-[25.375rem] md:max-w-[36rem] flex flex-col gap-1 py-4">
      {label && (
        <Label
          className="type-overline-xxs md:type-overline-xs"
          content={label}
        />
      )}
      {heading && (
        <Heading className="type-h5 sm:type-h4 md:type-h2" heading={heading} />
      )}
      {content && <Text content={content} />}
    </div>
    <div>
      <LinkIcon className="md:!w-4 md:!h-4" />
      <span className="w-full h-[3px] bg-brand-secondary block mt-0.5" />
    </div>
  </Link>
)

export default CardClickable
