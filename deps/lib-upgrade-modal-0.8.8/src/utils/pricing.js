import { PLAN_PERIODS } from '../constants';
import { checkPlanCouponEligibility } from './coupon';
import { checkPlanIsUpgrade } from './upgrade';

export function getDisplayPrices(plan, allPlans, currentPlan, coupon, flow) {
  const { price, monthlyPrice, planLevel } = plan;
  const isAnnualPlan = plan.period === PLAN_PERIODS.ANNUAL;
  const isCurrentPlan = planLevel.toLowerCase() === currentPlan?.level;

  const hasCoupon = !!coupon;
  const couponAppliesToPlan =
    checkPlanIsUpgrade(plan, flow) &&
    checkPlanCouponEligibility(plan, coupon, flow);
  const discount = couponAppliesToPlan
    ? (100 - coupon?.discountPercent) / 100
    : 1;
  const hasDiscount = discount < 1;

  let savings = 0;
  let monthlyCompare = null;

  if (isAnnualPlan && !hasCoupon && !hasDiscount) {
    let matchingMonthlyPlanLevelPrice =
      allPlans[PLAN_PERIODS.MONTHLY]?.[planLevel.toLowerCase()]?.monthlyPrice;

    if (isCurrentPlan) {
      matchingMonthlyPlanLevelPrice = currentPlan.monthlyPrice;
    }

    savings = Math.ceil(
      (100 * (matchingMonthlyPlanLevelPrice * 12 - price)) / 100,
    );
  } else {
    monthlyCompare = monthlyPrice;
    // NOTE: price and monthlyPrice are the same for monthly plans
    savings = Math.ceil((100 * (price - price * discount)) / 100);
  }

  return {
    savings,
    monthlyCompare,
    monthly: Math.ceil((100 * monthlyPrice * discount) / 100),
    hasCoupon: hasCoupon && couponAppliesToPlan,
  };
}

export function roundToCents(n) {
  return Number(Math.ceil(n + 'e2') + 'e-2');
}

export function displayPrice(n) {
  return roundToCents(n).toFixed(2);
}

export function minimalDisplayPrice(n) {
  // If it's zero, or a negative value, display zero.
  if (n <= 0) {
    return '0';
  }
  // Round fractional cents upward.
  const rounded = roundToCents(n);
  // If it's an even number, print verbatim.
  if (rounded % 1 === 0) {
    return rounded.toString();
  }
  // Pad zeroes to show 1.1 as 1.10.
  return rounded.toFixed(2);
}
