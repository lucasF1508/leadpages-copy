"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _Modal = require("@lp/leads/Modal");

var _ChangePlan = _interopRequireDefault(require("./ChangePlan"));

var _constants = require("../constants");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-family: 'Apercu Pro';\n  font-size: 17px;\n  line-height: 24px;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  background: #ffffff;\n  color: ", ";\n  border-radius: 4px;\n  padding: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  color: ", ";\n  font-family: 'Apercu Pro';\n  font-size: 32px;\n  line-height: 28px;\n  font-weight: 300;\n  margin-top: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  z-index: 9002;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var overlayClass = (0, _emotion.css)(_templateObject());
var confirmContainer = (0, _emotion.css)(_templateObject2());
var confirmHeadline = (0, _emotion.css)(_templateObject3(), _constants.COLORS.text.tundora);
var confirmBody = (0, _emotion.css)(_templateObject4(), _constants.COLORS.text.darkBlue);
var lang = _constants.VERBIAGE.confirmModal;

var ChangePlanModal = function ChangePlanModal(_ref) {
  var title = _ref.title,
      planTitle = _ref.planTitle,
      confirmAction = _ref.confirmAction,
      cancelLabel = _ref.cancelLabel,
      onCancel = _ref.onCancel,
      processingMessage = _ref.processingMessage,
      isSubmitting = _ref.isSubmitting,
      isOpen = _ref.isOpen,
      props = (0, _objectWithoutProperties2.default)(_ref, ["title", "planTitle", "confirmAction", "cancelLabel", "onCancel", "processingMessage", "isSubmitting", "isOpen"]);
  return /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    isOpen: isOpen,
    onRequestClose: onCancel,
    overlayClassName: overlayClass
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: confirmContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    "data-qa-selector": "confirm-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: confirmBody
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: confirmHeadline,
    "data-qa-selector": "title"
  }, title), /*#__PURE__*/_react.default.createElement(_ChangePlan.default, props)))));
};

ChangePlanModal.propTypes = {
  title: _propTypes.default.string,
  planTitle: _propTypes.default.string.isRequired,
  billingFrequency: _propTypes.default.string,
  processingMessage: _propTypes.default.string,
  cancelLabel: _propTypes.default.string,
  confirmLabel: _propTypes.default.string,
  confirmAction: _propTypes.default.func.isRequired,
  cancelAction: _propTypes.default.func.isRequired,
  isSubmitting: _propTypes.default.bool.isRequired,
  isOpen: _propTypes.default.bool.isRequired
};
ChangePlanModal.defaultProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, lang.default), {}, {
  billingFrequency: 'monthly'
});
var _default = ChangePlanModal;
exports.default = _default;