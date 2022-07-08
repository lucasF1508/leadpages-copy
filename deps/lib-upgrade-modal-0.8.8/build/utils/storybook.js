"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlansBasedOnCurrentPlan = getPlansBasedOnCurrentPlan;
exports.getCurrentPlanWithKnobs = getCurrentPlanWithKnobs;
exports.getPreviousPlanWithKnobs = getPreviousPlanWithKnobs;
exports.getFlowWithKnobs = getFlowWithKnobs;
exports.getCouponWithKnobs = getCouponWithKnobs;
exports.getBundleWithKnobs = getBundleWithKnobs;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _addonKnobs = require("@storybook/addon-knobs");

var _constants = require("../constants");

function getPlansBasedOnCurrentPlan(currentPlan) {
  var plans = _constants.TEST_DATA;
  var currentPlanLevel = currentPlan.level;
  var currentPlanPeriod = currentPlan.period;
  plans[_constants.PLAN_PERIODS.ANNUAL][_constants.PLAN_NAMES.STANDARD].isUpgrade = currentPlanLevel === _constants.PLAN_NAMES.STANDARD && currentPlanPeriod === _constants.PLAN_PERIODS.MONTHLY || currentPlanLevel === _constants.PLAN_NAMES.START;
  plans[_constants.PLAN_PERIODS.ANNUAL][_constants.PLAN_NAMES.PRO].isUpgrade = currentPlanLevel === _constants.PLAN_NAMES.PRO && currentPlanPeriod === _constants.PLAN_PERIODS.MONTHLY || currentPlanLevel === _constants.PLAN_NAMES.STANDARD || currentPlanLevel === _constants.PLAN_NAMES.START;
  plans[_constants.PLAN_PERIODS.ANNUAL][_constants.PLAN_NAMES.ADVANCED].isUpgrade = currentPlanLevel === _constants.PLAN_NAMES.ADVANCED && currentPlanPeriod === _constants.PLAN_PERIODS.MONTHLY || currentPlanLevel === _constants.PLAN_NAMES.PRO || currentPlanLevel === _constants.PLAN_NAMES.STANDARD || currentPlanLevel === _constants.PLAN_NAMES.START;
  plans[_constants.PLAN_PERIODS.MONTHLY][_constants.PLAN_NAMES.STANDARD].isUpgrade = currentPlanLevel === _constants.PLAN_NAMES.START;
  plans[_constants.PLAN_PERIODS.MONTHLY][_constants.PLAN_NAMES.PRO].isUpgrade = currentPlanLevel === _constants.PLAN_NAMES.STANDARD || currentPlanLevel === _constants.PLAN_NAMES.START;
  plans[_constants.PLAN_PERIODS.MONTHLY][_constants.PLAN_NAMES.ADVANCED].isUpgrade = currentPlanLevel === _constants.PLAN_NAMES.PRO || currentPlanLevel === _constants.PLAN_NAMES.STANDARD || currentPlanLevel === _constants.PLAN_NAMES.START;
  return plans;
}

function getCurrentPlanWithKnobs() {
  var level = (0, _addonKnobs.select)('Level', _constants.PLAN_NAMES, _constants.PLAN_NAMES.STANDARD, 'Current Plan');
  var period = (0, _addonKnobs.select)('Billing Period', _constants.PLAN_PERIODS, _constants.PLAN_PERIODS.ANNUAL, 'Current Plan');
  var monthlyPrice = (0, _addonKnobs.number)('Monthly Price', _constants.TEST_DATA[_constants.PLAN_PERIODS.ANNUAL][_constants.PLAN_NAMES.STANDARD].monthlyPrice, {}, 'Current Plan');
  return {
    level: level,
    period: period,
    monthlyPrice: monthlyPrice
  };
}

function getPreviousPlanWithKnobs() {
  return (0, _addonKnobs.select)('Previous Plan', (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _constants.PLANS), {}, {
    None: null
  }), null, 'Previous Plan');
}

function getFlowWithKnobs() {
  return (0, _addonKnobs.radios)('Flow', {
    Upgrade: _constants.FLOWS.UPGRADE,
    Reactivation: _constants.FLOWS.REACTIVATION
  }, _constants.FLOWS.UPGRADE, 'Flow');
}

function getCouponWithKnobs() {
  return {
    validPlans: (0, _addonKnobs.optionsKnob)('Valid Plans', _constants.PLANS, [], {
      display: 'multi-select'
    }, 'Coupon'),
    discountBillingCycles: (0, _addonKnobs.number)('Discount Billing Cycles', 1, {}, 'Coupon'),
    discountPercent: (0, _addonKnobs.number)('Discount Percent', 10, {}, 'Coupon'),
    code: (0, _addonKnobs.text)('Coupon Code', 'lp', 'Coupon'),
    bannerText: (0, _addonKnobs.text)('Banner Text', 'You got 10% off', 'Coupon'),
    cartText: (0, _addonKnobs.text)('Cart Text', '10% off', 'Coupon'),
    headerText: (0, _addonKnobs.text)('Header Text', 'Take it to the next level with 10% off', 'Coupon'),
    subHeaderText: (0, _addonKnobs.text)('Subheader Text', 'Upgrade your account and 10% off', 'Coupon'),
    enabled: (0, _addonKnobs.boolean)('Enabled?', true, 'Coupon'),
    hasUsesRemaining: (0, _addonKnobs.boolean)('Has uses remaining?', true, 'Coupon'),
    isExpired: (0, _addonKnobs.boolean)('Is expired?', false, 'Coupon'),
    appliesToAllPlans: (0, _addonKnobs.boolean)('Applies to all plans', true, 'Coupon'),
    signupsAllowed: (0, _addonKnobs.boolean)('Applies to new signups', true, 'Coupon'),
    reactivationsAllowed: (0, _addonKnobs.boolean)('Applies to reactivations', true, 'Coupon'),
    upgradesAllowed: (0, _addonKnobs.boolean)('Applies to upgrades', true, 'Coupon')
  };
}

function getBundleWithKnobs() {
  var GROUP = 'Bundle';
  return {
    enabled: (0, _addonKnobs.boolean)('Enabled?', true, GROUP),
    details: {
      size: (0, _addonKnobs.number)('Size', 5, {}, GROUP),
      value: (0, _addonKnobs.number)('Value', 250, {}, GROUP),
      kind: (0, _addonKnobs.text)('Kind', 'Exclusive Templates', GROUP),
      planCompare: {
        tooltip: (0, _addonKnobs.text)('Plan Compare Tooltip', 'Access an exclusive collection of 5 landing page templates not available anywhere else.', GROUP)
      },
      validPlans: (0, _addonKnobs.optionsKnob)('Valid Plans', {
        'Standard Annual': 'standard-annual',
        'Standard Monthly': 'standard-monthly',
        'Pro Annual': 'pro-annual',
        'Pro Monthly': 'pro-monthly',
        'Advanced Annual': 'advanced-annual',
        'Advanced Monthly': 'advanced-monthly'
      }, [], {
        display: 'multi-select'
      }, GROUP)
    }
  };
}