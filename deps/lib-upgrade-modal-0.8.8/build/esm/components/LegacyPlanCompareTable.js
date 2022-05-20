import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 24px auto;\n  font-size: 12px;\n  font-style: italic;\n  color: #878584;\n  opacity: 0.9;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  display: flex;\n  flex: 1 0 168px;\n  align-items: center;\n  justify-content: center;\n\n  &.css-", " {\n    border: none;\n  }\n\n  &:last-child {\n    & .has-right-border {\n      border-right: 1px solid ", ";\n    }\n  }\n\n  &.no-border-bottom {\n    border-bottom: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  border-left: 1px solid ", ";\n  padding: 18px 0 12px;\n  width: 100%;\n  max-width: 300px;\n\n  svg path {\n    fill: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex !important;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Apercu Pro';\n  font-size: 15px;\n  font-weight: 400;\n  text-align: center;\n  max-width: 990px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 119px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import { ALL_PLANS, COLORS, FEATURES, PLAN_PERIODS } from '../constants';
import PlanFeatureRow from './PlanFeatureRow';
import UpgradeTableHeader from './UpgradeTableHeader';
var tableContainerClass = css(_templateObject());
var tableItemBaseClass = css(_templateObject2());
var tableItemClass = css(_templateObject3(), tableItemBaseClass, COLORS.border.midGrey, COLORS.main.primary);
var headerClass = css(_templateObject4());
var tableColumnClass = css(_templateObject5(), COLORS.border.midGrey, headerClass.name, COLORS.border.midGrey);
var tableRowClass = css(_templateObject6());
var tableHeaderContainerClass = css(_templateObject7());
var taxNoteClass = css(_templateObject8());

var LegacyPlanCompareTable = function LegacyPlanCompareTable(_ref) {
  var features = _ref.features,
      plans = _ref.plans,
      onSelectPlan = _ref.onSelectPlan,
      planOrder = _ref.planOrder,
      defaultBillingFrequency = _ref.defaultBillingFrequency;

  var _useState = useState(defaultBillingFrequency),
      _useState2 = _slicedToArray(_useState, 2),
      selectedBillingFrequency = _useState2[0],
      setSelectedBillingFrequency = _useState2[1];

  var visiblePlans = plans[selectedBillingFrequency];
  var visiblePlanLevels = visiblePlans ? Object.keys(visiblePlans).sort(function (levelA, levelB) {
    var a = visiblePlans[levelA].price;
    var b = visiblePlans[levelB].price;

    if (planOrder === 'ascending') {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }
    } else if (planOrder === 'descending') {
      if (a < b) {
        return 1;
      }

      if (a > b) {
        return -1;
      }
    }

    return 0;
  }) : [];

  var handleChange = function handleChange(event) {
    setSelectedBillingFrequency(event.target.value);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'billingFrequencyToggled',
      switchTo: event.target.value
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: cx('compare-table-container', tableContainerClass)
  }, /*#__PURE__*/React.createElement("div", {
    className: tableHeaderContainerClass
  }, /*#__PURE__*/React.createElement(UpgradeTableHeader, {
    onChange: handleChange,
    selectedValue: selectedBillingFrequency,
    tableItemClass: tableItemClass,
    tableColumnClass: tableColumnClass,
    plans: visiblePlans,
    activePlanLevels: visiblePlanLevels,
    rootPlans: plans,
    onSelectPlan: onSelectPlan,
    showButtons: true
  })), features && features.map(function (_ref2, index) {
    var label = _ref2.label,
        subLabel = _ref2.subLabel,
        tooltip = _ref2.tooltip,
        plans = _ref2.plans;
    return /*#__PURE__*/React.createElement(PlanFeatureRow, {
      key: index,
      label: label,
      subLabel: subLabel,
      tooltip: tooltip,
      selectedBillingFrequency: selectedBillingFrequency,
      plans: plans,
      activePlanLevels: visiblePlanLevels,
      tableColumnClass: tableColumnClass,
      tableRowClass: tableRowClass,
      tableItemClass: tableItemClass
    });
  }), /*#__PURE__*/React.createElement("div", {
    className: tableHeaderContainerClass
  }, /*#__PURE__*/React.createElement("div", {
    className: tableHeaderContainerClass
  }, /*#__PURE__*/React.createElement(UpgradeTableHeader, {
    onChange: handleChange,
    selectedValue: selectedBillingFrequency,
    tableItemClass: tableItemClass,
    tableColumnClass: tableColumnClass,
    plans: visiblePlans,
    activePlanLevels: visiblePlanLevels,
    onSelectPlan: onSelectPlan,
    showButtons: true,
    rootPlans: plans,
    isBottom: true
  }))), /*#__PURE__*/React.createElement("p", {
    className: taxNoteClass
  }, "Taxes may apply, where applicable")));
};

LegacyPlanCompareTable.propTypes = {
  features: PropTypes.array,
  plans: PropTypes.object,
  onSelectPlan: PropTypes.func.isRequired,
  planOrder: PropTypes.oneOf(['ascending', 'descending']),
  defaultBillingFrequency: PropTypes.oneOf([PLAN_PERIODS.ANNUAL, PLAN_PERIODS.MONTHLY])
};
LegacyPlanCompareTable.defaultProps = {
  plans: ALL_PLANS,
  features: FEATURES,
  planOrder: 'ascending',
  defaultBillingFrequency: PLAN_PERIODS.ANNUAL
};
export default LegacyPlanCompareTable;