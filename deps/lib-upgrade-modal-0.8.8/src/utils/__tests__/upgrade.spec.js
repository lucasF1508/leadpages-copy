import { FLOWS } from '../../constants';
import { checkPlanIsUpgrade } from '../upgrade';

describe('upgrade utils', () => {
  describe('checkPlanIsUpgrade', () => {
    let plan;

    beforeEach(() => {
      plan = {
        planLevel: 'Standard',
        period: 'month',
      };
    });

    it('should return true if flow is upgrade and plan is upgradeable', () => {
      plan.isUpgrade = true;
      expect(checkPlanIsUpgrade(plan, FLOWS.UPGRADE)).toBe(true);
    });

    it('should return false if flow is upgrade and plan is not upgradeable', () => {
      plan.isUpgrade = false;
      expect(checkPlanIsUpgrade(plan, FLOWS.UPGRADE)).toBe(false);
    });

    it('should always return true if flow is not upgrade', () => {
      plan.isUpgrade = true;
      expect(checkPlanIsUpgrade(plan, FLOWS.SIGNUP)).toBe(true);
      expect(checkPlanIsUpgrade(plan, FLOWS.REACTIVATION)).toBe(true);

      plan.isUpgrade = false;
      expect(checkPlanIsUpgrade(plan, FLOWS.SIGNUP)).toBe(true);
      expect(checkPlanIsUpgrade(plan, FLOWS.REACTIVATION)).toBe(true);
    });
  });
});
