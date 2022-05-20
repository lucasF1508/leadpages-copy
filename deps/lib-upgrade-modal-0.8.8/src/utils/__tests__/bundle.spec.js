import { checkPlanBundleEligibility } from '../bundle';

describe('bundle utils', () => {
  describe('checkPlanBundleEligibility', () => {
    let bundle;
    let plan;

    beforeEach(() => {
      bundle = {
        details: {
          validPlans: ['pro-monthly', 'pro-annual'],
        },
      };
      plan = {
        planLevel: 'Pro',
        period: 'month',
      };
    });

    it('should return true if plan is valid for bundle', () => {
      expect(checkPlanBundleEligibility(plan, bundle)).toBe(true);
    });

    it('should return true if no valid plan restrictions are set on the bundle', () => {
      const bundle1 = { details: { validPlans: null } };
      const bundle2 = { details: { validPlans: [] } };
      const bundle3 = { details: {} };

      expect(checkPlanBundleEligibility(plan)).toBe(true);
      expect(checkPlanBundleEligibility(plan, bundle1)).toBe(true);
      expect(checkPlanBundleEligibility(plan, bundle2)).toBe(true);
      expect(checkPlanBundleEligibility(plan, bundle3)).toBe(true);
    });

    it('should return false if plan is not valid for bundle', () => {
      plan.planLevel = 'Standard';
      expect(checkPlanBundleEligibility(plan, bundle)).toBe(false);
    });

    it('should alternatively support getting plan level from plan.level', () => {
      delete plan.planLevel;
      plan.level = 'Standard';
      expect(checkPlanBundleEligibility(plan, bundle)).toBe(false);
    });
  });
});
