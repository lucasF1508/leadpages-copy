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

var _CheckSvg = _interopRequireDefault(require("./CheckSvg"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-family: Roboto;\n  font-size: 21px;\n  line-height: 24px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var notIncludedClass = (0, _emotion.css)(_templateObject(), _constants.COLORS.text.lightGrey);

var PlanFeatureItem = function PlanFeatureItem(_ref) {
  var planKey = _ref.planKey,
      plan = _ref.plan,
      tableItemClass = _ref.tableItemClass,
      tableColumnClass = _ref.tableColumnClass,
      selectedBillingFrequency = _ref.selectedBillingFrequency;

  var _ref2 = plan[selectedBillingFrequency] || plan,
      description = _ref2.label,
      detail = _ref2.detail,
      _ref2$annualOnly = _ref2.annualOnly,
      annualOnly = _ref2$annualOnly === void 0 ? false : _ref2$annualOnly;

  var _ref3 = plan[selectedBillingFrequency] || plan,
      included = _ref3.included;

  var isHighlighted = planKey === _constants.PLAN_NAMES.PRO;

  if (annualOnly && selectedBillingFrequency !== _constants.PLAN_PERIODS.ANNUAL) {
    included = false;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)(tableColumnClass, isHighlighted ? 'highlighted' : ''),
    "data-qa-selector": "feature-item-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)(tableItemClass, 'has-right-border'),
    "data-qa-selector": "feature-item"
  }, included ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, description ? description : /*#__PURE__*/_react.default.createElement(_CheckSvg.default, null)), description && detail && /*#__PURE__*/_react.default.createElement("span", null, detail)) : /*#__PURE__*/_react.default.createElement("span", {
    className: notIncludedClass
  }, "\u2014")));
};

PlanFeatureItem.propTypes = {
  planKey: _propTypes.default.string.isRequired,
  selectedBillingFrequency: _propTypes.default.string.isRequired,
  plan: _propTypes.default.shape({
    label: _propTypes.default.string,
    detail: _propTypes.default.string,
    included: _propTypes.default.bool
  }).isRequired,
  tableItemClass: _propTypes.default.string,
  tableColumnClass: _propTypes.default.string
};
PlanFeatureItem.defaultProps = {
  tableItemClass: '',
  tableColumnClass: ''
};
var _default = PlanFeatureItem;
exports.default = _default;