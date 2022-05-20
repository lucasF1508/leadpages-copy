"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _Modal = require("@lp/leads/Modal");

var _components = require("./components");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0 !important;\n  padding: 0 !important;\n  min-height: 0;\n  height: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0 auto;\n  padding: 0 !important;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 0 auto;\n  padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var modalContainerClass = (0, _emotion.css)(_templateObject());
var modalContentClass = (0, _emotion.css)(_templateObject2());
var modalHeaderClass = (0, _emotion.css)(_templateObject3());

var UpgradeTeaseModal = function UpgradeTeaseModal(_ref) {
  var modalClass = _ref.modalClass,
      closeAction = _ref.closeAction,
      other = (0, _objectWithoutProperties2.default)(_ref, ["modalClass", "closeAction"]);
  return /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    isOpen: true,
    onRequestClose: closeAction,
    isFullscreen: true,
    className: (0, _emotion.cx)(modalContainerClass, modalClass)
  }, /*#__PURE__*/_react.default.createElement(_Modal.ModalHeader, {
    onClose: closeAction,
    className: modalHeaderClass,
    noBackground: true
  }), /*#__PURE__*/_react.default.createElement(_Modal.ModalBody, {
    className: modalContentClass
  }, /*#__PURE__*/_react.default.createElement(_components.UpgradeTeaseContent, other)));
};

UpgradeTeaseModal.propTypes = {
  headline: _propTypes.default.string.isRequired,
  subheadline: _propTypes.default.string,
  description: _propTypes.default.string,
  image: _propTypes.default.string.isRequired,
  listItems: _propTypes.default.arrayOf(_propTypes.default.string),
  ctaButtonClass: _propTypes.default.string,
  ctaCaptionClass: _propTypes.default.string,
  modalClass: _propTypes.default.string,
  ctaLabel: _propTypes.default.string.isRequired,
  ctaLink: _propTypes.default.string.isRequired,
  ctaCaption: _propTypes.default.string,
  closeAction: _propTypes.default.func.isRequired,
  mediaUrl: _propTypes.default.string
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
var _default = UpgradeTeaseModal;
exports.default = _default;