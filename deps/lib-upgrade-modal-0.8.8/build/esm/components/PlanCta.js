import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 208px;\n  font-size: 13px;\n  line-height: 62px;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  padding-top: 9px;\n  font-weight: 500;\n  line-height: 24px;\n  font-size: 17px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 48px;\n  width: 161px;\n  border: 3px solid ", ";\n  border-radius: 32px;\n  background: transparent;\n  color: ", ";\n  font-weight: 500;\n  font-size: 17px;\n  text-align: center;\n  padding: 0;\n  font-family: Apercu Pro;\n\n  &:hover {\n    background: ", ";\n    border-color: ", ";\n    color: #ffffff;\n    cursor: pointer;\n  }\n\n  &.most-popular {\n    background-color: ", ";\n    border-color: ", ";\n    color: #ffffff;\n\n    &:hover {\n      background: ", ";\n      border-color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { COLORS, PLAN_NAMES } from '../constants';
var ctaButtonClass = css(_templateObject(), COLORS.alt.secondary, COLORS.main.primary, COLORS.alt.primaryHover, COLORS.alt.primaryHover, COLORS.main.primary, COLORS.main.primary, COLORS.alt.primaryHover, COLORS.alt.primaryHover);
var labelClass = css(_templateObject2());
var currentPlanLabel = css(_templateObject3());

var PlanCta = function PlanCta(_ref) {
  var planKey = _ref.planKey,
      planId = _ref.planId,
      label = _ref.label,
      tableItemClass = _ref.tableItemClass,
      tableColumnClass = _ref.tableColumnClass,
      onClick = _ref.onClick,
      buttonText = _ref.buttonText,
      isCurrentPlan = _ref.isCurrentPlan;
  var isHighlighted = planKey === PLAN_NAMES.PRO;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    onClick(planId);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: tableColumnClass
  }, /*#__PURE__*/React.createElement("div", {
    className: tableItemClass
  }, /*#__PURE__*/React.createElement("div", {
    className: labelClass,
    "data-qa-selector": "cta-label"
  }, label), isCurrentPlan ? /*#__PURE__*/React.createElement("div", {
    className: currentPlanLabel
  }, "Current Plan") : /*#__PURE__*/React.createElement("button", {
    onClick: handleClick,
    className: cx([ctaButtonClass, isHighlighted ? 'most-popular' : ''])
  }, buttonText)));
};

PlanCta.propTypes = {
  planKey: PropTypes.string.isRequired,
  planId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string,
  buttonText: PropTypes.string,
  isCurrentPlan: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
PlanCta.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
  buttonText: 'Upgrade',
  isCurrentPlan: false
};
export default PlanCta;