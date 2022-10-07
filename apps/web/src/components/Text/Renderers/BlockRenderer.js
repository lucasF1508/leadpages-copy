import React from 'react'
import { defaultSerializers } from '@sanity/block-content-to-react'
import { styled } from '@design'

const $StyledText = styled('p', {})

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node
  const { types } = defaultSerializers

  if (['normal', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(style)) {
    return types.block(props)
  }

  const type = {
    large: 'baseTypeLarge',
    normal: 'baseType',
  }[style || 'normal']

  return (
    <$StyledText
      as={typeof props.index !== 'undefined' ? 'span' : 'p'}
      css={{ type }}
    >
      {props.children}
    </$StyledText>
  )
}

export default BlockRenderer
