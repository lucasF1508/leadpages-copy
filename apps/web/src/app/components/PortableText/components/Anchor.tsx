import React from 'react'
import PageAnchor from '@/components/PageAnchor'

const AnchorType = ({
  className,
  value: { slug } = {},
}: {
  className?: string
  value?: { slug?: string }
}) => <PageAnchor className={className} slug={slug} />

export default AnchorType
