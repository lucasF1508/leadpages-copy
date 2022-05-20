"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDisplayPrices = getDisplayPrices;
exports.roundToCents = roundToCents;
exports.displayPrice = displayPrice;
exports.minimalDisplayPrice = minimalDisplayPrice;

var _constants = require("../constants");

var _coupon = require("./coupon");

var _upgrade = require("./upgrade");

function getDisplayPrices(plan, allPlans, currentPlan, coupon, flow) {
  var price = plan.price,
      monthlyPrice = plan.monthlyPrice,
      planLevel = plan.planLevel;
  var isAnnualPlan = plan.period === _constants.PLAN_PERIODS.ANNUAL;
  var isCurrentPlan = planLevel.toLowerCase() === (currentPlan === null || currentPlan === void 0 ? void 0 : currentPlan.level);
  var hasCoupon = !!coupon;
  var couponAppliesToPlan = (0, _upgrade.checkPlanIsUpgrade)(plan, flow) && (0, _coupon.checkPlanCouponEligibility)(plan, coupon, flow);
  var discount = couponAppliesToPlan ? (100 - (coupon === null || coupon === void 0 ? void 0 : coupon.discountPercent)) / 100 : 1;
  var hasDiscount = discount < 1;
  var savings = 0;
  var monthlyCompare = null;

  if (isAnnualPlan && !hasCoupon && !hasDiscount) {
    var _allPlans$PLAN_PERIOD, _allPlans$PLAN_PERIOD2;

    var matchingMonthlyPlanLevelPrice = (_allPlans$PLAN_PERIOD = allPlans[_constants.PLAN_PERIODS.MONTHLY]) === null || _allPlans$PLAN_PERIOD === void 0 ? void 0 : (_allPlans$PLAN_PERIOD2 = _allPlans$PLAN_PERIOD[planLevel.toLowerCase()]) === null || _allPlans$PLAN_PERIOD2 === void 0 ? void 0 : _allPlans$PLAN_PERIOD2.monthlyPrice;

    if (isCurrentPlan) {
      matchingMonthlyPlanLevelPrice = currentPlan.monthlyPrice;
    }

    savings = Math.ceil(100 * (matchingMonthlyPlanLevelPrice * 12 - price) / 100);
  } else {
    monthlyCompare = monthlyPrice; // NOTE: price and monthlyPrice are the same for monthly plans

    savings = Math.ceil(100 * (price - price * discount) / 100);
  }

  return {
    savings: savings,
    monthlyCompare: monthlyCompare,
    monthly: Math.ceil(100 * monthlyPrice * discount / 100),
    hasCoupon: hasCoupon && couponAppliesToPlan
  };
}

function roundToCents(n) {
  return Number(Math.ceil(n + 'e2') + 'e-2');
}

function displayPrice(n) {
  return roundToCents(n).toFixed(2);
}

function minimalDisplayPrice(n) {
  // If it's zero, or a negative value, display zero.
  if (n <= 0) {
    return '0';
  } // Round fractional cents upward.


  var rounded = roundToCents(n); // If it's an even number, print verbatim.

  if (rounded % 1 === 0) {
    return rounded.toString();
  } // Pad zeroes to show 1.1 as 1.10.


  return rounded.toFixed(2);
}