import {
  text,
  boolean,
  number,
  radios,
  select,
  optionsKnob as options,
} from '@storybook/addon-knobs';
import {
  FLOWS,
  PLAN_NAMES,
  PLAN_PERIODS,
  PLANS,
  TEST_DATA,
} from '../constants';

export function getPlansBasedOnCurrentPlan(currentPlan) {
  const plans = TEST_DATA;
  const currentPlanLevel = currentPlan.level;
  const currentPlanPeriod = currentPlan.period;

  plans[PLAN_PERIODS.ANNUAL][PLAN_NAMES.STANDARD].isUpgrade =
    (currentPlanLevel === PLAN_NAMES.STANDARD &&
      currentPlanPeriod === PLAN_PERIODS.MONTHLY) ||
    currentPlanLevel === PLAN_NAMES.START;

  plans[PLAN_PERIODS.ANNUAL][PLAN_NAMES.PRO].isUpgrade =
    (currentPlanLevel === PLAN_NAMES.PRO &&
      currentPlanPeriod === PLAN_PERIODS.MONTHLY) ||
    currentPlanLevel === PLAN_NAMES.STANDARD ||
    currentPlanLevel === PLAN_NAMES.START;

  plans[PLAN_PERIODS.ANNUAL][PLAN_NAMES.ADVANCED].isUpgrade =
    (currentPlanLevel === PLAN_NAMES.ADVANCED &&
      currentPlanPeriod === PLAN_PERIODS.MONTHLY) ||
    currentPlanLevel === PLAN_NAMES.PRO ||
    currentPlanLevel === PLAN_NAMES.STANDARD ||
    currentPlanLevel === PLAN_NAMES.START;

  plans[PLAN_PERIODS.MONTHLY][PLAN_NAMES.STANDARD].isUpgrade =
    currentPlanLevel === PLAN_NAMES.START;

  plans[PLAN_PERIODS.MONTHLY][PLAN_NAMES.PRO].isUpgrade =
    currentPlanLevel === PLAN_NAMES.STANDARD ||
    currentPlanLevel === PLAN_NAMES.START;

  plans[PLAN_PERIODS.MONTHLY][PLAN_NAMES.ADVANCED].isUpgrade =
    currentPlanLevel === PLAN_NAMES.PRO ||
    currentPlanLevel === PLAN_NAMES.STANDARD ||
    currentPlanLevel === PLAN_NAMES.START;

  return plans;
}

export function getCurrentPlanWithKnobs() {
  const level = select(
    'Level',
    PLAN_NAMES,
    PLAN_NAMES.STANDARD,
    'Current Plan',
  );
  const period = select(
    'Billing Period',
    PLAN_PERIODS,
    PLAN_PERIODS.ANNUAL,
    'Current Plan',
  );
  const monthlyPrice = number(
    'Monthly Price',
    TEST_DATA[PLAN_PERIODS.ANNUAL][PLAN_NAMES.STANDARD].monthlyPrice,
    {},
    'Current Plan',
  );
  return { level, period, monthlyPrice };
}

export function getPreviousPlanWithKnobs() {
  return select(
    'Previous Plan',
    { ...PLANS, None: null },
    null,
    'Previous Plan',
  );
}

export function getFlowWithKnobs() {
  return radios(
    'Flow',
    { Upgrade: FLOWS.UPGRADE, Reactivation: FLOWS.REACTIVATION },
    FLOWS.UPGRADE,
    'Flow',
  );
}

export function getCouponWithKnobs() {
  return {
    validPlans: options(
      'Valid Plans',
      PLANS,
      [],
      { display: 'multi-select' },
      'Coupon',
    ),
    discountBillingCycles: number('Discount Billing Cycles', 1, {}, 'Coupon'),
    discountPercent: number('Discount Percent', 10, {}, 'Coupon'),
    code: text('Coupon Code', 'lp', 'Coupon'),
    bannerText: text('Banner Text', 'You got 10% off', 'Coupon'),
    cartText: text('Cart Text', '10% off', 'Coupon'),
    headerText: text(
      'Header Text',
      'Take it to the next level with 10% off',
      'Coupon',
    ),
    subHeaderText: text(
      'Subheader Text',
      'Upgrade your account and 10% off',
      'Coupon',
    ),
    enabled: boolean('Enabled?', true, 'Coupon'),
    hasUsesRemaining: boolean('Has uses remaining?', true, 'Coupon'),
    isExpired: boolean('Is expired?', false, 'Coupon'),
    appliesToAllPlans: boolean('Applies to all plans', true, 'Coupon'),
    signupsAllowed: boolean('Applies to new signups', true, 'Coupon'),
    reactivationsAllowed: boolean('Applies to reactivations', true, 'Coupon'),
    upgradesAllowed: boolean('Applies to upgrades', true, 'Coupon'),
  };
}

export function getBundleWithKnobs() {
  const GROUP = 'Bundle';

  return {
    enabled: boolean('Enabled?', true, GROUP),
    details: {
      size: number('Size', 5, {}, GROUP),
      value: number('Value', 250, {}, GROUP),
      kind: text('Kind', 'Exclusive Templates', GROUP),
      planCompare: {
        tooltip: text(
          'Plan Compare Tooltip',
          'Access an exclusive collection of 5 landing page templates not available anywhere else.',
          GROUP,
        ),
      },
      validPlans: options(
        'Valid Plans',
        {
          'Standard Annual': 'standard-annual',
          'Standard Monthly': 'standard-monthly',
          'Pro Annual': 'pro-annual',
          'Pro Monthly': 'pro-monthly',
          'Advanced Annual': 'advanced-annual',
          'Advanced Monthly': 'advanced-monthly',
        },
        [],
        { display: 'multi-select' },
        GROUP,
      ),
    },
  };
}
