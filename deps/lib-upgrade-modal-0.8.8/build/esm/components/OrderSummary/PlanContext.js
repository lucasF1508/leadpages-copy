import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ALL_PLANS, PLAN_PERIODS } from '../../constants';
export var emptyPlanContext = Object.freeze({
  product: {
    level: null,
    period: null,
    price: 0,
    trial: null,
    monthlyComparisonPrice: 0
  },
  tax: {},
  coupon: {},
  bundle: {},
  credit: 0,
  billingDate: '',
  annualBillingDiscount: 0,
  annualRateNoDiscount: 0,
  couponIsForever: false,
  discount: 0,
  getBundleRowTitle: function getBundleRowTitle() {},
  hasAnnualDiscount: false,
  isTrial: false,
  paidStartDate: '',
  paidStartIsToday: false,
  paidStartLocale: '',
  subtotal: 0,
  taxAmount: 0,
  totalDueNow: 0
});
export var PlanContext = /*#__PURE__*/React.createContext(emptyPlanContext);
export var PlanContextProvider = function PlanContextProvider(_ref) {
  var children = _ref.children,
      product = _ref.product,
      tax = _ref.tax,
      coupon = _ref.coupon,
      bundle = _ref.bundle,
      credit = _ref.credit,
      billingDate = _ref.billingDate;
  var getBundleRowTitle = useCallback(function () {
    var _bundle$orderSummary;

    var bundleRowTitle = (_bundle$orderSummary = bundle.orderSummary) === null || _bundle$orderSummary === void 0 ? void 0 : _bundle$orderSummary.lineItemTitle;

    if (!bundleRowTitle) {
      bundleRowTitle = "".concat(bundle.size ? bundle.size + ' ' : '').concat(bundle.kind);
    }

    return bundleRowTitle;
  }, [bundle]);
  var value = useMemo(function () {
    var level = product.level,
        period = product.period,
        price = product.price,
        trial = product.trial,
        monthlyComparisonPrice = product.monthlyComparisonPrice;
    var discountPercent = (coupon === null || coupon === void 0 ? void 0 : coupon.discountPercent) || 0;
    var discountBillingCycles = coupon === null || coupon === void 0 ? void 0 : coupon.discountBillingCycles;
    var taxAmount = (tax === null || tax === void 0 ? void 0 : tax.amount) || 0;
    var isTrial = !!(trial && trial.trial_days);
    var discount = discountPercent ? price * 100 * (discountPercent / 100) / 100 : 0;
    var monthlyRateNoDiscount = monthlyComparisonPrice || ALL_PLANS[PLAN_PERIODS.MONTHLY].plans[level.toLowerCase()].price;
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

    var couponIsForever = discountBillingCycles === null;
    var totalDueNow = isTrial ? trial.price : billingDate ? 0 : subtotal;
    var paidStartIsToday = paidStartDate.toLocaleDateString() === todayLocale;
    var paidStartLocale = paidStartDate.toLocaleDateString();
    return {
      product: product,
      tax: tax,
      coupon: coupon,
      bundle: bundle,
      credit: credit,
      billingDate: billingDate,
      getBundleRowTitle: getBundleRowTitle,
      annualBillingDiscount: annualBillingDiscount,
      annualRateNoDiscount: annualRateNoDiscount,
      couponIsForever: couponIsForever,
      discount: discount,
      hasAnnualDiscount: hasAnnualDiscount,
      isTrial: isTrial,
      paidStartDate: paidStartDate,
      paidStartIsToday: paidStartIsToday,
      paidStartLocale: paidStartLocale,
      subtotal: subtotal,
      taxAmount: taxAmount,
      totalDueNow: totalDueNow
    };
  }, [getBundleRowTitle, bundle, coupon, product, credit, billingDate, tax]);
  return /*#__PURE__*/React.createElement(PlanContext.Provider, {
    value: value
  }, children);
};
PlanContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  product: PropTypes.shape({
    heading: PropTypes.string,
    isTrial: PropTypes.bool,
    level: PropTypes.oneOf(['Start', 'Standard', 'Pro', 'Advanced']),
    period: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL]),
    price: PropTypes.number,
    trial: PropTypes.shape({
      price: PropTypes.number,
      trial_days: PropTypes.number
    }),
    monthlyComparisonPrice: PropTypes.number
  }).isRequired,
  tax: PropTypes.shape({
    amount: PropTypes.number
  }),
  coupon: PropTypes.shape({}),
  bundle: PropTypes.shape({}),
  credit: PropTypes.number,
  billingDate: PropTypes.string
};
PlanContextProvider.defaultProps = {
  tax: {
    amount: 0
  },
  credit: 0,
  bundle: null,
  coupon: null,
  billingDate: null
};
export var usePlanContext = function usePlanContext() {
  var context = useContext(PlanContext);

  if (context === undefined) {
    throw new Error('usePlanContext must be used within a PlanContextProvider');
  }

  return context;
};
export default PlanContextProvider;