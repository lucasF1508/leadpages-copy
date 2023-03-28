import React from 'react'
import isString from 'lodash/isString'
import PortableText from '@sanity/block-content-to-react'
import { styled } from '@design'
import { getTypeUtil } from '@design/utils'
import { textDefaultTokens, textPostTokens } from '@design/tokens/text'
import RendererList from './Renderers/RendererList'
import MarksList from './Marks/MarksList'
import ListsList from './Lists/ListsList'
import ListItemsList from './Lists/ListItemsList'

const $Text = styled('article', {
  variants: {
    tagStyle: getTypeUtil,
    tokenSet: {
      default: { ...textDefaultTokens },
      post: { ...textPostTokens },
    },
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
  list = ListsList,
  listItem = ListItemsList,
  styleMap = {},
  displayIds = false,
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
    <$Text
      tagStyle={tagStyle}
      tokenSet={props.isPost ? 'post' : 'default'}
      className={className}
      {...props}
    >
      {children || (
        <PortableText
          blocks={content.map((item) => ({ ...item, displayIds, styleMap }))}
          serializers={{
            types: renderers,
            marks,
            list,
            listItem,
          }}
        />
      )}
    </$Text>
  )
}

export default Text
