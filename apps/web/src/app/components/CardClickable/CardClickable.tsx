import { LinkType, ImageType } from '@/types'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Image from '@/components/Image'
import Label from '@/components/Label'
import Link, { LinkIcon, hasLink } from '@/components/Link'
import Text from '@/components/Text'

interface CardClickableProp {
  className?: string
  classNames?: {
    root?: string
    content?: string
    heading?: string
    label?: string
    icon?: string
    arrow?: string
  }
  content?: string
  heading?: string
  icon?: ImageType
  label?: string
  link?: LinkType
}

const CardClickableLink = ({
  link,
  className,
  children,
}: {
  link?: LinkType
  className?: string
  children: React.ReactNode
}) => {
  if (hasLink(link)) {
    return (
      <Link
        className={clsx(
          className,
          'hover:shadow-highest transition-[box-shadow] theme-dark:shadow-brand-secondary/20'
        )}
        {...link}
        hasIcon={false}
        linkStyle="none"
      >
        {children}
      </Link>
    )
  }

  return <div className={className}>{children}</div>
}

const CardClickable = ({
  className,
  classNames,
  content,
  heading,
  label,
  link,
  icon,
}: CardClickableProp) => (
  <CardClickableLink
    link={link}
    className={clsx(
      'bg-surface-muted w-full max-w-cols10 mx-auto border border-neutral rounded-lg md:rounded-xl flex items-center justify-center min-h-[7rem] md:min-h-[12.125rem] px-3 sm:px-6 md:px-8 gap-7',
      className,
      classNames?.root
    )}
  >
    {icon && (
      <div
        className={clsx(
          'hidden sm:block max-w-5 max-h-5 md:max-w-8 md:max-h-8 flex-[1_1_auto]',
          classNames?.icon
        )}
      >
        <Image className="!object-contain !h-full !w-full" image={icon} />
      </div>
    )}
    <div
      className={clsx(
        'w-full max-w-[25.375rem] md:max-w-[36rem] flex flex-col gap-1 py-4',
        classNames?.content
      )}
    >
      {icon && (
        <div
          className={clsx('sm:hidden max-w-5 max-h-5 mb-1', classNames?.icon)}
        >
          <Image className="!object-contain !h-full !w-full" image={icon} />
        </div>
      )}
      {label && (
        <Label
          className={clsx(
            'type-overline-xxs md:type-overline-xs theme-light:text-body-muted',
            classNames?.label
          )}
          content={label}
        />
      )}
      {heading && (
        <Heading
          className={clsx(
            'type-h5 sm:type-h4 md:type-h2 theme-light:text-body-muted',
            classNames?.heading
          )}
          heading={heading}
        />
      )}
      {content && (
        <Text
          as="p"
          className={clsx(
            'type-body-xs theme-light:text-body-muted',
            classNames?.content
          )}
          content={content}
        />
      )}
    </div>
    <div
      className={clsx(
        'md:!w-4 md:!h-4 flex-[0_0_auto]',
        !hasLink(link) && 'opacity-0',
        classNames?.arrow
      )}
    >
      <LinkIcon
        className={clsx('md:!w-full md:!h-full', !hasLink(link) && 'is-hidden')}
      />
      <span className="w-full h-[3px] bg-brand-secondary block mt-0.5" />
    </div>
  </CardClickableLink>
)

export default CardClickable
