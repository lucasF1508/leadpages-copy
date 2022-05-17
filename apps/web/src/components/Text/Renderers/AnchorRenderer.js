import React from 'react'
import PageAnchor from '@components/PageAnchor'

const AnchorRenderer = ({ node: { slug } = {} } = {}) => (
  <PageAnchor slug={slug} />
)

export default AnchorRenderer
