import React, { useState, useEffect } from 'react'
import { styled } from '@design'
import PropTypes from 'prop-types'
// images
import arrowRightWhiteSVG from '@legacy/assets/images/global/arrow_right_white.svg'

const ArrowButton = styled('div', {
  position: 'absolute',
  zIndex: 10,
  width: '42px',
  height: '42px',
  backgroundColor: '$primary',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',

  '&:focus': {
    outline: 0,
  },

  '&:hover': {
    backgroundColor: '$indigoDark',
  },
})

const ArrowSVG = styled('img', {
  height: '12px',
  width: '12px',
  marginLeft: '1px',
  display: 'block',
})

const NavigationArrows = ({
  onClick,
  variant,
  leftOffset,
  rightOffset,
  ...props
}) => {
  const [topOffset, setTopOffset] = useState(0)

  useEffect(() => {
    const slideImageEl = document
      .getElementById('slide-image')
      .getBoundingClientRect()
    const arrowButtonEl = document
      .getElementById('arrow-button')
      .getBoundingClientRect()
    setTopOffset(slideImageEl.height / 2 - arrowButtonEl.height / 2)
  }, [])

  const topOffsetStyle = `${topOffset}px`

  return (
    <ArrowButton
      {...props}
      id="arrow-button"
      className={variant}
      onClick={onClick}
      leftOffset={leftOffset}
      rightOffset={rightOffset}
      css={{
        top: topOffsetStyle,
        ...(rightOffset
          ? {
              '&.arrow-right': {
                right: rightOffset,
              },
            }
          : {}),
        ...(leftOffset
          ? {
              '&.arrow-left': { transform: 'rotate(180deg)', left: leftOffset },
            }
          : {}),
      }}
    >
      <ArrowSVG src={arrowRightWhiteSVG.src} alt="navigation arrow icon" />
    </ArrowButton>
  )
}

NavigationArrows.defaultProps = {
  leftOffset: '-3rem',
  rightOffset: '-3rem',
}

NavigationArrows.propTypes = {
  leftOffset: PropTypes.string,
  rightOffset: PropTypes.string,
  variant: PropTypes.string.isRequired,
}

export default NavigationArrows
