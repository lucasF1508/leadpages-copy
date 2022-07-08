"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.wide = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip_GreatWhite = _interopRequireDefault(require("./Tooltips/Tooltip_GreatWhite"));

var _emotion = require("emotion");

var _PlanFeatureItem = _interopRequireDefault(require("./PlanFeatureItem"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 13px;\n  line-height: 24px;\n  opacity: 0.7;\n  display: block;\n  margin: -8px 0 0;\n  cursor: help;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  font-size: 15px;\n  line-height: 24px;\n  padding: 0 6px;\n  width: calc(100% - 12px);\n\n  & span {\n    cursor: help;\n    width: 100%;\n    display: block;\n  }\n\n  i {\n    margin: -3px 0 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  align-items: flex-start;\n  text-align: left;\n  min-width: 208px;\n  max-width: 300px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  min-width: 190px;\n  cursor: help;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var tableRowLabelClass = (0, _emotion.css)(_templateObject());
var wide = (0, _emotion.css)(_templateObject2());
exports.wide = wide;
var featureLabelClass = (0, _emotion.css)(_templateObject3());
var featureSubLabelClass = (0, _emotion.css)(_templateObject4());

var PlanFeatureRow = function PlanFeatureRow(_ref) {
  var label = _ref.label,
      subLabel = _ref.subLabel,
      plans = _ref.plans,
      activePlanLevels = _ref.activePlanLevels,
      selectedBillingFrequency = _ref.selectedBillingFrequency,
      tooltip = _ref.tooltip,
      tableItemClass = _ref.tableItemClass,
      tableColumnClass = _ref.tableColumnClass,
      tableRowClass = _ref.tableRowClass;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: tableRowClass,
    "data-qa-selector": "row-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)([tableColumnClass, wide]),
    "data-qa-selector": "row-label"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: tableRowLabelClass
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: featureLabelClass
  }, tooltip && /*#__PURE__*/_react.default.createElement(_Tooltip_GreatWhite.default, {
    title: tooltip,
    PopperProps: {
      disablePortal: true
    },
    "data-qa-selector": "tooltip"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, label, " "), subLabel && /*#__PURE__*/_react.default.createElement("span", {
    className: featureSubLabelClass
  }, subLabel)))))), activePlanLevels.map(function (key) {
    return /*#__PURE__*/_react.default.createElement(_PlanFeatureItem.default, {
      key: key,
      planKey: key,
      plan: plans[key],
      selectedBillingFrequency: selectedBillingFrequency,
      tableItemClass: tableItemClass,
      tableColumnClass: tableColumnClass
    });
  }));
};

PlanFeatureRow.propTypes = {
  label: _propTypes.default.string.isRequired,
  plans: _propTypes.default.objectOf(_propTypes.default.object).isRequired,
  tooltip: _propTypes.default.string,
  tableItemClass: _propTypes.default.string,
  tableColumnClass: _propTypes.default.string,
  subLabel: _propTypes.default.string,
  selectedBillingFrequency: _propTypes.default.string.isRequired,
  activePlanLevels: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
};
PlanFeatureRow.defaultProps = {
  tooltip: '',
  tableItemClass: '',
  tableColumnClass: '',
  tableRowClass: '',
  subLabel: ''
};
var _default = PlanFeatureRow;
exports.default = _default;