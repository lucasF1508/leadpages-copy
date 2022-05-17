import React from 'react'
import { defaultSerializers } from '@sanity/block-content-to-react'
import { styled } from '@design'

const $LargeText = styled('p', {
  type: 'h5',
})

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node
  const { types } = defaultSerializers

  if (style === 'large') {
    return <$LargeText>{props.children}</$LargeText>
  }

  return types.block(props)
}

export default BlockRenderer
