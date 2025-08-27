import type { ContentType, LinkType } from '@/types'
import React from 'react'
import clsx from 'clsx'
import Heading from '@/components/Heading'
import Link, { hasLink } from '@/components/Link'
import Text, { hasContent } from '@/components/Text'

export interface IntegrationDirectoryNoResultsProps {
  className?: string
  content?: ContentType
  heading?: string
  link?: LinkType
}

const IntegrationDirectoryNoResults = ({
  className,
  content,
  heading,
  link,
}: IntegrationDirectoryNoResultsProps) => (
  <div className={clsx('max-w-cols6 mx-auto text-center', className)}>
    {heading && <Heading className="type-title-t5 mb-3" heading={heading} />}
    {hasContent(content) && <Text content={content} />}
    {hasLink(link) && <Link {...link} className="mt-3" />}
  </div>
)

export default IntegrationDirectoryNoResults
