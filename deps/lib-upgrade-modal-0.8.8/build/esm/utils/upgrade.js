import { FLOWS } from '../constants';
export var checkPlanIsUpgrade = function checkPlanIsUpgrade(plan, flow) {
  if (flow && flow === FLOWS.UPGRADE && !plan.isUpgrade) {
    return false;
  }

  return true;
};