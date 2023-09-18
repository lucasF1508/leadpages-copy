import React from 'react'
import { styled } from '@design'

const $ListItemBranded = styled('li', {
  position: 'relative',
  d: 'flex',
})

export const $ListBranded = styled('ol', {
  mx: '0 !important',

  '> li > div > ol': {
    mt: '$2_5',
    mb: 0,
  },

  [`${$ListItemBranded}`]: {
    listStyle: 'none',
    listStyleType: 'none',
    p: 0,
    pl: '2.2em',
    mt: '$2_5',

    '&::before': {
      content: 'none',
    },

    '& > span': {
      position: 'absolute',
      left: 0,
      d: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 0,
      height: '1.75em',
      width: '1.75em',
      borderRadius: '$round',
      color: '$white',
    },
  },
})

const $Circle = styled('span', {
  top: '-0.2em',
  boxSizing: 'border-box',

  variants: {
    inverted: {
      true: {
        backgroundColor: '$white',
        color: '$primary !important',
        border: '2px solid $colors$primary',
      },
      false: {
        backgroundColor: '$primary',
        color: '$background !important',
        border: '2px solid $colors$primary',
      },
    },
  },
})

const $Number = styled('span', {
  position: 'absolute',
  top: 0,
  lineHeight: '1em',
  transform: 'translateY(0.325em)',
})

const ListBranded = ({ children }) => {
  const { node } = children[0].props
  const { styleMap = {}, style = 'normal' } = node
  const fontStyles = node.children[0].marks

  const fontWeight = fontStyles.includes('strong') ? 500 : 400
  const color = fontStyles.includes('text') ? '$text' : '$textAlt'

  const type = {
    large: 'baseTypeLarge',
    normal: 'baseType',
    small: 'smallType',
    extraSmall: 'input',
    ...styleMap,
  }[style || 'normal']

  return (
    <$ListBranded css={{ type, strong: { fontWeight }, color }}>
      {children}
    </$ListBranded>
  )
}

const ListItemBranded = (props) => {
  const { children, node = {} } = props
  const { level = 1, style } = node

  return (
    <$ListItemBranded css={{ type: style }}>
      <$Circle inverted={level % 2 === 0}>
        <$Number>
          {level % 2 === 0
            ? String.fromCharCode(props.index + 65)
            : props.index + 1}
        </$Number>
      </$Circle>
      <div>{children}</div>
    </$ListItemBranded>
  )
}

export default ListBranded
export { ListBranded, ListItemBranded }
