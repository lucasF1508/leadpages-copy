import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: auto;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  flex: 1 0 168px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 990px;\n\n  & div {\n    border-color: rgba(1, 1, 1, 0);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  height: 100px;\n  width: 100%;\n  display: flex !important;\n  flex-direction: column;\n  background: #ffffff;\n  color: ", ";\n  font-family: 'Apercu Pro';\n  text-align: center;\n  margin-top: 140px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1051;\n  box-shadow: 0 0 4px 0 rgba(15, 12, 9, 0.2), 0 3px 6px 0 rgba(15, 12, 9, 0.15);\n\n  @media all and (max-width: 575px) {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: flex-start;\n  text-align: left;\n  min-width: 208px;\n  max-width: 300px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import PlanCta from './PlanCta';
import { COLORS } from './../constants';
var wide = css(_templateObject());
var footerContainer = css(_templateObject2(), COLORS.text.tundora);
var barWrapper = css(_templateObject3());
var fixedBarTable = css(_templateObject4());
var footer = css(_templateObject5());
export var buildPlanCta = function buildPlanCta(_ref) {
  var label = _ref.label,
      plan = _ref.plan,
      onSelectPlan = _ref.onSelectPlan,
      tableItemClass = _ref.tableItemClass,
      tableRowClass = _ref.tableRowClass;
  return /*#__PURE__*/React.createElement(PlanCta, {
    key: plan.id,
    planId: plan.id,
    label: label,
    onClick: onSelectPlan,
    tableItemClass: cx([tableItemClass, footer]),
    tableColumnClass: cx([tableRowClass, footer]),
    planKey: label === 'Pro' ? 'pro' : '',
    buttonText: plan.buttonText,
    isCurrentPlan: plan.isCurrentPlan
  });
};

var UpgradeFooter = function UpgradeFooter(_ref2) {
  var plans = _ref2.plans,
      activePlanLevels = _ref2.activePlanLevels,
      tableColumnClass = _ref2.tableColumnClass,
      other = _objectWithoutProperties(_ref2, ["plans", "activePlanLevels", "tableColumnClass"]);

  if (!plans) {
    return /*#__PURE__*/React.createElement("div", {
      "data-qa-selector": "no-plans"
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: cx('compare-table-footer', footerContainer),
    "data-qa-selector": "footer-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: barWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: fixedBarTable
  }, /*#__PURE__*/React.createElement("div", {
    className: cx([tableColumnClass, wide, footer])
  }), activePlanLevels.map(function (plan) {
    return buildPlanCta(_objectSpread({
      label: plan.charAt(0).toUpperCase() + plan.slice(1),
      plan: plans[plan]
    }, other));
  }))));
};

UpgradeFooter.propTypes = {
  plans: PropTypes.object.isRequired,
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string,
  tableRowClass: PropTypes.string,
  onSelectPlan: PropTypes.func.isRequired
};
UpgradeFooter.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
  tableRowClass: ''
};
export default UpgradeFooter;