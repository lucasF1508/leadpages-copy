import React from 'react'
import { styled } from '@design'

const $StyledText = styled('span', {})

const ColorMarkRender = (props) => {
  const { children, mark } = props
  let css = {}
  switch (mark) {
    case 'textColorHighlight':
      css = { '&, *': { c: '$primary' } }
      break
    case 'textColorHighlightAlt':
      css = { '&, *': { c: '$tealLight' } }
      break
    case 'textColorAlt':
      css = { '&, *': { c: '$secondary' } }
      break
    default:
      css = { '&, *': { c: '$text' } }
      break
  }

  return <$StyledText css={css}>{children}</$StyledText>
}

export default ColorMarkRender
