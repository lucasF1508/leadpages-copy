import { React } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@design'

const SpacerContainer = styled('div', {
  w: '100%',
  bc: 'rgb(0,0,0,0)',

  '&.small': {
    h: '3rem',

    '@<m': {
      h: '3rem',
    },

    '@<s': {
      h: '2rem',
    },

    '@<xs': {
      h: '2rem',
    },
  },

  '&.medium': {
    h: '8rem',

    '@<m': {
      h: '6rem',
    },

    '@<s': {
      h: '3rem',
    },

    '@<xs': {
      h: '2rem',
    },
  },

  '&.large': {
    h: '12rem',

    '@<m': {
      h: '9rem',
    },

    '@<s': {
      h: '6rem',
    },

    '@<xs': {
      h: '4rem',
    },
  },
})

const SpacerRow = ({ id, backgroundColor, size, sizeArray, border }) => {
  if (size && (typeof size !== 'string' || typeof size === 'undefined')) {
    console.warn(
      'LP Warn: You are attempting to use the <SpacerRow> component without passing a valid size in the form of a string (eg. size="small", "medium", or "large").'
    )
  }
  if (sizeArray && (!Array.isArray(sizeArray) || sizeArray?.length !== 4)) {
    console.warn(
      'LP Warn: You are attempting to use the <SpacerRow> component without passing in a valid sizeArray in the form of an array with one rem value per standard repo breakpoint (>992, >576, >340, <340) (e.g. sizeArray={6, 4, 2, 1}. Note that if both are passed in, the size string option will override the sizeArray.'
    )
  }

  const borderStyle = border ? { b: '3px solid $colors$primary' } : {}
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {}
  const sizeArrayStyle = sizeArray ? { sizeArray } : {}

  return (
    <SpacerContainer
      id={id}
      css={{
        ...sizeArrayStyle,
        ...backgroundColorStyle,
        ...borderStyle,
      }}
      className={size || ''}
    />
  )
}

// To use, pass in either a sizeArray with 4 values, corresponding to the four standard repo breakpoints (>992, >576, >340, <=340) or a valid size in the form of a string ("small", "medium", or "large").
SpacerRow.propTypes = {
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  sizeArray: PropTypes.arrayOf(PropTypes.number),
  border: PropTypes.bool,
}

export default SpacerRow
