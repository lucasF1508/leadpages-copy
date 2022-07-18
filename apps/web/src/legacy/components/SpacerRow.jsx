import { React } from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components';
import { styled } from '@design'

const SpacerContainer = styled('div', {
  w: '100%',
  bc: 'rgb(0,0,0,0)',

  '&.small': {
    h: '3rem',

    '@media (max-width: 992px)': {
      h: '3rem',
    },

    '@media (max-width: 576px)': {
      h: '2rem',
    },

    '@media (max-width: 340px)': {
      h: '2rem',
    },
  },

  '&.medium': {
    h: '8rem',

    '@media (max-width: 992px)': {
      h: '6rem',
    },

    '@media (max-width: 576px)': {
      h: '3rem',
    },

    '@media (max-width: 340px)': {
      h: '2rem',
    },
  },

  '&.large': {
    h: '12rem',

    '@media (max-width: 992px)': {
      h: '9rem',
    },

    '@media (max-width: 576px)': {
      h: '6rem',
    },

    '@media (max-width: 340px)': {
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
  return (
    <SpacerContainer
      id={id}
      css={
        sizeArray
          ? { sizes: sizeArray, bc: backgroundColor }
          : { bc: backgroundColor }
      }
      className={size || ''}
      style={{ border: border ? '3px solid #603eff' : '' }}
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
