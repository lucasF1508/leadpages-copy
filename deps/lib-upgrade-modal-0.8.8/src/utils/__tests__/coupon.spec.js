import { checkPlanCouponEligibility } from '../coupon';

describe('coupon utils', () => {
  describe('checkPlanCouponEligibility', () => {
    let coupon;
    let plan;

    beforeEach(() => {
      coupon = {};
      plan = {};
    });

    it('should return true if coupon applies to all plans', () => {
      coupon.appliesToAllPlans = true;
      plan.id = 'test1-plan-id';
      expect(checkPlanCouponEligibility(plan, coupon)).toBe(true);
    });

    it('should return true if coupon does not apply to all plans, but plan id is in valid plans list', () => {
      coupon.appliesToAllPlans = false;
      coupon.validPlans = ['test2-plan-id'];
      plan.id = 'test2-plan-id';
      expect(checkPlanCouponEligibility(plan, coupon)).toBe(true);
    });

    it('should return false if coupon does not apply to all plans and plan id is not in valid plans list', () => {
      coupon.appliesToAllPlans = false;
      coupon.validPlans = ['test3-plan-id'];
      plan.id = 'invalid-plan-id';
      expect(checkPlanCouponEligibility(plan, coupon)).toBe(false);
    });
  });
});
