import { ALL_PLANS, PLAN_PERIODS } from '../constants';

export default ({ product, tax, coupon, bundle, credit = 0, billingDate }) => {
  const { level, period, price, trial, monthlyComparisonPrice } = product;

  const isTrial = !!(trial && trial.trial_days);
  const taxAmount = (tax && tax.amount) || 0;

  const discount = coupon
    ? (price * 100 * (coupon.discountPercent / 100)) / 100
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

  const discountBillingCycles = coupon ? coupon.discountBillingCycles : null;
  const couponIsForever = discountBillingCycles === null;

  const totalDueNow = isTrial ? trial.price : billingDate ? 0 : subtotal;

  const paidStartIsToday = paidStartDate.toLocaleDateString() === todayLocale;
  const paidStartLocale = paidStartDate.toLocaleDateString();

  const getBundleRowTitle = () => {
    let bundleRowTitle = bundle.orderSummary?.lineItemTitle;

    if (!bundleRowTitle) {
      bundleRowTitle = `${bundle.size ? bundle.size + ' ' : ''}${bundle.kind}`;
    }

    return bundleRowTitle;
  };

  return {
    annualBillingDiscount,
    annualRateNoDiscount,
    couponIsForever,
    discount,
    getBundleRowTitle,
    hasAnnualDiscount,
    isTrial,
    paidStartDate,
    paidStartIsToday,
    paidStartLocale,
    subtotal,
    taxAmount,
    totalDueNow,
  };
};
