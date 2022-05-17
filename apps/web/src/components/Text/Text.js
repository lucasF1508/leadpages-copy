import React from 'react'
import isString from 'lodash/isString'
import PortableText from '@sanity/block-content-to-react'
import { styled } from '@design'
import { getTypeUtil } from '@design/utils'
import { textDefaultTokens } from '@design/tokens/text'
import {
  BlockRenderer,
  MediaRenderer,
  AnchorRenderer,
  TableRenderer,
  EmbedRenderer,
} from './Renderers'
import { LinkMarkRender } from './Marks'

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
  renderers = {
    media: MediaRenderer,
    block: BlockRenderer,
    pageAnchor: AnchorRenderer,
    table: TableRenderer,
    embed: EmbedRenderer,
  },
  marks = { link: LinkMarkRender },
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
