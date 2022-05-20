import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 !important;\n  padding: 0 !important;\n  min-height: 0;\n  height: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  padding: 0 !important;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { Modal, ModalBody, ModalHeader } from '@lp/leads/Modal';
import { UpgradeTeaseContent } from './components';
var modalContainerClass = css(_templateObject());
var modalContentClass = css(_templateObject2());
var modalHeaderClass = css(_templateObject3());

var UpgradeTeaseModal = function UpgradeTeaseModal(_ref) {
  var modalClass = _ref.modalClass,
      closeAction = _ref.closeAction,
      other = _objectWithoutProperties(_ref, ["modalClass", "closeAction"]);

  return /*#__PURE__*/React.createElement(Modal, {
    isOpen: true,
    onRequestClose: closeAction,
    isFullscreen: true,
    className: cx(modalContainerClass, modalClass)
  }, /*#__PURE__*/React.createElement(ModalHeader, {
    onClose: closeAction,
    className: modalHeaderClass,
    noBackground: true
  }), /*#__PURE__*/React.createElement(ModalBody, {
    className: modalContentClass
  }, /*#__PURE__*/React.createElement(UpgradeTeaseContent, other)));
};

UpgradeTeaseModal.propTypes = {
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string),
  ctaButtonClass: PropTypes.string,
  ctaCaptionClass: PropTypes.string,
  modalClass: PropTypes.string,
  ctaLabel: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  ctaCaption: PropTypes.string,
  closeAction: PropTypes.func.isRequired,
  mediaUrl: PropTypes.string
};
UpgradeTeaseModal.defaultProps = {
  subheadline: null,
  description: null,
  listItems: null,
  ctaCaption: '',
  mediaUrl: '',
  ctaButtonClass: null,
  ctaCaptionClass: null,
  modalClass: ''
};
export default UpgradeTeaseModal;