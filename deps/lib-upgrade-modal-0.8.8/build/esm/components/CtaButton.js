import _extends from "@babel/runtime/helpers/esm/extends";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  background-color: ", ";\n  border-color: ", ";\n  color: #ffffff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 36px;\n  width: 176px;\n  border: 3px solid ", ";\n  border-radius: 32px;\n  background: transparent;\n  color: ", ";\n  font-weight: 500;\n  font-size: 16px;\n  margin-top: 20px;\n  margin-bottom: 12px;\n  text-align: center;\n  padding: 0;\n  font-family: Apercu Pro;\n\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n    color: #ffffff;\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { COLORS } from '../constants';
var ctaButtonClass = css(_templateObject(), COLORS.alt.secondary, COLORS.main.primary, COLORS.alt.primaryHover, COLORS.alt.primaryHover);
export var ctaPrimaryButtonClass = css(_templateObject2(), ctaButtonClass, COLORS.main.primary, COLORS.main.primary);

var CtaButton = function CtaButton(_ref) {
  var labelText = _ref.labelText,
      isPrimary = _ref.isPrimary,
      ctaClassName = _ref.ctaClassName,
      onClick = _ref.onClick,
      buttonProps = _ref.buttonProps;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    className: cx([ctaClassName, isPrimary ? ctaPrimaryButtonClass : ctaButtonClass])
  }, buttonProps, {
    "data-analytics": "start-trial-button"
  }), labelText);
};

CtaButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  ctaClassName: PropTypes.string,
  buttonProps: PropTypes.shape({})
};
CtaButton.defaultProps = {
  isPrimary: false,
  ctaClassName: '',
  buttonProps: {}
};
export default CtaButton;