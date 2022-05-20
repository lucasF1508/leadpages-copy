import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import Button from '../../atoms/Button';
import IconButton from '../../molecules/IconButton';
import { Modal, ModalBody, ModalFooter } from '../../templates/Modal';

const defaultClassName = css`
  width: 360px;
`;

const modalBodyClassName = css`
  min-height: 50px;
  display: flex;
  position: relative;
`;

const modalFooterClassName = css`
  justify-content: center;
  width: 100%;
  padding: 0;
`;

const ConfirmModal = ({
  aria,
  ariaHideApp,
  className,
  cancelButtonText,
  confirmButtonText,
  children,
  isOpen,
  onCanceled,
  onConfirmDelete,
  component: ModalShell,
}) => (
  <ModalShell
    aria={aria}
    ariaHideApp={ariaHideApp}
    className={cx(defaultClassName, className)}
    isOpen={isOpen}
    onRequestClose={onCanceled}
  >
    <ModalBody className={modalBodyClassName}>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <IconButton onClick={onCanceled} icon="close" noBackground noHoverBackground />
      </div>
      <div style={{ alignSelf: 'center' }}>{children}</div>
    </ModalBody>
    <ModalFooter className={modalFooterClassName}>
      <Button isSecondary onClick={onCanceled}>
        {cancelButtonText}
      </Button>
      <Button isSecondary onClick={onConfirmDelete}>
        {confirmButtonText}
      </Button>
    </ModalFooter>
  </ModalShell>
);

ConfirmModal.propTypes = {
  aria: PropTypes.shape({}),
  ariaHideApp: PropTypes.bool,
  className: PropTypes.string,
  cancelButtonText: PropTypes.string,
  confirmButtonText: PropTypes.string,
  isOpen: PropTypes.bool,
  component: PropTypes.node,
};

ConfirmModal.defaultProps = {
  aria: {},
  ariaHideApp: true,
  className: '',
  cancelButtonText: 'Cancel',
  confirmButtonText: 'Confirm',
  isOpen: false,
  component: Modal,
};

export default ConfirmModal;
