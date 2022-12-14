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
  typeSizes: 'smallType',
  color: '$textAlt',
})

const $ListCheckmark = styled('ul', {
  [`${$ListItemCheckmark}`]: {
    '&::before': {
      display: 'none',
    },
  },
})

const ListCheckmark = (props) => {
  const { children } = props
  return <$ListCheckmark>{children}</$ListCheckmark>
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
