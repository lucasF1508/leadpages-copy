import React from 'react';
import PropTypes from 'prop-types';

const ClickShield = ({ onClick, isOpen }) => (
  <div
    role="button"
    tabIndex="0"
    style={{
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      display: isOpen ? 'block' : 'none'
    }}
    onClick={onClick}
  />
);

ClickShield.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool.isRequired
};

ClickShield.defaultProps = {
  onClick: () => true
};

export default ClickShield;
