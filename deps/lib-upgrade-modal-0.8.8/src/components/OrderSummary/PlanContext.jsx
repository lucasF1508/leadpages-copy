import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ALL_PLANS, PLAN_PERIODS } from '../../constants';

export const emptyPlanContext = Object.freeze({
  product: {
    level: null,
    period: null,
    price: 0,
    trial: null,
    monthlyComparisonPrice: 0,
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
  getBundleRowTitle: () => {},
  hasAnnualDiscount: false,
  isTrial: false,
  paidStartDate: '',
  paidStartIsToday: false,
  paidStartLocale: '',
  subtotal: 0,
  taxAmount: 0,
  totalDueNow: 0,
});

export const PlanContext = React.createContext(emptyPlanContext);

export const PlanContextProvider = ({
  children,
  product,
  tax,
  coupon,
  bundle,
  credit,
  billingDate,
}) => {
  const getBundleRowTitle = useCallback(() => {
    let bundleRowTitle = bundle.orderSummary?.lineItemTitle;

    if (!bundleRowTitle) {
      bundleRowTitle = `${bundle.size ? bundle.size + ' ' : ''}${bundle.kind}`;
    }

    return bundleRowTitle;
  }, [bundle]);

  const value = useMemo(() => {
    const { level, period, price, trial, monthlyComparisonPrice } = product;
    const discountPercent = coupon?.discountPercent || 0;
    const discountBillingCycles = coupon?.discountBillingCycles;
    const taxAmount = tax?.amount || 0;
    const isTrial = !!(trial && trial.trial_days);

    const discount = discountPercent
      ? (price * 100 * (discountPercent / 100)) / 100
      : 0;

    const monthlyRateNoDiscount =
      monthlyComparisonPrice ||
      ALL_PLANS[PLAN_PERIODS.MONTHLY].plans[level.toLowerCase()].price;
    const annualRateNoDiscount = monthlyRateNoDiscount * 12;
    const annualBillingDiscount = annualRateNoDiscount - price;
    const hasAnnualDiscount = period === 'year' && annualBillingDiscount > 0;

    // Floating point math is unreliable, so here we'll normalize everything down to cents
    // before performing calculations.
    const subtotal =
      (price * 100 - discount * 100 - credit * 100 + taxAmount * 100) / 100;
    const trialDays = trial ? trial.trial_days : 0;

    const now = new Date();
    const todayLocale = now.toLocaleDateString();

    // We can have two potential future dates here. Either the date the trial ends,
    // or a specific billingDate passed by the backend.
    let paidStartDate = trialDays
      ? new Date(now.getTime() + 86400 * 1000 * trialDays)
      : new Date();

    // If we were passed a specific billing date, use that instead,
    // unless it ends up being equal to today after localization.

    if (billingDate) {
      const date = new Date(billingDate);
      if (date.toLocaleDateString() !== todayLocale) {
        paidStartDate = date;
      }
    }

    const couponIsForever = discountBillingCycles === null;

    const totalDueNow = isTrial ? trial.price : billingDate ? 0 : subtotal;

    const paidStartIsToday = paidStartDate.toLocaleDateString() === todayLocale;
    const paidStartLocale = paidStartDate.toLocaleDateString();

    return {
      product,
      tax,
      coupon,
      bundle,
      credit,
      billingDate,
      getBundleRowTitle,
      annualBillingDiscount,
      annualRateNoDiscount,
      couponIsForever,
      discount,
      hasAnnualDiscount,
      isTrial,
      paidStartDate,
      paidStartIsToday,
      paidStartLocale,
      subtotal,
      taxAmount,
      totalDueNow,
    };
  }, [getBundleRowTitle, bundle, coupon, product, credit, billingDate, tax]);

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

PlanContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  product: PropTypes.shape({
    heading: PropTypes.string,
    isTrial: PropTypes.bool,
    level: PropTypes.oneOf(['Start', 'Standard', 'Pro', 'Advanced']),
    period: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL]),
    price: PropTypes.number,
    trial: PropTypes.shape({
      price: PropTypes.number,
      trial_days: PropTypes.number,
    }),
    monthlyComparisonPrice: PropTypes.number,
  }).isRequired,
  tax: PropTypes.shape({ amount: PropTypes.number }),
  coupon: PropTypes.shape({}),
  bundle: PropTypes.shape({}),
  credit: PropTypes.number,
  billingDate: PropTypes.string,
};

PlanContextProvider.defaultProps = {
  tax: { amount: 0 },
  credit: 0,
  bundle: null,
  coupon: null,
  billingDate: null,
};

export const usePlanContext = () => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlanContext must be used within a PlanContextProvider');
  }
  return context;
};

export default PlanContextProvider;
