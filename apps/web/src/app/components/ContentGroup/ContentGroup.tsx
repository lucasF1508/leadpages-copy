import type { ContentType, LinkType } from '@types'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Label from '@/components/Label'
import Link, { hasLink } from '@/components/Link'
import Text from '@/components/Text'

export interface ContentGroupProps {
  className?: string
  classNames?: {
    content?: string
    heading?: string
    label?: string
    link?: string
    root?: string
  }
  content?: ContentType
  heading?: string
  label?: string
  link?: LinkType
  props?: {
    [key: string]: unknown
    content?: object
    heading?: object
    label?: object
    link?: object
  }
}

const ContentGroup = ({
  className,
  classNames,
  content,
  heading,
  label,
  link,
  props: _props = {},
}: ContentGroupProps) => {
  if (!label && !heading && !content && !hasLink(link)) return null

  const {
    content: contentProps = {},
    heading: headingProps = {},
    label: labelProps = {},
    link: linkProps = {},
    ...props
  } = _props

  return (
    <div
      className={clsx(
        'max-w-content align-center relative flex w-full flex-col flex-nowrap items-start justify-start gap-1.5',
        className,
        classNames?.root
      )}
      {...props}
    >
      {label && (
        <Label
          className={clsx('text-body', classNames?.label)}
          content={label}
          {...labelProps}
        />
      )}
      {heading && (
        <Heading
          as="h2"
          className={classNames?.heading}
          heading={heading}
          {...headingProps}
        />
      )}
      {content && (
        <Text
          as="div"
          className={classNames?.content}
          content={content}
          {...contentProps}
        />
      )}
      {hasLink(link) && (
        <Link
          className={clsx('link-button', classNames?.link)}
          {...link}
          {...linkProps}
        />
      )}
    </div>
  )
}

export default ContentGroup
