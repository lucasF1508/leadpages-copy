import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  line-height: 24px;\n  opacity: 0.7;\n  display: block;\n  margin: -8px 0 0;\n  cursor: help;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 15px;\n  line-height: 24px;\n  padding: 0 6px;\n  width: calc(100% - 12px);\n\n  & span {\n    cursor: help;\n    width: 100%;\n    display: block;\n  }\n\n  i {\n    margin: -3px 0 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: flex-start;\n  text-align: left;\n  min-width: 208px;\n  max-width: 300px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  min-width: 190px;\n  cursor: help;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltips/Tooltip_GreatWhite';
import { css, cx } from 'emotion';
import PlanFeatureItem from './PlanFeatureItem';
var tableRowLabelClass = css(_templateObject());
export var wide = css(_templateObject2());
var featureLabelClass = css(_templateObject3());
var featureSubLabelClass = css(_templateObject4());

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
  return /*#__PURE__*/React.createElement("div", {
    className: tableRowClass,
    "data-qa-selector": "row-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: cx([tableColumnClass, wide]),
    "data-qa-selector": "row-label"
  }, /*#__PURE__*/React.createElement("div", {
    className: tableRowLabelClass
  }, /*#__PURE__*/React.createElement("span", {
    className: featureLabelClass
  }, tooltip && /*#__PURE__*/React.createElement(Tooltip, {
    title: tooltip,
    PopperProps: {
      disablePortal: true
    },
    "data-qa-selector": "tooltip"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, label, " "), subLabel && /*#__PURE__*/React.createElement("span", {
    className: featureSubLabelClass
  }, subLabel)))))), activePlanLevels.map(function (key) {
    return /*#__PURE__*/React.createElement(PlanFeatureItem, {
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
  label: PropTypes.string.isRequired,
  plans: PropTypes.objectOf(PropTypes.object).isRequired,
  tooltip: PropTypes.string,
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string,
  subLabel: PropTypes.string,
  selectedBillingFrequency: PropTypes.string.isRequired,
  activePlanLevels: PropTypes.arrayOf(PropTypes.string).isRequired
};
PlanFeatureRow.defaultProps = {
  tooltip: '',
  tableItemClass: '',
  tableColumnClass: '',
  tableRowClass: '',
  subLabel: ''
};
export default PlanFeatureRow;