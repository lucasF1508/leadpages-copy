import React from 'react'
import { defaultSerializers } from '@sanity/block-content-to-react'
import { styled } from '@design'

const $StyledText = styled('p', {})

const defaultRenderer = [
  'normal',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'blockquote',
]

const BlockRenderer = (props) => {
  const { styleMap = {}, style = 'normal' } = props.node
  const { types } = defaultSerializers
  const asDefault = typeof props.index !== 'undefined' ? 'span' : 'p'
  const color = props.node.children[0].marks.includes('textAlt') && '$textAlt'

  if (
    defaultRenderer.includes(style) &&
    !Object.keys(styleMap).includes(style)
  ) {
    return types.block(props)
  }

  const type = {
    large: 'baseTypeLarge',
    normal: 'baseType',
    small: 'smallType',
    extraSmall: 'input',
    ...styleMap,
  }[style || 'normal']

  const as = {
    headlineTitle: 'h2',
    headlineSubtitle: 'h3',
    ...styleMap,
  }[style]

  return (
    <$StyledText as={as || asDefault} css={{ type: type || style, color }}>
      {props.children}
    </$StyledText>
  )
}

export default BlockRenderer
