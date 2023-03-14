import React from 'react'
import { styled } from '@design'
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'

const SVG = styled('img', {
  position: 'absolute',
  top: '2px',
  left: 0,
})

const $ListItemCheckmark = styled('li', {
  position: 'relative',
})

const $ListCheckmark = styled('ul', {
  mt: '$4',
  mb: '$2',

  [`${$ListItemCheckmark}`]: {
    '&::before': {
      display: 'none',
    },
  },
})

const ListCheckmark = ({ children }) => {
  const { node } = children[0].props
  const { styleMap = {}, style = 'normal' } = node
  const fontStyles = node.children[0].marks

  const fontWeight = fontStyles.includes('strong') ? 500 : 400
  const color = fontStyles.includes('text') ? '$text' : '$textAlt'

  const type = {
    normal: 'baseType',
    small: 'smallType',
    extraSmall: 'input',
    ...styleMap,
  }[style || 'normal']

  return (
    <$ListCheckmark css={{ typeSizes: type, strong: { fontWeight }, color }}>
      {children}
    </$ListCheckmark>
  )
}

const ListItemCheckmark = (props) => {
  const { children } = props

  return (
    <$ListItemCheckmark>
      <SVG src={checkSVG.src} alt="check mark svg" />
      {children}
    </$ListItemCheckmark>
  )
}

export default ListCheckmark
export { ListCheckmark, ListItemCheckmark }
