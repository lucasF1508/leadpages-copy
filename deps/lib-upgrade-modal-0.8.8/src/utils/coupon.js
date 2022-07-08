export const checkPlanCouponEligibility = (plan, coupon) => {
  if (!coupon?.appliesToAllPlans && !coupon?.validPlans.includes(plan.id)) {
    return false;
  }

  return true;
};
