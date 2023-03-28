import React from 'react'
import { styled } from '@design'
import checkSVG from '@legacy/assets/images/global/check_in-circle.svg'
import purpleCheckSVG from '@legacy/assets/images/global/check_purple.svg'

const SVG = styled('img', {
  position: 'absolute',
  top: '2px',
  left: 0,

  variants: {
    variant: {
      plain: {
        pt: '0.3rem',
        left: '-0.8rem',
        filter: 'brightness(0)',
      },
      branded: {
        pt: '0.3rem',
        left: '-0.8rem',
      },
    },
  },
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

const ListCheckmark = ({ variant = 'circle', children }) => {
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
  const { variant = 'circle', children } = props

  return (
    <$ListItemCheckmark variant={variant}>
      <SVG
        variant={variant}
        src={variant === 'circle' ? checkSVG.src : purpleCheckSVG.src}
        alt="check mark svg"
      />
      {children}
    </$ListItemCheckmark>
  )
}

export default ListCheckmark
export { ListCheckmark, ListItemCheckmark }
