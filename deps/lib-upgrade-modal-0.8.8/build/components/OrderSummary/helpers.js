"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNormalBillingDate = getNormalBillingDate;
exports.CYCLE_LABEL = exports.verbiages = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var _CYCLE_LABEL;

var verbiages = {
  AFTER_FREE_TRIAL: 'Due after Trial',
  ANNUAL_DISCOUNT: 'Annual Billing Discount',
  SWITCH_TO_ANNUAL: 'Switch to Annual and Save',
  TOTAL_DUE_NOW: 'Total Due Now'
};
exports.verbiages = verbiages;
var CYCLE_LABEL = (_CYCLE_LABEL = {}, (0, _defineProperty2.default)(_CYCLE_LABEL, _constants.PLAN_PERIODS.MONTHLY, 'per month'), (0, _defineProperty2.default)(_CYCLE_LABEL, _constants.PLAN_PERIODS.ANNUAL, 'per year'), _CYCLE_LABEL);
exports.CYCLE_LABEL = CYCLE_LABEL;

function getEndOfMonth(currentDate) {
  return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
}

function getNormalBillingDate(discountBillingCycles, period, paidStartDate) {
  var normalBillingDate = new Date(paidStartDate);

  switch (period) {
    case _constants.PLAN_PERIODS.ANNUAL:
      normalBillingDate.setFullYear(normalBillingDate.getFullYear() + discountBillingCycles);
      break;

    case _constants.PLAN_PERIODS.MONTHLY:
    default:
      normalBillingDate.setMonth(normalBillingDate.getMonth() + discountBillingCycles);
      break;
  }

  if (normalBillingDate.getDate() >= 29) normalBillingDate = getEndOfMonth(normalBillingDate);
  return normalBillingDate.toLocaleDateString();
}