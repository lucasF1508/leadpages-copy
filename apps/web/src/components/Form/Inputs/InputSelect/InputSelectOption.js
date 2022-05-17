import React from 'react'
import { styled } from '@design'
import { components } from 'react-select'
import { FiCheck as Icon } from '@react-icons/all-files/fi/FiCheck'

const $InputSelectOption = styled(components.Option, {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'flex-start',
  ai: 'center',
  h: '$space$6',
  p: '0 $2',
  cursor: 'pointer',
  bc: '$white',
  c: '$black',
  type: 'input',

  '&:hover': {
    bc: '$brand',
    c: '$white',
  },

  variants: {
    isFocused: {
      true: {
        bc: '$black',
        c: '$white',
      },
    },
  },
})

const $InputSelectOptionCheckbox = styled('div', {
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  h: '$space$2',
  w: '$space$2',
  mr: '$space$1',
  br: '$border',
  borderWidth: '$borderWidths$base',
  borderStyle: 'solid',
  borderColor: '$brand',

  '& svg': {
    d: 'block',
    h: '0.625rem',
    w: '0.625rem',
  },

  '& path': {
    stroke: '$brand',
  },

  [`${$InputSelectOption}:focus &`]: {
    borderColor: '$white',

    '& path': {
      stroke: '$white',
    },
  },

  variants: {
    isFocused: {
      true: {
        '& path': {
          stroke: '$white',
        },
      },
    },
    isSelected: {
      true: {
        '& svg': {
          d: 'none',
        },
      },
    },
  },
})

const InputSelectOption = (props) => {
  const {
    isSelected,
    isFocused,
    data: { label },
    hasIcon = false,
  } = props
  return (
    <$InputSelectOption {...props}>
      {hasIcon && (
        <$InputSelectOptionCheckbox
          isSelected={isSelected}
          isFocused={isFocused}
        >
          <Icon />
        </$InputSelectOptionCheckbox>
      )}
      {label}
    </$InputSelectOption>
  )
}

export default InputSelectOption
