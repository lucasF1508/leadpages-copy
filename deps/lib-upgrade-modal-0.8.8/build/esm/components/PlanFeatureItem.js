import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: Roboto;\n  font-size: 21px;\n  line-height: 24px;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { PLAN_PERIODS, COLORS, PLAN_NAMES } from '../constants';
import CheckSvg from './CheckSvg';
var notIncludedClass = css(_templateObject(), COLORS.text.lightGrey);

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

  var isHighlighted = planKey === PLAN_NAMES.PRO;

  if (annualOnly && selectedBillingFrequency !== PLAN_PERIODS.ANNUAL) {
    included = false;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: cx(tableColumnClass, isHighlighted ? 'highlighted' : ''),
    "data-qa-selector": "feature-item-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(tableItemClass, 'has-right-border'),
    "data-qa-selector": "feature-item"
  }, included ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, description ? description : /*#__PURE__*/React.createElement(CheckSvg, null)), description && detail && /*#__PURE__*/React.createElement("span", null, detail)) : /*#__PURE__*/React.createElement("span", {
    className: notIncludedClass
  }, "\u2014")));
};

PlanFeatureItem.propTypes = {
  planKey: PropTypes.string.isRequired,
  selectedBillingFrequency: PropTypes.string.isRequired,
  plan: PropTypes.shape({
    label: PropTypes.string,
    detail: PropTypes.string,
    included: PropTypes.bool
  }).isRequired,
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string
};
PlanFeatureItem.defaultProps = {
  tableItemClass: '',
  tableColumnClass: ''
};
export default PlanFeatureItem;