"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.buildPlanCta = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _PlanCta = _interopRequireDefault(require("./PlanCta"));

var _constants = require("./../constants");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  height: auto;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  flex: 1 0 168px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 990px;\n\n  & div {\n    border-color: rgba(1, 1, 1, 0);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  position: fixed;\n  height: 100px;\n  width: 100%;\n  display: flex !important;\n  flex-direction: column;\n  background: #ffffff;\n  color: ", ";\n  font-family: 'Apercu Pro';\n  text-align: center;\n  margin-top: 140px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1051;\n  box-shadow: 0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15);\n\n  @media all and (max-width: 575px) {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  align-items: flex-start;\n  text-align: left;\n  min-width: 208px;\n  max-width: 300px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var wide = (0, _emotion.css)(_templateObject());
var footerContainer = (0, _emotion.css)(_templateObject2(), _constants.COLORS.text.tundora);
var barWrapper = (0, _emotion.css)(_templateObject3());
var fixedBarTable = (0, _emotion.css)(_templateObject4());
var footer = (0, _emotion.css)(_templateObject5());

var buildPlanCta = function buildPlanCta(_ref) {
  var label = _ref.label,
      plan = _ref.plan,
      onSelectPlan = _ref.onSelectPlan,
      tableItemClass = _ref.tableItemClass,
      tableRowClass = _ref.tableRowClass;
  return /*#__PURE__*/_react.default.createElement(_PlanCta.default, {
    key: plan.id,
    planId: plan.id,
    label: label,
    onClick: onSelectPlan,
    tableItemClass: (0, _emotion.cx)([tableItemClass, footer]),
    tableColumnClass: (0, _emotion.cx)([tableRowClass, footer]),
    planKey: label === 'Pro' ? 'pro' : '',
    buttonText: plan.buttonText,
    isCurrentPlan: plan.isCurrentPlan
  });
};

exports.buildPlanCta = buildPlanCta;

var UpgradeFooter = function UpgradeFooter(_ref2) {
  var plans = _ref2.plans,
      activePlanLevels = _ref2.activePlanLevels,
      tableColumnClass = _ref2.tableColumnClass,
      other = (0, _objectWithoutProperties2.default)(_ref2, ["plans", "activePlanLevels", "tableColumnClass"]);

  if (!plans) {
    return /*#__PURE__*/_react.default.createElement("div", {
      "data-qa-selector": "no-plans"
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)('compare-table-footer', footerContainer),
    "data-qa-selector": "footer-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: barWrapper
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: fixedBarTable
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.cx)([tableColumnClass, wide, footer])
  }), activePlanLevels.map(function (plan) {
    return buildPlanCta((0, _objectSpread2.default)({
      label: plan.charAt(0).toUpperCase() + plan.slice(1),
      plan: plans[plan]
    }, other));
  }))));
};

UpgradeFooter.propTypes = {
  plans: _propTypes.default.object.isRequired,
  tableItemClass: _propTypes.default.string,
  tableColumnClass: _propTypes.default.string,
  tableRowClass: _propTypes.default.string,
  onSelectPlan: _propTypes.default.func.isRequired
};
UpgradeFooter.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
  tableRowClass: ''
};
var _default = UpgradeFooter;
exports.default = _default;