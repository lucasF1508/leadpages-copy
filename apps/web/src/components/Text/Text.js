import React from 'react'
import { styled } from '@design'
import { textDefaultTokens, textPostTokens } from '@design/tokens/text'
import { getTypeUtil } from '@design/utils'
import PortableText from '@sanity/block-content-to-react'
import isString from 'lodash/isString'
import ListItemsList from './Lists/ListItemsList'
import ListsList from './Lists/ListsList'
import MarksList from './Marks/MarksList'
import RendererList from './Renderers/RendererList'

const $Text = styled('article', {
  defaultVariants: {
    tagStyle: 'baseType',
  },
  variants: {
    tagStyle: getTypeUtil,
    tokenSet: {
      default: { ...textDefaultTokens },
      post: { ...textPostTokens },
    },
  },
})

const Text = ({
  children,
  className,
  content,
  displayIds = false,
  list = ListsList,
  listItem = ListItemsList,
  marks = MarksList,
  renderers = RendererList,
  styleMap = {},
  tagStyle,
  ...props
}) => {
  if (!children && !content) return null

  if (isString(content))
    return (
      <$Text
        className={className}
        tagStyle={tagStyle}
        {...props}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    )

  return (
    <$Text
      className={className}
      tagStyle={tagStyle}
      tokenSet={props.usePostTokens ? 'post' : 'default'}
      {...props}
    >
      {children || (
        <PortableText
          blocks={content.map((item) => ({ ...item, displayIds, styleMap }))}
          serializers={{
            list,
            listItem,
            marks,
            types: renderers,
          }}
        />
      )}
    </$Text>
  )
}

export default Text
