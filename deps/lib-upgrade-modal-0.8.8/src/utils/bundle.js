import { PLAN_PERIOD_LABELS } from '../constants';

export const checkPlanBundleEligibility = (plan, bundle) => {
  const { period } = plan || {};
  const { details: { validPlans = null } = {} } = bundle || {};

  // TODO: Consistent use of attribute for plan level.
  // Currently we use plan.planLevel throughout this codebase, but the data
  // returned from our plans API in the main app uses plan.level.
  const planLevel = plan.planLevel || plan.level;

  if (
    validPlans?.length &&
    !validPlans?.includes(
      `${planLevel?.toLowerCase()}-${PLAN_PERIOD_LABELS[period]}`,
    )
  ) {
    return false;
  }

  return true;
};
