import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Image from 'next/image'
// images
import arrowRightWhiteSVG from '../../assets/images/global/arrow_right_white.svg'

const ArrowButton = styled.div`
  position: absolute;
  z-index: 10;
  width: 42px;
  height: 42px;
  background-color: #603eff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex !important;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: 0;
  }
  &:hover {
    background-color: #4d32cc;
  }
  &.arrow-right {
    right: ${(props) => props.rightOffset};
  }
  &.arrow-left {
    transform: rotate(180deg);
    left: ${(props) => props.leftOffset};
  }
`

const ArrowSVG = styled(Image)`
  height: 12px;
  width: 12px;
  margin-left: 1px;
  display: block;
`

const NavigationArrows = (props) => {
  const { onClick, variant } = props
  const [topOffset, setTopOffset] = useState(0)
  useEffect(() => {
    const slideImageEl = document
      .getElementById('slide-image')
      .getBoundingClientRect()
    const arrowButtonEl = document
      .getElementById('arrow-button')
      .getBoundingClientRect()
    setTopOffset(slideImageEl?.height / 2 - arrowButtonEl.height / 2)
  }, [])

  return (
    <ArrowButton
      {...props}
      id="arrow-button"
      className={variant}
      onClick={onClick}
      style={{ top: topOffset + 'px' }}
    >
      <ArrowSVG src={arrowRightWhiteSVG} alt="navigation arrow icon" />
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
