import React from 'react'
import isString from 'lodash/isString'
import PortableText from '@sanity/block-content-to-react'
import { styled } from '@design'
import { getTypeUtil } from '@design/utils'
import { textDefaultTokens } from '@design/tokens/text'
import RendererList from './Renderers/RendererList'
import MarksList from './Marks/MarksList'

const $Text = styled('article', {
  ...textDefaultTokens,
  variants: {
    tagStyle: getTypeUtil,
  },
  defaultVariants: {
    tagStyle: 'baseType',
  },
})

const Text = ({
  content,
  tagStyle,
  className,
  children,
  renderers = RendererList,
  marks = MarksList,
  ...props
}) => {
  if (!children && !content) return null

  if (isString(content))
    return (
      <$Text
        tagStyle={tagStyle}
        className={className}
        {...props}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )

  return (
    <$Text tagStyle={tagStyle} className={className} {...props}>
      {children || (
        <PortableText
          blocks={content}
          serializers={{ types: renderers, marks }}
        />
      )}
    </$Text>
  )
}

export default Text
