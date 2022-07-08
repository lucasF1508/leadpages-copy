import { PLAN_PERIODS } from '../../constants';

export const verbiages = {
  AFTER_FREE_TRIAL: 'Due after Trial',
  ANNUAL_DISCOUNT: 'Annual Billing Discount',
  SWITCH_TO_ANNUAL: 'Switch to Annual and Save',
  TOTAL_DUE_NOW: 'Total Due Now',
};

export const CYCLE_LABEL = {
  [PLAN_PERIODS.MONTHLY]: 'per month',
  [PLAN_PERIODS.ANNUAL]: 'per year',
};

function getEndOfMonth(currentDate) {
  return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
}

export function getNormalBillingDate(
  discountBillingCycles,
  period,
  paidStartDate,
) {
  let normalBillingDate = new Date(paidStartDate);
  switch (period) {
    case PLAN_PERIODS.ANNUAL:
      normalBillingDate.setFullYear(
        normalBillingDate.getFullYear() + discountBillingCycles,
      );
      break;
    case PLAN_PERIODS.MONTHLY:
    default:
      normalBillingDate.setMonth(
        normalBillingDate.getMonth() + discountBillingCycles,
      );
      break;
  }
  if (normalBillingDate.getDate() >= 29)
    normalBillingDate = getEndOfMonth(normalBillingDate);
  return normalBillingDate.toLocaleDateString();
}
