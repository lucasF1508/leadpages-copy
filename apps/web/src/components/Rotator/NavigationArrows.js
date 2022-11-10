import React, { useState, useEffect } from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
// images
import ArrowRight from '@components/Svgs/ArrowRight'

const ArrowButton = styled('div', {
  position: 'absolute',
  zIndex: 10,
  width: '$space$5',
  height: '$space$5',
  backgroundColor: '$primary',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  transition: '0.2s all ease',
  bs: '$range',
  top: '50%',
  transform: 'translateY(-50%)',

  '&:focus': {
    outline: 0,
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
    bs: '$navArrow',
  },

  '&.arrow-left': {
    left: '-3.5rem',
    transform: 'scale(-1, 1) translateY(-50%)',

    '@>s': {
      left: '-3rem',
    },
  },

  '&.arrow-right': {
    right: '-3.5rem',

    '@>s': {
      right: '-3rem',
    },
  },

  variants: {
    color: {
      white: {
        backgroundColor: '$white',

        '&:hover': {
          backgroundColor: '$white',
        },

        svg: {
          fill: '$primary',
        },
      },
    },
  },
})

const ArrowSVG = styled(ArrowRight, {
  height: '12px',
  width: '12px',
  marginLeft: '1px',
  display: 'block',
})

const NavigationArrows = ({ onClick, variant, ...props }) => (
  <ArrowButton
    {...props}
    id="arrow-button"
    className={variant}
    onClick={onClick}
  >
    <ArrowSVG />
  </ArrowButton>
)

NavigationArrows.propTypes = {
  variant: PropTypes.string.isRequired,
}

export default NavigationArrows
