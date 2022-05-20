import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Apercu Pro';\n  font-size: 17px;\n  line-height: 24px;\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  background: #ffffff;\n  color: ", ";\n  border-radius: 4px;\n  padding: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-family: 'Apercu Pro';\n  font-size: 32px;\n  line-height: 28px;\n  font-weight: 300;\n  margin-top: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  z-index: 9002;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { Modal } from '@lp/leads/Modal';
import ChangePlan from './ChangePlan';
import { COLORS, VERBIAGE } from '../constants';
var overlayClass = css(_templateObject());
var confirmContainer = css(_templateObject2());
var confirmHeadline = css(_templateObject3(), COLORS.text.tundora);
var confirmBody = css(_templateObject4(), COLORS.text.darkBlue);
var lang = VERBIAGE.confirmModal;

var ChangePlanModal = function ChangePlanModal(_ref) {
  var title = _ref.title,
      planTitle = _ref.planTitle,
      confirmAction = _ref.confirmAction,
      cancelLabel = _ref.cancelLabel,
      onCancel = _ref.onCancel,
      processingMessage = _ref.processingMessage,
      isSubmitting = _ref.isSubmitting,
      isOpen = _ref.isOpen,
      props = _objectWithoutProperties(_ref, ["title", "planTitle", "confirmAction", "cancelLabel", "onCancel", "processingMessage", "isSubmitting", "isOpen"]);

  return /*#__PURE__*/React.createElement(Modal, {
    isOpen: isOpen,
    onRequestClose: onCancel,
    overlayClassName: overlayClass
  }, /*#__PURE__*/React.createElement("div", {
    className: confirmContainer
  }, /*#__PURE__*/React.createElement("div", {
    "data-qa-selector": "confirm-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: confirmBody
  }, /*#__PURE__*/React.createElement("h2", {
    className: confirmHeadline,
    "data-qa-selector": "title"
  }, title), /*#__PURE__*/React.createElement(ChangePlan, props)))));
};

ChangePlanModal.propTypes = {
  title: PropTypes.string,
  planTitle: PropTypes.string.isRequired,
  billingFrequency: PropTypes.string,
  processingMessage: PropTypes.string,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  confirmAction: PropTypes.func.isRequired,
  cancelAction: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired
};
ChangePlanModal.defaultProps = _objectSpread(_objectSpread({}, lang.default), {}, {
  billingFrequency: 'monthly'
});
export default ChangePlanModal;