import React from 'react';
import PropTypes from 'prop-types';
import { ModalBody } from '../../templates/Modal';

const Promote = ({ className }) => (
  <ModalBody className={className}>
    <div className="renameModal-content">Promote</div>
  </ModalBody>
);

Promote.propTypes = {
  className: PropTypes.string
};

Promote.defaultProps = {
  className: ''
};

export default Promote;
