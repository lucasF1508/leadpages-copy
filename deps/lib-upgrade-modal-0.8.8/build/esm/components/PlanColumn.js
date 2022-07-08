import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { ShadowBox, VSTypography } from '@lp/ui';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { BREAKPOINTS, FEATURES, ALTERNATE_FEATURES, PLAN_PERIODS, PLAN_NAMES, FLOWS } from '../constants';
import { checkPlanBundleEligibility } from '../utils/bundle';
import FeatureListItem from './FeatureListItem';
import SelectPlanButton from './SelectPlanButton';
import { BUNDLE_SHAPE } from '../constants/types';
import { checkPlanIsUpgrade } from '../utils/upgrade';
var BREAKPOINT_SMALL_PLUS_2 = BREAKPOINTS.SMALL + 2;
var useStyles = makeStyles(function (theme) {
  return {
    root: function root(_ref) {
      var isMostPopular = _ref.isMostPopular,
          isPreviousPlan = _ref.isPreviousPlan;
      return {
        marginTop: isMostPopular || isPreviousPlan ? 0 : 36
      };
    },
    box: {
      paddingTop: theme.spacing(3) - 5
    },
    mostPopular: {
      backgroundColor: theme.palette.greyTransparent[10],
      display: 'flex',
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase'
    },
    previousPlan: {
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      textTransform: 'uppercase'
    },
    fullPrice: _defineProperty({
      color: theme.palette.grey[70],
      textDecoration: 'line-through'
    }, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
      fontSize: theme.typography.pxToRem(14)
    }),
    savings: _defineProperty({}, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
      fontSize: theme.typography.pxToRem(14)
    }),
    divider: {
      '&::after': _defineProperty({
        color: theme.palette.greyTransparent[30],
        content: '"|"',
        fontWeight: theme.typography.fontWeightRegular,
        margin: theme.spacing(0, 1)
      }, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
        fontSize: theme.typography.pxToRem(14)
      })
    },
    pricingInfo: {
      marginTop: 6,
      marginBottom: theme.spacing(3)
    },
    level: {
      textTransform: 'uppercase',
      marginBottom: theme.spacing(1.5)
    },
    price: _defineProperty({
      fontSize: theme.typography.pxToRem(56),
      lineHeight: 1
    }, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
      fontSize: theme.typography.pxToRem(40)
    }),
    billingFrequency: _defineProperty({
      fontSize: theme.typography.pxToRem(16)
    }, theme.breakpoints.down(BREAKPOINT_SMALL_PLUS_2), {
      fontSize: theme.typography.pxToRem(14)
    }),
    priceDetail: {
      marginTop: theme.spacing(1.5)
    },
    icon: {
      color: theme.palette.grey[100],
      marginTop: 2,
      minWidth: 34
    },
    included: {
      color: theme.palette.grey[70]
    },
    notIncluded: {
      color: theme.palette.text.disabled,
      marginLeft: 34,
      textDecoration: 'line-through'
    },
    list: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5)
    }
  };
}, {
  classNamePrefix: 'PlanColumn'
});

function getIsNextUpgrade(currentLevel, nextLevel, isMostPopular) {
  if (!currentLevel && isMostPopular) return true;
  if (currentLevel === PLAN_NAMES.PRO && nextLevel === PLAN_NAMES.ADVANCED) return true;
  if (currentLevel === PLAN_NAMES.STANDARD && nextLevel === PLAN_NAMES.PRO) return true;
  return false;
}

var PlanColumn = function PlanColumn(_ref2) {
  var _plan$equivalentKeys;

  var plan = _ref2.plan,
      planLevel = _ref2.planLevel,
      billingFrequency = _ref2.billingFrequency,
      currentPlan = _ref2.currentPlan,
      previousPlan = _ref2.previousPlan,
      bundle = _ref2.bundle,
      savings = _ref2.savings,
      monthlyPrice = _ref2.monthlyPrice,
      monthlyComparePrice = _ref2.monthlyComparePrice,
      flow = _ref2.flow,
      hasCoupon = _ref2.hasCoupon,
      isMostPopular = _ref2.isMostPopular,
      onSelectPlan = _ref2.onSelectPlan,
      hasAlternateFeatures = _ref2.hasAlternateFeatures,
      selectPlanButtonText = _ref2.selectPlanButtonText,
      disableSelection = _ref2.disableSelection;
  var isPreviousPlan = previousPlan === (plan === null || plan === void 0 ? void 0 : plan.id) || (plan === null || plan === void 0 ? void 0 : (_plan$equivalentKeys = plan.equivalentKeys) === null || _plan$equivalentKeys === void 0 ? void 0 : _plan$equivalentKeys.includes(previousPlan));
  var classes = useStyles({
    isMostPopular: isMostPopular,
    isPreviousPlan: isPreviousPlan
  });
  var isCurrentPlan = (currentPlan === null || currentPlan === void 0 ? void 0 : currentPlan.level) === planLevel && currentPlan.period === billingFrequency && flow !== FLOWS.REACTIVATION;
  var isNextUpgrade = getIsNextUpgrade(currentPlan === null || currentPlan === void 0 ? void 0 : currentPlan.level, planLevel, isMostPopular);
  var showSavingsStyles = !!savings && !isCurrentPlan;
  var planFeatures = hasAlternateFeatures ? ALTERNATE_FEATURES : FEATURES;

  var getBundleFeatureDetails = function getBundleFeatureDetails() {
    var _bundle$details, _bundle$details$planC, _bundle$details$planC2;

    var planIsEligible = checkPlanIsUpgrade(plan, flow) && checkPlanBundleEligibility(plan, bundle, flow);
    var label = (_bundle$details = bundle.details) === null || _bundle$details === void 0 ? void 0 : (_bundle$details$planC = _bundle$details.planCompare) === null || _bundle$details$planC === void 0 ? void 0 : _bundle$details$planC.lineItemText;

    if (!label) {
      var _bundle$details2;

      label = "".concat(((_bundle$details2 = bundle.details) === null || _bundle$details2 === void 0 ? void 0 : _bundle$details2.size) ? bundle.details.size + ' ' : '').concat(bundle.details.kind);
    }

    var bundleFeature = {
      label: label,
      tooltip: (_bundle$details$planC2 = bundle.details.planCompare) === null || _bundle$details$planC2 === void 0 ? void 0 : _bundle$details$planC2.lineItemTooltip,
      plans: _defineProperty({}, plan.planLevel.toLowerCase(), {
        included: isCurrentPlan ? false : planIsEligible
      })
    };
    return bundleFeature;
  };

  var handleSelectPlan = function handleSelectPlan() {
    onSelectPlan(plan.id, plan.planLevel, plan.period);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.root,
    "data-qa-selector": "plan-column"
  }, isMostPopular && !isPreviousPlan && /*#__PURE__*/React.createElement(Typography, {
    align: "center",
    variant: "overline",
    className: classes.mostPopular
  }, "Most Popular"), isPreviousPlan && /*#__PURE__*/React.createElement(Typography, {
    align: "center",
    variant: "overline",
    className: classes.previousPlan
  }, "Previous Plan"), /*#__PURE__*/React.createElement(ShadowBox, {
    className: classes.box
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.pricingInfo
  }, /*#__PURE__*/React.createElement(Typography, {
    className: classes.level,
    variant: "h4"
  }, planLevel), /*#__PURE__*/React.createElement(VSTypography, {
    className: classes.price,
    variant: "h1",
    component: "span",
    color: showSavingsStyles && hasCoupon ? 'primary' : 'textPrimary',
    "data-qa-selector": "plan-column-price"
  }, "$", isCurrentPlan ? currentPlan.monthlyPrice : monthlyPrice), /*#__PURE__*/React.createElement(Typography, {
    className: classes.billingFrequency,
    component: "span",
    "data-qa-selector": "plan-column-price-period"
  }, ' ', "/ Month"), /*#__PURE__*/React.createElement("p", {
    className: classes.priceDetail
  }, showSavingsStyles && /*#__PURE__*/React.createElement(React.Fragment, null, monthlyComparePrice && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Typography, {
    component: "span",
    variant: "h5",
    className: classes.fullPrice
  }, "$", monthlyComparePrice), /*#__PURE__*/React.createElement("span", {
    className: classes.divider
  })), /*#__PURE__*/React.createElement(Typography, {
    className: classes.savings,
    component: "span",
    variant: "h5",
    color: "primary"
  }, "save $", savings.toLocaleString(), !monthlyComparePrice && billingFrequency === PLAN_PERIODS.ANNUAL && '/year'), /*#__PURE__*/React.createElement("span", {
    className: classes.divider
  })), /*#__PURE__*/React.createElement(Typography, {
    className: classes.billingFrequency,
    component: "span",
    color: "textSecondary",
    variant: "body1"
  }, "billed", billingFrequency === PLAN_PERIODS.MONTHLY ? ' monthly' : ' annually'))), /*#__PURE__*/React.createElement(SelectPlanButton, {
    onClick: handleSelectPlan,
    isCurrentPlan: isCurrentPlan,
    isNextUpgrade: isNextUpgrade,
    planLevel: planLevel,
    disableSelection: disableSelection
  }, selectPlanButtonText), /*#__PURE__*/React.createElement(List, {
    className: classes.list
  }, bundle && /*#__PURE__*/React.createElement(FeatureListItem, {
    feature: getBundleFeatureDetails(),
    planLevel: planLevel,
    "data-qa-selector": "bundle-feature-list-item",
    isHighlighted: true,
    isBonus: true
  }), planFeatures.map(function (feature) {
    return /*#__PURE__*/React.createElement(FeatureListItem, {
      key: feature.label,
      feature: feature,
      planLevel: planLevel,
      billingFrequency: billingFrequency
    });
  })), /*#__PURE__*/React.createElement(SelectPlanButton, {
    onClick: handleSelectPlan,
    isCurrentPlan: isCurrentPlan,
    isNextUpgrade: isNextUpgrade,
    planLevel: planLevel,
    disableSelection: disableSelection
  }, selectPlanButtonText)));
};

PlanColumn.propTypes = {
  plan: PropTypes.shape({}),
  currentPlan: PropTypes.shape({}),
  previousPlan: PropTypes.string,
  billingFrequency: PropTypes.oneOf([PLAN_PERIODS.MONTHLY, PLAN_PERIODS.ANNUAL]).isRequired,
  planLevel: PropTypes.oneOf([PLAN_NAMES.STANDARD, PLAN_NAMES.PRO, PLAN_NAMES.ADVANCED]).isRequired,
  flow: PropTypes.oneOf([FLOWS.SIGNUP, FLOWS.UPGRADE, FLOWS.REACTIVATION]).isRequired,
  monthlyPrice: PropTypes.number,
  monthlyComparePrice: PropTypes.number,
  savings: PropTypes.number,
  bundle: PropTypes.shape(BUNDLE_SHAPE),
  hasCoupon: PropTypes.bool,
  isMostPopular: PropTypes.bool,
  onSelectPlan: PropTypes.func.isRequired,
  hasAlternateFeatures: PropTypes.bool.isRequired,
  selectPlanButtonText: PropTypes.string,
  disableSelection: PropTypes.bool
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
  disableSelection: false
};
export default PlanColumn;