"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../constants");

var _default = function _default(_ref) {
  var product = _ref.product,
      tax = _ref.tax,
      coupon = _ref.coupon,
      bundle = _ref.bundle,
      _ref$credit = _ref.credit,
      credit = _ref$credit === void 0 ? 0 : _ref$credit,
      billingDate = _ref.billingDate;
  var level = product.level,
      period = product.period,
      price = product.price,
      trial = product.trial,
      monthlyComparisonPrice = product.monthlyComparisonPrice;
  var isTrial = !!(trial && trial.trial_days);
  var taxAmount = tax && tax.amount || 0;
  var discount = coupon ? price * 100 * (coupon.discountPercent / 100) / 100 : 0;

  var monthlyRateNoDiscount = monthlyComparisonPrice || _constants.ALL_PLANS[_constants.PLAN_PERIODS.MONTHLY].plans[level.toLowerCase()].price;

  var annualRateNoDiscount = monthlyRateNoDiscount * 12;
  var annualBillingDiscount = annualRateNoDiscount - price;
  var hasAnnualDiscount = period === 'year' && annualBillingDiscount > 0; // Floating point math is unreliable, so here we'll normalize everything down to cents
  // before performing calculations.

  var subtotal = (price * 100 - discount * 100 - credit * 100 + taxAmount * 100) / 100;
  var trialDays = trial ? trial.trial_days : 0;
  var now = new Date();
  var todayLocale = now.toLocaleDateString(); // We can have two potential future dates here. Either the date the trial ends,
  // or a specific billingDate passed by the backend.

  var paidStartDate = trialDays ? new Date(now.getTime() + 86400 * 1000 * trialDays) : new Date(); // If we were passed a specific billing date, use that instead,
  // unless it ends up being equal to today after localization.

  if (billingDate) {
    var date = new Date(billingDate);

    if (date.toLocaleDateString() !== todayLocale) {
      paidStartDate = date;
    }
  }

  var discountBillingCycles = coupon ? coupon.discountBillingCycles : null;
  var couponIsForever = discountBillingCycles === null;
  var totalDueNow = isTrial ? trial.price : billingDate ? 0 : subtotal;
  var paidStartIsToday = paidStartDate.toLocaleDateString() === todayLocale;
  var paidStartLocale = paidStartDate.toLocaleDateString();

  var getBundleRowTitle = function getBundleRowTitle() {
    var _bundle$orderSummary;

    var bundleRowTitle = (_bundle$orderSummary = bundle.orderSummary) === null || _bundle$orderSummary === void 0 ? void 0 : _bundle$orderSummary.lineItemTitle;

    if (!bundleRowTitle) {
      bundleRowTitle = "".concat(bundle.size ? bundle.size + ' ' : '').concat(bundle.kind);
    }

    return bundleRowTitle;
  };

  return {
    annualBillingDiscount: annualBillingDiscount,
    annualRateNoDiscount: annualRateNoDiscount,
    couponIsForever: couponIsForever,
    discount: discount,
    getBundleRowTitle: getBundleRowTitle,
    hasAnnualDiscount: hasAnnualDiscount,
    isTrial: isTrial,
    paidStartDate: paidStartDate,
    paidStartIsToday: paidStartIsToday,
    paidStartLocale: paidStartLocale,
    subtotal: subtotal,
    taxAmount: taxAmount,
    totalDueNow: totalDueNow
  };
};

exports.default = _default;