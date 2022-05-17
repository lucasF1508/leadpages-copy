import React from 'react'
import { styled } from '@design'
import { RiSearchLine as Icon } from '@react-icons/all-files/ri/RiSearchLine'

const $SearchIcon = styled('div', {
  position: 'relative',
  isolation: 'isolate',
  z: '$cover',
  d: 'flex',
  ff: 'row nowrap',
  js: 'center',
  ai: 'center',
  ml: '$4',
  cursor: 'pointer',

  '& path': {
    transition: 'stroke $base',
    stroke: '$brand',
  },
  variants: {
    isSearchVisible: {
      true: {
        '& path': {
          stroke: '$hover',
        },
      },
    },
  },
})

const SearchIcon = ({ toggleSearchVisible, isSearchVisible, ...props }) => (
  <$SearchIcon
    onClick={toggleSearchVisible}
    isSearchVisible={isSearchVisible}
    {...props}
  >
    <Icon />
  </$SearchIcon>
)

export default SearchIcon
