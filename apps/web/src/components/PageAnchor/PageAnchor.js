import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { styled } from '@design'

const $PageAnchor = styled('a', {
  position: 'absolute',
  visibility: 'hidden',
})

const PageAnchor = ({ slug, ...props }) => {
  const id = kebabCase(slug || '').replace('#', '')

  if (!id) {
    return null
  }

  return (
    <$PageAnchor
      id={id}
      href={`#${id}`}
      aria-label={`Link to ${slug}`}
      {...props}
    >
      {slug}
    </$PageAnchor>
  )
}

export default PageAnchor
