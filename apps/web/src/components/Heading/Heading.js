import React from 'react'
import { styled } from '@design'
import isString from 'lodash/isString'
import { getTypeUtil } from '@design/utils'
import PortableText from '@sanity/block-content-to-react'

export const $Heading = styled('h2', {
  variants: {
    tagStyle: getTypeUtil,
  },
})

const Heading = ({
  className,
  heading,
  tag = 'h2',
  tagStyle,
  children,
  renderers = {
    block: (props) => props.children,
  },
  ...props
}) => {
  if (!children && !heading) return null

  if (isString(heading))
    return (
      <$Heading
        as={tag}
        tagStyle={tagStyle || tag}
        className={className}
        {...props}
        dangerouslySetInnerHTML={{ __html: heading }}
      />
    )

  return (
    <$Heading
      as={tag}
      tagStyle={tagStyle || tag}
      className={className}
      {...props}
    >
      {children || (
        <PortableText blocks={heading} serializers={{ types: renderers }} />
      )}
    </$Heading>
  )
}

export default Heading
