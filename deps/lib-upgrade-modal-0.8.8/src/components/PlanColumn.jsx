import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ShadowBox, VSTypography } from '@lp/ui';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import {
  BREAKPOINTS,
  FEATURES,
  ALTERNATE_FEATURES,
  PLAN_PERIODS,
  PLAN_NAMES,
  FLOWS,
} from '../constants';
import { checkPlanBundleEligibility } from '../utils/bundle';
import FeatureListItem from './FeatureListItem';
import SelectPlanButton from './SelectPlanButton';
import { BUNDLE_SHAPE } from '../constants/types';
import { checkPlanIsUpgrade } from '../utils/upgrade';

const BREAKPOINT_SMALL_PLUS_2 = BREAKPOINTS.SMALL + 2;

const useStyles = makeStyles(
  theme => ({
    root: ({ isMostPopular, isPreviousPlan }) => ({
      marginTop: isMostPopular || isPreviousPlan ? 0 : 36,
    }),
    box: {
      paddingTop: theme.spacing(3) - 5,
    },
    mostPopular: {
      backgroundColor: theme.palette.greyTransparent[10],
      display: 'flex',
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase',
    },
    previousPlan: {
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase',
    },
    fullPrice: {
      color: theme.palette.grey[70],
      textDecoration: 'line-through',
      [theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2)]: {
        fontSize: theme.typography.pxToRem(14),
      },
    },
    savings: {
      [theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2)]: {
        fontSize: theme.typography.pxToRem(14),
      },
    },
    divider: {
      '&::after': {
        color: theme.palette.greyTransparent[30],
        content: '"|"',
        fontWeight: theme.typography.fontWeightRegular,
        margin: theme.spacing(0, 1),
        [theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2)]: {
          fontSize: theme.typography.pxToRem(14),
        },
      },
    },
    pricingInfo: {
      marginTop: 6,
      marginBottom: theme.spacing(3),
    },
    level: {
      textTransform: 'uppercase',
      marginBottom: theme.spacing(1.5),
    },
    price: {
      fontSize: theme.typography.pxToRem(56),
      lineHeight: 1,
      [theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2)]: {
        fontSize: theme.typography.pxToRem(40),
      },
    },
    billingFrequency: {
      fontSize: theme.typography.pxToRem(16),
      [theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2)]: {
        fontSize: theme.typography.pxToRem(14),
      },
    },
    priceDetail: {
      marginTop: theme.spacing(1.5),
    },
    icon: {
      color: theme.palette.grey[100],
      marginTop: 2,
      minWidth: 34,
    },
    included: {
      color: theme.palette.grey[70],
    },
    notIncluded: {
      color: theme.palette.text.disabled,
      marginLeft: 34,
      textDecoration: 'line-through',
    },
    list: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5),
    },
  }),
  { classNamePrefix: 'PlanColumn' },
);

function getIsNextUpgrade(currentLevel, nextLevel, isMostPopular) {
  if (!currentLevel && isMostPopular) return true;
  if (currentLevel === PLAN_NAMES.PRO && nextLevel === PLAN_NAMES.ADVANCED)
    return true;
  if (currentLevel === PLAN_NAMES.STANDARD && nextLevel === PLAN_NAMES.PRO)
    return true;
  return false;
}

const PlanColumn = ({
  plan,
  planLevel,
  billingFrequency,
  currentPlan,
  previousPlan,
  bundle,
  savings,
  monthlyPrice,
  monthlyComparePrice,
  flow,
  hasCoupon,
  isMostPopular,
  onSelectPlan,
  hasAlternateFeatures,
  selectPlanButtonText,
  disableSelection,
}) => {
  const isPreviousPlan =
    previousPlan === plan?.id || plan?.equivalentKeys?.includes(previousPlan);
  const classes = useStyles({ isMostPopular, isPreviousPlan });
  const isCurrentPlan =
    currentPlan?.level === planLevel &&
    currentPlan.period === billingFrequency &&
    flow !== FLOWS.REACTIVATION;
  const isNextUpgrade = getIsNextUpgrade(
    currentPlan?.level,
    planLevel,
    isMostPopular,
  );
  const showSavingsStyles = !!savings && !isCurrentPlan;
  const planFeatures = hasAlternateFeatures ? ALTERNATE_FEATURES : FEATURES;

  const getBundleFeatureDetails = () => {
    const planIsEligible =
      checkPlanIsUpgrade(plan, flow) &&
      checkPlanBundleEligibility(plan, bundle, flow);
    let label = bundle.details?.planCompare?.lineItemText;

    if (!label) {
      label = `${bundle.details?.size ? bundle.details.size + ' ' : ''}${
        bundle.details.kind
      }`;
    }

    const bundleFeature = {
      label,
      tooltip: bundle.details.planCompare?.lineItemTooltip,
      plans: {
        [plan.planLevel.toLowerCase()]: {
          included: isCurrentPlan ? false : planIsEligible,
        },
      },
    };
    return bundleFeature;
  };

  const handleSelectPlan = () => {
    onSelectPlan(plan.id, plan.planLevel, plan.period);
  };

  return (
    <div className={classes.root} data-qa-selector="plan-column">
      {isMostPopular && !isPreviousPlan && (
        <Typography
          align="center"
          variant="overline"
          className={classes.mostPopular}
        >
          Most Popular
        </Typography>
      )}
      {isPreviousPlan && (
        <Typography
          align="center"
          variant="overline"
          className={classes.previousPlan}
        >
          Previous Plan
        </Typography>
      )}
      <ShadowBox className={classes.box}>
        <div className={classes.pricingInfo}>
          <Typography className={classes.level} variant="h4">
            {planLevel}
          </Typography>
          <VSTypography
            className={classes.price}
            variant="h1"
            component="span"
            color={showSavingsStyles && hasCoupon ? 'primary' : 'textPrimary'}
            data-qa-selector="plan-column-price"
          >
            ${isCurrentPlan ? currentPlan.monthlyPrice : monthlyPrice}
          </VSTypography>
          <Typography
            className={classes.billingFrequency}
            component="span"
            data-qa-selector="plan-column-price-period"
          >
            {' '}
            / Month
          </Typography>
          <p className={classes.priceDetail}>
            {showSavingsStyles && (
              <>
                {monthlyComparePrice && (
                  <>
                    <Typography
                      component="span"
                      variant="h5"
                      className={classes.fullPrice}
                    >
                      ${monthlyComparePrice}
                    </Typography>
                    <span className={classes.divider}></span>
                  </>
                )}
                <Typography
                  className={classes.savings}
                  component="span"
                  variant="h5"
                  color="primary"
                >
                  save ${savings.toLocaleString()}
                  {!monthlyComparePrice &&
                    billingFrequency === PLAN_PERIODS.ANNUAL &&
                    '/year'}
                </Typography>
                <span className={classes.divider}></span>
              </>
            )}
            <Typography
              className={classes.billingFrequency}
              component="span"
              color="textSecondary"
              variant="body1"
            >
              billed
              {billingFrequency === PLAN_PERIODS.MONTHLY
                ? ' monthly'
                : ' annually'}
            </Typography>
          </p>
        </div>
        <SelectPlanButton
          onClick={handleSelectPlan}
          isCurrentPlan={isCurrentPlan}
          isNextUpgrade={isNextUpgrade}
          planLevel={planLevel}
          disableSelection={disableSelection}
        >
          {selectPlanButtonText}
        </SelectPlanButton>
        <List className={classes.list}>
          {bundle && (
            <FeatureListItem
              feature={getBundleFeatureDetails()}
              planLevel={planLevel}
              data-qa-selector="bundle-feature-list-item"
              isHighlighted
              isBonus
            />
          )}
          {planFeatures.map(feature => (
            <FeatureListItem
              key={feature.label}
              feature={feature}
              planLevel={planLevel}
              billingFrequency={billingFrequency}
            />
          ))}
        </List>
        <SelectPlanButton
          onClick={handleSelectPlan}
          isCurrentPlan={isCurrentPlan}
          isNextUpgrade={isNextUpgrade}
          planLevel={planLevel}
          disableSelection={disableSelection}
        >
          {selectPlanButtonText}
        </SelectPlanButton>
      </ShadowBox>
    </div>
  );
};

PlanColumn.propTypes = {
  plan: PropTypes.shape({}),
  currentPlan: PropTypes.shape({}),
  previousPlan: PropTypes.string,
  billingFrequency: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL])
    .isRequired,
  planLevel: PropTypes.oneOf([
    PLAN_NAMES.STANDARD,
    PLAN_NAMES.PRO,
    PLAN_NAMES.ADVANCED,
  ]).isRequired,
  flow: PropTypes.oneOf([FLOWS.SIGNUP, FLOWS.UPGRADE, FLOWS.REACTIVATION])
    .isRequired,
  monthlyPrice: PropTypes.number,
  monthlyComparePrice: PropTypes.number,
  savings: PropTypes.number,
  bundle: PropTypes.shape(BUNDLE_SHAPE),
  hasCoupon: PropTypes.bool,
  isMostPopular: PropTypes.bool,
  onSelectPlan: PropTypes.func.isRequired,
  hasAlternateFeatures: PropTypes.bool.isRequired,
  selectPlanButtonText: PropTypes.string,
  disableSelection: PropTypes.bool,
};

PlanColumn.defaultProps = {
  currentPlan: null,
  previousPlan: null,
  monthlyPrice: null,
  monthlyComparePrice: null,
  savings: null,
  bundle: null,
  hasCoupon: false,
  isMostPopular: false,
  selectPlanButtonText: null,
  disableSelection: false,
};

export default PlanColumn;
