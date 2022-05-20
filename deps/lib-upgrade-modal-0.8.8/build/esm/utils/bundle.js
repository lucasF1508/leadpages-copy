import { PLAN_PERIOD_LABELS } from '../constants';
export var checkPlanBundleEligibility = function checkPlanBundleEligibility(plan, bundle) {
  var _ref = plan || {},
      period = _ref.period;

  var _ref2 = bundle || {},
      _ref2$details = _ref2.details;

  _ref2$details = _ref2$details === void 0 ? {} : _ref2$details;
  var _ref2$details$validPl = _ref2$details.validPlans,
      validPlans = _ref2$details$validPl === void 0 ? null : _ref2$details$validPl; // TODO: Consistent use of attribute for plan level.
  // Currently we use plan.planLevel throughout this codebase, but the data
  // returned from our plans API in the main app uses plan.level.

  var planLevel = plan.planLevel || plan.level;

  if ((validPlans === null || validPlans === void 0 ? void 0 : validPlans.length) && !(validPlans === null || validPlans === void 0 ? void 0 : validPlans.includes("".concat(planLevel === null || planLevel === void 0 ? void 0 : planLevel.toLowerCase(), "-").concat(PLAN_PERIOD_LABELS[period])))) {
    return false;
  }

  return true;
};