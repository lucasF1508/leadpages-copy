import React from 'react'
import { defaultSerializers } from '@sanity/block-content-to-react'
import { styled } from '@design'

const $StyledText = styled('p', {})

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node
  const { types } = defaultSerializers
  const asDefault = typeof props.index !== 'undefined' ? 'span' : 'p'

  if (['normal', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(style)) {
    return types.block(props)
  }

  const type = {
    large: 'baseTypeLarge',
    normal: 'baseType',
  }[style || 'normal']

  const as = {
    headlineTitle: 'h2',
    headlineSubtitle: 'h3',
  }[style]

  return (
    <$StyledText as={as || asDefault} css={{ type: type || style }}>
      {props.children}
    </$StyledText>
  )
}

export default BlockRenderer
