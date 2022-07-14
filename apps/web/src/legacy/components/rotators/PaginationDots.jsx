import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@design'

const DotHolder = styled('div', {
  w: '100%',
  h: '10px',
  d: 'flex',
  ff: 'row nowrap',
  jc: 'center',
  ai: 'center',
  cursor: 'default',
  pointerEvents: 'none',
})

const Dot = styled('div', {
  w: '6px',
  h: '6px',
  m: '0 5px',
  bc: '#0f0c09',
  br: '100%',
  opacity: 0.25,

  '&.slick-active': {
    h: '10px',
    w: '10px',
    bc: 'black',
    opacity: 1,
  },
})

const PaginationDots = ({ dots, margin }) => (
  <DotHolder style={{ margin: margin }}>
    {dots.map((item, index) => {
      return <Dot key={index} className={item.props.className} />
    })}
  </DotHolder>
)

PaginationDots.defaultProps = {
  margin: 'inherit',
}

PaginationDots.propTypes = {
  margin: PropTypes.string,
}

export default PaginationDots
