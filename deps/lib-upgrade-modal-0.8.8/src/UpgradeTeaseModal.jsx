import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

import { Modal, ModalBody, ModalHeader } from '@lp/leads/Modal';

import { UpgradeTeaseContent } from './components';

const modalContainerClass = css`
  margin: 0 auto;
  padding: 0;
`;

const modalContentClass = css`
  margin: 0 auto;
  padding: 0 !important;
`;

const modalHeaderClass = css`
  margin: 0 !important;
  padding: 0 !important;
  min-height: 0;
  height: 0;
`;

const UpgradeTeaseModal = ({ modalClass, closeAction, ...other }) => (
  <Modal
    isOpen
    onRequestClose={closeAction}
    isFullscreen
    className={cx(modalContainerClass, modalClass)}
  >
    <ModalHeader
      onClose={closeAction}
      className={modalHeaderClass}
      noBackground
    />
    <ModalBody className={modalContentClass}>
      <UpgradeTeaseContent {...other} />
    </ModalBody>
  </Modal>
);

UpgradeTeaseModal.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(
    PropTypes.string,
  ),
  ctaButtonClass: PropTypes.string,
  ctaCaptionClass: PropTypes.string,
  modalClass: PropTypes.string,
  ctaLabel: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  ctaCaption: PropTypes.string,
  closeAction: PropTypes.func.isRequired,
  mediaUrl: PropTypes.string,
};

UpgradeTeaseModal.defaultProps = {
  subheadline: null,
  description: null,
  listItems: null,
  ctaCaption: '',
  mediaUrl: '',
  ctaButtonClass: null,
  ctaCaptionClass: null,
  modalClass: '',
};

export default UpgradeTeaseModal;
