import { FLOWS } from '../constants';

export const checkPlanIsUpgrade = (plan, flow) => {
  if (flow && flow === FLOWS.UPGRADE && !plan.isUpgrade) {
    return false;
  }

  return true;
};
