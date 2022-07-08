import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _billingOptions;

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  border: none;\n  align-items: center;\n  align-self: center;\n\n  //overriding a leads v3 override\n  & .tip {\n    color: #ffffff !important;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  background-color: #d1c6f9;\n  color: #0b236d;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 36px;\n  color: ", ";\n  font-size: 12px;\n  line-height: 36px;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';
import Tooltip from './Tooltips/Tooltip_MediumNavy';
import { COLORS, PLAN_PERIODS, VERBIAGE } from '../constants';
import PlanHeader from './PlanHeader';
import RadioButtonGroup from './RadioButtonGroup';
import { wide } from './PlanFeatureRow';
var billingOptions = (_billingOptions = {}, _defineProperty(_billingOptions, PLAN_PERIODS.MONTHLY, {
  label: 'Monthly',
  value: PLAN_PERIODS.MONTHLY,
  id: 'monthly',
  footnote: 'paid monthly'
}), _defineProperty(_billingOptions, PLAN_PERIODS.ANNUAL, {
  label: 'Annual',
  value: PLAN_PERIODS.ANNUAL,
  id: 'annual',
  footnote: 'paid annually'
}), _billingOptions);
var planHeaderLabelClass = css(_templateObject(), COLORS.text.tundora);
var mostPopularClass = css(_templateObject2(), planHeaderLabelClass);
var planHeaderControlsClass = css(_templateObject3());
var tableRowClass = css(_templateObject4());

var makePlanHeader = function makePlanHeader(_ref) {
  var title = _ref.title,
      _ref$plan = _ref.plan,
      id = _ref$plan.id,
      planLevel = _ref$plan.planLevel,
      period = _ref$plan.period,
      description = _ref$plan.description,
      monthlyPrice = _ref$plan.monthlyPrice,
      isCurrentPlan = _ref$plan.isCurrentPlan,
      buttonText = _ref$plan.buttonText,
      payLabel = _ref.payLabel,
      _ref$planLabelDefault = _ref.planLabelDefault,
      planLabelDefault = _ref$planLabelDefault === void 0 ? '' : _ref$planLabelDefault,
      tableColumnClass = _ref.tableColumnClass,
      _ref$isHighlighted = _ref.isHighlighted,
      isHighlighted = _ref$isHighlighted === void 0 ? false : _ref$isHighlighted,
      showButton = _ref.showButton,
      onSelectPlan = _ref.onSelectPlan,
      isBottom = _ref.isBottom;
  return /*#__PURE__*/React.createElement(PlanHeader, {
    key: id,
    title: title,
    planDescription: description,
    price: monthlyPrice,
    columnClass: tableColumnClass,
    planLabel: isCurrentPlan ? 'Current Plan' : planLabelDefault,
    planLabelClass: isHighlighted ? mostPopularClass : planHeaderLabelClass,
    showButton: showButton,
    ctaAction: function ctaAction(e) {
      e.preventDefault();

      if (window.LPEvents) {
        window.LPEvents.track('Clicked upgrade', {
          Source: 'Upgrade modal'
        });
      }

      onSelectPlan(id, planLevel, period);
    },
    buttonLabel: buttonText,
    payLabel: payLabel,
    isCurrentPlan: isCurrentPlan,
    isHighlighted: isHighlighted,
    hideTopBorder: isBottom,
    hideBottomBorder: !isBottom,
    isBottom: isBottom
  });
};

var UpgradeTableHeader = function UpgradeTableHeader(_ref2) {
  var plans = _ref2.plans,
      activePlanLevels = _ref2.activePlanLevels,
      rootPlans = _ref2.rootPlans,
      selectedValue = _ref2.selectedValue,
      tableItemClass = _ref2.tableItemClass,
      tableColumnClass = _ref2.tableColumnClass,
      onChange = _ref2.onChange,
      showButtons = _ref2.showButtons,
      onSelectPlan = _ref2.onSelectPlan,
      isBottom = _ref2.isBottom;
  var options = {
    tableColumnClass: tableColumnClass,
    onSelectPlan: onSelectPlan,
    showButton: showButtons,
    payLabel: selectedValue ? billingOptions[selectedValue].footnote : '',
    isBottom: isBottom
  };
  return /*#__PURE__*/React.createElement("div", {
    className: tableRowClass,
    "data-qa-selector": "header-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: cx([tableColumnClass, wide, isBottom && 'no-border-bottom'])
  }, /*#__PURE__*/React.createElement("div", {
    className: cx(planHeaderControlsClass, 'annual-tip')
  }, /*#__PURE__*/React.createElement(Tooltip, {
    title: VERBIAGE.upgradeTableHeader.annualDiscount,
    open: selectedValue === PLAN_PERIODS.MONTHLY,
    PopperProps: {
      disablePortal: true,
      popperOptions: {
        modifiers: {
          flip: {
            enabled: false
          },
          preventOverflow: {
            enabled: false,
            boundariesElement: 'scrollParent'
          }
        }
      }
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RadioButtonGroup, {
    items: billingOptions,
    onChange: onChange,
    selectedValue: selectedValue,
    rootPlans: rootPlans,
    isBottom: isBottom
  }))))), activePlanLevels.map(function (plan) {
    return makePlanHeader(_objectSpread({
      title: plan.charAt(0).toUpperCase() + plan.slice(1),
      plan: plans[plan],
      planLabelDefault: plan === 'pro' ? 'Most Popular' : '',
      isHighlighted: plan === 'pro'
    }, options));
  }));
};

UpgradeTableHeader.propTypes = {
  tableItemClass: PropTypes.string,
  tableColumnClass: PropTypes.string,
  plans: PropTypes.object.isRequired,
  selectedValue: PropTypes.string,
  showButtons: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSelectPlan: PropTypes.func,
  isBottom: PropTypes.bool
};
UpgradeTableHeader.defaultProps = {
  tableItemClass: '',
  tableColumnClass: '',
  showButtons: false,
  selectedValue: '',
  onSelectPlan: null,
  isBottom: false
};
export default UpgradeTableHeader;