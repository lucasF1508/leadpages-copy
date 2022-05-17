import React from 'react'
import { styled } from '@design'
import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown'

const $InputSelectIcon = styled('span', {
  position: 'absolute',
  top: '$2',
  right: '$2',
  z: '$under',
  h: '$space$2',
  w: '$space$2',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',

  '& svg': {
    d: 'block',
    h: '100%',
    w: '100%',
    stroke: '$brand',
  },
})

const InputSelectIcon = (props) => (
  <$InputSelectIcon {...props}>
    <FiChevronDown />
  </$InputSelectIcon>
)

export default InputSelectIcon
