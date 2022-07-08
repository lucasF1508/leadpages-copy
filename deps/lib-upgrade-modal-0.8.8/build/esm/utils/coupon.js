export var checkPlanCouponEligibility = function checkPlanCouponEligibility(plan, coupon) {
  if (!(coupon === null || coupon === void 0 ? void 0 : coupon.appliesToAllPlans) && !(coupon === null || coupon === void 0 ? void 0 : coupon.validPlans.includes(plan.id))) {
    return false;
  }

  return true;
};