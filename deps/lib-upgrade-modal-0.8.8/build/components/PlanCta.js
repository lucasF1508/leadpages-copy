"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _constants = require("../constants");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  width: 208px;\n  font-size: 13px;\n  line-height: 62px;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  text-transform: capitalize;\n  padding-top: 9px;\n  font-weight: 500;\n  line-height: 24px;\n  font-size: 17px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  height: 48px;\n  width: 161px;\n  border: 3px solid ", ";\n  border-radius: 32px;\n  background: transparent;\n  color: ", ";\n  font-weight: 500;\n  font-size: 17px;\n  text-align: center;\n  padding: 0;\n  font-family: Apercu Pro;\n\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n    color: #ffffff;\n    cursor: pointer;\n  }\n\n  &.most-popular {\n    background-color: ", ";\n    border-color: ", ";\n    color: #ffffff;\n\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ctaButtonClass = (0, _emotion.css)(_templateObject(), _constants.COLORS.alt.secondary, _constants.COLORS.main.primary, _constants.COLORS.alt.primaryHover, _constants.COLORS.alt.primaryHover, _constants.COLORS.main.primary, _constants.COLORS.main.primary, _constants.COLORS.alt.primaryHover, _constants.COLORS.alt.primaryHover);
var labelClass = (0, _emotion.css)(_templateObject2());
var currentPlanLabel = (0, _emotion.css)(_templateObject3());

var PlanCta = function PlanCta(_ref) {
  var planKey = _ref.planKey,
      planId = _ref.planId,
      label = _ref.label,
      tableItemClass = _ref.tableItemClass,
      tableColumnClass = _ref.tableColumnClass,
      onClick = _ref.onClick,
      buttonText = _ref.buttonText,
      isCurrentPlan = _ref.isCurrentPlan;
  var isHighlighted = planKey === _constants.PLAN_NAMES.PRO;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    onClick(planId);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: tableColumnClass
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: tableItemClass
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: labelClass,
    "data-qa-selector": "cta-label"
  }, label), isCurrentPlan ? /*#__PURE__*/_react.default.createElement("div", {
    className: currentPlanLabel
  }, "Current Plan") : /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleClick,
    className: (0, _emotion.cx)([ctaButtonClass, isHighlighted ? 'most-popular' : ''])
  }, buttonText)));
};

PlanCta.propTypes = {
  planKey: _propTypes.default.string.isRequired,
  planId: _propTypes.default.string.isRequired,
  label: _propTypes.default.string.isRequired,
  tableItemClass: _propTypes.default.string,
  tableColumnClass: _propTypes.default.string,
  buttonText: _propTypes.default.string,
  isCurrentPlan: _propTypes.default.bool,
  onClick: _propTypes.default.func.isRequired
};
PlanCta.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
  buttonText: 'Upgrade',
  isCurrentPlan: false
};
var _default = PlanCta;
exports.default = _default;