import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { cx, css } from 'emotion';

import {
  defaultClassName,
  defaultOverlayClassName,
  fullscreenOverlayClassName,
  contentWrapperClassName,
  contentClassName,
  isOpenPageBodyClassName,
  isFullscreenClassName
} from './Modal.css.js';

const BaseModal = ({
  'data-qa-selector': dataQaSelector,
  aria,
  ariaHideApp,
  children,
  className,
  contentLabel,
  isFullscreen,
  isOpen,
  onAfterOpen,
  onRequestClose,
  overlayClassName,
  fixedHeight,
  styles: inlineStyles
}) => {
  const contentWrapperClass = cx(
    contentWrapperClassName,
    css`
      height: ${fixedHeight};
    `
  );

  const contentClass = cx(
    contentClassName,
    css`
      display: flex;
      flex-direction: column;
      height: ${fixedHeight};
    `
  );

  return (
    <Modal
      aria={aria}
      ariaHideApp={ariaHideApp}
      className={cx(defaultClassName, {
        [`${className}`]: className,
        [`${isFullscreenClassName}`]: isFullscreen,
        'is-fullscreen': isFullscreen
      })}
      bodyOpenClassName={isOpenPageBodyClassName}
      contentLabel={contentLabel}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      overlayClassName={cx(defaultOverlayClassName, overlayClassName, {
        [`${fullscreenOverlayClassName}`]: isFullscreen
      })}
      styles={inlineStyles}
    >
      <div className={contentWrapperClass} data-qa-selector={dataQaSelector}>
        <div className={contentClass}>{children}</div>
      </div>
    </Modal>
  );
};

BaseModal.defaultProps = {
  'data-qa-selector': null,
  aria: {},
  ariaHideApp: true,
  className: '',
  contentLabel: 'Modal',
  isFullscreen: false,
  isOpen: true,
  onAfterOpen: () => {},
  onRequestClose: () => {},
  fixedHeight: ''
};

BaseModal.propTypes = {
  'data-qa-selector': PropTypes.string,
  aria: PropTypes.shape({}),
  ariaHideApp: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentLabel: PropTypes.string,
  isFullscreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  fixedHeight: PropTypes.string
};

export default BaseModal;
